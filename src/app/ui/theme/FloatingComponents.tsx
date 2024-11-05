"use client";

import ThemeToggler from "./ThemeToggler";
import ScrollToTop from "./ScrollToTop";

//hooks
import useWindowScroll from "./useWindowScroll";

const FloatingComponents = () => {
  const [windowScrollPos] = useWindowScroll();

  return (
    <div className="floating-components fixed top-1/2 right-[5%] transform translate-y-1/2 flex flex-col justify-center items-center gap-0 z-50 bg-orange-500 p-4  rounded-3xl overflow-hidden">
      <ThemeToggler />
      {windowScrollPos && <ScrollToTop />}
    </div>
  );
};

export default FloatingComponents;
