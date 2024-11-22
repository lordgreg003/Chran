"use client";
import React from "react";
import Image from "next/image";
import { BlogPost } from "@/redux/blogSlice";

interface BlogArticleProps {
  post: BlogPost;
  readMore: Set<string>;
  toggleReadMore: (id: string) => void;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ post, readMore, toggleReadMore }) => {
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

  return (
    <div className={`bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp border-4 border-blue-400 dark:border-blue-600 md:w-[400px] hover:border-blue-500 dark:hover:border-blue-700 p-4 relative flex flex-col`}
     >
      {post.media && renderMedia(post.media)}
      <h3 className="text-lg font-bold mb-2">{post.title}</h3>
      <p className={`text-gray-700 dark:text-gray-300 mb-4 ${!readMore.has(post._id) ? "line-clamp-3" : "line-clamp-none"}`}>
        {post.description}
      </p>
      {post.description.length > 200 && (
        <button onClick={() => toggleReadMore(post._id)} className="text-blue-600 hover:underline">
          {readMore.has(post._id) ? "Read Less" : "Read More"}
        </button>
      )}
       
    </div>
  );
};

export default BlogArticle;
