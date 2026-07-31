import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-950">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
