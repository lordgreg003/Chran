"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
 
import { motion } from "framer-motion"; // Import motion
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
import { featureData, newsItems } from "@/app/ui/data/articles";

const NewsComponent: React.FC = () => {
  const [inView, setInView] = useState(false); // State to track visibility of the component
  const componentRef = useRef<HTMLDivElement>(null); // Ref to track the component

  // Function to check if component is in view
  const handleScroll = () => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      // Check if at least 80% of the component is in view
      const isInViewport = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
      setInView(isInViewport);
    }
  };

  // Adding event listener for scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility on page load

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-hidden mx-auto px-4 pt-8 lg:pt-16 ">
      {/* Main Feature Section */}
      <motion.div
        ref={componentRef} // Attach the ref to track this component
        className="pb-6 border-b"
        initial={{ opacity: 0 }} // Start hidden
        animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
        transition={{ duration: 1, ease: "easeOut" }} // Duration and easing for smooth transition
      >
        <h1 className={`${playfair_Display.className} text-4xl font-semibold text-gray-900 leading-tight mb-4`}>
          <Link href={`/videos/${featureData.slug}`}>{featureData.title}</Link>
        </h1>
        <Link href={`/videos/${featureData.slug}`}>
          <p className={`${open_sans.className} text-gray-600 text-lg mb-4`}>{featureData.description}</p>
        </Link>
        <div className={`${open_sans.className} flex items-center gap-2 text-sm text-gray-500 mb-4`}>
          <p className="font-medium">{featureData.author}</p>
          <p className="whitespace-nowrap">{featureData.date}</p>
        </div>
        <div className="flex gap-2">
          {featureData.categories.map((category, index) => (
            <Link href={`/videos/${category}`} key={index}>
              <span className="px-3 py-1 bg-gray-200 text-sm rounded-md">
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
          initial={{ opacity: 0, y: 50 }} // Start off-screen with some opacity
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Fade in and slide up
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Duration, easing, and delay
        >
          <p className="text-sm text-red-500 italic mb-2">Feature</p>
          <div className="relative w-full h-64 lg:h-96 mb-4">
            <Link href={`/videos/${featureData.slug}`}>
              <video
                src={featureData.videoUrl}
                controls
                className="rounded-md w-full h-full object-cover"
              />
            </Link>
          </div>
          <h2 className={`${playfair_Display.className} text-xl font-bold text-gray-900`}>
            <Link href={`/videos/${featureData.slug}`}>{featureData.title}</Link>
          </h2>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }} // Fade in and slide from right
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Duration, easing, and delay
        >
          {newsItems.map((item, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <p
                className={`${open_sans.className}  text-red-500 text-sm font-semibold mb-1 ${
                  item.type === "sponsored" ? "italic" : ""
                }`}
              >
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </p>
              <h3 className={`${playfair_Display.className} text-lg font-semibold text-gray-900 mb-1`}>
                <Link href={`/news/${item.id}`}>{item.title.slice(0, 99)}</Link>
              </h3>
              <p className={`${open_sans}text-gray-500 text-xs`}>
                {item.author} • {item.date}
              </p>
              {item.type === "sponsored" && (
                <p className={`${open_sans}text-gray-500 text-xs`}>{item.description}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsComponent;
