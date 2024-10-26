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
              href="/blog"
              className="block text-gray-700 hover:text-blue-600"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>

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
