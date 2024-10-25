"use client";
import React from "react";

const SafeWater: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="safe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content over the video */}
      <div className="relative z-10 h-[5rem]"></div>
      <div className="relative z-10 flex bg-opacity-50 max-w-md h-[30rem] items-center justify-center">
        <div className="text-white flex flex-col justify-center max-w-lg w-[95%] h-[80%] text-left space-y-10 ">
          <h1 className="text-3xl md:text-5xl leading-[1.5em] font-semibold">
            Safe water protects and saves lives
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Water.org has empowered more than 70 million people with access to
            safe water or sanitation through affordable financing.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg md:text-xl rounded-lg hover:bg-blue-700 transition-all duration-300">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
};

export default SafeWater;
