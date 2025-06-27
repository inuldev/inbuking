import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/navbar/navbar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buking Kamar",
  description:
    "Buking Kamar adalah sebuah website yang menyediakan informasi tentang kamar kost/hotel yang bisa disewa",
  icons: {
    icon: "/avatar.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${raleway.variable} antialiased`}>
        <Navbar />
        <main className="bg-gray-50 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
