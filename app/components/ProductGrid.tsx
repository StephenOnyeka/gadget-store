import { ProductCard } from "./ProductCard";
import { products } from "@/app/data/products";

export function ProductGrid() {
  return (
    <section className="container mx-auto px-6 py-20" id="products">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Find your perfect fit
          </h2>
          <p className="text-zinc-400">
            Curated gear for professional creators.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
