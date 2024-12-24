"use client";
import React from "react";
import Navbar from "../ui/components/layoutComponents/navbar";
import Footer from "../ui/components/layoutComponents/Footer";
import PrivacyPolicy from "../ui/components/privacy/privacy-policy";

const page = () => {
  return (
    <div>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default page;
