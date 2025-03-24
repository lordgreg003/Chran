import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import ReduxProvider from "./ui/utils/ReduxProvider";
import Adsens from "./components/Adsens";
import LayoutWrapper from "./components/LayoutWrapper";
 
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
        <Adsens pId="pub-8660328606992175" />
      </head>
      <body>
        <ReduxProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
