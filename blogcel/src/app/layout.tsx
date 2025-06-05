import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Bits & Volts",
  description: "O melhor catalogo de celulares do mundo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-m-96 scroll-smooth" lang="pt-br">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
