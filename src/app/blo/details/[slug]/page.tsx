import { BlogCard, rightCardsData2 } from "@/app/ui/data/istdata";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
import Image from "next/image";

// Simulate fetching data (replace with your actual data fetching)
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
  params: { slug: string };
}

export default async function CardDetails({ params }: CardDetailsProps) {
  const { slug } = params;

  try {
    const cardData = await getData(slug);

    if (!cardData) {
      return (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-gray-700">Blog    Post Not Found</h2>
          <p className="text-gray-500">The blog post with slug &quot;{slug}&quot; could not be found.</p>
        </div>
      );
    }

    return (
      <div className="max-w-screen-lg mx-auto overflow-x-hidden py-8 px-4">
        <h1 className={`${playfair_Display.className} text-2xl md:text-5xl font-bold mb-6 text-left`}>
          {cardData.title}
        </h1>

        <div className="flex flex-col gap-8">
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

          <div className="w-full ">
            <div className="mb-4">
              <span className={`${open_sans.className} text-sm md:text-base text-gray-500`}>
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
                desc ? (
                  <p key={index} className={`${open_sans.className} text-gray-600 text-lg md:text-xl leading-relaxed`}>
                    {desc}
                  </p>
                ) : null
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-500">Error Loading Blog Post</h2>
        <p className="text-gray-500">An error occurred while loading the blog post. Please try again later.</p>
        {process.env.NODE_ENV === 'development' && <p className="text-red-500">{error instanceof Error ? error.message : "An unexpected error occurred"}</p>}
      </div>
    );
  }
}