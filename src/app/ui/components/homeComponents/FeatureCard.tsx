"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { articles } from "../../data/articles"; // Ensure this file exists
import { open_sans, playfair_Display } from "../../fonts/fonts"; // Ensure these are correct
import { motion } from "framer-motion"; // Ensure this is the correct import

const FeatureCard: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
        setIsInView(true); // Element is in the viewport
      } else {
        setIsInView(false); // Element is out of the viewport
      }
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render as well

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 pt-24 flex flex-col lg:flex-row gap-8" ref={ref}>
      {/* Main Feature Section */}
      <motion.div
        className="flex flex-col lg:flex-row border-b pb-8 lg:pb-0 lg:border-b-0"
        initial={{ opacity: 0, y: 30 }} // Start hidden and slightly moved down
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }} // Trigger fade in and move up
        transition={{ duration: 0.75, ease: "easeOut" }} // Faster and smoother transition
      >
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
                <h2 className={`${playfair_Display.className} text-2xl font-bold text-gray-900 leading-tight mb-4 cursor-pointer hover:text-blue-600`}>
                  {article.title}
                </h2>
              </Link>
              {/* Description */}
              <Link href={`/detail/${article.id}`}>
                <p className={`${open_sans.className} text-gray-600 text-sm`}>{article.description?.slice(0, 100)}</p>
              </Link>
              <Link href={`/detail/${article.id}`}>
                <button className={`${open_sans.className} text-sm italic text-red-600 mb-2`}>
                  News
                </button>
              </Link>
              {/* Optional Author and Date */}
              {article.author && (
                <p className={`${open_sans.className} text-sm text-gray-500`}>{article.author}</p>
              )}
              {article.date && (
                <p className={`${open_sans.className} text-sm text-gray-500`}>{article.date}</p>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Side News Section */}
      <motion.div
        className="w-full lg:w-1/3 flex flex-col gap-6"
        initial={{ opacity: 0, x: 30 }} // Start hidden and slightly moved to the right
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }} // Trigger fade in and move to original position
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.5 }} // Faster with delay
      >
        {articles.slice(1).map((article) => (
          <div key={article.id}>
            {/* Category */}
            <p className={`${open_sans.className} text-sm text-red-600 font-semibold mb-1`}>
              {article.category}
            </p>
            <Link href={`/detail/${article.id}`}>
              {/* Title */}
              <h3 className={`${playfair_Display.className} text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer`}>
                {article.title}
              </h3>
            </Link>
            {/* Description */}
            <p className={`${open_sans.className} text-gray-500 text-sm mt-1`}>{article.description}</p>
            {/* Optional Author and Date */}
            {article.author && (
              <p className={`${open_sans.className} text-sm text-gray-500`}>{article.author}</p>
            )}
            {article.date && (
              <p className={`${open_sans.className} text-sm text-gray-500`}>{article.date}</p>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeatureCard;
