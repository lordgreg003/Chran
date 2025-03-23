"use client";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
import { NextPage } from "next";
 
const TermsAndConditions: NextPage = () => {
  return (
    <div className="min-h-screen  bg-gray-100 flex flex-col items-center">
      <div className="w-full h-[5rem]"></div>
      <header className="w-full bg-blue-500 py-8">
        <div className="container mx-auto text-center">
          <h1
            className={`${playfair_Display.className} text-white text-3xl font-bold`}
          >
            Terms & Conditions
          </h1>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto p-6 md:p-12 bg-white shadow-lg mt-8 rounded-lg">
        {/* Section 1 */}
        <section className="mb-8">
          <h2
            className={`${playfair_Display.className} text-2xl font-semibold mb-4`}
          >
            A Legal Disclaimer
          </h2>
          <p className={`${open_sans.className} text-gray-700 leading-relaxed`}>
            The explanations and information provided on this page are only
            general and high-level explanations and information on how to write
            your own document of Terms & Conditions. You should not rely on this
            article as legal advice or as recommendations regarding what you
            should actually do, because we cannot know in advance what are the
            specific terms you wish to establish between your business and your
            customers and visitors. We recommend that you seek legal advice to
            help you understand and to assist you in the creation of your own
            Terms & Conditions.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2
            className={`${playfair_Display.className} text-2xl font-semibold mb-4`}
          >
            Terms & Conditions - the Basics
          </h2>
          <p className={`${open_sans.className} text-gray-700 leading-relaxed`}>
            Having said that, Terms and Conditions are a set of legally binding
            terms defined by you, as the owner of this website. The Ts&Cs set
            forth the legal boundaries governing the activities of the website
            visitors, or your customers, while they visit or engage with this
            website. The Ts&Cs are meant to establish the legal relationship
            between the site visitors and you as the website owner.
          </p>
        </section>

        {/* Add more sections here as needed */}
        <section className="mb-8">
          <h2
            className={`${playfair_Display.className} text-2xl font-semibold mb-4`}
          >
            More Content Coming Soon...
          </h2>
          <p className={`${open_sans.className} text-gray-700 leading-relaxed`}>
            Additional terms, conditions, or policies can go here as you
            continue to expand on your Terms & Conditions.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsAndConditions;
