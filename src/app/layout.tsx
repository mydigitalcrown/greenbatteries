import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Batteries | Battery Swapping Revolution",
  description: "Green Batteries - India's leading battery swapping network. Swap, ride, and go green with instant battery exchange for electric vehicles.",
  keywords: "battery swapping, electric vehicles, green energy, EV charging, battery exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
