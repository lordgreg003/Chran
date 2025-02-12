"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { articles, FeatureData } from "@/app/ui/data/articles"; // Import your articles data
import { playfair_Display,open_sans } from "@/app/ui/fonts/fonts";
 
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
      <div className="flex flex-col justify-center items-center gap-8">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center">
          {/* Category */}
          <p className={`${open_sans.className}`}>{article.category}</p>

          {/* Author and Date */}
          {article.author && <p className={`${open_sans.className}text-sm text-gray-500`}>By {article.author}</p>}
          {article.date && <p className="text-sm text-gray-500">{article.date}</p>}

          {/* Title */}
          <h1
            className={`${playfair_Display.className} text-3xl font-bold text-gray-900 mb-4`}
          >
            {article.title}
          </h1>
        </div>

        {/* Media Section */}
        <div className="relative w-full lg:w-1/2">
          {article.imageUrl && !article.video && (
            <Image
              src={article.imageUrl}
              alt={article.title}
              className="rounded-md object-cover w-full"
              width={500}
              height={300}
            />
          )}
          {article.video && (
            <video
              src={article.video}
              controls
              className="rounded-md w-full h-[30rem] object-cover"
            />
          )}
        </div>

        {/* Content Text Section */}
        <div className="w-full lg:w-1/2">
          {article.content && (
            <div className="mt-4 text-gray-700 flex flex-col gap-5">
              <p className={`${open_sans.className}`}>{article.content}</p>
              <p className={`${open_sans.className}`}>{article.content1}</p>
              <p className={`${open_sans.className}`}>{article.content2}</p>
              <p className={`${open_sans.className}`}>{article.content3}</p>
              <p className={`${open_sans.className}`}>{article.content4}</p>
              <p className={`${open_sans.className}`}>{article.content5}</p>
              <p className={`${open_sans.className}`}>{article.content6}</p>
              <p className={`${open_sans.className}`}>{article.content7}</p>
              <p className={`${open_sans.className}`}>{article.content8}</p>
              <p className={`${open_sans.className}`}>{article.content9}</p>
              <p className={`${open_sans.className}`}>{article.content10}</p>
              <p className={`${open_sans.className}`}>{article.content11}</p>
              <p className={`${open_sans.className}`}>{article.content12}</p>
              <p className={`${open_sans.className}`}>{article.content13}</p>
              <p className={`${open_sans.className}`}>{article.content14}</p>
            </div>
          )}
        </div>
      </div>
     </div>
  );
};

export default ArticleDetails;
