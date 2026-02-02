"use client";

import { Button } from "./ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <>
      <section className="relative w-full py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-black text-white p-8 md:p-12 lg:p-20">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Reimagining the way you see the world
              </h1>
              <p className="text-lg text-zinc-300 mb-8 max-w-lg">
                Discover the next generation of content creation tools. Designed
                for creators who demand excellence.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-white text-black hover:bg-zinc-200"
                >
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-zinc-700 text-white hover:bg-zinc-800 hover:text-white"
                >
                  Read More
                </Button>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-full h-full md:w-1/2 opacity-50 md:opacity-100 pointer-events-none">
              <div className="relative w-full h-full">
                <Image
                  src="/images/VR.jpg"
                  alt="Hero Glasses"
                  fill
                  className="object-cover object-bottom mix-blend-screen opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between px-6 py-12 w-full mt-8 container mx-auto">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-semibold sm:text-5xl mb-6 text-black">
            Redefining content creation with Intelligence
          </h1>
        </div>
        <div className="justify-end">
          <p className="text-text-sm text-zinc-600 mb-8 max-w-lg">
            Discover the next generation of content creation tools. Designed for
            creators who demand excellence.
          </p>
        </div>
      </section>
      
    </>
  );
}
