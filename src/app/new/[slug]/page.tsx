import { Metadata } from "next";
import { newsData } from "@/app/ui/data/articles";
import { roboto, merriweather } from "@/app/ui/fonts/fonts";

async function getNewsData(slug: string) {
  // Simulating fetching data from a data source
  const newsItem = newsData.find((item) => item.slug.trim() === slug);
  if (!newsItem) {
    throw new Error("News not found");
  }
  return newsItem;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Ensure params are awaited before using
  const { slug } = await params;  // Await the params object
  const newsItem = await getNewsData(slug);

  return {
    title: newsItem.title,
    description: newsItem.description || "No description available",
    openGraph: {
      title: newsItem.title,
      description: newsItem.description || "No description available",
    },
  };
}

interface NewsDetailsProps {
  params: { slug: string };
}

export default async function NewsDetails({ params }: NewsDetailsProps) {
  try {
    // Ensure params are awaited before using
    const { slug } = await params;  // Await the params object
    const newsItem = await getNewsData(slug);

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Title with Merriweather font */}
        <h1 className={`${merriweather.className} text-4xl font-serif font-bold text-gray-800 mb-4`}>
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

        {/* Full text with Roboto font */}
        <div className="mt-6 flex flex-col gap-5 ">
          {[
            newsItem.Text1,
            newsItem.Text2,
            newsItem.Text3,
            newsItem.Text4,
            newsItem.Text5,
            newsItem.Text6,
            newsItem.Observation,
            newsItem.Observation1,
            newsItem.Observation2,
            newsItem.Text7,
            newsItem.Text8,
            newsItem.Text9,
            newsItem.Text10,
            newsItem.Text11,
            newsItem.Text12,
            newsItem.Text13,
            newsItem.Text14,
            newsItem.Text15,
            newsItem.Text16,
            newsItem.Text17,
            newsItem.Text18,
            newsItem.Text19,
            newsItem.Text20,
          ].map(
            (text, index) =>
              text && (
                <p key={index} className={`${roboto.className} text-lg text-gray-950`}>
                  {text}
                </p>
              )
          )}

          {/* Observations */}
          {/* <div>
            {[newsItem.Observation, newsItem.Observation1, newsItem.Observation2].map(
              (obs, index) =>
                obs && (
                  <p key={index} className={`${roboto.className} text-lg text-gray-950`}>
                    {obs}
                  </p>
                )
            )}
          </div> */}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);

    return <p className="text-center text-red-500">An error occurred.</p>;
  }
}
