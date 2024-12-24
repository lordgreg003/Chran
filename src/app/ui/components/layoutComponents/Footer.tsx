"use client";
import { FaFacebook, FaYoutube, FaInstagram, FaGithub, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { IoMailSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "animate.css";
import { playfair_Display, open_sans } from "../../fonts/fonts";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  // Scroll tracking and animation trigger
  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        // Trigger animation when the footer is in the viewport
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      className="w-full overflow-x-hidden-hidden mx-0 h-[28rem]"
      initial={{ opacity: 0, y: 50 }} // Initial state for animation
      animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 50 }} // Animate on scroll into view
      transition={{ duration: 0.6 }} // Transition duration
    >
      <div className="w-[90%] h-[70%] bg-white dark:bg-[#2D2D2D] mx-auto text-center md:text-left md:flex md:items-center md:space-x-5 px-4">
        <div className="mb-4 md:mb-0 h-1/2">
          <h3 className={`${playfair_Display.className} font-semibold text-l`}>
            CHRAN: Upholding Human Rights
          </h3>
          <p className={`${open_sans.className} mt-2`}>+234 8023501555</p>
          <p className={`${open_sans.className} text-base`}>
            15 Akpa Ubeh Street off Babangida avenue by Je-Nissi Event Center
          </p>
          <p className={`${open_sans.className} text-base`}>
            Uyo Akwa Ibom State
          </p>
        </div>
        <div className="flex flex-col items-center h-1/2 justify-center md:items-start">
          <div className="flex space-x-4 mb-4">
            <Link href="https://web.facebook.com/chran.org">
              <FaFacebook
                className={`text-blue-600 text-2xl cursor-pointer ${animate ? "animate__animated animate__rotateIn" : ""}`}
              />
            </Link>
            <Link href="https://x.com/radarpapers?t=wi_WSDvR9e8GtuKXxTV4hw&s=08">
              <FaXTwitter
                className={`text-black text-2xl cursor-pointer ${animate ? "animate__animated animate__rotateIn" : ""}`}
              />
            </Link>
            <Link href="https://www.youtube.com/@radarnewspaper1110">
              <FaYoutube
                className={`text-red-600 text-2xl cursor-pointer ${animate ? "animate__animated animate__rotateIn" : ""}`}
              />
            </Link>
            <Link href="https://www.instagram.com/franklyn_isong/">
              <FaInstagram
                className={`text-[#E200A5] text-2xl cursor-pointer ${animate ? "animate__animated animate__rotateIn" : ""}`}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/franklyn-isong-72714a82/">
              <FaLinkedin
                className={`text-[#0A66C2] text-2xl cursor-pointer ${animate ? "animate__animated animate__rotateIn" : ""}`}
              />
            </Link>
            <Link href="https://www.tiktok.com/@franklyn.isong">
              <FaTiktok
                className={`text-black text-2xl cursor-pointer ${animate ? "animate__animated animate__rotateIn" : ""}`}
              />
            </Link>
            <Link href="https://wa.me/qr/MFTAVXKKNJWAF1">
              <FaWhatsapp
                className={`text-green-600 text-2xl cursor-pointer ${animate ? "animate__animated animate__rotateIn" : ""}`}
              />
            </Link>
          </div>
          <div className="text-gray-600 h-10 w-full text-sm space-y-1 space-x-3">
            <Link href="/terms" className={`${open_sans.className} hover:underline`}>
              Terms & Conditions
            </Link>
            <Link href="aboutus" className={`${open_sans.className} hover:underline`}>
              About Us
            </Link>
            <Link href="/privacy" className={`${open_sans.className} hover:underline`}>
              Privacy Policy
            </Link>
            <Link href="/contact" className={`${open_sans.className} hover:underline`}>
              Contact us
            </Link>
            <Link href="/blog" className={`${open_sans.className} hover:underline`}>
              Blogs
            </Link>
            <Link href="/articles" className={`${open_sans.className} hover:underline`}>
              Articles
            </Link>
            <Link href="/ongoing-project" className={`${open_sans.className} hover:underline`}>
              Ongoing Project
            </Link>
            <Link href="/completed-project" className={`${open_sans.className} hover:underline`}>
              Completed Project
            </Link>
          </div>
        </div>
      </div>
      <div className={`${open_sans.className} font-semibold text-center text-gray-600 text-sm mt-6 dark:bg-[#2D2D2D]`}>
        &copy; 2024 by CHRAN
      </div>
      <div className="text-center dark:bg-[#2D2D2D] items-center justify-center space-x-3 flex text-gray-600 text-sm mt-6">
        <Link href="https://github.com/lordgreg003">
          <FaGithub
            className={`text-gray-700 text-2xl cursor-pointer ${animate ? "animate__animated animate__rotateIn" : ""}`}
          />
        </Link>
        <Link href="mailto:chideranwokoye555@gmail.com">
          <IoMailSharp
            className={`text-gray-700 text-2xl cursor-pointer ${animate ? "animate__animated animate__rotateIn" : ""}`}
          />
        </Link>
        <Link href="https://github.com/lordgreg003">built by dera</Link>
      </div>
    </motion.footer>
  );
};

export default Footer;
