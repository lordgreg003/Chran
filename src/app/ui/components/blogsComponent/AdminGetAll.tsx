"use client";
import Image from "next/image";
import { fetchAllPosts, deleteBlogPost, updateBlogPost } from "@/redux/blogSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogSkeleton } from "../../subComponents/skeletons";
import "animate.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa"; // Import edit icon
import { BlogPost } from "@/redux/blogSlice";

export interface Media {
  url: string;
  type: "image" | "video";
}

const AdminGetAll: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts = [], loading, error } = useSelector((state: RootState) => state.blogs);

  const [page, setPage] = useState(1);
  const postsPerPage = 10;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null); // State for storing the new image

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
  

  const renderMedia = (mediaUrls: { url: string; type: "image" | "video" }[]) => {
    return (
      <div className="media-container">
        {mediaUrls.map((media, index) => (
          <div key={index} className="media-item">
            {media.type === "image" ? (
              <Image
                src={media.url || "/default-image.png"}
                alt={`Media ${index + 1}`}
                layout="responsive"
                width={400}
                height={0}
                loading="lazy"
                quality={100}
                className="rounded-t-lg object-cover"
              />
            ) : (
              <video
                src={media.url}
                controls
                className="w-full rounded-t-lg"
              ></video>
            )}
          </div>
        ))}
      </div>
    );
  };

  if (loading) return <p className="text-center text-gray-600">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container dark:bg-[#2D2D2D] mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Blog Posts</h2>
      <Suspense fallback={<BlogSkeleton />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 dark:bg-[#2D2D2D]">
          {posts.map((post, index) => (
            <div
              key={post._id}
              className={`bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp border-4 border-blue-400 dark:border-blue-600 hover:border-blue-500 dark:hover:border-blue-700 p-1 relative`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {post.media && renderMedia(post.media)}
              <div className="p-4 bg-white dark:bg-[#1E1E1E] rounded-b-lg shadow-inner">
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</p>
                <button
                  onClick={() => handleUpdate(post)}
                  className="absolute top-2 right-10 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                >
                  <FaEdit size={20} />
                </button>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
            </div>
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
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                value={selectedPost.title}
                onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                value={selectedPost.description}
                onChange={(e) => setSelectedPost({ ...selectedPost, description: e.target.value })}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="media" className="block text-sm font-medium text-gray-700">Image/Media</label>
              <input
                type="file"
                id="media"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setNewImage(file); // Set the new image file
                  }
                }}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Display image preview */}
            {newImage && (
              <div className="mb-4">
                <Image
                  src={URL.createObjectURL(newImage)}
                  alt="Selected Image"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={handleSaveUpdate}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGetAll;
