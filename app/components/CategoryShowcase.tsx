import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CategoryShowcase() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-black">
              Shop by Category
            </h2>
            <p className="text-zinc-600">
              Explore gear tailored to your craft.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center text-sm font-medium hover:underline"
          >
            View all <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Large Card - Audio */}
          <Link
            href="/products"
            className="group relative overflow-hidden rounded-3xl md:col-span-2 bg-black"
          >
            <Image
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80"
              alt="Audio Gear"
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Professional Audio</h3>
              <p className="text-zinc-300">Mics, Headphones & Interfaces</p>
            </div>
          </Link>

          {/* Tall Card - Lighting */}
          <Link
            href="/products"
            className="group relative overflow-hidden rounded-3xl bg-zinc-900 md:row-span-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1554048612-387768052bf7?w=600&auto=format&fit=crop&q=80"
              alt="Lighting"
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Studio Lighting</h3>
              <p className="text-zinc-300">Key Lights & RGB</p>
            </div>
          </Link>

          {/* Regular Card - Cameras */}
          <Link
            href="/products"
            className="group relative overflow-hidden rounded-3xl bg-zinc-800"
          >
            <Image
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"
              alt="Cameras"
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Cameras & Drones</h3>
              <p className="text-zinc-300">Capture 4K Perfection</p>
            </div>
          </Link>

          {/* Regular Card - Workspace */}
          <Link
            href="/products"
            className="group relative overflow-hidden rounded-3xl bg-zinc-800"
          >
            <Image
              src="https://images.unsplash.com/photo-1587829741301-308231f890f0?w=800&auto=format&fit=crop&q=80"
              alt="Workspace"
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Workspace Setup</h3>
              <p className="text-zinc-300">Keyboards & Accessories</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
