import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { CartProvider } from "@/context/cart-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Pizza",
  description: "Best Pizza e um app de delivery de pizza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
