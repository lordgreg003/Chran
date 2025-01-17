import { Metadata } from "next";
import Image from "next/image";
import { data, mainCardData2 } from "@/app/ui/data/data3";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";

// Simulate fetching data from mainCardData2
async function getData(slug: string): Promise<data | undefined> {
    return new Promise((resolve, reject) => {
        if (mainCardData2.slug === slug) {
          resolve(mainCardData2);
        } else {
          reject(new Error("Card not found"));
        }
      });
}

// Update `generateMetadata` to await params
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params; // Await the params
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
    const cardData: data | undefined = await getData(slug);

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
       <div className="md:flex md:flex-row gap-2"> <div className="flex flex-col   gap-12 md:w-[79%]">
        <div className="mt-6">
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
                cardData.description13,
                cardData.description14,
                cardData.description15,
                cardData.description16,
                cardData.description17,
                cardData.description18,
                cardData.description19,
                cardData.description20,
                cardData.number,
                cardData.createdAt,
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
        <div className=" md:w-[20%]"> 
        <div className="mt-6">
           <Image
                        src={cardData.imageSrc1}
                        alt={cardData.title}
                        height={500}
                        width={500}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                      />
        </div>
        <div className="mt-6">
           <Image
                        src={cardData.imageSrc2}
                        alt={cardData.title}
                        height={500}
                        width={500}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                      />
        </div>
        <div className="mt-6">
           <Image
                        src={cardData.imageSrc3}
                        alt={cardData.title}
                        height={500}
                        width={500}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                      />
        </div>
        <div className="mt-6">
           <Image
                        src={cardData.imageSrc4}
                        alt={cardData.title}
                        height={500}
                        width={500}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                      />
        </div>
        <div className="mt-6">
           <Image
                        src={cardData.imageSrc5}
                        alt={cardData.title}
                        height={500}
                        width={500}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                      />
        </div>
        <div className="mt-6">
           <Image
                        src={cardData.imageSrc6}
                        alt={cardData.title}
                        height={500}
                        width={500}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                      />
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

