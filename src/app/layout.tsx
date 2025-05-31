import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Vinky Guivano",
  description: "Portofolio Website - Vinky Guivano",
  icons: "/Logo VG.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <div className="bg-[url(/bg-pattern.webp)] bg-no-repeat bg-size-[100%]">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
