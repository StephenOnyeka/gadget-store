import { ProductCard } from "./ProductCard";
import { products } from "@/app/data/products";
import Link from "next/link";
import { Button } from "./ui/button";

export function ProductGrid() {
  const displayedProducts = products.slice(0, 9);

  return (
    <section className="container mx-auto px-6 py-20" id="products">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-black">
            Find your perfect fit
          </h2>
          <p className="text-zinc-600">
            Curated gear for professional creators.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-12">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          asChild
          size="lg"
          className="rounded-full px-8 bg-black text-white hover:bg-zinc-800"
        >
          <Link href="/products">See More Products</Link>
        </Button>
      </div>
    </section>
  );
}
