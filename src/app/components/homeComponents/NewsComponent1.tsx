"use client";
import React from "react";
import Link from "next/link";
import { featureData1, newsItems1 } from "@/app/ui/data/istdata";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
 

const NewsComponent1: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden mx-auto px-4 w-full pt-8 lg:pt-16">
      {/* Main Feature Section */}
      <div className="pb-6 border-b">
        <h1
          className={`${playfair_Display.className} text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-4`}
        >
          <Link href={`/video/${featureData1.slug}`}>{featureData1.title}</Link>
        </h1>
        <Link href={`/video/${featureData1.slug}`}>
          <p className={`${open_sans.className} text-gray-600 text-base md:text-lg mb-4`}>
            {featureData1.description}
          </p>
        </Link>
        <div
          className={`${open_sans.className} flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4`}
        >
          <p className="font-medium">{featureData1.author}</p>
          <p>{featureData1.date}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {featureData1.categories.map((category, index) => (
            <Link href={`/video/${category}`} key={index}>
              <span
                className={`${open_sans.className} px-3 py-1 bg-gray-200 text-sm rounded-md`}
              >
                {category}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Content Under Feature */}
      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <p className="text-sm text-red-500 italic mb-2">Feature</p>
          <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 mb-4">
            <Link href={`/video/${featureData1.slug}`}>
              <video
                src={featureData1.videoUrl}
                controls
                className="rounded-md w-full h-full object-cover"
              />
            </Link>
          </div>
          <h2
            className={`${playfair_Display.className} text-lg md:text-xl font-bold text-gray-900`}
          >
            <Link href={`/video/${featureData1.slug}`}>{featureData1.title}</Link>
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
              <h3
                className={`${playfair_Display.className} text-md md:text-lg font-semibold text-gray-900 mb-1`}
              >
                <Link href={`/news/${item.id}`}>
                  {item.title.slice(0, 50)}
                </Link>
              </h3>
              <p className={`${open_sans.className} text-gray-500 text-xs`}>
                {item.author} • {item.date}
              </p>

              <p
                className={`${open_sans.className} text-gray-500 text-xs mt-2`}
              >
                {item.description.slice(0, 150)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent1;
