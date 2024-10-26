"use client"; // Ensures that the component runs on the client side

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
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/chranlogo.jpg"
                alt="chran-logo"
                height={50}
                width={50}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/aboutus" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>

            {/* Donate Button */}
            <Link
              href="/donate"
              className="bg-blue-600 text-white px-4 py-2 rounded-full"
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
        <div className="md:hidden bg-white shadow-lg">
          <div className="space-y-2 p-4">
            <Link
              href="/aboutus"
              className="block text-gray-700 hover:text-blue-600"
            >
              About Us
            </Link>
            <Link
              href="/impact"
              className="block text-gray-700 hover:text-blue-600"
            >
              Our Impact
            </Link>
            <Link
              href="/solutions"
              className="block text-gray-700 hover:text-blue-600"
            >
              Solutions
            </Link>
            <Link
              href="/partners"
              className="block text-gray-700 hover:text-blue-600"
            >
              Partners
            </Link>
            {/* Search Bar */}
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <input
                type="search"
                name="search"
                placeholder="Search..."
                className="w-full py-2 text-sm bg-gray-100 rounded-full pl-10 focus:outline-none focus:bg-white focus:border-blue-600"
              />
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1110.606-.707L21 21z"
                  />
                </svg>
              </span>
            </div>
            {/* Donate Button */}
            <a
              href="/donate"
              className="block bg-blue-600 text-white text-center px-4 py-2 rounded-full"
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
