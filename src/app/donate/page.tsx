"use client";
import React from "react";
import Donate from "../ui/components/donateComponents/Donate";
import Marquee from "../ui/components/layoutComponents/Marquee";

const page = () => {
  return (
    <div>
    <Marquee />
      <Donate />
    </div>
  );
};

export default page;
