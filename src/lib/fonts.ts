import localFont from "next/font/local";

// Body font — Inter (clean, modern sans for spray contractor copy)
export const bodyFont = localFont({
  src: [
    { path: "./fonts/Inter-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

// Headline font — Bebas Neue (was loaded via a CSS @import CDN link; single weight 400)
export const headlineFont = localFont({
  src: [{ path: "./fonts/BebasNeue-400.woff2", weight: "400", style: "normal" }],
  variable: "--font-headline",
  display: "swap",
});

// Label font — Public Sans (400/700/900: the union of the old next/font call and the CDN link)
export const labelFont = localFont({
  src: [
    { path: "./fonts/PublicSans-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PublicSans-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/PublicSans-variable.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-label",
  display: "swap",
});
