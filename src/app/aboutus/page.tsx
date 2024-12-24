"use client";
import React from "react";
import Navbar from "../ui/components/layoutComponents/navbar";
import Mission from "../ui/components/aboutComponents/Mission";
import CHRNAboutSection from "../ui/components/aboutComponents/CHRNAboutSection";
import Footer from "../ui/components/layoutComponents/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Mission />
      <CHRNAboutSection />
      <Footer />
    </div>
  );
};

export default page;
