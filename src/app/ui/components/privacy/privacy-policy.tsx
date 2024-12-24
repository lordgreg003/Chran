"use client";
import { NextPage } from "next";
import { playfair_Display, open_sans } from "../../fonts/fonts";

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full h-[5rem]"></div>
      <header className="w-full bg-blue-500 py-8">
        <div className="container mx-auto text-center">
          <h1
            className={`${playfair_Display.className} text-white text-3xl font-bold`}
          >
            Privacy Policy
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
            general and high-level explanations on how to write your own Privacy
            Policy. You should not rely on this article as legal advice or as
            recommendations regarding what you should actually do, because we
            cannot know in advance what specific privacy policies you wish to
            establish between your business and your customers and visitors. We
            recommend seeking legal advice to assist you in creating your own
            Privacy Policy.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2
            className={`${playfair_Display.className} text-2xl font-semibold mb-4`}
          >
            Privacy Policy - The Basics
          </h2>
          <p className={`${open_sans.className} text-gray-700 leading-relaxed`}>
            A privacy policy is a statement that discloses the ways a website
            collects, uses, discloses, processes, and manages the data of its
            visitors and customers. It usually includes a statement regarding
            the website’s commitment to protecting visitors’ privacy and an
            explanation about the different mechanisms the website is
            implementing to protect privacy.
          </p>
        </section>

        {/* Additional Sections */}
        <section className="mb-8">
          <h2
            className={`${playfair_Display.className} text-2xl font-semibold mb-4`}
          >
            Information Collection and Use
          </h2>
          <p className={`${open_sans.className} text-gray-700 leading-relaxed`}>
            This section can include details on the types of data you collect,
            such as personal data, browsing data, and other relevant
            information. Explain the purpose of data collection and how it is
            used to enhance the user experience or improve services.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className={`${playfair_Display.className} text-2xl font-semibold mb-4`}
          >
            User Rights and Data Protection
          </h2>
          <p className={`${open_sans.className} text-gray-700 leading-relaxed`}>
            Describe user rights regarding their data, including rights to
            access, modify, delete, or restrict the use of their data. Provide
            information on the steps taken to secure and protect personal data
            from unauthorized access or disclosure.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
