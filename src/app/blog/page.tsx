import React from "react";
import Navbar from "../ui/components/layoutComponents/navbar";
import Footer from "../ui/components/layoutComponents/Footer";
import Blogs from "../ui/components/blogsComponent/Blogs";
import BlogSection1 from "../ui/components/blogsComponent/BlogSection1";
import ShowMoreLayout from "../ui/components/homeComponents/ShowMoreLayout";

const page = () => {
  return (
    <div>
      <Navbar />
      <BlogSection1 />
      <Blogs />
      <ShowMoreLayout />
      <Footer />
    </div>
  );
};

export default page;
