import Link from "next/link";
import React from "react";
import { newsData } from "../../data/articles";
import { open_sans,playfair_Display } from "../../fonts/fonts";


const NewsSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-4xl font-serif font-bold text-center mb-4">
        More news
      </h1>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-6" />

      {/* Render Limited News Items */}
      {newsData.slice(0, 5).map((newsItem) => (
        <div key={newsItem.id} className="mb-8">
          <Link href={`/new/${newsItem.id}`} className={`${open_sans.className} text-sm  text-red-500 mb-1 hover:underline`}>
            {newsItem.type}
          </Link>
          <Link href={`/new/${newsItem.id}`} className={`${playfair_Display.className} text-2xl font-semibold text-gray-800 hover:underline block mt-2`}>
            {newsItem.title}
          </Link>
          <Link href={`/new/${newsItem.id}`} className={`${open_sans.className} text-gray-600 mt-1 block hover:underline`}>
            {newsItem.description}
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
            <Link href={`/new/${newsItem.id}`} className={`${open_sans.className} hover:underline`}>
              By {newsItem.author}
            </Link>
            <span>{newsItem.date}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {newsItem.categories?.map((category, index) => (
              <Link
                key={index}
                href={`/new/${newsItem.id}`}
                className={`${open_sans.className} border border-gray-400 px-2 py-1 rounded text-gray-700 hover:underline`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-6" />
    </div>
  );
};

export default NewsSection;
