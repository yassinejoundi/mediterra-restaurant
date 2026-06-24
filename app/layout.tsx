import type { Metadata } from "next";
import { Manrope, Playfair_Display, Public_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });

export const metadata: Metadata = {
  title: "Mediterra Marrakech",
  description: "A romantic Mediterranean table in Marrakech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth antialiased", manrope.variable, playfairDisplay.variable, publicSans.variable)}
    >
      <body className="flex min-h-full flex-col bg-plaster text-espresso">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
