"use client";
import { featureData } from "@/app/ui/data/articles";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
import { useParams } from "next/navigation";
 
const FeatureDetail: React.FC = () => {
    const params = useParams(); // Access route parameters
    const slug = typeof params?.slug === "string" ? params.slug : "";

  // Mock fetching by ID
  const feature = slug === featureData.slug ? featureData : null;



  if (!feature) return <p>Feature not found</p>;

  return (
    <div className="container mx-auto px-4 pt-8">
      <h1 className={`${playfair_Display.className}`}>{feature.title}</h1>
      <p className={`${open_sans.className}`}>{feature.description}</p>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <p className="font-medium">{feature.author}</p>
        <p>{feature.date}</p>
      </div>
      <div className="flex gap-2 mb-4">
        {feature.categories.map((category, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 text-sm rounded-md"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="relative w-full h-64 lg:h-96 mb-4">
        <video
          src={feature.videoUrl}
          controls
          className="rounded-md w-full h-full object-cover"
        />
      </div>
    
    </div>
  );
};

export default FeatureDetail;
