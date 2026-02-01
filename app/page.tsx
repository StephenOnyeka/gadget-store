import { Hero } from "@/app/components/Hero";
import { ProductGrid } from "@/app/components/ProductGrid";
import { Footer } from "@/app/components/Footer";
import { Benefits } from "@/app/components/Benefits";
import { CategoryShowcase } from "@/app/components/CategoryShowcase";
import { TestimonialsSection } from "@/app/components/TestimonialsSection";
import { FeatureCarousel } from "@/app/components/FeatureCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <CategoryShowcase />
      <FeatureCarousel />
      <ProductGrid />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
