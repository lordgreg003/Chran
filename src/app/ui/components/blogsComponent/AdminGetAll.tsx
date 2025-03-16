"use client";
import { fetchAllPosts, deleteBlogPost, updateBlogPost } from "@/redux/blogSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Article from "./Article";
import { format } from "date-fns";
import { BlogPost } from "@/redux/blogSlice";

const AdminGetAll: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts = [], loading, error } = useSelector((state: RootState) => state.blogs);

  const [page, setPage] = useState(1);
  const postsPerPage = 3;
  const [isFetching, setIsFetching] = useState(false);
  const [formattedDates, setFormattedDates] = useState<string[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useRef<HTMLDivElement | null>(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [readMore, setReadMore] = useState<Set<string>>(new Set());

  // Fetch posts when the page changes
  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);
      await dispatch(fetchAllPosts({ page, limit: postsPerPage }));
      setIsFetching(false);
    };

    fetchPosts();
  }, [dispatch, page]);

  // Intersection Observer for infinite scrolling
  useEffect(() => {
    if (!lastPostRef.current) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    observer.current.observe(lastPostRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [lastPostRef, loading]);

  // Format dates on client-side
  useEffect(() => {
    if (posts.length > 0) {
      const formatted = posts.map((post) => format(new Date(post.createdAt), "MMMM dd, yyyy"));
      setFormattedDates(formatted);
    }
  }, [posts]);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deleteBlogPost(id));
      dispatch(fetchAllPosts({ page, limit: postsPerPage }));
    }
  };

  const handleUpdate = (post: BlogPost) => {
    setSelectedPost(post);
    setIsEditModalOpen(true);
    setNewImage(null);
  };

  const handleSaveUpdate = () => {
    if (selectedPost) {
      const formData = new FormData();
      formData.append("title", selectedPost.title);
      formData.append("description", selectedPost.description);

      // Handle image updates
      if (newImage) {
        formData.append("image1", newImage); // Update image1 with the new image
      } else {
        // Keep existing images
        if (selectedPost.image1) formData.append("image1", selectedPost.image1);
        if (selectedPost.image2) formData.append("image2", selectedPost.image2);
        if (selectedPost.image3) formData.append("image3", selectedPost.image3);
        if (selectedPost.image4) formData.append("image4", selectedPost.image4);
        if (selectedPost.image5) formData.append("image5", selectedPost.image5);
      }

      dispatch(updateBlogPost({ slug: selectedPost.slug, formData }));
      setIsEditModalOpen(false);
    }
  };

  const toggleReadMore = (id: string) => {
    setReadMore((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  if (loading && page === 1) return <p className="text-center text-gray-600">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container dark:bg-[#2D2D2D] mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Blog Posts</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div
            key={post._id}
            ref={index === posts.length - 1 ? lastPostRef : null}
          >
            <Article
              post={post}
              onDelete={handleDelete}
              onEdit={handleUpdate}
              readMore={readMore}
              toggleReadMore={toggleReadMore}
              formattedDate={formattedDates[index]}
            />
          </div>
        ))}
      </div>

      {/* Loading Spinner */}
      {isFetching && (
        <div className="flex justify-center py-6">
          <span className="text-blue-500 text-lg">Loading more posts...</span>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && selectedPost && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Edit Post</h3>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={selectedPost.title}
                onChange={(e) =>
                  setSelectedPost({ ...selectedPost, title: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={selectedPost.description}
                onChange={(e) =>
                  setSelectedPost({ ...selectedPost, description: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium mb-2">
                Update Image
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setNewImage(e.target.files[0]);
                  }
                }}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUpdate}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGetAll;