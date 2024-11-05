"use client";

import { useState, useEffect } from "react";

const useWindowScroll = (): [boolean] => {
  const [windowScrollPos, setWindowScrollPos] = useState(true);

  useEffect(() => {
    const scrollPos = () => {
      // Checks if the scroll position is more than 50 pixels
      setWindowScrollPos(window.scrollY > 50);
    };

    window.addEventListener("scroll", scrollPos);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", scrollPos);
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  return [windowScrollPos];
};

export default useWindowScroll;
