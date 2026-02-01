import type { Metadata } from "next";
// import { JetBrains_Mono } from "next/font/google";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/app/components/Navbar";
import { CartSidebar } from "@/app/components/CartSidebar";
import { CartProvider } from "@/app/context/cart-context";

const fontMono = Mona_Sans({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gadgetar Store",
  description: "Premium tech gear for content creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-mono antialiased text-foreground selection:bg-black selection:text-white",
          fontMono.variable,
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
