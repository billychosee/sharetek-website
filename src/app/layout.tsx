import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import CookieConsent from "./components/CookieConsent"; // 👈 add this

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharetek - Innovative Tech Solutions",
  description: "Empowering your business with modern technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sharetek_logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${montserrat.variable} antialiased text-black font-sans`}
      >
        <Navbar />
        {children}

        <CookieConsent />
      </body>
    </html>
  );
}

