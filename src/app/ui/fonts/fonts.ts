"use client";
import {
  Inter,
  Lusitana,
  Playfair,
  Coustard,
  Open_Sans,
  Playfair_Display,
  Merriweather,
  Roboto,
} from "next/font/google";

// Existing fonts
export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"], // Ensure these weights are valid and needed
  subsets: ["latin"],
});

export const playfair = Playfair({
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Check if you need all these weights
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const coustard = Coustard({
  weight: ["400"], // Only the required weight
  subsets: ["latin"],
});

export const open_sans = Open_Sans({
  weight: ["400", "600", "700"], // Ensure the weights are correct
  subsets: ["latin"],
});

export const playfair_Display = Playfair_Display({
  weight: ["700"], // Use a single weight if needed
  subsets: ["latin"],
  variable: "--font-playfair_Display",
});

// New fonts (Merriweather and Roboto)
export const merriweather = Merriweather({
  weight: ["400", "700"], // Check if only these weights are needed
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const roboto = Roboto({
  weight: ["400", "500", "700"], // Use only the required weights
  subsets: ["latin"],
  variable: "--font-roboto",
});
