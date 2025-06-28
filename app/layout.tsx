import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "./globals.css";

import { auth } from "@/auth";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inbuking",
  description:
    "Inbuking adalah sebuah website yang menyediakan informasi tentang kamar kost/hotel yang bisa disewa",
  icons: {
    icon: "/avatar.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="id">
      <body className={`${raleway.variable} antialiased`}>
        <SessionProvider session={session}>
          <Navbar />
          <main className="bg-gray-50 min-h-screen">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
