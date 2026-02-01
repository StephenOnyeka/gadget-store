"use client";

import { Product } from "@/app/data/products";
import { Button } from "@/app/components/ui/button";
import { useCart } from "@/app/context/cart-context";
import Image from "next/image";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group relative flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 transition-colors group-hover:border-white/20">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            className="w-full bg-white text-black hover:bg-zinc-200"
            onClick={() => addItem(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg tracking-tight">{product.name}</h3>
          <span className="font-semibold text-zinc-400">${product.price}</span>
        </div>
        <p className="text-sm text-zinc-500 mt-1">{product.category}</p>
      </div>
    </div>
  );
}
