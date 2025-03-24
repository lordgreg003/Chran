"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getPostBySlug } from "@/redux/blogSlice";
import { format } from "date-fns";

const BlogDetail: React.FC = () => {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const dispatch = useDispatch<AppDispatch>();
  const { currentPost: post, loading, error } = useSelector(
    (state: RootState) => state.blogs
  );

  useEffect(() => {
    if (slug) {
      dispatch(getPostBySlug(slug))
        .then((response) => {
          console.log("API response:", response);
        })
        .catch((err) => {
          console.error("Error fetching post by slug:", err);
        });
    }
  }, [slug, dispatch]);

  if (loading) return <p className="text-center text-gray-600">Loading post...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!post) return <p className="text-center text-gray-600">Post not found</p>;

  return (
    <div className="container dark:bg-[#2D2D2D] mx-auto py-8 px-4">
      <Link
        href="/blog"
        className="text-blue-500 hover:text-blue-700 transition-colors duration-200 mb-4 inline-block"
      >
        &larr; Go Back
      </Link>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column (60% width) */}
        <div className="lg:w-[60%]">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            {post.image1 && (
              <div className="w-full h-auto rounded-lg overflow-hidden mb-6">
                <Image
                  src={post.image1}
                  alt="Main post image"
                  width={800}
                  height={500}
                  className="rounded-lg w-full h-auto"
                  priority
                />
              </div>
            )}

            <h1 className="text-3xl font-bold mb-4 dark:text-white">{post.title}</h1>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">{post.description}</p>
            
            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2 mt-6 border-t pt-4">
              <p>
                <span className="font-semibold">Author:</span> {post.author}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span className={`capitalize ${post.status === 'published' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {post.status}
                </span>
              </p>
              <p>
                <span className="font-semibold">Tags:</span>{" "}
                {post.tags.map(tag => (
                  <span key={tag} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </p>
              <p>
                <span className="font-semibold">Published:</span>{" "}
                {format(new Date(post.createdAt), "MMMM dd, yyyy")}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (30% width) - Additional Images */}
        <div className="lg:w-[30%] flex flex-col gap-6">
          {post.image2 && (
            <div className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md p-4">
              <Image
                src={post.image2}
                alt="Additional image 2"
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          )}

          {post.image3 && (
            <div className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md p-4">
              <Image
                src={post.image3}
                alt="Additional image 3"
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          )}

          {post.image4 && (
            <div className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md p-4">
              <Image
                src={post.image4}
                alt="Additional image 4"
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          )}

          {post.image5 && (
            <div className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md p-4">
              <Image
                src={post.image5}
                alt="Additional image 5"
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;