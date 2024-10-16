import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LockProvider } from "@/context/lockContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Thakur",
  description: "Sahil thakur portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LockProvider>
      <body className={inter.className}>{children}</body>
      </LockProvider>
    </html>
  );
}
