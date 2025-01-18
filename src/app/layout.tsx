import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import {GoogleTagManager} from "@next/third-parties/google"
import ReduxProvider from "./ui/utils/ReduxProvider";
import Footer from "./ui/components/layoutComponents/Footer";
import Navbar from "./ui/components/layoutComponents/navbar";
import Head from "next/head";  // Import Head from Next.js


export const metadata: Metadata = {
  metadataBase: new URL("https://www.chran.org"),
  title: { default: "Chran", template: "%s | Explore Chran" },
  description: "The Center For Human Rights & Accountability Network",
  openGraph: {
    title: { default: "Chran", template: "%s | Explore Chran" },
    description: "The Center For Human Rights & Accountability Network",
    type: "website",
    locale: "en_US",
    url: "https://www.chran.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="G-M3GYBWKMBC"  />
        <Head>
        <meta name="google-adsense-account" content="ca-pub-8660328606992175" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8660328606992175"
            crossOrigin="anonymous"
          ></script>
        </Head>
      </head>
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
