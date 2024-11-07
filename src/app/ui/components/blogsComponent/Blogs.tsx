// src/components/Blogs.tsx
"use client";
import Image from "next/image";
import { fetchAllPosts } from "@/redux/blogSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    posts = [],
    loading,
    error,
  } = useSelector((state: RootState) => state.blogs);

  useEffect(() => {
    dispatch(fetchAllPosts({ page: 1, limit: 10 })); // Adjust page and limit as needed
  }, [dispatch]);

  console.log("Posts:", posts); // Log to check posts data

  if (loading) {
    return <p className="text-center text-gray-600">Chran latest posts...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container dark:bg-[#2D2D2D] mx-auto py-8 px-4">
      <div className="h-14"></div>
      <h2 className="text-2xl font-semibold text-center mb-6">Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 dark:bg-[#2D2D2D]">
        {Array.isArray(posts.blogPosts) &&
          posts.blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {post.mediaUrl && (
                <Image
                  src={post.mediaUrl}
                  alt={post.title}
                  height={100}
                  width={100}
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
