import React from "react";
import Footer from "../ui/components/layoutComponents/Footer";
import Navbar from "../ui/components/layoutComponents/navbar";
import Donate from "../ui/components/donateComponents/Donate";

const page = () => {
  return (
    <div>
      <Navbar />
      <Donate />
      <Footer />
    </div>
  );
};

export default page;
