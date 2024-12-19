// import type { Metadata } from "next";
"use client";
import "./globals.css";
import "animate.css";
import { ThemeProvider } from "./ui/context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
// import FloatingComponents from "@/app/ui/theme/FloatingComponents";

// export const metadata: Metadata = {
//   title: "Chran",
//   description: "Implemented Chidera",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            {/* <FloatingComponents /> */}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
