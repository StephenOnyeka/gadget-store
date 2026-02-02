"use client";

import { useCart } from "@/app/context/cart-context";
import { Button } from "@/app/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { toggleCart, items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-black">
          Gadgetar<span className="text-zinc-400">.</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
          >
            Contact
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCart}
            className="relative hover:bg-black/5 text-black"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
