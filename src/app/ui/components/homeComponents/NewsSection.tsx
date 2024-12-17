import React from "react";

const NewsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-4xl font-serif font-bold text-center mb-4">
        More security news
      </h1>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-6" />

      {/* First News Item */}
      <div className="mb-8">
        <p className="text-sm italic text-red-500 mb-1">News</p>
        <a
          href="#"
          className="text-2xl font-semibold text-gray-800 hover:underline"
        >
          Amazon refuses Microsoft 365 deployment because of lax cybersecurity
        </a>
        <p className="text-gray-600 mt-1">
          Security executives applaud Amazon for publicly shaming Microsoft
          security, although some suspect it is a thinly veiled AWS sales pitch.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
          <span>By Evan Schuman</span>
          <span>16 Dec 2024 • 5 mins</span>
          <div className="flex gap-2">
            <span className="border border-gray-400 px-2 py-1 rounded text-gray-700">
              Access Control
            </span>
            <span className="border border-gray-400 px-2 py-1 rounded text-gray-700">
              Application Security
            </span>
            <span className="border border-gray-400 px-2 py-1 rounded text-gray-700">
              Cloud Security
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-6" />

      {/* Second News Item */}
      <div>
        <p className="text-sm italic text-red-500 mb-1">News</p>
        <a
          href="#"
          className="text-2xl font-semibold text-gray-800 hover:underline"
        >
          Rhode Island suffers major cyberattack, exposing personal data of
          thousands
        </a>
        <p className="text-gray-600 mt-1">
          With government systems targeted in the state, Deloitte, law
          enforcement, and IT experts are racing to contain the breach.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
          <span>By Gyana Swain</span>
          <span>16 Dec 2024 • 5 mins</span>
          <div className="flex gap-2">
            <span className="border border-gray-400 px-2 py-1 rounded text-gray-700">
              Cyberattacks
            </span>
            <span className="border border-gray-400 px-2 py-1 rounded text-gray-700">
              Malware
            </span>
            <span className="border border-gray-400 px-2 py-1 rounded text-gray-700">
              Security
            </span>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 mb-6" />
            {/* 3rd News Item */}
            <div className="mb-8">
        <p className="text-sm italic text-red-500 mb-1">News</p>
        <a
          href="#"
          className="text-2xl font-semibold text-gray-800 hover:underline"
        >
          Amazon refuses Microsoft 365 deployment because of lax cybersecurity
        </a>
        <p className="text-gray-600 mt-1">
          Security executives applaud Amazon for publicly shaming Microsoft
          security, although some suspect it is a thinly veiled AWS sales pitch.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
          <span>By Evan Schuman</span>
          <span>16 Dec 2024 • 5 mins</span>
          <div className="flex gap-2">
            <span className="border border-gray-400 px-2 py-1 rounded text-gray-700">
              Access Control
            </span>
            <span className="border border-gray-400 px-2 py-1 rounded text-gray-700">
              Application Security
            </span>
            <span className="border border-gray-400 px-2 py-1 rounded text-gray-700">
              Cloud Security
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-6" />
    </div>
  );
};

export default NewsSection;
