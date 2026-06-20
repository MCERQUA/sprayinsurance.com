import { Inter, Public_Sans } from "next/font/google";

// Body font — Inter (clean, modern sans for spray contractor copy)
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Label font — Public Sans
export const headingFont = Public_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700", "900"],
  display: "swap",
});
