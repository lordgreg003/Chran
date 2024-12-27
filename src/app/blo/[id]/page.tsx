'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { open_sans, playfair_Display } from '@/app/ui/fonts/fonts';
import 'animate.css';
import { BlogCard, rightCardsData } from '@/app/ui/data/istdata';
import Footer from '@/app/ui/components/layoutComponents/Footer';

export default function BlogDetails() {
  const { id } = useParams(); // Get the id from URL
  const [blogData, setBlogData] = useState<BlogCard | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const selectedBlog = rightCardsData.find((card) => card.id === id);
      if (selectedBlog) {
        setBlogData(selectedBlog);
      }
    }
  }, [id]);

  if (!blogData) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">Blog Post Not Found</h2>
      </div>
    );
  }

  const nextImage = () => {
    setAnimationClass('animate__animated animate__slideOutLeft');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogData.images.length);
      setAnimationClass('animate__animated animate__slideInRight');
    }, 500);
  };

  const prevImage = () => {
    setAnimationClass('animate__animated animate__slideOutRight');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + blogData.images.length) % blogData.images.length);
      setAnimationClass('animate__animated animate__slideInLeft');
    }, 500);
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="text-black px-4 py-2 rounded-md mb-6"
      >
        Back
      </button>
      <div className="flex flex-col gap-8">
        <div className="relative">
          <Image
            src={blogData.images[currentIndex]}
            alt={blogData.title}
            width={800}
            height={400}
            className={`w-full h-auto rounded-lg ${animationClass}`}
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
          >
            Prev
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
          >
            Next
          </button>
        </div>

        <div>
          <h2 className={`${playfair_Display.className} text-3xl font-semibold`}>
            {blogData.title}
          </h2>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-sm text-gray-500">{blogData.articleCount}</span>
            <button className={`${open_sans.className} px-3 py-1 border border-gray-300 text-sm rounded`}>
              {blogData.category}
            </button>
          </div>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description1}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description2}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description3}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description4}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description5}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description6}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description7}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description8}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description9}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description10}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description11}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description12}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description13}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description14}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description15}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description16}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description17}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description18}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description19}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description20}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description21}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description22}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description23}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description24}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description25}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description26}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description27}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description28}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description29}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description30}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description31}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description32}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description33}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description34}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description35}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description36}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description37}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description38}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description39}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description40}
          </p>
          <p className={`${open_sans.className} mt-4 text-gray-600`}>
            {blogData.description41}
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
