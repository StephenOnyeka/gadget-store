import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/app/components/Navbar";
import { CartSidebar } from "@/app/components/CartSidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gadgetar Store",
  description: "Premium tech gear for content creators",
};

import { CartProvider } from "@/app/context/cart-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-black font-sans antialiased text-white selection:bg-white selection:text-black",
          inter.variable,
        )}
      >
        <CartProvider>
          <Navbar />
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
