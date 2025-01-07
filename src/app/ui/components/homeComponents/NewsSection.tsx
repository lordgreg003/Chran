"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { newsData } from "../../data/articles";
import { open_sans, playfair_Display } from "../../fonts/fonts";
import { motion } from "framer-motion";

const NewsSection: React.FC = () => {
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
    <div className="max-w-6xl overflow-x-hidden overflow-y-hidden  mx-auto px-4 py-8" ref={ref}>
      {/* Title */}
      <motion.h1
        className="text-4xl font-serif font-bold text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }} // Trigger opacity change based on visibility
        transition={{ duration: 1 }}
      >
        More news
      </motion.h1>

      {/* Divider */}
      <motion.hr
        className="border-t border-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }} // Trigger opacity change based on visibility
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      {/* Render Limited News Items */}
      {newsData.slice(0, 5).map((newsItem) => (
        <motion.div
          key={newsItem.slug}
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50,
          }} // Slide and fade in when in view
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <Link href={`/new/${newsItem.slug}`} className={`${open_sans.className} text-sm text-red-500 mb-1 hover:underline`}>
            {newsItem.type}
          </Link>
          <Link
            href={`/new/${newsItem.slug}`}
            className={`${playfair_Display.className} text-2xl font-semibold text-gray-800 hover:underline block mt-2`}
          >
            {newsItem.title}
          </Link>
          <Link href={`/new/${newsItem.slug}`} className={`${open_sans.className} text-gray-600 mt-1 block hover:underline`}>
            {newsItem.description}
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
            <Link href={`/new/${newsItem.slug}`} className={`${open_sans.className} hover:underline`}>
              By {newsItem.author}
            </Link>
            <span>{newsItem.date}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {newsItem.categories?.map((category, index) => (
              <Link
                key={index}
                href={`/new/${newsItem.slug}`}
                className={`${open_sans.className} border border-gray-400 px-2 py-1 rounded text-gray-700 hover:underline`}
              >
                {category}
              </Link>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Divider */}
      <motion.hr
        className="border-t border-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }} // Trigger opacity change based on visibility
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </div>
  );
};

export default NewsSection;
