'use client';
  import Link from 'next/link';  
 import Image from 'next/image'; 
import { mainCardData7 } from '@/app/ui/data/istdata';
import { open_sans, playfair_Display } from '@/app/ui/fonts/fonts';
import { rightCardsData8 } from '@/app/ui/data/data4';
 
export default function BlogLayout9() {
 

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Main container */}
      <div className="h-16"></div> {/* Space for fixed navbar */}

      {/* Add animations when the component is visible */}
      <div
        id="blogLayout"
        className={`grid grid-cols-1 md:grid-cols-3 gap-8  `}
      >
        {/* Left large card */}
        <div className="md:col-span-2">
          <div className="relative">
            {/* Video */}
            <Link href={`/blogs/detail1/${mainCardData7.slug}`}>
              <video
                src={mainCardData7.videoSrc}
                controls
                className="w-full h-auto rounded cursor-pointer"
              >
                Your browser does not support the video tag.
              </video>
            </Link>
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded">
              Blog
            </span>
          </div>

          {/* Title and Description */}
          <h2 className={`${playfair_Display.className} mt-4 text-2xl font-semibold`}>
            <Link href={`/blogs/detail1/${mainCardData7.slug}`} className="cursor-pointer">
              {mainCardData7.title}
            </Link>
          </h2>
          <p className={`${open_sans.className} mt-2 text-gray-600`}>
            <Link href={`/blogs/detail1/${mainCardData7.slug}`} className="cursor-pointer">
              {mainCardData7.description}
            </Link>
          </p>

          {/* Article Info */}
          <div className="mt-4 flex items-center gap-4">
            <span className={`${open_sans.className} text-sm text-gray-500`}>
              {mainCardData7.articleCount}
            </span>
            <button className="px-3 py-1 border border-gray-300 text-sm rounded">
              {mainCardData7.category}
            </button>
          </div>
        </div>

        {/* Right smaller cards */}
        <div className="space-y-8">
          {rightCardsData8.map((card,) => (
            <div
              key={card.slug}
              className={`relative `}
            >
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
                <Link href={`/blo/details1/${card.slug}`} className="cursor-pointer">
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
