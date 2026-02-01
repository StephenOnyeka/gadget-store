"use client";

import { products } from "@/app/data/products";
import { ProductCard } from "@/app/components/ProductCard";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";

const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 font-mono">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-black">
            Curated Gear
          </h1>
          <p className="text-zinc-600 max-w-lg mx-auto">
            The best tools for creators, handpicked for quality and aesthetics.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full ${
                selectedCategory === category
                  ? "bg-black text-white hover:bg-zinc-800"
                  : "bg-white text-black border-zinc-200 hover:bg-zinc-100"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
