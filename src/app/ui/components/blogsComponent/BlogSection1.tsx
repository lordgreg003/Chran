'use client';
import { open_sans,playfair_Display } from "../../fonts/fonts";
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation

// Define types for the data
interface BlogCard {
  id: string;
  imageSrc: string;
  title: string;
  articleCount?: string;
  category?: string;
}

interface BlogData {
  id: string;  
  main: {
    videoSrc?: string;
    title?: string;
    description?: string;
    description1?: string;
    description2?: string;
    description3?: string;
    articleCount?: string;
    category?: string;
  };
  rightCards: BlogCard[];
}

// Define the blog data with an id for the entire BlogData
export const blogData: BlogData = {
  id: 'blog-001',
  main: {
    videoSrc: "https://res.cloudinary.com/dg8cmo2gb/video/upload/v1734685554/thatvideo_jbpduz.mp4",
    title: "18 MONTHS: GOV UMO ENO HAS DONE WELL - CHRAN ",
    description: "The Center for Human Rights and Accountability Network (CHRAN) has, on Tuesday, 17th December 2024, assessed the performance of Akwa Ibom State Governor, Pastor Umo Eno, PhD, saying the Governor has done well in his 18 months in office. ",
    description1: "This assertion was done by the Center's Director, Otuekong Franklyn Isong, while presenting the CHRAN's scorecard of the governor in a television programme on ADBN TV, in Uyo,",
    description2: "#ADBNTV",
    description3: "#CHRAN_ADVOCACY ",
    articleCount: "3 articles",
    category: "Security",
  },
  rightCards: [
    {
      id: 'CSO-Security-Council',
      imageSrc: "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734885978/missionconvert_bhdvew.jpg",
      title: "CSO Security Council",
      articleCount: "10 articles",
      category: "Security",
    },
    {
      id: 'Thoughts-from-the-Beltway',
      imageSrc: "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734885978/missionconvert_bhdvew.jpg",
      title: "Thoughts from the Beltway",
      articleCount: "8 articles",
      category: "Security",
    },
  ],
};

export default function BlogLayout() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Main container */}
      <div className="h-16"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left large card */}
        <div className="md:col-span-2">
          <div className="relative">
            <video
              src={blogData.main.videoSrc}
              controls
              className="w-full h-auto rounded"
            >
              Your browser does not support the video tag.
            </video>
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded">
              Blog
            </span>
          </div>
          <h2 className={`${playfair_Display.className} mt-4 text-2xl font-semibold`}>
            <Link href={`/blogs/${blogData.id}`}>{blogData.main.title}</Link>
          </h2>
          <p className={`${open_sans.className} mt-2 text-gray-600`}>
            <Link href={`/blogs/${blogData.id}`}>{blogData.main.description}</Link>
          </p>
          <div className="mt-4 flex items-center gap-4">
            <span className={`${open_sans.className} text-sm text-gray-500`}>{blogData.main.articleCount}</span>
            <button className="px-3 py-1 border border-gray-300 text-sm rounded">
              {blogData.main.category}
            </button>
          </div>
        </div>

        {/* Right smaller cards */}
        <div className="space-y-8">
          {blogData.rightCards.map((card) => (
            <div key={card.id}>
              <div className="relative">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={400}
                  height={200}
                  className="w-full h-auto rounded"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded">
                  Blog
                </span>
              </div>
              <h3 className={`${playfair_Display.className} mt-4 text-lg font-semibold`}>
                <Link href={`/blogs/${card.id}`}>{card.title}</Link>
              </h3>
              <div className="mt-2 flex items-center gap-4">
                <span className="text-sm text-gray-500">{card.articleCount}</span>
                <button className={`${open_sans.className}px-3 py-1 border border-gray-300 text-sm rounded`}>
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
