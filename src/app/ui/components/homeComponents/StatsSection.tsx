"use client";
import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { playfair_Display, open_sans } from "../../fonts/fonts";

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="bg-white dark:bg-[#2D2D2D] py-12"
      ref={sectionRef}
    >
      <div className="container mx-auto text-center">
        <h2 className={`${playfair_Display.className} text-3xl font-bold mb-6`}>
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Supporters */}
          <div className="bg-gray-100 dark:bg-[#1E1E1E] p-6 rounded-lg shadow-md">
            <h3
              className={` ${open_sans.className} text-4xl font-semibold dark:text-[#E0E0E0] text-blue-600`}
            >
              {isVisible && (
                <CountUp start={0} end={500000} duration={3} separator="," />
              )}
              +
            </h3>
            <p className="text-lg text-gray-700">
              Supporters Engaged in Advocacy Campaigns
            </p>
          </div>

          {/* Individuals Impacted */}
          <div className="bg-gray-100 dark:bg-[#1E1E1E] p-6 rounded-lg shadow-md">
            <h3
              className={` ${open_sans.className} text-4xl font-semibold dark:text-[#E0E0E0] text-blue-600`}
            >
              {isVisible && (
                <CountUp start={0} end={11952} duration={3} separator="," />
              )}
              +
            </h3>
            <p className={`${open_sans.className} text-lg text-gray-700`}>
              Individuals Impacted by CHRAN&apos;s Programs
            </p>
          </div>

          {/* Initiatives Launched */}
          <div className="bg-gray-100 p-6 dark:bg-[#1E1E1E] rounded-lg shadow-md">
            <h3
              className={` ${open_sans.className} text-4xl font-semibold dark:text-[#E0E0E0] text-blue-600`}
            >
              {isVisible && <CountUp start={0} end={82} duration={3} />}
              +
            </h3>
            <p className={`${open_sans.className} text-lg text-gray-700`}>
              Initiatives Launched Since Inception
            </p>
          </div>

          {/* Volunteers */}
          <div className="bg-gray-100 dark:bg-[#1E1E1E] p-6 rounded-lg shadow-md">
            <h3
              className={` ${open_sans.className} text-4xl font-semibold dark:text-[#E0E0E0] text-blue-600`}
            >
              {isVisible && (
                <CountUp start={0} end={987} duration={3} separator="," />
              )}
              +
            </h3>
            <p className={`${open_sans.className} text-lg text-gray-700`}>
              Volunteers Committed to CHRAN&apos;s Cause
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
