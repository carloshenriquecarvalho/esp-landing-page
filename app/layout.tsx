import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ESP - Soluções Financeiras",
  description: "Author: Nexus Tecnologia e Inovação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <GoogleTagManager gtmId="GTM-XXXXXXX"></GoogleTagManager>
      <GoogleAnalytics gaId="AW-18043821234" />
      <body className="min-h-full flex flex-col">
        {children}
        </body>
    </html>
  );
}