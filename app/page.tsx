import { Hero } from "@/app/components/Hero";
import { ProductGrid } from "@/app/components/ProductGrid";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ProductGrid />
      <section className="py-20 border-t border-white/5 bg-zinc-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Elevate Your Content</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Join thousands of creators who trust Gadgetar for their gear. Fast
            shipping, expert support, and premium quality.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
