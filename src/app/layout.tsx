import type { Metadata } from "next";
import "./globals.css";
import "animate.css";

export const metadata: Metadata = {
  title: "Chran",
  description: "Implemented Chidera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
