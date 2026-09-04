import type { Metadata } from "next";
import { Bad_Script, Poppins, Seaweed_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Cursive eyebrow-label font from the Sept 2026 homepage redesign (see
// components/Hero.tsx etc. — every section label like "Our Disciplines"
// uses this instead of the old uppercase-tracked style).
const seaweedScript = Seaweed_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

// Handwritten photo-caption font (e.g. "GRS Team - 2026" under the hero
// polaroid) — distinct from the eyebrow-label script above.
const badScript = Bad_Script({
  variable: "--font-caption",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://grs-nu.vercel.app";
const title = "Global Rehabilitation Service | Allied Health Across NSW & QLD";
const description =
  "GRS delivers holistic occupational therapy, physiotherapy, speech pathology, psychology, dietetics, art and music therapy in clinic and community settings across NSW and QLD.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Global Rehabilitation Service",
  },
  description,
  keywords: [
    "NDIS provider NSW",
    "NDIS provider QLD",
    "occupational therapy Sydney",
    "physiotherapy Brisbane",
    "speech pathology Gold Coast",
    "allied health disability services",
    "positive behaviour support",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Global Rehabilitation Service",
    title,
    description,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${seaweedScript.variable} ${badScript.variable} h-full antialiased`}
    >
      <head>
        {/* Self-serve brand color overrides — see app/theme.css/route.ts
            and lib/theme/. Kept as a separate linked stylesheet (not read
            here in the layout) so every page's static prerendering stays
            untouched. */}
        <link rel="stylesheet" href="/theme.css" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-navy-950">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
