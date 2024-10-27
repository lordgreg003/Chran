"use client";
import { playfair_Display, open_sans } from "../../fonts/fonts";

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className={`${playfair_Display.className} text-3xl font-bold mb-6`}>
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3
              className={` ${open_sans.className} text-4xl font-semibold text-blue-600`}
            >
              500,000+
            </h3>
            <p className="text-lg text-gray-700">
              Supporters Engaged in Advocacy Campaigns
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3
              className={` ${open_sans.className} text-4xl font-semibold text-blue-600`}
            >
              10,000+
            </h3>
            <p className={`${open_sans.className}text-lg text-gray-700`}>
              Individuals Impacted by CHRAN&apos;s Programs
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3
              className={` ${open_sans.className} text-4xl font-semibold text-blue-600`}
            >
              80+
            </h3>
            <p className={`${open_sans.className}text-lg text-gray-700`}>
              Initiatives Launched Since Inception
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-4xl font-semibold text-blue-600">1,000+</h3>
            <p className={`${open_sans.className}text-lg text-gray-700`}>
              Volunteers Committed to CHRAN&apos;s Cause
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
