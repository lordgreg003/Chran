"use client";
import { fetchAllPosts, deleteBlogPost, updateBlogPost } from "@/redux/blogSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogSkeleton } from "../../subComponents/skeletons";
import { BlogPost } from "@/redux/blogSlice";
import Article from "./Article";
 
export interface Media {
  url: string;
  type: "image" | "video";
}

const AdminGetAll: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts = [], loading, error } = useSelector((state: RootState) => state.blogs);

  const [page, setPage] = useState(1);
  const postsPerPage = 3;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null); // State for storing the new image
  const [readMore, setReadMore] = useState<Set<string>>(new Set()); // Track which posts are expanded

  useEffect(() => {
    dispatch(fetchAllPosts({ page, limit: postsPerPage }));
  }, [dispatch, page]);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deleteBlogPost(id));
      dispatch(fetchAllPosts({ page, limit: postsPerPage }));
    }
  };

  const handleUpdate = (post: BlogPost) => {
    setSelectedPost(post); // Set selected post for editing
    setIsEditModalOpen(true); // Open the edit modal
    setNewImage(null); // Clear any previously selected image
  };

  const handleSaveUpdate = () => {
    if (selectedPost) {
      const formData = new FormData();
      formData.append("title", selectedPost.title);
      formData.append("description", selectedPost.description);
  
      // Check if a new image is selected
      if (newImage) {
        formData.append("media[0].url", URL.createObjectURL(newImage));  // Update media.url
        formData.append("media[0].type", "image"); // Assuming it's an image
      } else {
        selectedPost.media?.forEach((media, index) => {
          formData.append(`media[${index}].url`, media.url);  // Keep existing media.url
          formData.append(`media[${index}].type`, media.type);  // Keep existing media.type
        });
      }
  
      // Log the formData to check the contents
      console.log("Form Data:", formData);
  
      // Dispatch the updateBlogPost action with formData
      dispatch(updateBlogPost({ id: selectedPost._id, formData }));
      setIsEditModalOpen(false);  // Close the modal after saving
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

  if (loading) return <p className="text-center text-gray-600">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container dark:bg-[#2D2D2D] mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Blog Posts</h2>
      <Suspense fallback={<BlogSkeleton />}>
        <div className="space-y-6">
          {posts.map((post) => (
            <Article
              key={post._id}
              post={post}
              onDelete={handleDelete}
              onEdit={handleUpdate}
              readMore={readMore}
              toggleReadMore={toggleReadMore}
            />
          ))}
        </div>
      </Suspense>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 py-4">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Next Page
        </button>
      </div>

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
