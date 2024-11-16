"use client";
import Image from "next/image";
import { fetchAllPosts } from "@/redux/blogSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogSkeleton } from "../../subComponents/skeletons";
import "animate.css";

const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts = [], loading, error } = useSelector(
    (state: RootState) => state.blogs
  );

  const [page, setPage] = useState(1);
  const postsPerPage = 10;

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

  const renderMedia = (mediaUrls: { url: string; type: "image" | "video" }[]  ) => {
    console.log("Rendering media:", mediaUrls); // Log mediaUrls when rendering media
    return (
      <div className="media-container">
        {mediaUrls.map((media, index) => (
          <div key={index} className="media-item">
            {media.type === "image" ? (
              <Image
                src={media.url || "/default-image.png" }
                alt={`Media ${index + 1}`}
                layout="responsive"
                width={400}
                height={0}
                // fill
                loading="lazy"
                quality={100}
                className="rounded-t-lg object-cover"
                // style={{ objectFit: "cover",height : "100%" }}
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
              {post.media && (
                <>
                  {renderMedia(post.media)}
                </>
              )}
              <div className="p-4 bg-white dark:bg-[#1E1E1E] rounded-b-lg shadow-inner">
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Suspense>

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
