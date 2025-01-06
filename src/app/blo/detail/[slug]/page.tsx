import { Metadata } from "next";
import { BlogCard, rightCardsData1 } from "@/app/ui/data/istdata";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
import Image from "next/image";

// Simulate fetching data from rightCardsData2
async function getData(slug: string): Promise<BlogCard | undefined> {
  return new Promise((resolve, reject) => {
    const cardData = rightCardsData1.find((card) => card.slug === slug);

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

  return cardData
    ? {
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
      }
    : {
        title: "Blog not found",
        description: "Sorry, the blog you are looking for does not exist.",
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
      <div className="max-w-screen-lg mx-auto overflow-x-hidden py-8 px-4">
        <h1
          className={`${playfair_Display.className} text-2xl md:text-5xl font-bold mb-6 text-left`}
        >
          {cardData.title}
        </h1>
        <div className="flex flex-col gap-8">
          <div className="w-full mb-6">
            <Image
              src={cardData.imageSrc}
              alt={cardData.title}
              height={500}
              width={500}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full">
            <div className="mb-4">
              <span
                className={`${open_sans.className} text-sm md:text-base text-gray-500`}
              >
                Articles: {cardData.articleCount}
              </span>
              <span className="ml-4 px-3 py-1 bg-gray-200 text-gray-700 text-sm md:text-base rounded">
                {cardData.category}
              </span>
            </div>
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
                <p
                  key={index}
                  className={`${open_sans.className} text-gray-600 text-lg md:text-xl leading-relaxed`}
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);

    return <p className="text-center text-red-500">An error occurred.</p>;
  }
}

