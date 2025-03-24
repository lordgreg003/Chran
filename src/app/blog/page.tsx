import React from "react";
import Marquee from "../components/layoutComponents/Marquee";
import Blogs from "../components/blogsComponent/Blogs";
import BlogLayout10 from "../components/blogsComponent/BlogSection9";
import BlogLayout9 from "../components/blogsComponent/BlogSection";
import BlogLayout8 from "../components/blogsComponent/BlogSection8";
import BlogLayout7 from "../components/blogsComponent/BlogSection7";
import BlogLayout6 from "../components/blogsComponent/BlogSection6";
import BlogLayout5 from "../components/blogsComponent/BlogSection5";
import BlogLayout4 from "../components/blogsComponent/BlogSection4";
import BlogSection1 from "../components/blogsComponent/BlogSection1";
import BlogLayout2 from "../components/blogsComponent/BlogSection2";
import BlogLayout3 from "../components/blogsComponent/BlogSection3";
import ShowMoreLayout from "../components/homeComponents/ShowMoreLayout";
  

const page = () => {
  return (
    <div>
    <Marquee />
     <Blogs />
    <BlogLayout10 />
    <BlogLayout9 />
    <BlogLayout8 />
    <BlogLayout7 />
    <BlogLayout6 />
    <BlogLayout5 />
    <BlogLayout4 />
      <BlogSection1 />
      <BlogLayout2 />
      <BlogLayout3 />
      <ShowMoreLayout />
     
     
    </div>
  );
};

export default page;