import React from "react";
import Navbar from "../ui/components/layoutComponents/navbar";
import Contact from "../ui/components/contactcomponents/Contact";
import Footer from "../ui/components/layoutComponents/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
