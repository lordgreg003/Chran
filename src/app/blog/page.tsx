import React from "react";
import BlogSection1 from "../ui/components/blogsComponent/BlogSection1";
import ShowMoreLayout from "../ui/components/homeComponents/ShowMoreLayout";
import BlogLayout2 from "../ui/components/blogsComponent/BlogSection2";
import BlogLayout3 from "../ui/components/blogsComponent/BlogSection3";
import Marquee from "../ui/components/layoutComponents/Marquee";
import BlogLayout4 from "../ui/components/blogsComponent/BlogSection4";
import BlogLayout5 from "../ui/components/blogsComponent/BlogSection5";
import BlogLayout6 from "../ui/components/blogsComponent/BlogSection6";
import BlogLayout7 from "../ui/components/blogsComponent/BlogSection7";

const page = () => {
  return (
    <div>
    <Marquee />
    <BlogLayout7 />
    <BlogLayout6 />
    <BlogLayout5 />
    <BlogLayout4 />
      {/* <Blogs /> */}
      <BlogSection1 />
      <BlogLayout2 />
      <BlogLayout3 />
      <ShowMoreLayout />
     
     
    </div>
  );
};

export default page;
