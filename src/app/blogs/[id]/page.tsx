'use client';
import { useRouter } from 'next/navigation'; // Import useRouter hook for navigation
import Footer from '@/app/ui/components/layoutComponents/Footer';
import { useParams } from 'next/navigation';
import { mainCardData } from '@/app/ui/data/istdata';

export default function BlogDetail() {
  const params = useParams(); // Access route parameters
  const id = typeof params?.id === 'string' ? params.id : '';
  const router = useRouter();  

  console.log('Blog ID from URL:', id);  

  // Now search for the blog by matching the id in the main object (not rightCards)
  const blog = mainCardData.id === id ? mainCardData : null;

  if (!blog) {
    console.log('Blog not found with id:', id); // Log if no blog is found
    return <p>Blog not found!</p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}  
        className=" text-black px-4 py-2 rounded-md mb-6"
      >
        Back
      </button>

      <div>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold">{blog.title}</h1>
        
        {/* Descriptions with responsive text */}
        <div className="md:max-w-md">
          <p className="mt-4 text-gray-600 text-base md:text-lg">{blog.description}</p>
          <p className="mt-4 text-gray-600 text-base md:text-lg">{blog.description1}</p>
          <p className="mt-4 text-gray-600 text-base md:text-lg">{blog.description2}</p>
          <p className="mt-4 text-gray-600 text-base md:text-lg">{blog.description3}</p>
        </div>

        {/* Video Embed */}
        <div className="mt-6">
          <video controls className="w-full max-w-[50rem] rounded-lg">
            <source src={blog.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Article Information */}
        <div className="mt-4 mb-4  flex items-center gap-4">
          <span className="text-sm text-gray-500">{blog.articleCount}</span>
          <button className="px-3 py-1 border border-gray-300 text-sm rounded">
            {blog.category}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
