import type { Metadata } from "next";
import { Geist, Geist_Mono, Inconsolata, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-kyokasho",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Branching Logic",
  description: "Native Plant Ecologies as Computational and Textile Pattern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inconsolata.variable} ${notoSansJP.variable} antialiased min-h-screen flex flex-col`}
      >
        <Nav />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
