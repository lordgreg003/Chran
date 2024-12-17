import Image from "next/image";
import Link from "next/link";
import React from "react";
import { articles } from "../../data/articles"; // Assuming articles are imported correctly
import { open_sans } from "../../fonts/fonts";

const FeatureCard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24 flex flex-col lg:flex-row gap-8">
      {/* Main Feature Section */}
      <div className="flex flex-col lg:flex-row border-b pb-8 lg:pb-0 lg:border-b-0">
        {articles.slice(0, 1).map((article) => (
          <div key={article.id} className="flex flex-col lg:flex-row">
            <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
              <Link href={`/detail/${article.id}`}>
                {/* Image */}
                {article.imageUrl && (
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md cursor-pointer"
                  />
                )}
              </Link>
            </div>
            <div className="mt-4 lg:mt-0 lg:pl-6 w-full lg:w-1/2 flex flex-col justify-between">
              {/* Category */}
              <p className="text-sm italic text-red-600 mb-2">{article.category}</p>
              <Link href={`/detail/${article.id}`}>
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-4 cursor-pointer hover:text-blue-600">
                  {article.title}
                </h2>
              </Link>
              {/* Description */}
              <Link href={`/detail/${article.id}`}> <p className="text-gray-600 text-sm">{article.description?.slice(0, 100)}</p></Link>
              <Link href={`/detail/${article.id}`}>
                <button className={`${open_sans.className} text-sm italic text-red-600 mb-2`}>
                  News
                </button>
              </Link>
              {/* Optional Author and Date */}
              {article.author && (
                <p className="text-sm text-gray-500">{article.author}</p>
              )}
              {article.date && (
                <p className="text-sm text-gray-500">{article.date}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Side News Section */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        {articles.slice(1).map((article) => (
          <div key={article.id}>
            {/* Category */}
            <p className="text-sm text-red-600 font-semibold mb-1">
              {article.category}
            </p>
            <Link href={`/detail/${article.id}`}>
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                {article.title}
              </h3>
            </Link>
            {/* Description */}
            <p className="text-gray-500 text-sm mt-1">{article.description}</p>
            {/* Optional Author and Date */}
            {article.author && (
              <p className="text-sm text-gray-500">{article.author}</p>
            )}
            {article.date && (
              <p className="text-sm text-gray-500">{article.date}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
