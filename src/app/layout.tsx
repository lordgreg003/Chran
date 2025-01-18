import type { Metadata } from "next";
import Script from "next/script"; // Import next/script
import "./globals.css";
import "animate.css";
import ReduxProvider from "./ui/utils/ReduxProvider";
import Footer from "./ui/components/layoutComponents/Footer";
import Navbar from "./ui/components/layoutComponents/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chran.org"),
  title: { default: "Chran", template: "%s | Explore Chran" },
  description: "The Center For Human Rights & Accountability Network",
  openGraph: {
    title: { default: "Chran", template: "%s | Explore Chran" },
    description: "Implemented Chidera",
    type: "website",
    locale: "en_US",
    url: "https://www.chran.org",
  },
};

// Declare global variables
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8660328606992175" />
      </head>
      <body>
      
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8660328606992175"
          crossOrigin="anonymous"
        />

        {/* Google Tag Manager Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q1PCGJX7KR"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(...args) {
                window.dataLayer.push(args);
              }
              gtag('js', new Date());
              gtag('config', 'G-Q1PCGJX7KR');
            `,
          }}
        />

        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
