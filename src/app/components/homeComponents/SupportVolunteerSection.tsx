"use client"
import React from 'react';
 
import Link from 'next/link';
import { open_sans, playfair_Display } from '@/app/ui/fonts/fonts';

const SupportVolunteerSection: React.FC = () => {
  return (
    <div className="bg-blue-500 py-16 px-4 dark:bg-[#2D2D2D]">
        <h1 className={`${playfair_Display.className} text-4xl font-semibold text-center text-white mb-8 dark:text-[#E0E0E0]`}>Join Charn -</h1>
      <h2 className={`${playfair_Display.className} text-4xl font-semibold text-center text-white mb-8 dark:text-[#E0E0E0]`}>
        Be the Voice of Change!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="text-center bg-white dark:bg-[#1E1E1E] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className={`${playfair_Display.className} text-2xl font-semibold text-gray-800 mb-4 dark:text-[#E0E0E0]`}>Support</h3>
          <p className={`${open_sans.className}text-gray-600 mb-6 dark:text-[#E0E0E0]`}>
            Your contribution can make a real difference in advancing human
            rights and democracy in Nigeria.
          </p>
          <Link href="/donate"><button className="px-6 py-2 text-blue-500 font-semibold border border-blue-500 rounded-full hover:bg-blue-500 hover:dark:bg-blue-900  hover:text-white transition-colors  dark:text-[#E0E0E0]">
            Support
          </button></Link>
        </div>
        <div className="text-center bg-white dark:bg-[#1E1E1E] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className={`${playfair_Display.className} text-2xl font-semibold text-gray-800 mb-4 dark:text-[#E0E0E0]`}>Volunteer</h3>
          <p className={`${open_sans.className}text-gray-600 mb-6 dark:text-[#E0E0E0]`}>
            Join us in our mission to uphold human rights, democracy, and
            accountability in Nigeria.
          </p>
          <Link href="/donate"><button className="px-6 py-2 text-blue-500 font-semibold border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors dark:text-[#E0E0E0]">
            Volunteer
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default SupportVolunteerSection;
