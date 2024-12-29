/* eslint-disable @next/next/no-img-element */
import { rightCardsData } from "@/app/ui/data/istdata";
import { ImageResponse } from "next/og";  
  

export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Explorer | Blog";
export const contentType = "image/png";

export default async function og({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const blogData = await rightCardsData.find(card => card.slug === slug);

  console.log("blogdata", blogData);
  if (!blogData) {
    throw new Error('Blog not found');
  }

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1"
            src={blogData.images[0] + "&w=1200&h=630&auto=format&q=75"} 
            alt={blogData.title}
          />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50 px-6">
          {/* Title */}
          <div tw="text-5xl font-bold">{blogData.title}</div>
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-xl text-neutral-200">
            <div
              tw={`font-medium ${
                blogData.category === "Cities"
                  ? "text-emerald-600"
                  : "text-indigo-600"
              }`}
            >
              {blogData.category}
            </div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
            <div>{blogData.articleCount}</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
          </div>
        </div>
        hello
      </div>
    ),
    size
  );
}