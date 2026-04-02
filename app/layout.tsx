import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brandname.example"),
  title: {
    default: "BrandName | Record once. Polish quickly. Publish everywhere.",
    template: "%s | BrandName"
  },
  description:
    "BrandName is a premium screen recording and editing SaaS for product demos, tutorials, onboarding videos, feature launches, support walkthroughs, and social-ready clips.",
  openGraph: {
    title: "BrandName",
    description:
      "Record full screen, window, or area. Add smart focus, captions, reusable presets, and 4K exports from one polished workflow.",
    url: "https://brandname.example",
    siteName: "BrandName",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandName",
    description:
      "Screen recording and editing for teams that need polished demos, tutorials, walkthroughs, and launch videos."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
