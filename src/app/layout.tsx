import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import CookieConsent from "./components/CookieConsent"; // 👈 add this

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
      <body className="font-sans antialiased text-black">
        <Navbar />
        {children}

        <CookieConsent />
      </body>
    </html>
  );
}
