"use client";
import React, { useState, useEffect } from "react";
import { playfair_Display } from "../../fonts/fonts";

// Define the data structure for each slide
interface Slide {
  image: string;
  text: string;
}

interface CarouselProps {
  slides: Slide[]; // Array of image-text pairs
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("animate__fadeIn");

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade out animation
      setAnimation("animate__fadeOut");

      // Change slide after fade out animation completes
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setAnimation("animate__fadeIn");
      }, 600);
    }, 15000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className=" w-full h-screen">
      {/* Background Image */}
      <div
        className={`w-full h-full bg-cover bg-center transition-all duration-500 animate__animated ${animation}`}
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        {/* Overlay with text */}
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h2
            className={`${playfair_Display.className} text-white text-4xl font-bold text-center`}
          >
            {slides[currentIndex].text}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
