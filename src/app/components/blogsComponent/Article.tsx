 "use client";
import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa"; // Import edit and delete icons
import Image from "next/image";
import { BlogPost } from "@/redux/blogSlice";

interface ArticleProps {
  post: BlogPost;
  onDelete: (id: string) => void;
  onEdit: (post: BlogPost) => void;
  readMore: Set<string>;
  toggleReadMore: (id: string) => void;
  formattedDate: string;
}

const Article: React.FC<ArticleProps> = ({ post, onDelete, onEdit, readMore, toggleReadMore }) => {
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
    <div className={`bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp border-4 border-blue-400 dark:border-blue-600 hover:border-blue-500 dark:hover:border-blue-700 p-4 relative flex flex-col`}
      style={{ width : "400px",  }}>
        {post.image1 && renderMedia([{ url: post.image1, type: "image" }])}
        {post.image2 && renderMedia([{ url: post.image2, type: "image" }])}
        {post.image3 && renderMedia([{ url: post.image3, type: "image" }])}
        {post.image4 && renderMedia([{ url: post.image4, type: "image" }])}
        {post.image5 && renderMedia([{ url: post.image5, type: "image" }])}
        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
        <p className={`text-gray-700 dark:text-gray-300 mb-4 ${!readMore.has(post._id) ? "line-clamp-3" : "line-clamp-none"}`}>
        {post.description}
        </p>
        {post.description.length > 200 && (
        <button onClick={() => toggleReadMore(post._id)} className="text-blue-600 hover:underline">
          {readMore.has(post._id) ? "Read Less" : "Read More"}
        </button>
        )}
        <button
        onClick={() => onEdit(post)}
        className="absolute top-2 right-10 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
        >
        <FaEdit size={20} />
        </button>
        <button
        onClick={() => onDelete(post._id)}
        className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
        >
        <FaTrashAlt size={20} />
        </button>
      </div>
  );
};

export default Article;
