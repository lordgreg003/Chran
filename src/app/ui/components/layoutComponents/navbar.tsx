"use client";  
import { playfair_Display } from "../../fonts/fonts";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 dark:bg-foreground text-foreground dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-row items-center justify-center gap-3">
            <Link href="/">
              <Image
                src="/mainlogo.webp"
                alt="chran-logo"
                loading="lazy"
                height={50}
                width={50}
              />
            </Link>
            <p className={`${playfair_Display.className} text-xl font-bold`}>Chran</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 dark:text-white">
            <Link
              href="/"
              className={`${playfair_Display.className} text-gray-700 hover:text-blue-600 dark:text-[#E0E0E0]`}
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              className={`${playfair_Display.className} text-gray-700 hover:text-blue-600 dark:text-[#E0E0E0]`}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className={`${playfair_Display.className} text-gray-700 hover:text-blue-600 dark:text-[#E0E0E0]`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`${playfair_Display.className} text-gray-700 hover:text-blue-600 dark:text-[#E0E0E0]`}
            >
              Contact
            </Link>

            {/* Donate Button */}
            <Link
              href="/donate"
              className={`${playfair_Display.className} bg-blue-600  dark:bg-[#1E1E1E] dark:text-[#E0E0E0] text-white px-4 py-2 rounded-full`}
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#2D2D2D]  shadow-lg dark:text-white">
          <div className="space-y-2 flex flex-col p-4">
            <Link
              href="/aboutus"
              className={`${playfair_Display.className}block dark:text-white text-gray-700 hover:text-blue-600`}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className={`${playfair_Display.className}block dark:text-white text-gray-700 hover:text-blue-600`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`${playfair_Display.className}block dark:text-white text-gray-700 hover:text-blue-600`}
            >
              Contact
            </Link>

            {/* Donate Button */}
            <a
              href="/donate"
              className="block bg-blue-600 dark:bg-[#1E1E1E] text-white text-center px-4 py-2 rounded-full"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
