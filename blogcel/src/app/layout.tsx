import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
