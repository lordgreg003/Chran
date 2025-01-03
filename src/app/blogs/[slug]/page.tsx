'use client';
import { useRouter } from 'next/navigation'; // Import useRouter hook for navigation
import Footer from '@/app/ui/components/layoutComponents/Footer';
import { useParams } from 'next/navigation';
import { mainCardData } from '@/app/ui/data/istdata';
import { open_sans, playfair_Display } from '@/app/ui/fonts/fonts';
 

export default function BlogDetail() {
  const params = useParams(); // Access route parameters
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const router = useRouter();  

  console.log('Blog ID from URL:', slug);  

  // Now search for the blog by matching the id in the main object (not rightCards)
  const blog = mainCardData.slug === slug ? mainCardData : null;

  if (!blog) {
    console.log('Blog not found with id:', slug); // Log if no blog is found
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
        <h1 className={`${playfair_Display.className}`}>{blog.title}</h1>
        
        {/* Descriptions with responsive text */}
        <div className="md:max-w-md">
          <p className={`${open_sans.className}mt-4 text-gray-600 text-base md:text-lg`}>{blog.description}</p>
          <p className={`${open_sans.className}mt-4 text-gray-600 text-base md:text-lg`}>{blog.description1}</p>
          <p className={`${open_sans.className}mt-4 text-gray-600 text-base md:text-lg`}>{blog.description2}</p>
          <p className={`${open_sans.className}mt-4 text-gray-600 text-base md:text-lg`}>{blog.description3}</p>
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
