import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { RESTAURANT_INFO } from "@/lib/constants";
import { restaurantSchema, localBusinessSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: `${RESTAURANT_INFO.name} - ${RESTAURANT_INFO.tagline}`,
    template: `%s | ${RESTAURANT_INFO.name}`,
  },
  description: RESTAURANT_INFO.description,
  keywords: [
    "South Indian Restaurant",
    "Jayanagar Restaurant",
    "Bangalore Restaurant",
    "Dosa",
    "Idly",
    "Filter Coffee",
    "Bisi Bele Bath",
    "Authentic South Indian Food",
    "AACHARYA CAFE",
  ],
  authors: [{ name: RESTAURANT_INFO.name }],
  creator: RESTAURANT_INFO.name,
  publisher: RESTAURANT_INFO.name,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: `${RESTAURANT_INFO.name} - ${RESTAURANT_INFO.tagline}`,
    description: RESTAURANT_INFO.description,
    siteName: RESTAURANT_INFO.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: RESTAURANT_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESTAURANT_INFO.name} - ${RESTAURANT_INFO.tagline}`,
    description: RESTAURANT_INFO.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
