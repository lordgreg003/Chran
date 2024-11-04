import React from "react";
import Navbar from "../ui/components/layoutComponents/navbar";
import Footer from "../ui/components/layoutComponents/Footer";
import Blogs from "../ui/components/blogsComponent/Blogs";

const page = () => {
  return (
    <div>
      <Navbar />
      <Blogs />
      <Footer />
    </div>
  );
};

export default page;
