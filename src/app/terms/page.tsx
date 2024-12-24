"use client";
import React from "react";
import Navbar from "../ui/components/layoutComponents/navbar";
import Footer from "../ui/components/layoutComponents/Footer";
import TermsAndConditions from "../ui/components/terms/terms-and-conditions";

const page = () => {
  return (
    <div>
      <Navbar />
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default page;
