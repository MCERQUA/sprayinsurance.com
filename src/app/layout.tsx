import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "spray insurance",
    "spray contractor insurance",
    "spray coating insurance",
    "spray foam insurance",
    "polyurea contractor insurance",
    "sealcoating insurance",
    "line striping insurance",
    "EIFS contractor insurance",
    "spray trade insurance",
    "spray rig insurance",
    "spray applicator insurance",
    "industrial spray insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Specialized insurance for spray contractors — GL, contractor pollution liability, workers' comp, commercial auto, tools & equipment, umbrella, and inland marine. Spray foam, polyurea, sealcoating, line striping, EIFS. All 50 states. 15-min quotes.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — spray contractor coverage` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Specialized insurance for spray contractors. GL, contractor pollution liability, workers' comp, commercial auto, tools & equipment, umbrella, and inland marine. All 50 states. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "General Liability Insurance for Spray Contractors",
      "Contractor Pollution Liability for Spray Trades",
      "Workers' Compensation for Spray Contractors",
      "Commercial Auto & Spray Rig Insurance",
      "Tools & Equipment Insurance for Spray Contractors",
      "Commercial Umbrella for Spray Contractors",
      "Inland Marine Coverage for Spray Contractors",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
