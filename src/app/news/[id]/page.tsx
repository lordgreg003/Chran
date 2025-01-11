"use client";
import { newsItems1 } from '@/app/ui/data/istdata';
import { useParams } from "next/navigation";
import Footer from "@/app/ui/components/layoutComponents/Footer";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";


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
                <h1 className={`${open_sans.className}`}>
                    {newsItem.title}
                </h1>
                {/* Description - Always Rendered */}
                <p className={`${playfair_Display.className}`}>{newsItem.description}</p>
                <div className={`${open_sans.className} items-center gap-2 text-sm text-gray-500 mb-4`}>
                    <p className="font-medium">{newsItem.author}</p>
                    <p>{newsItem.date}</p>
                </div>
            </div>

             <Footer />
        </div>
    );
};

export default NewsDetail;
