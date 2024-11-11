"use client";
import Image from "next/image";
import { fetchAllPosts } from "@/redux/blogSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogSkeleton } from "../../subComponents/skeletons";
import "animate.css"; // Import Animate.css

const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts = [], loading, error } = useSelector(
    (state: RootState) => state.blogs
  );

  // State for pagination
  const [page, setPage] = useState(1);
  const postsPerPage = 10; // Number of posts per page

  // Fetch posts based on page
  useEffect(() => {
    dispatch(fetchAllPosts({ page, limit: postsPerPage }));
  }, [dispatch, page]);

  // Handlers to navigate between pages
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
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
              key={post.id}
              className={`bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp border-4 border-blue-400 dark:border-blue-600 hover:border-blue-500 dark:hover:border-blue-700 p-1 relative`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {post.mediaUrl && (
                <Image
                  src={post.mediaUrl}
                  alt={post.title}
                  layout="responsive"
                  width={400}
                  height={250}
                  quality={100}
                  className="rounded-t-lg object-cover"
                />
              )}
              <div className="p-4 bg-white dark:bg-[#1E1E1E] rounded-b-lg shadow-inner">
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Suspense>

      {/* Pagination Controls */}
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
    </div>
  );
};

export default Blogs;
