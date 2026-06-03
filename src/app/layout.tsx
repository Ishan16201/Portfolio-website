import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { AnimatedBackground } from "@/components/effects/AnimatedBackground";
import { CustomCursor } from "@/components/effects/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishan Saraf — Trader · Researcher · Developer · Author · Musician",
  description:
    "Ishan Saraf is a 19-year-old trader, quantitative researcher, systems architect, published author, and musician based in India. Explore his books, research papers, projects, and writing.",
  keywords: [
    "Ishan Saraf",
    "trader",
    "quantitative researcher",
    "author",
    "developer",
    "musician",
    "algorithmic trading",
  ],
  authors: [{ name: "Ishan Saraf" }],
  openGraph: {
    title: "Ishan Saraf — Trader · Researcher · Developer · Author · Musician",
    description:
      "Portfolio of Ishan Saraf — trader, researcher, developer, author, and musician.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans">
        <AnimatedBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
