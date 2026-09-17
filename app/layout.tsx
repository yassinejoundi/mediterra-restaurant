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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Mediterra | Italian Restaurant in Marrakech",
  description:
    "Mediterra is a romantic Mediterranean table in Marrakech, serving handmade pasta, Italian classics, and warm hospitality.",
  keywords: [
    "Mediterra Marrakech",
    "Italian restaurant Marrakech",
    "handmade pasta Marrakech",
    "restaurant Medina Marrakech",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mediterra | Italian Restaurant in Marrakech",
    description:
      "Handmade pasta, Italian discipline, and Marrakech generosity for evenings that linger.",
    url: "/",
    siteName: "Mediterra Marrakech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediterra | Italian Restaurant in Marrakech",
    description:
      "Handmade pasta, Italian discipline, and Marrakech generosity for evenings that linger.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={cn(
        "h-full scroll-smooth antialiased motion-reduce:scroll-auto",
        manrope.variable,
        playfairDisplay.variable,
        publicSans.variable
      )}
    >
      <body className="flex min-h-full flex-col bg-plaster text-espresso">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
