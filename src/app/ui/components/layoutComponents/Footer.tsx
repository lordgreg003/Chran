"use client";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto text-center md:text-left md:flex md:items-center md:justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">
            CHRAN: Upholding Human Rights
          </h3>
          <p className="mt-2">+234 8023501555</p>
          <p>
            15 Akpa Ubeh Street off Babangida avenue by Je-Nissi Event Center
          </p>
          <p>Uyo Akwaibom State</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="flex space-x-4 mb-4">
            <FaFacebook className="text-gray-700 text-2xl cursor-pointer hover:text-gray-900" />
            <FaTwitter className="text-gray-700 text-2xl cursor-pointer hover:text-gray-900" />
            <FaYoutube className="text-gray-700 text-2xl cursor-pointer hover:text-gray-900" />
            <FaInstagram className="text-gray-700 text-2xl cursor-pointer hover:text-gray-900" />
          </div>
          <div className="text-gray-600 text-sm space-y-1">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Accessibility Statement
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm mt-6">
        &copy; 2024 by CHRAN. All rights reserved.
      </div>
      <div className="text-center items-center justify-center space-x-3 flex text-gray-600 text-sm mt-6">
        <Link href="https://github.com/lordgreg003">
          <FaGithub className="text-gray-700 text-2xl cursor-pointer hover:text-gray-900" />
        </Link>
        <Link href="https://github.com/lordgreg003">built by dera</Link>
      </div>
    </footer>
  );
};

export default Footer;
