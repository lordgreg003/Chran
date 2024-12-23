"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { events } from "@/app/ui/data/2ndata";
import { motion } from "framer-motion";
import { playfair_Display, } from "../../fonts/fonts";


const UpcomingEvents: React.FC = () => {
  const [isInView, setIsInView] = useState<boolean>(false);

  const handleScroll = () => {
    const element = document.getElementById("upcoming-events");
    if (element) {
      const rect = element.getBoundingClientRect();
      // Check if the component is within 80% of the viewport height
      if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    // Call handleScroll on mount to check initial visibility
    handleScroll();
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="upcoming-events" className="max-w-6xl mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-serif font-bold text-center mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
          transition: { duration: 0.6 },
        }}
      >
        Upcoming Events
      </motion.h1>
      <hr className="border-t border-gray-300 mb-8" />

      {events.map((event) => (
        <div key={event.id}>
          <motion.div
            className="flex flex-col md:flex-row items-start gap-6 mb-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : 100,
              transition: { duration: 0.6 },
            }}
          >
            {/* Date */}
            <Link href={`/events/${event.id}`} className="w-full md:w-1/5">
              <div className={`${playfair_Display.className} text-2xl  font-semibold text-gray-700 hover:underline`}>
                {event.date}
              </div>
            </Link>

            {/* Image */}
            <Link href={`/events/${event.id}`} className="w-full md:w-2/5 relative aspect-[16/9]">
              <Image
                src={event.imageSrc}
                alt={event.altText}
                layout="fill"
                objectFit="cover"
                className="rounded"
                priority
              />
            </Link>

            {/* Event Details */}
            <div className="w-full md:w-2/5">
              <span className="text-sm italic text-red-500 mb-2 inline-block">
                {event.eventType}
              </span>
              <Link
                href={`/events/${event.id}`}
                className="text-2xl font-semibold ml-2 text-gray-800 hover:underline"
              >
                {event.title}
              </Link>
              <Link
                href={`/events/${event.id}`}
                className="text-gray-500 mt-1 block hover:underline"
              >
                {event.details}
              </Link>
              {event.category && (
                <Link
                  href={`/events/${event.id}`}
                  className="inline-block border border-gray-400 px-2 py-1 mt-2 rounded text-gray-700 text-sm hover:underline"
                >
                  {event.category}
                </Link>
              )}
            </div>
          </motion.div>
          <hr className="border-t border-gray-300 mb-8" />
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
