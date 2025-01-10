"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { AppDispatch, RootState } from "@/redux/store";
import { getArticleById } from "@/redux/articleSlice";
import "animate.css"; // Import animate.css for animations
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";



const ArticleDetails: React.FC = () => {
  const params = useParams(); // Access route parameters
  const id = typeof params?.id === "string" ? params.id : ""; // Ensure id is a string
  const dispatch = useDispatch<AppDispatch>();
  const { article, loading, error } = useSelector(
    (state: RootState) => state.articles
  );

  useEffect(() => {
    if (id) {
      dispatch(getArticleById(id)); // Dispatch the action to fetch the article by ID
    }
  }, [id, dispatch]);

  if (loading) {
    return <div>Loading article...</div>;
  }

  if (error) {
    return <div>Error fetching article: {error}</div>;
  }

  if (!article) {
    return <div>No article found</div>;
  }

   const formattedArticle = (article.article);

  return (
    <div className="container mx-auto p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 animate__animated animate__fadeIn">
        Article Details
      </h1>

      <div className="border-4 border-blue-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate__animated animate__zoomInOutInfinite">
        <h2 className={`${playfair_Display.className} text-xl font-semibold text-blue-600 dark:text-blue-400`}>
          {article.article.slice(0, 50)}...
        </h2>
        <p className="text-sm text-gray-500">
          Created At: {new Date(article.createdAt).toLocaleDateString()}
        </p>
        <p
          className={`${open_sans.className} mt-4 text-lg`}
          // Use dangerouslySetInnerHTML to render HTML content
          dangerouslySetInnerHTML={{ __html: formattedArticle }}
          style={{ marginBottom: '1.5em', lineHeight: '1.6' }} 
        />
      </div>
    </div>
  );
};

export default ArticleDetails;
