"use client";

import { newsData } from "@/app/ui/data/articles";
import { useParams } from "next/navigation";

const NewsDetails: React.FC = () => {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id.trim() : ""; // Ensure id is a string and trim it

  console.log("ID from Params:", id);
  console.log("News Data:", newsData);

  // Find the news item by ID, trimming whitespace
  const newsItem = newsData.find((item) => item.id.trim() === id);

  console.log("News Item:", newsItem);

  if (!newsItem) {
    return <p className="text-center text-gray-700">Article not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
        {newsItem.title}
      </h1>
      <p className="text-sm italic text-red-500 mb-4">{newsItem.type}</p>
      <p className="text-gray-600">{newsItem.description}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
        <span>By {newsItem.author}</span>
        <span>{newsItem.date}</span>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {newsItem.categories?.map((category, index) => (
          <span
            key={index}
            className="border border-gray-400 px-2 py-1 rounded text-gray-700"
          >
            {category}
          </span>
        ))}
      </div>
      
      {/* Display the full text */}
      <div className="mt-6">
        <p className="text-lg text-gray-800">{newsItem.fullText}</p>
      </div>
    </div>
  );
};

export default NewsDetails;
