import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import ReduxProvider from "./ui/utils/ReduxProvider";
import Footer from "./ui/components/layoutComponents/Footer";
import Navbar from "./ui/components/layoutComponents/navbar";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.chran.org"),
  title: {default: "Chran", template: "%s | Explore Chran"},
  description: "The Center For HUman Rights & Accountability Network",
  openGraph : {title: {default: "Chran", template: "%s | Explore Chran"}, 
   description: "Implemented Chidera",
   type: "website",
   locale :"en_US",
   url:"https://www.chran.org",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
