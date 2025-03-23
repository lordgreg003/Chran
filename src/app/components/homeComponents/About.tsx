"use client";
 import Link from "next/link";
import Image from "next/image";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:h-screen items-center justify-center gap-5 md:gap-0 bg-blue-500 dark:bg-[#2D2D2D] text-foreground dark:text-white">
      {/* Left Section (Text) */}
      <div className="md:w-1/2 w-full bg-blue-500 h-[99%] flex items-center justify-center dark:bg-[#2D2D2D] text-foreground dark:text-white">
        <div className="text-center w-[80%] h-[80%] p-5  md:text-left flex flex-col lg:gap-7">
          <h1
            className={`${playfair_Display.className} dark:text-white text-black text-4xl md:text-5xl font-bold mb-4`}
          >
            About CHRAN
          </h1>
          <p
            className={`${open_sans.className} dark:text-white  text-black text-lg md:text-xl mb-6`}
          >
            The Center for Human Rights and Accountability Network (CHRAN) is
            dedicated to championing the cause of democracy, human rights, and
            civil society in Nigeria. Our mission is to uphold accountability,
            transparency, and justice for all.
          </p>
          <Link href={'/aboutus'}><button className="px-6 py-3 border-2 border-white dark:text-white text-black rounded-full lg:w-[30%] hover:bg-white hover:text-blue-500 transition duration-300">
            Read More
          </button></Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 h-[99%] dark:bg-[#2D2D2D] text-foreground dark:text-white bg-blue-500 w-full flex items-center justify-center">
        <Image
          src="/aboutimage.png" // Replace with your image path
          alt="CHRAN Volunteers"
          loading="lazy"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default AboutPage;
