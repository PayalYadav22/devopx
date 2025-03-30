import type { Metadata } from "next";
import { Inter, Calistoga, Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import Header from "@/section/Header";
import { Footer } from "@/section";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Payal Yadav",
  description: "Payal Yadav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          poppins.variable,
          `text-white bg-gray-900 antialiased font-sans`
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
