"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getPostBySlug } from "@/redux/blogSlice";

const BlogDetail: React.FC = () => {
  const params = useParams(); // Access route parameters
  const slug = params?.slug; // Get slug from the URL
  const dispatch = useDispatch<AppDispatch>();
  const { posts = [], loading, error } = useSelector((state: RootState) => state.blogs);

  useEffect(() => {
    const slugParam = Array.isArray(slug) ? slug[0] : slug; // Ensure slug is a string

    console.log("Slug from URL:", slug); // Log slug value
    console.log("Slug param to be used:", slugParam); // Log the final slug to be used

    if (slugParam) {
      dispatch(getPostBySlug(slugParam))
        .then((response) => {
          console.log("API response:", response); // Log API response
        })
        .catch((err) => {
          console.error("Error fetching post by slug:", err); // Log errors
        });
    }
  }, [slug, dispatch]);

  const renderMedia = (mediaUrls: { url: string; type: "image" | "video" }[]) => (
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

  console.log("Redux state - loading:", loading);
  console.log("Redux state - error:", error);
  console.log("Redux state - posts:", posts);

  if (loading) return <p className="text-center text-gray-600">Loading post...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  if (!posts || posts.length === 0)
    return <p className="text-center text-gray-600">Post not found</p>;

  return (
    <div className="container dark:bg-[#2D2D2D] flex flex-col justify-center items-center mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Blog Posts</h2>
      <div className="md:max-w-md bg-yellow-200 gap-5 flex flex-col justify-center">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp p-4"
          >
            {post.media && renderMedia(post.media)}
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
