import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { Providers } from "@/app/providers";
import "./globals.css";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Managment App by Guillermo Diaz",
  description: "Discover the best rooms available in the best hotels around the world",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body className={onest.className}>
        <Providers>
          <Header />
            <main>
              {children}
            </main>
          {/* ?Footer */}
        </Providers>
      </body>
    </html>
  );
}
