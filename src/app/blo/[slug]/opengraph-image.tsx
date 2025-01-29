/* eslint-disable @next/next/no-img-element */
import { rightCardsData } from "@/app/ui/data/istdata";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Explorer | Blog";
export const contentType = "image/jpg";

export default async function Image({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const blogData = await rightCardsData.find((card) => card.slug === slug);

  console.log("blogData", blogData);

  // Default image and fallback values
  const defaultImage =
    "https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734972902/chran6_i6xydz.jpg";
  const defaultTitle = "Celebrate the Year-End with Exciting Activities";
  const defaultCategory = "Join us to mark the end of the year with fun-filled activities, meaningful reflections, and community celebrations. ";

  // Return the image response
  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1"
            src={
              blogData?.imageSrc
                ? `${blogData.imageSrc}&w=1200&h=630&auto=format&q=75`
                : `${defaultImage}`
            }
            alt={blogData?.title || defaultTitle}
          />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50 px-6">
          {/* Title */}
          <div tw="text-5xl font-bold">
            {blogData?.title || defaultTitle}
          </div>
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-xl text-neutral-200">
            <div
              tw={`font-medium ${
                blogData?.category === "Cities"
                  ? "text-emerald-600"
                  : "text-indigo-600"
              }`}
            >
              {blogData?.category || defaultCategory}
            </div>
            {blogData?.articleCount && (
              <>
                <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
                <div>{blogData.articleCount}</div>
              </>
            )}
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
          </div>
        </div>
      </div>
    ),
    size
  );
}