"use client";
import { featureData } from "@/app/ui/data/articles";
import { useParams } from "next/navigation";
 
 
const FeatureDetail: React.FC = () => {
    const params = useParams(); // Access route parameters
    const id = typeof params?.id === "string" ? params.id : "";

  // Mock fetching by ID
  const feature = id === featureData.id ? featureData : null;



  if (!feature) return <p>Feature not found</p>;

  return (
    <div className="container mx-auto px-4 pt-8">
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">{feature.title}</h1>
      <p className="text-gray-600 text-lg mb-4">{feature.description}</p>
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
