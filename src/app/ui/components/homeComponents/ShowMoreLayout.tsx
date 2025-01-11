"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { showMore } from "../../data/istdata";
import Link from "next/link";
import { motion } from "framer-motion";
import { open_sans, playfair_Display } from "../../fonts/fonts"; // Ensure these are correct


const ShowMoreLayout = () => {
  const [isInView, setIsInView] = useState(false);

  // Scroll handler function to check if component is in the viewport
  const handleScroll = () => {
    const element = document.getElementById("show-more-section");
    if (element) {
      const rect = element.getBoundingClientRect();
      // Check if the element is within 80% of the viewport height
      if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Call handleScroll on mount to check initial visibility
    handleScroll();
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="show-more-section"
      className="py-10 px-6 max-w-6xl  mx-auto overflow-y-hidden  overflow-x-hidden md:px-20 lg:px-32 bg-white"
    >
      <motion.div
        className="flex flex-col md:flex-row overflow-x-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
          transition: { duration: 0.6 },
        }}
      >
        {/* Left Sidebar */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0 overflow-x-hidden">
          <h2 className={`${playfair_Display.className}text-xl font-semibold mb-6`}>Show me more</h2>
          <ul className="space-y-4 text-gray-500">
            <Link href={"/blog"}>
              <li className={`${playfair_Display.className} text-black font-semibold italic cursor-pointer hover:underline`}>
                Latest Blogs
              </li>
            </Link>
            <Link href={"/articles"}>
              <li className={`${playfair_Display.className}cursor-pointer hover:text-black transition hover:underline`}>
                Articles
              </li>
            </Link>
            <Link href={"/"}>
              <li className={`${playfair_Display.className}cursor-pointer hover:text-black transition hover:underline`}>
                Podcasts
              </li>
            </Link>
            <Link href={"/"}>
              <li className={`${playfair_Display.className}cursor-pointer hover:text-black transition hover:underline`}>
                Videos
              </li>
            </Link>
          </ul>
        </div>

        {/* Right Content Section */}
        <motion.div
          className="w-full overflow-x-hidden md:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 100,
            transition: { duration: 0.6 },
          }}
        >
          {showMore.map((item, index) => (
            <div
              key={item.slug}
              className="flex flex-col px-4 space-y-1 bg-white border rounded-lg shadow-lg overflow-x-hidden"
            >
              <span className={`${open_sans.className}text-gray-200 text-6xl font-light`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center space-x-2">
                <span className={`${open_sans.className} text-gray-500 text-sm`}>{item.type}</span>
                {item.sponsor && (
                  <span className={`${open_sans.className}  text-xs bg-red-100 text-red-500 px-2 rounded-full`}>
                    {item.sponsor}
                  </span>
                )}
              </div>
              <h3 className={`${playfair_Display.className}text-lg font-bold`}>{item.title || "Untitled"}</h3>
              <p className={`${open_sans.className}text-sm text-gray-500`}>
                By {item.author || "Unknown"}
              </p>
              <p className={`${open_sans.className}text-sm text-gray-500`}>
                {item.date || "Unknown Date"} • {item.duration || "Unknown Duration"}
              </p>
              <div className="flex flex-wrap gap-2">
                {/* Map over the tags for each item */}
                {item.tags &&
                  item.tags.split(", ").map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`${open_sans.className}text-xs border border-gray-300 px-2 py-1 rounded`}
                    >
                      {tag}
                    </span>
                  ))}
              </div>
              <Image
                src={item.imageUrl || "/fallback-image.jpg"}
                alt={item.title || "Image"}
                width={300}
                height={200}
                className="object-cover w-full"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ShowMoreLayout;
