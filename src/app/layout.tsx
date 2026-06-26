import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import DynamicBackground from "@/components/DynamicBackground";

// Modern fonts setup for a premium marketing agency aesthetic
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HH Studio — Creative Marketing Agency | Brand Strategy, SEO & Performance Marketing",
  description: "HH Studio is a full-service creative marketing agency offering brand strategy, SEO, performance marketing, content production, and web design. Strategy-first. ROI-driven. Get started today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        {/* Subtle, moving film-grain noise texture overlay */}
        <div className="noise-overlay" />
        
        {/* Ambient grids, lighting, and mouse-parallax background */}
        <DynamicBackground />
        
        {/* Responsive, custom-interpolating spring cursor */}
        <CustomCursor />
        
        {/* Inertial scrolling frame */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
