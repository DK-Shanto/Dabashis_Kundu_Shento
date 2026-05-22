import type { Metadata } from "next";
import { Syne, Outfit, Fraunces } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dabashis Kundu Shento | Shopify · Wix · WordPress Developer",
  description:
    "Top Rated Freelancer on Upwork with 5+ years building fast, beautiful, conversion-focused websites on Shopify, Wix, and WordPress. $20,000+ earned.",
  keywords: [
    "Shopify developer",
    "Wix developer",
    "WordPress developer",
    "freelancer",
    "Upwork Top Rated",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${fraunces.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-navy text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
