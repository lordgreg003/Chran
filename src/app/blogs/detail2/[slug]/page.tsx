import { Metadata } from "next";
import { MainCard, mainCardData8 } from "@/app/ui/data/istdata";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";

 
async function getData(slug: string): Promise<MainCard | undefined> {
    return new Promise((resolve, reject) => {
        if (mainCardData8.slug === slug) {
          resolve(mainCardData8);
        } else {
          reject(new Error("Card not found"));
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
          title: cardData?.title,
          description: cardData?.description || "No description available",
          images: [
            {
              url: cardData?.imageSrc || "",
              width: 800,
              height: 600,
              alt: cardData.title,
            },
          ],
        },
      }
    : {
        title: "Card not found",
        description: "Sorry, the card you are looking for does not exist.",
      };
}

interface CardDetailsProps {
  params: Promise<{ slug: string }>; // Treat params as a Promise
}

// Update the main component to handle async params
export default async function CardDetails({ params }: CardDetailsProps) {
  const resolvedParams = await params; // Await the params
  const { slug } = resolvedParams;

  try {
    const cardData: MainCard | undefined = await getData(slug);

    if (!cardData) {
      throw new Error("Card not found");
    }

    return (
      <div className="max-w-screen-xl mx-auto overflow-x-hidden py-8 px-4">
        <h1
          className={`${playfair_Display.className} text-3xl md:text-5xl font-bold mb-6 text-left`}
        >
          {cardData.title}
        </h1>
        <div className="flex flex-col  gap-12">
        <div className="mt-6">
          <video controls className="w-full max-w-[50rem] rounded-lg">
            <source src={cardData.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
          <div className="w-full ">
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
                cardData.description10,
                cardData.description11,
                cardData.description12,
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

