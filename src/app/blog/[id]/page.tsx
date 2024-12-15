"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getPostById } from "@/redux/blogSlice"; // Updated action

const BlogDetail: React.FC = () => {
  const params = useParams(); // Access route parameters
  const id = typeof params?.id === "string" ? params.id : ""; // Ensure id is a string
  const dispatch = useDispatch<AppDispatch>();
  const { currentPost: post, loading, error } = useSelector(
    (state: RootState) => state.blogs
  );

  useEffect(() => {
    if (id) {
      dispatch(getPostById(id)) // Dispatch the thunk
        .then((response) => {
          console.log("API response:", response);
        })
        .catch((err) => {
          console.error("Error fetching post by ID:", err);
        });
    }
  }, [id, dispatch]);

  // Render loading state
  if (loading) return <p className="text-center text-gray-600">Loading post...</p>;

  // Render error state
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  // Render not found state
  if (!post) return <p className="text-center text-gray-600">Post not found</p>;

  // Render post
  return (
    <div className="container dark:bg-[#2D2D2D] flex flex-col justify-center items-center mx-auto py-8 px-4">
      <Link
        href="/blog"
        className="text-blue-500 hover:text-blue-700 transition-colors duration-200 mb-4 self-start"
      >
        &larr; Go Back
      </Link>
      <h2 className="text-2xl font-semibold text-center mb-6">Blog Post</h2>
      <div className="md:max-w-md gap-5 flex flex-col justify-center">
        <div
          key={post._id}
          className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp p-4"
        >
          {post.media && (
            <div className="media-container">
              {post.media.map((media, index) => (
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
          )}
          <h3 className="text-lg font-bold mb-2">{post.title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
