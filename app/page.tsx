import { Hero } from "@/app/components/Hero";
import { ProductGrid } from "@/app/components/ProductGrid";
import { Footer } from "@/app/components/Footer";
import { Benefits } from "@/app/components/Benefits";
import { CategoryShowcase } from "@/app/components/CategoryShowcase";
import { TestimonialsSection } from "@/app/components/TestimonialsSection";
import { CreatorArchetypes } from "@/app/components/CreatorArchetypes";
import { Hero2 } from "@/app/components/Hero2";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* <CategoryShowcase /> */}
      <CreatorArchetypes />
      <Benefits />
      <ProductGrid />
      <Hero2 />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
