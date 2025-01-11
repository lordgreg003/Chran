import React from "react";
import Blogs from "../ui/components/blogsComponent/Blogs";
import BlogSection1 from "../ui/components/blogsComponent/BlogSection1";
import ShowMoreLayout from "../ui/components/homeComponents/ShowMoreLayout";
import BlogLayout2 from "../ui/components/blogsComponent/BlogSection2";
import BlogLayout3 from "../ui/components/blogsComponent/BlogSection3";
import Marquee from "../ui/components/layoutComponents/Marquee";

const page = () => {
  return (
    <div>
    <Marquee />
      <Blogs />
      <BlogSection1 />
      <BlogLayout2 />
      <BlogLayout3 />
      <ShowMoreLayout />
     
     
    </div>
  );
};

export default page;
