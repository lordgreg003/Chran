"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { AppDispatch, RootState } from "@/redux/store";
import { getArticleById } from "@/redux/articleSlice";
import "animate.css"; // Import animate.css for animations
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";

const ArticleDetails: React.FC = () => {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : ""; // Ensure id is a string
  const dispatch = useDispatch<AppDispatch>();
  const { article, loading, error } = useSelector(
    (state: RootState) => state.articles
  );

  useEffect(() => {
    if (id) {
      dispatch(getArticleById(id));
    }
  }, [id, dispatch]);

  // Handle loading state
  if (loading) {
    return <div className="text-center text-lg">Loading article...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  // Handle empty state
  if (!article) {
    return <div className="text-center text-gray-500">No article found</div>;
  }

  // Utility function: Split long text into chunks
  const splitTextIntoChunks = (text: string, chunkSize = 50): string[] => {
    const words = text.split(" ");
    const chunks: string[] = [];
    for (let i = 0; i < words.length; i += chunkSize) {
      chunks.push(words.slice(i, i + chunkSize).join(" "));
    }
    return chunks;
  };

  // Format and split article content
  const formattedArticleChunks = splitTextIntoChunks(article.article);

  return (
    <div className="container mx-auto p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 animate__animated animate__fadeIn">
        Article Details
      </h1>

      {/* Article Card */}
      <div className="border-4 border-blue-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate__animated animate__zoomIn">
        {/* Article Title */}
        <h2 className={`${playfair_Display.className} text-xl font-semibold text-blue-600 dark:text-blue-400`}>
          {article.article.slice(0, 50)}...
        </h2>

        {/* Created Date */}
        <p className="text-sm text-gray-500">
          Created At: {new Date(article.createdAt).toLocaleDateString()}
        </p>

        {/* Article Content */}
        <div className="mt-4 space-y-6">
          {formattedArticleChunks.map((chunk, index) => (
            <p
              key={index}
              className={`${open_sans.className} text-lg`}
              style={{ marginBottom: "1.5em", lineHeight: "1.6" }}
            >
              {chunk}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
