import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Managment App by Guillermo Diaz",
  description: "Discover the best rooms available in the best hotels around the world",
};

export default function RootLayout({
  children, }: Readonly<{
  children: React.ReactNode;
  }>
) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        {/* ?Footer */}
      </body>
    </html>
  );
}
