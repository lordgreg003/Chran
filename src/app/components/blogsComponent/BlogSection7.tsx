'use client';
import { useEffect, useState } from 'react';
 import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { open_sans, playfair_Display } from '@/app/ui/fonts/fonts';
import { mainCardData5, rightCardsData5 } from '@/app/ui/data/data4';
 
export default function BlogLayout7() {
  const [isVisible, setIsVisible] = useState(false);

   
  const handleScroll = () => {
    const element = document.getElementById('blogLayout');
    if (element) {
      const rect = element.getBoundingClientRect();

      // Trigger when the element is in view
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); 
      } else {
        setIsVisible(false);  
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

      {/* Add animations when the component is visiblrightCardsData5e */}
      <div
        id="blogLayout"
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}
      >
        {/* Left large card */}
        <div className="md:col-span-2">
          <div className="relative">
            {/* image */}
            <Link href={`/blo/detail6/${mainCardData5.slug}`}>
            <Image
                src={mainCardData5.imageSrc}
                alt={mainCardData5.title}
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
            <Link href={`/blo/detail6/${mainCardData5.slug}`} className="cursor-pointer">
              {mainCardData5.title}
            </Link>
          </h2>
          <p className={`${open_sans.className} mt-2 text-gray-600`}>
            <Link href={`/blo/detail6/${mainCardData5.slug}`} className="cursor-pointer">
              {mainCardData5.description}
            </Link>
          </p>

          {/* Article Info */}
          <div className="mt-4 flex items-center gap-4">
            <span className={`${open_sans.className} text-sm text-gray-500`}>
              {mainCardData5.articleCount}
            </span>
            <button className="px-3 py-1 border border-gray-300 text-sm rounded">
              {mainCardData5.category}
            </button>
          </div>
        </div>

        {/* Right smaller cards */}
        <div className="space-y-8">
          {rightCardsData5.map((card) => (
            <div key={card.slug} className="relative">
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={400}
                height={200}
                className="w-full h-auto rounded cursor-pointer"
              />
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded">
                Blog
              </span>
              <h3 className={`${playfair_Display.className} mt-4 text-lg font-semibold`}>
                <Link href={`/blo/detail7/${card.slug}`} className="cursor-pointer">
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

