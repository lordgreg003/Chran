"use client";
import { featureData1 } from "@/app/ui/data/istdata";
import { useParams } from "next/navigation";

const FeatureDetail: React.FC = () => {
    const params = useParams(); // Access route parameters
    const id = typeof params?.id === "string" ? params.id : "";

    // Decode the URL parameter to match the feature data ID
    const decodedId = decodeURIComponent(id);

    // Log to check the decoded ID
    console.log("Decoded URL Param ID:", decodedId);
    console.log("Feature Data ID:", featureData1.id);

    // Mock fetching by ID
    const feature = decodedId === featureData1.id ? featureData1 : null;

    // Log if feature is found or not
    if (!feature) {
        console.log("Feature not found, returning message.");
        return <p>Feature not found</p>;
    }

    // Log the feature details once it is found
    console.log("Feature found:", feature);

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
