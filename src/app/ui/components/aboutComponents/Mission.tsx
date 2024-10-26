"use client";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="h-screen">
      <div className="h-10 w-full"></div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 py-16 lg:py-24 bg-white">
        <div className="lg:w-1/2 ml-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">CHRAN</h1>
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-8">
            Empowering democracy through advocacy, education, and civic
            engagement for a better Nigeria.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-8">
            <FaFacebook className="text-gray-700 text-2xl cursor-pointer hover:text-gray-900" />
            <FaTwitter className="text-gray-700 text-2xl cursor-pointer hover:text-gray-900" />
            <FaLinkedin className="text-gray-700 text-2xl cursor-pointer hover:text-gray-900" />
            <FaInstagram className="text-gray-700 text-2xl cursor-pointer hover:text-gray-900" />
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <Image
            src="/mission.jpg" // Replace with actual image path
            alt="Two women working together"
            width={500}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
