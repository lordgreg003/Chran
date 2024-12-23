"use client";
import { playfair_Display } from "../../fonts/fonts";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`bg-white shadow-lg fixed w-full z-50 dark:bg-foreground text-foreground dark:text-white transition-all duration-300 ${
        showNavbar ? "top-0" : "-top-20"
      }`}
      initial={{ y: -50 }} // Start with an animation on mount
      animate={{ y: 0 }} // Animate to position 0
      transition={{ type: "spring", stiffness: 300, damping: 140 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-row items-center justify-center gap-3">
            <Link href={'/'}><p className={`${playfair_Display.className} cursor-pointer text-3xl font-bold`}>CHRAN</p></Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 dark:text-white">
            <motion.div
              className={`${playfair_Display.className} text-gray-700 hover:text-blue-600 dark:text-[#E0E0E0]`}
              whileHover={{ scale: 1.1 }} // Apply a hover effect
            >
              <Link href="/">Home</Link>
            </motion.div>
            <motion.div
              className={`${playfair_Display.className} text-gray-700 hover:text-blue-600 dark:text-[#E0E0E0]`}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/aboutus">About Us</Link>
            </motion.div>
            <motion.div
              className={`${playfair_Display.className} text-gray-700 hover:text-blue-600 dark:text-[#E0E0E0]`}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/blog">Blogs</Link>
            </motion.div>
            <motion.div
              className={`${playfair_Display.className}block dark:text-[#E0E0E0] text-gray-700 hover:text-blue-600`}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/articles">Articles</Link>
            </motion.div>
            <motion.div
              className={`${playfair_Display.className} text-gray-700 hover:text-blue-600 dark:text-[#E0E0E0]`}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/contact">Contact</Link>
            </motion.div>

            {/* Donate Button */}
            <motion.div
              className={`${playfair_Display.className} bg-blue-600 dark:bg-[#1E1E1E] dark:text-[#E0E0E0] text-white px-4 py-2 rounded-full`}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/donate">Donate</Link>
            </motion.div>
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
        <motion.div
          className="md:hidden bg-white dark:bg-[#2D2D2D] shadow-lg dark:text-white"
          initial={{ opacity: 0 }} // Initial state: hidden
          animate={{ opacity: 1 }} // Animate to visible
          transition={{ duration: 0.3 }} // Set the transition duration
        >
          <div className="space-y-2 flex flex-col p-4">
            <motion.div
              className={`${playfair_Display.className} block dark:text-white text-gray-700 hover:text-blue-600`}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/aboutus">About Us</Link>
            </motion.div>
            <motion.div
              className={`${playfair_Display.className} block dark:text-white text-gray-700 hover:text-blue-600`}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/blog">Blogs</Link>
            </motion.div>
            <motion.div
              className={`${playfair_Display.className} block dark:text-white text-gray-700 hover:text-blue-600`}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/articles">Articles</Link>
            </motion.div>
            <motion.div
              className={`${playfair_Display.className} block dark:text-white text-gray-700 hover:text-blue-600`}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/contact">Contact</Link>
            </motion.div>

            {/* Donate Button */}
            <motion.a
              href="/donate"
              className="block bg-blue-600 dark:bg-[#1E1E1E] text-white text-center px-4 py-2 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              Donate
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
