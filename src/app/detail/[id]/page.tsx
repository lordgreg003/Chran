"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { articles, FeatureData } from "@/app/ui/data/articles"; // Import your articles data

const ArticleDetails: React.FC = () => {
  const params = useParams(); // Access route parameters
  const id = typeof params?.id === "string" ? params.id : ""; // Get the `id` from the URL

  const [article, setArticle] = useState<FeatureData | null>(null);

  useEffect(() => {
    if (id) {
      const foundArticle = articles.find((article) => article.id === String(id));
      setArticle(foundArticle || null);
    }
  }, [id]);

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
          {article.imageUrl && (
            <Image
              src={article.imageUrl}
              alt={article.title}
              className="rounded-md object-cover w-full h-full"
              width={500}
              height={300}
            />
          )}
        </div>
        <div className="w-full lg:w-1/2">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
          
          {/* Category */}
          <p className="text-sm italic text-red-600 mb-2">{article.category}</p>
          
          {/* Author and Date */}
          {article.author && <p className="text-sm text-gray-500">By {article.author}</p>}
          {article.date && <p className="text-sm text-gray-500">{article.date}</p>}

          {/* Full Content */}
          {article.content && (
            <div className="mt-4 text-gray-700">
              <p>{article.content}</p>
            </div>
          )}

          {/* Optional Description */}
          {article.description && (
            <div className="mt-4 text-gray-600">
              <p>{article.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
