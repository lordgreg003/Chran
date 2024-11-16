"use client";
import Image from "next/image";
import { FaFacebook,  FaLinkedin, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "animate.css";
import { FaXTwitter } from "react-icons/fa6";

const Mission: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the footer is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Delay rendering until after client has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent SSR rendering until client has mounted
  if (!isMounted) return null;

  return (
    <section ref={aboutRef} className="h-screen dark:bg-[#2D2D2D]">
      <div className="h-10 w-full"></div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 py-16 lg:py-24 bg-white dark:bg-[#2D2D2D]">
        <div className="lg:w-1/2 ml-4 text-center lg:text-left">
          <h1 className="font-playfair text-4xl font-bold mb-4 dark:text-[#E0E0E0]">CHRAN</h1>
          <h2 className="font-open-sans dark:text-[#E0E0E0] text-xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="font-open-sans text-lg mb-8 dark:text-[#E0E0E0]">
            Empowering democracy through advocacy, education, and civic
            engagement for a better Nigeria.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-8">
          <Link href="https://web.facebook.com/chran.org">
              <FaFacebook
                className={`text-blue-600 text-2xl cursor-pointer ${
                  animate ? "animate__animated animate__rotateIn" : ""
                }`}
              />
            </Link>
            <Link href="https://x.com/radarpapers?t=wi_WSDvR9e8GtuKXxTV4hw&s=08">
              <FaXTwitter
                className={`text-black text-2xl cursor-pointer ${
                  animate ? "animate__animated animate__rotateIn" : ""
                }`}
              />
            </Link>
            <Link href="https://www.youtube.com/@radarnewspaper1110">
              <FaYoutube
                className={`text-red-600 text-2xl cursor-pointer ${
                  animate ? "animate__animated animate__rotateIn" : ""
                }`}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/franklyn-isong-72714a82/">
              <FaLinkedin
                className={`text-[#0A66C2] text-2xl cursor-pointer ${
                  animate ? "animate__animated animate__rotateIn" : ""
                }`}
              />
            </Link>
            <Link href="https://www.instagram.com/franklyn_isong/">
              <FaInstagram
                className={`text-[#E200A5] text-2xl cursor-pointer ${
                  animate ? "animate__animated animate__rotateIn" : ""
                }`}
              />
            </Link>
            <Link href="https://www.tiktok.com/@franklyn.isong">
              <FaTiktok
                className={`text-black text-2xl cursor-pointer ${
                  animate ? "animate__animated animate__rotateIn" : ""
                }`}
              />
            </Link>
          </div>
          <button className="font-open-sans bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <Image
            src="/mission.jpg"
            alt="Chran image"
            loading="lazy"
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
