"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { open_sans, playfair_Display } from "../../fonts/fonts";
import { featureData1, newsItems1 } from "../../data/istdata";
import { motion } from "framer-motion"; // Import motion

const NewsComponent1: React.FC = () => {
  const [isInView, setIsInView] = useState(false); // State to track visibility
  const componentRef = useRef<HTMLDivElement>(null); // Ref to the component for tracking visibility

  // Handle scroll to check if the component is in the viewport
  const handleScroll = () => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  // Set up scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial check in case it's already in view when the page loads
    handleScroll();

    // Cleanup scroll event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 pt-8 lg:pt-16">
      {/* Main Feature Section */}
      <motion.div
        ref={componentRef} // Attach ref for visibility detection
        className="pb-6 border-b"
        initial={{ opacity: 0 }} // Start with opacity 0
        animate={{
          opacity: isInView ? 1 : 0, // Fade in when in view
          y: isInView ? 0 : 50, // Slide up effect
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className={`${playfair_Display.className} text-4xl font-semibold text-gray-900 leading-tight mb-4`}>
          <Link href={`/video/${featureData1.id}`}>{featureData1.title}</Link>
        </h1>
        <Link href={`/video/${featureData1.id}`}>
          <p className={`${open_sans.className} text-gray-600 text-lg mb-4`}>{featureData1.description}</p>
        </Link>
        <div className={`${open_sans.className} flex items-center gap-2 text-sm text-gray-500 mb-4`}>
          <p className="font-medium">{featureData1.author}</p>
          <p>{featureData1.date}</p>
        </div>
        <div className="flex gap-2">
          {featureData1.categories.map((category, index) => (
            <Link href={`/video/${category}`} key={index}>
              <span className={`${open_sans.className} px-3 py-1 bg-gray-200 text-sm rounded-md`}>
                {category}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Content Under Feature */}
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        {/* Left Section */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 50 }} // Initial state for slide-up effect
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50,
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Add a delay to stagger the animations
        >
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
          <h2 className={`${playfair_Display.className} text-xl font-bold text-gray-900`}>
            <Link href={`/video/${featureData1.id}`}>{featureData1.title}</Link>
          </h2>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Start with slide-in effect from the right
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 50,
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          {newsItems1.map((item, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <p
                className={`text-red-500 text-sm font-semibold mb-1 ${
                  item.type === "sponsored" ? "italic" : ""
                }`}
              >
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </p>
              <h3 className={`${playfair_Display.className} text-lg font-semibold text-gray-900 mb-1`}>
                <Link href={`/news/${item.id}`}>{item.title.slice(0, 50)}</Link>
              </h3>
              <p className={`${open_sans.className} text-gray-500 text-xs`}>
                {item.author} • {item.date}
              </p>
              {/* Always render the description, regardless of type */}
              <p className={`${open_sans.className} text-gray-500 text-xs mt-2`}>{item.description.slice(0,150)}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsComponent1;
