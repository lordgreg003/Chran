import React from "react";
import Image from "next/image";

const NewsComponent1: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-8 lg:pt-16">
      {/* Main Feature Section */}
      <div className="pb-6 border-b">
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight mb-4">
          Security leaders top 10 takeaways for 2024
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          CISOs share insights on lessons they have learned in 2024 about AI
          coding assistants, transparency with customers, deepfakes, third-party
          threats and more.
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <p className="font-medium">By Rosalyn Page</p>
          <p>16 Dec 2024 • 11 mins</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-gray-200 text-sm rounded-md">
            CSO and CISO
          </span>
          <span className="px-3 py-1 bg-gray-200 text-sm rounded-md">
            IT Leadership
          </span>
        </div>
      </div>

      {/* Content Under Feature */}
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <p className="text-sm text-red-500 italic mb-2">Feature</p>
          <div className="relative w-full h-64 lg:h-96 mb-4">
            <Image
              src="https://res.cloudinary.com/dg8cmo2gb/image/upload/v1734378400/chran3_vgguw5.jpg" // Replace with the actual image
              alt="Feature Image"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-900">
            How to turn around a toxic cybersecurity culture
          </h2>
        </div>

        {/* Right Section */}
        <div>
          {/* News Item 1 */}
          <div className="border-b pb-4 mb-4">
            <p className="text-red-500 text-sm font-semibold mb-1">News</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Security researchers find deep flaws in CVSS vulnerability scoring
              system
            </h3>
            <p className="text-gray-500 text-xs">
              By John Leyden • 12 Dec 2024 • 3 mins
            </p>
          </div>

          {/* Sponsored Content */}
          <div className="border-b pb-4 mb-4">
            <p className="text-red-500 italic text-sm mb-1">Sponsored Content</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              To make the most of Cisco HyperShield, you need to upskill your IT
              team.
            </h3>
            <p className="text-gray-500 text-xs">By Cyber NewsWire</p>
          </div>

          {/* News Item 2 */}
          <div>
            <p className="text-red-500 text-sm font-semibold mb-1">
              News analysis
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Salt Typhoon poses a serious supply chain risk to most
              organizations
            </h3>
            <p className="text-gray-500 text-xs">
              By Cynthia Brumfield • 11 Dec 2024 • 12 mins
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent1;
