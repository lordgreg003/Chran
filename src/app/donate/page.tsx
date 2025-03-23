"use client";
import React from "react";
import Marquee from "../components/layoutComponents/Marquee";
import Donate from "../components/donateComponents/Donate";
 

const page = () => {
  return (
    <div>
    <Marquee />
      <Donate />
    </div>
  );
};

export default page;
