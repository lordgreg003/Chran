import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import ReduxProvider from "./ui/utils/ReduxProvider";


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
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
