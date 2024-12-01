"use client";
import { fetchAllPosts } from "@/redux/blogSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogSkeleton } from "../../subComponents/skeletons";
import "animate.css";
import Image from "next/image";
import Link from "next/link";

// Blog Component - Display all blog posts
const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts = [], loading, error } = useSelector((state: RootState) => state.blogs);

  const [page, setPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    dispatch(fetchAllPosts({ page, limit: postsPerPage }));
  }, [dispatch, page]);

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
              <div className="border-4  rounded-lg overflow-hidden max-w-[300px] mx-auto">
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
    <div className="container dark:bg-[#2D2D2D] flex flex-col justify-center  items-center mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Blog Posts</h2>
      <Suspense fallback={<BlogSkeleton />}>
        <div className="md:max-w-md bg-yellow-200 gap-5 flex flex-col justify-center">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug}`} passHref>
              <div className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp p-4">
              {post.media && renderMedia(post.media)}
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
              </div>
            </Link>
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
