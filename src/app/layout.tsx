import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import ReduxProvider from "./ui/utils/ReduxProvider";
import Footer from "./ui/components/layoutComponents/Footer";
import Navbar from "./ui/components/layoutComponents/navbar";
import Head from "next/head";  // Import Head from Next.js

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chran.org"),
  title: { default: "Chran", template: "%s | Explore Chran" },
  description: "The Center For HUman Rights & Accountability Network",
  openGraph: {
    title: { default: "Chran", template: "%s | Explore Chran" },
    description: "Implemented Chidera",
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
