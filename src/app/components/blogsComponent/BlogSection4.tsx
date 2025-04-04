'use client';
import { useEffect, useState } from 'react';
 import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { mainCardData2 } from '@/app/ui/data/istdata';
import { open_sans, playfair_Display } from '@/app/ui/fonts/fonts';
import { rightCardsData3 } from '@/app/ui/data/data3';
 
export default function BlogLayout4() {
  const [isVisible, setIsVisible] = useState(false);

  // Check the scroll position and add the animation
  const handleScroll = () => {
    const element = document.getElementById('blogLayout');
    if (element) {
      const rect = element.getBoundingClientRect();

      // Trigger when the element is in view
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // If it's in the viewport
      } else {
        setIsVisible(false); // If it's out of the viewport
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Main container */}
      <div className="h-16"></div> {/* Space for fixed navbar */}

      {/* Add animations when the component is visible */}
      <div
        id="blogLayout"
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}
      >
        {/* Left large card */}
        <div className="md:col-span-2">
          <div className="relative">
            {/* image */}
            <Link href={`/blo/detail1/${mainCardData2.slug}`}>
            <Image
                src={mainCardData2.imageSrc}
                alt={mainCardData2.title}
                width={400}
                height={200}
                className="w-full h-auto rounded cursor-pointer"
              />
            </Link>
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded">
              Blog
            </span>
          </div>

          {/* Title and Description */}
          <h2 className={`${playfair_Display.className} mt-4 text-2xl font-semibold`}>
            <Link href={`/blo/detail1/${mainCardData2.slug}`} className="cursor-pointer">
              {mainCardData2.title}
            </Link>
          </h2>
          <p className={`${open_sans.className} mt-2 text-gray-600`}>
            <Link href={`/blo/detail1/${mainCardData2.slug}`} className="cursor-pointer">
              {mainCardData2.description}
            </Link>
          </p>

          {/* Article Info */}
          <div className="mt-4 flex items-center gap-4">
            <span className={`${open_sans.className} text-sm text-gray-500`}>
              {mainCardData2.articleCount}
            </span>
            <button className="px-3 py-1 border border-gray-300 text-sm rounded">
              {mainCardData2.category}
            </button>
          </div>
        </div>

        {/* Right smaller cards */}
        <div className="space-y-8">
          {rightCardsData3.map((card, index) => (
            <div
              key={card.slug}
              className={`relative ${isVisible ? `animate__animated animate__zoomIn animate__delay-${index + 1}s` : ''}`}
            >
              <video
                    src={card.videoSrc}
                              controls
                    className="w-full h-auto rounded cursor-pointer"
                      >
                      Your browser does not support the video tag.
              </video>
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded">
                Blog
              </span>
              <h3 className={`${playfair_Display.className} mt-4 text-lg font-semibold`}>
                <Link href={`/blo/detail2/${card.slug}`} className="cursor-pointer">
                  {card.title}
                </Link>
              </h3>
              <div className="mt-2 flex items-center gap-4">
                <span className="text-sm text-gray-500">{card.articleCount}</span>
                <button className={`${open_sans.className} px-3 py-1 border border-gray-300 text-sm rounded`}>
                  {card.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

