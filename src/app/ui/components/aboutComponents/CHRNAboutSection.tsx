"use client";
import { playfair_Display, open_sans } from "../../fonts/fonts";
const CHRNAboutSection = () => {
  return (
    <section className="px-4 py-16 lg:py-24 dark:bg-[#2D2D2D] bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`${playfair_Display.className} text-3xl font-bold mb-6 dark:text-[#E0E0E0]`}
        >
          About CHRAN
        </h2>
        <p
          className={`${open_sans.className} text-lg leading-relaxed mb-6 dark:text-[#E0E0E0]`}
        >
          The{" "}
          <span className="font-semibold dark:text-[#E0E0E0]">
            Center for Human Rights and Accountability Network (CHRAN)
          </span>{" "}
          is a pro-democracy, human rights, and civil society organization
          dedicated to strengthening and preserving democracy in Nigeria.
          Established with a commitment to justice and accountability, CHRAN has
          been at the forefront of the movement for democratic governance,
          social justice, and human rights across the country.
        </p>
        <p
          className={`${open_sans.className} text-lg leading-relaxed mb-6 dark:text-[#E0E0E0]`}
        >
          Over the years, CHRAN has passionately pursued advocacy initiatives,
          organized public lectures, seminars, and symposia on critical themes,
          all aimed at raising awareness and fostering civic responsibility.
          These efforts are not only a testament to our dedication to democratic
          values but also a proactive stance in educating and engaging citizens
          in the democratic process.
        </p>
        <p
          className={`${open_sans.className} text-lg leading-relaxed mb-6 dark:text-[#E0E0E0]`}
        >
          CHRAN’s work spans various domains, including electoral reform, human
          rights protection, and anti-corruption campaigns. By collaborating
          with local and international partners, we seek to uphold democratic
          values and empower citizens to actively participate in governance. Our
          programs are structured to support transparency, accountability, and
          civic engagement, fostering a democratic culture that benefits all
          Nigerians.
        </p>
        <p className="text-lg leading-relaxed mb-6 dark:text-[#E0E0E0]">
          Through consistent advocacy and community engagement, CHRAN has
          contributed significantly to the political and social landscape in
          Nigeria. We believe in a future where democratic ideals thrive, where
          human rights are protected, and where every voice counts in shaping
          the nations future.
        </p>
      </div>
    </section>
  );
};

export default CHRNAboutSection;
