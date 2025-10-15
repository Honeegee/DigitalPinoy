import type { Metadata } from "next";
import { Playfair_Display, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Pinoy: Philippine Pop Culture 2000–2010",
  description: "A virtual museum celebrating the Philippines' digital culture from 2000-2010. Experience Friendster profiles, internet cafés, teleseryes, OPM music, and more.",
  keywords: "Philippines, digital culture, 2000s, museum, Friendster, OPM, teleserye, nostalgia",
  authors: [{ name: "Digital Pinoy Team" }],
  openGraph: {
    title: "Digital Pinoy: Philippine Pop Culture 2000–2010",
    description: "Step into our digital time machine and relive the decade that shaped Filipino digital identity",
    type: "website",
    siteName: "Digital Pinoy Museum"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} ${roboto.variable} antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
