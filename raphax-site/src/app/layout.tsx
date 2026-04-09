import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const goldplay = localFont({
  src: [
    {
      path: "./fonts/Goldplay Alt Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Goldplay Alt Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Goldplay Alt SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Goldplay Alt Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-goldplay",
});

export const metadata: Metadata = {
  title: "Raphax Home Health | Compassionate Care, Right at Home",
  description: "Raphax Home Health is a licensed home health agency providing skilled nursing, personal care, companion care, and therapy services to patients at home. Serving families with compassion and clinical excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${goldplay.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
