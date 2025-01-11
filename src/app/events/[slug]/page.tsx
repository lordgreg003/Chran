"use client";
import React from "react";
import Image from "next/image";
import { events } from "@/app/ui/data/2ndata";
import { useParams } from "next/navigation";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
 


const EventDetails: React.FC = () => {
    const params = useParams();
    const slug = typeof params?.slug === "string" ? params.slug.trim() : ""; 

  // Find the event by id
  const event = events.find((event) => event.slug === slug);

  if (!event) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Event Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className={`${playfair_Display.className}text-4xl font-bold text-center mb-6`}>{event.title}</h1>
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-full max-w-2xl aspect-[16/9]">
          <Image
            src={event.imageSrc}
            alt={event.altText}
            layout="fill"
            objectFit="cover"
            className="rounded"
            priority
          />
        </div>
        <div className={`${open_sans.className}text-lg text-gray-600`}>{event.details}</div>
 <p className={`${open_sans}text-gray-500 italic`}>{event.description1}</p>
 <p className={`${open_sans}text-gray-500 italic`}>{event.description2}</p>
 <p className={`${open_sans}text-gray-500 italic`}>{event.description3}</p>
 <div className={`${open_sans.className} text-gray-500 `}>{event.date}</div>
 {event.category && (
          <span className={`${open_sans.className} inline-block border border-gray-400 px-2 py-1 mt-2 rounded text-gray-700 text-sm`}>
            {event.category}
          </span>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
