"use client";
import { newsItems1 } from '@/app/ui/data/istdata';
import { useParams } from "next/navigation";
import Footer from "@/app/ui/components/layoutComponents/Footer";


const NewsDetail: React.FC = () => {
    const params = useParams(); // Access route parameters
    const id = typeof params?.id === "string" ? params.id : "";

    // Find the news item by ID
    const newsItem = newsItems1.find((item) => item.id === id);

    if (!newsItem) {
        return <p>News item not found!</p>;
    }

    return (
        <div className="container mx-auto px-4 pt-8 lg:pt-16">
            {/* News Item Details */}
            <div className="pb-6 border-b">
                <h1 className="text-4xl font-semibold text-gray-900 leading-tight mb-4">
                    {newsItem.title}
                </h1>
                {/* Description - Always Rendered */}
                <p className="text-gray-600 text-lg mb-4">{newsItem.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <p className="font-medium">{newsItem.author}</p>
                    <p>{newsItem.date}</p>
                </div>
            </div>

             <Footer />
        </div>
    );
};

export default NewsDetail;
