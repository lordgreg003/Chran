"use client";

import { usePathname } from "next/navigation";
import Navbar from "./layoutComponents/navbar";
import Footer from "./layoutComponents/Footer";
 

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define pages where Navbar and Footer should NOT appear
  const excludedPages = ["/admin", "/all", "/set", "/create", "/allarticle"];
  const hideNavFooter = excludedPages.includes(pathname);

  return (
    <>
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer />}
    </>
  );
}
