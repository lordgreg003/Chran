import React from "react";
import Link from "next/link";
import { featureData1, newsItems1 } from "../../data/istdata";

const NewsComponent1: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-8 lg:pt-16">
      {/* Main Feature Section */}
      <div className="pb-6 border-b">
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight mb-4">
          <Link href={`/video/${featureData1.id}`}>{featureData1.title}</Link>
        </h1>
        <Link href={`/video/${featureData1.id}`} >
          <p className="text-gray-600  text-lg mb-4">{featureData1.description}</p>
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <p className="font-medium">{featureData1.author}</p>
          <p>{featureData1.date}</p>
        </div>
        <div className="flex gap-2">
          {featureData1.categories.map((category, index) => (
            <Link href={`/video/${category}`} key={index}>
              <span className="px-3 py-1 bg-gray-200 text-sm rounded-md">
                {category}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Content Under Feature */}
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <p className="text-sm text-red-500 italic mb-2">Feature</p>
          <div className="relative w-full h-64 lg:h-96 mb-4">
            <Link href={`/video/${featureData1.id}`}>
              <video
                src={featureData1.videoUrl}
                controls
                className="rounded-md w-full h-full object-cover"
              />
            </Link>
          </div>
          <h2 className="text-xl font-bold text-gray-900">
            <Link href={`/video/${featureData1.id}`}>{featureData1.title}</Link>
          </h2>
        </div>

        {/* Right Section */}
        <div>
          {newsItems1.map((item, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <p
                className={`text-red-500 text-sm font-semibold mb-1 ${
                  item.type === "sponsored" ? "italic" : ""
                }`}
              >
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                <Link href={`/news/${item.id}`}>{item.title.slice(0, 50)}</Link>
              </h3>
              <p className="text-gray-500 text-xs">
                {item.author} • {item.date}
              </p>
              {/* Always render the description, regardless of type */}
              <p className="text-gray-500 text-xs mt-2">{item.description.slice(0,150)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent1;
