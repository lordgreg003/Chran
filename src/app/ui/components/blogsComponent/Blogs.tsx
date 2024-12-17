"use client";
import { fetchAllPosts } from "@/redux/blogSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogSkeleton } from "../../subComponents/skeletons";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { open_sans } from "../../fonts/fonts";

const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts = [], loading, error } = useSelector((state: RootState) => state.blogs);

  const [page, setPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    // Fetch posts for the current page, sorting by newest first
    dispatch(fetchAllPosts({ page, limit: postsPerPage }));
  }, [dispatch, page]);

  useEffect(() => {
    // If no posts are fetched and we're not on the first page, go back to the previous page
    if (!loading && posts.length === 0 && page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }, [posts, loading, page]);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const renderMedia = (mediaUrls: { url: string; type: "image" | "video" }[]) => {
    return (
      <div className="media-container">
        {mediaUrls.map((media, index) => (
          <div key={index} className="media-item">
            {media.type === "image" ? (
              <div className="border-4 rounded-lg overflow-hidden max-w-[300px] mx-auto">
                <Image
                  src={media.url || "/default-image.png"}
                  alt={`Media ${index + 1}`}
                  layout="responsive"
                  width={600}
                  height={0}
                  loading="lazy"
                  quality={100}
                  className="object-cover w-full"
                />
              </div>
            ) : (
              <video src={media.url} controls className="w-full rounded-t-lg"></video>
            )}
          </div>
        ))}
      </div>
    );
  };

  if (loading) return <p className="text-center text-gray-600">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  // If no posts exist and we are on the first page
  if (!loading && posts.length === 0 && page === 1) {
    return (
      <div className="container dark:bg-[#2D2D2D] flex flex-col items-center justify-center h-screen mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">No blogs here</h2>
        <button
          onClick={handlePreviousPage}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container dark:bg-[#2D2D2D] flex flex-col items-center mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Blog Posts</h2>
      <Suspense fallback={<BlogSkeleton />}>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post._id}`} passHref>
              <div className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp p-4">
                {post.media && renderMedia(post.media)}
                <h3 className="text-lg font-bold mb-2">{post.title.slice(0,20)}</h3>
                <p className="text-gray-700 dark:text-gray-300">{post.description.slice(0, 80)}</p>
                <Link href={`/blog/${post._id}`}>
                <button className={`${open_sans.className} mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition`}>
                  Read More
                </button>
              </Link>
              </div>
            </Link>
          ))}
        </div>
      </Suspense>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-6 py-6">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50"
        >
          <span className="animate__animated animate__fadeIn animate__delay-1s">Previous</span>
        </button>
        <button
          onClick={handleNextPage}
          className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <span className="animate__animated animate__fadeIn animate__delay-1s">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Blogs;
