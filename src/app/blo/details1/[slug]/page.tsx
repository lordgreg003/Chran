import { Metadata } from "next";
import { BlogCard } from "@/app/ui/data/istdata";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
import Image from "next/image";
import {  rightCardsData8 } from "@/app/ui/data/data4";

// Simulate fetching data from rightCardsData5
async function getData(slug: string): Promise<BlogCard | undefined> {
  return new Promise((resolve, reject) => {
    const cardData = rightCardsData8.find((card) => card.slug === slug);

    if (cardData) {
      resolve(cardData);
    } else {
      reject(new Error("Blog not found"));
    }
  });
}

// Update `generateMetadata` to await params
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const cardData = await getData(resolvedParams.slug);

  if (!cardData) {
    return {
      title: "Blog not found",
      description: "Sorry, the blog you are looking for does not exist.",
    };
  }

  return {
    title: cardData.title,
    description: cardData.description || "No description available",
    openGraph: {
      title: cardData.title,
      description: cardData.description || "No description available",
      images: [
        {
          url: cardData.imageSrc || "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1738702460/WhatsApp_Image_2025-02-04_at_9.35.42_PM_xvbmxd.jpg",
          width: 800,
          height: 600,
          alt: cardData.title,
        },
      ],
    },
  };
}

interface CardDetailsProps {
  params: Promise<{ slug: string }>;
}

// Update the main component to handle async params
export default async function CardDetails({ params }: CardDetailsProps) {
  const resolvedParams = await params; // Await the params
  const { slug } = resolvedParams;

  try {
    const cardData: BlogCard | undefined = await getData(slug);

    if (!cardData) {
      throw new Error("Blog not found");
    }

    return (
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Title */}
        <h1 className={`${playfair_Display.className} text-3xl md:text-5xl font-bold mb-6 text-center md:text-left`}>
          {cardData.title}
        </h1>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column (Image and Descriptions) */}
          <div className="flex-1">
            {/* Image */}
            <div className="mb-8">
              <Image
                src={cardData.imageSrc}
                alt={cardData.title}
                width={800}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Article Count and Category */}
            <div className="mb-8">
              <span className={`${open_sans.className} text-sm md:text-base text-gray-500`}>
                Articles: {cardData.articleCount}
              </span>
              <span className="ml-4 px-3 py-1 bg-gray-200 text-gray-700 text-sm md:text-base rounded">
                {cardData.category}
              </span>
            </div>

            {/* Descriptions */}
            <div className="space-y-4">
              {[
                cardData.description,
                cardData.description1,
                cardData.description2,
                cardData.description3,
                cardData.description4,
                cardData.description5,
                cardData.description6,
                cardData.description7,
                cardData.description8,
                cardData.description9,
                cardData.description10,
                cardData.description11,
                cardData.description12,
                cardData.description13,
                cardData.description14,
                cardData.description15,
                cardData.description16,
                cardData.description17,
                cardData.description18,
                cardData.description19,
                cardData.description20,
                cardData.description21,
                cardData.description22,
                cardData.description23,
                cardData.description24,
                cardData.description25,
                cardData.description26,
              ].map((desc, index) => (
                <p
                  key={index}
                  className={`${open_sans.className} text-gray-600 text-base md:text-lg leading-relaxed`}
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column (Optional Second Image) */}
          {cardData.imageSrc1 && (
            <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-4">
              {[cardData.imageSrc1, cardData.imageSrc2, cardData.imageSrc3, cardData.imageSrc4].map((src, index) => (
                <div key={index} className="mt-6">
                  <Image
                    src={src || '/default-image.png'}
                    alt={cardData.title}
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <p className="text-center text-red-500">An error occurred.</p>;
  }
}
