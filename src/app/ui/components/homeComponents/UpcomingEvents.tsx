import React from "react";
import Image from "next/image";

const UpcomingEvents = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-4xl font-serif font-bold text-center mb-6">
        Upcoming Events
      </h1>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-8" />

      {/* Event 1 */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        {/* Date */}
        <div className="w-full md:w-1/5 text-2xl italic font-semibold text-gray-700">
          12/Mar
        </div>

        {/* Image */}
        <div className="w-full md:w-2/5 relative aspect-[16/9]">
          <Image
            src="https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734412953/chran4_coby7d.jpg"
            alt="FutureIT Los Angeles"
            layout="fill"
            objectFit="cover"
            className="rounded"
            priority
          />
        </div>

        {/* Event Details */}
        <div className="w-full md:w-2/5">
          <span className="text-sm italic text-red-500 mb-2 inline-block">
            In-person event
          </span>
          <a
            href="#"
            className="text-2xl font-semibold text-gray-800 hover:underline"
          >
            FutureIT Los Angeles
          </a>
          <p className="text-gray-500 mt-1">12 Mar 2025 • The Biltmore</p>
          <span className="inline-block border border-gray-400 px-2 py-1 mt-2 rounded text-gray-700 text-sm">
            Technology Industry
          </span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-8" />

      {/* Event 2 */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Date */}
        <div className="w-full md:w-1/5 text-2xl italic font-semibold text-gray-700">
          04/May-06/May
        </div>

        {/* Image */}
        <div className="w-full md:w-2/5 relative aspect-[16/9]">
          <Image
            src="https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734412962/chran5_dhjg9a.jpg"
            alt="Work+ Event"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>

        {/* Event Details */}
        <div className="w-full md:w-2/5">
          <span className="text-sm italic text-red-500 mb-2 inline-block">
            In-person event
          </span>
          <a
            href="#"
            className="text-2xl font-semibold text-gray-800 hover:underline"
          >
            Work+ – The New Future of Work: AI, Emerging Tech & Where IT Can Lead
          </a>
          <p className="text-gray-500 mt-1">
            04 May 2025 • Loews Vanderbilt Hotel Nashville
          </p>
        </div>
      </div>

      
      <hr className="border-t border-gray-300 mb-8" />


      {/* event3 */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Date */}
        <div className="w-full md:w-1/5 text-2xl italic font-semibold text-gray-700">
          04/May-06/May
        </div>

        {/* Image */}
        <div className="w-full md:w-2/5 relative aspect-[16/9]">
          <Image
            src="https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734412962/chran5_dhjg9a.jpg"
            alt="Work+ Event"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>

        {/* Event Details */}
        <div className="w-full md:w-2/5">
          <span className="text-sm italic text-red-500 mb-2 inline-block">
            In-person event
          </span>
          <a
            href="#"
            className="text-2xl font-semibold text-gray-800 hover:underline"
          >
            Work+ – The New Future of Work: AI, Emerging Tech & Where IT Can Lead
          </a>
          <p className="text-gray-500 mt-1">
            04 May 2025 • Loews Vanderbilt Hotel Nashville
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
