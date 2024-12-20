"use client";
import { newsData } from "@/app/ui/data/articles";
import { open_sans } from "@/app/ui/fonts/fonts";
import { useParams } from "next/navigation";

const NewsDetails: React.FC = () => {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id.trim() : ""; 
   
  const newsItem = newsData.find((item) => item.id.trim() === id);

  

  if (!newsItem) {
    return <p className="text-center text-gray-700">Article not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
        {newsItem.title}
      </h1>
      <p className="text-sm italic text-red-500 mb-4">{newsItem.type}</p>
      <p className="text-gray-600">{newsItem.description}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
        <span>By {newsItem.author}</span>
        <span>{newsItem.date}</span>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {newsItem.categories?.map((category, index) => (
          <span
            key={index}
            className="border border-gray-400 px-2 py-1 rounded text-gray-700"
          >
            {category}
          </span>
        ))}
      </div>
      
      {/* Display the full text */}
      <div className="mt-6 flex flex-col gap-5 md:max-w-3xl">
      <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
        {newsItem.title}
      </h1>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text1}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text2}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text3}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text4}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text5}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text6}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Observation}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Observation1}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Observation2}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text7}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text9}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text10}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text11}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text12}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text13}</p> 
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text14}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text15}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text16}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text17}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text18}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text19}</p>
        <p className={`${open_sans.className} text-lg text-gray-950`}>{newsItem.Text20}</p>
      </div>
    </div>
  );
};

export default NewsDetails;
