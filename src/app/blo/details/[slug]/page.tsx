/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogCard, rightCardsData2 } from "@/app/ui/data/istdata";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
import Image from "next/image";

// Simulate fetching data from rightCardsData2
async function getData(slug: string): Promise<BlogCard | undefined> {
  return new Promise((resolve, reject) => {
    const cardData = rightCardsData2.find((card) => card.slug === slug);

    if (cardData) {
      resolve(cardData);
    } else {
      reject(new Error("Blog not found"));
    }
  });
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const cardData = await getData(params.slug);

    if (cardData) {
      return {
        title: cardData.title,
        description: cardData.description || "No description available",
        openGraph: {
          title: cardData.title,
          description: cardData.description || "No description available",
          images: [
            {
              url: cardData.imageSrc,
              width: 800,
              height: 600,
              alt: cardData.title,
            },
          ],
        },
      };
    } else {
      return {
        title: "Blog not found",
        description: "Sorry, the blog you are looking for does not exist.",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      title: "Error fetching data",
      description: "An error occurred while fetching the blog data.",
    };
  }
}

interface CardDetailsProps {
  params: Promise<{ slug: string }>; // Fix: Use Promise type for params
}

export default async function CardDetails({ params }: CardDetailsProps) {
  try {
    const resolvedParams = await params; // Await the params to resolve
    const { slug } = resolvedParams;

    const cardData: any = await getData(slug);

    return (
      <div className="max-w-screen-lg mx-auto overflow-x-hidden py-8 px-4">
        {/* Header */}
        <h1 className={`${playfair_Display.className} text-2xl md:text-5xl font-bold mb-6 text-left`}>
          {cardData.title}
        </h1>

        {/* Content Layout (Flexbox for Image and Text) */}
        <div className="flex flex-col gap-8">
          {/* Image */}
          <div className="w-full mb-6 ">
            <Image
              src={cardData.imageSrc}
              alt={cardData.title}
              height={500}
              width={500}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full ">
            {/* Article Info */}
            <div className="mb-4">
              <span className={`${open_sans.className} text-sm md:text-base text-gray-500`}>
                Articles: {cardData.articleCount}
              </span>
              <span className="ml-4 px-3 py-1 bg-gray-200 text-gray-700 text-sm md:text-base rounded">
                {cardData.category}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-5">
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
              ].map((desc, index) => (
                <p key={index} className={`${open_sans.className} text-gray-600 text-lg md:text-xl leading-relaxed`}>
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    console.error(errorMessage);

    return <p className="text-center text-red-500">{errorMessage}</p>;
  }
}
