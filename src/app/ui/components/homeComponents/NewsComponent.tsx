import React from "react";
import { featureData, newsItems } from "../../data/articles";  
 

const NewsComponent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-8 lg:pt-16">
      {/* Main Feature Section */}
      <div className="pb-6 border-b">
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight mb-4">
          {featureData.title}
        </h1>
        <p className="text-gray-600 text-lg mb-4">{featureData.description}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <p className="font-medium">{featureData.author}</p>
          <p>{featureData.date}</p>
        </div>
        <div className="flex gap-2">
          {featureData.categories.map((category, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 text-sm rounded-md">
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Content Under Feature */}
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <p className="text-sm text-red-500 italic mb-2">Feature</p>
          <div className="relative w-full h-64 lg:h-96 mb-4">
            <video
              src={featureData.videoUrl}
              controls
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-900">{featureData.title}</h2>
        </div>

        {/* Right Section */}
        <div>
          {newsItems.map((item, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <p
                className={`text-red-500 text-sm font-semibold mb-1 ${
                  item.type === "sponsored" ? "italic" : ""
                }`}
              >
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title.slice(0,99)}
              </h3>
              <p className="text-gray-500 text-xs">{item.author} • {item.date}</p>
              {item.type === "sponsored" && <p className="text-gray-500 text-xs">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
