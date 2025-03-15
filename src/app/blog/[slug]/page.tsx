"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getPostBySlug } from "@/redux/blogSlice"; // Ensure this action uses slug
import { format } from "date-fns";
 




const BlogDetail: React.FC = () => {
  const params = useParams(); // Access route parameters
  const slug = typeof params?.slug === "string" ? params.slug : ""; // Ensure slug is a string
  const dispatch = useDispatch<AppDispatch>();
  const { currentPost: post, loading, error } = useSelector(
    (state: RootState) => state.blogs
  );

  // Fetch the blog post by slug
  useEffect(() => {
    if (slug) {
      dispatch(getPostBySlug(slug)) // Dispatch the thunk
        .then((response) => {
          console.log("API response:", response);
        })
        .catch((err) => {
          console.error("Error fetching post by slug:", err);
        });
    }
  }, [slug, dispatch]);

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
      <div className="md:max-w-3xl w-full gap-5 flex flex-col justify-center">
        <div
          key={post.slug}
          className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
        >
          {/* Title */}
          <h3 className="text-2xl font-bold mb-4">{post.title}</h3>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-6">{post.description}</p>

          {/* Display all images (image1 to image5) */}
          <div className="flex flex-col gap-6">
            {/* Image 1 - Full Width */}
            {post.image1 && (
              <div className="w-full h-auto rounded-lg overflow-hidden">
                <Image
                  src={post.image1}
                  alt="Image 1"
                  width={1200}
                  height={600}
                  layout="responsive"
                  loading="lazy"
                  quality={100}
                  className="rounded-lg"
                />
              </div>
            )}

            {/* Image 2 and Image 3 - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.image2 && (
                <div className="w-full h-auto rounded-lg overflow-hidden">
                  <Image
                    src={post.image2}
                    alt="Image 2"
                    width={600}
                    height={400}
                    layout="responsive"
                    loading="lazy"
                    quality={100}
                    className="rounded-lg"
                  />
                </div>
              )}
              {post.image3 && (
                <div className="w-full h-auto rounded-lg overflow-hidden">
                  <Image
                    src={post.image3}
                    alt="Image 3"
                    width={600}
                    height={400}
                    layout="responsive"
                    loading="lazy"
                    quality={100}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>

            {/* Image 4 - Full Width */}
            {post.image4 && (
              <div className="w-full h-auto rounded-lg overflow-hidden">
                <Image
                  src={post.image4}
                  alt="Image 4"
                  width={1200}
                  height={600}
                  layout="responsive"
                  loading="lazy"
                  quality={100}
                  className="rounded-lg"
                />
              </div>
            )}

            {/* Image 5 - Full Width */}
            {post.image5 && (
              <div className="w-full h-auto rounded-lg overflow-hidden">
                <Image
                  src={post.image5}
                  alt="Image 5"
                  width={1200}
                  height={600}
                  layout="responsive"
                  loading="lazy"
                  quality={100}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Author, Status, Tags, and Date */}
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2 mt-6">
            <p>
              <span className="font-semibold">Author:</span> {post.author}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {post.status}
            </p>
            <p>
              <span className="font-semibold">Tags:</span> {post.tags.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Published:</span>{" "}
              {format(new Date(post.createdAt), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;