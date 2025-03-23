"use client";
import Link from "next/link";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaInstagram, FaGithub, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { playfair_Display } from "@/app/ui/fonts/fonts";


const Marquee = () => {
  // State to manage animation
  const [animateIcons, setAnimateIcons] = useState(false);

  // Toggle animation on hover
  const handleMouseEnter = () => setAnimateIcons(true);
  const handleMouseLeave = () => setAnimateIcons(false);

  return (
    <div className="w-full bg-white border-b border-gray-300 pt-16">
      {/* Marquee Section */}
      <div className="relative overflow-hidden py-2">
        <div className="animate-marquee whitespace-nowrap">
          <span className={`${playfair_Display.className} text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-lg md:text-2xl font-bold mx-4`}>
            Welcome to CHRAN - Advocating for Human Rights in Nigeria. Together, we stand for accountability and justice. Center for Human Rights and Accountability Network (CHRAN) is a pro-democracy, human rights, and civil society organisation
          dedicated to strengthening and preserving democracy in Nigeria.
          Established with a commitment to justice and accountability, CHRAN has
          been at the forefront of the movement for democratic governance,
          social justice, and human rights across the country.
          </span>
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div
        className="flex justify-center items-center py-2 space-x-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="https://web.facebook.com/chran.org">
          <FaFacebook
            className={`text-blue-600 text-2xl cursor-pointer transition-transform ${
              animateIcons ? "animate-bounce" : ""
            }`}
          />
        </Link>
        <Link href="https://x.com/radarpapers?t=wi_WSDvR9e8GtuKXxTV4hw&s=08">
          <FaXTwitter
            className={`text-black text-2xl cursor-pointer transition-transform ${
              animateIcons ? "animate-bounce" : ""
            }`}
          />
        </Link>
        <Link href="https://www.youtube.com/@radarnewspaper1110">
          <FaYoutube
            className={`text-red-600 text-2xl cursor-pointer transition-transform ${
              animateIcons ? "animate-bounce" : ""
            }`}
          />
        </Link>
        <Link href="https://www.instagram.com/franklyn_isong/">
          <FaInstagram
            className={`text-[#E200A5] text-2xl cursor-pointer transition-transform ${
              animateIcons ? "animate-bounce" : ""
            }`}
          />
        </Link>
        <Link href="https://github.com/lordgreg003">
          <FaGithub
            className={`text-gray-700 text-2xl cursor-pointer transition-transform ${
              animateIcons ? "animate-bounce" : ""
            }`}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/franklyn-isong-72714a82/">
          <FaLinkedin
            className={`text-[#0A66C2] text-2xl cursor-pointer transition-transform ${
              animateIcons ? "animate-bounce" : ""
            }`}
          />
        </Link>
        <Link href="https://www.tiktok.com/@franklyn.isong">
          <FaTiktok
            className={`text-black text-2xl cursor-pointer transition-transform ${
              animateIcons ? "animate-bounce" : ""
            }`}
          />
        </Link>
        <Link href="https://wa.me/qr/MFTAVXKKNJWAF1">
          <FaWhatsapp
            className={`text-green-600 text-2xl cursor-pointer transition-transform ${
              animateIcons ? "animate-bounce" : ""
            }`}
          />
        </Link>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 50s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
