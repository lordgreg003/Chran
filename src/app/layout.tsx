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
        <Head>
          <meta name="google-adsense-account" content="ca-pub-8660328606992175" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8660328606992175"
            crossOrigin="anonymous"
          ></script>
          <script>
            {`(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:5271942,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
          </script>
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
