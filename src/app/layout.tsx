import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import ReduxProvider from "./ui/utils/ReduxProvider";


export const metadata: Metadata = {
  metadataBase: new URL("https://chran.org"),
  title: {default: "Chran", template: "%s | Explore Chran"},
  description: "Implemented Chidera",
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
