"use client";
import { fetchAllPosts } from "@/redux/blogSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogSkeleton } from "../../subComponents/skeletons";
import "animate.css";
import BlogArticle from "./BlogArticle";

// Blog Component - Display all blog posts
const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts = [], loading, error } = useSelector((state: RootState) => state.blogs);

  const [page, setPage] = useState(1);
  const postsPerPage = 3;
  const [readMore, setReadMore] = useState<Set<string>>(new Set()); // Track which posts are expanded

 
  useEffect(() => {
    console.log("Fetching posts for page:", page); // Log the page when fetching posts
    dispatch(fetchAllPosts({ page, limit: postsPerPage }));
  }, [dispatch, page]);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
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
    <div className="container dark:bg-[#2D2D2D] flex flex-col justify-center  items-center mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Blog Posts</h2>
      <Suspense fallback={<BlogSkeleton />}>
      <div className="md:max-w-md bg-yellow-200 gap-5 flex flex-col justify-center">
          {posts.map((post) => (
            <BlogArticle
              key={post._id}
              post={post}
               
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
    </div>
  );
};

export default Blogs;
