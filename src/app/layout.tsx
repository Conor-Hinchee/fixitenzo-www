import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Anton } from "next/font/google"; // Import the new font
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton", // Add a CSS variable for the new font
  subsets: ["latin"],
  weight: "400", // Anton only has one weight
});

export const metadata: Metadata = {
  title: "Fix it Enzo",
  description: "Next Generation of Home Improvement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
