"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Hexagon,
  Circle,
  Triangle,
  Square,
  Box,
  Layers,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "Lumen glasses keep my mind clear and hands free. I get context, cues, and helpful guidance—without needing to pause or switch devices constantly",
    author: "Matt Cannon",
    role: "VP of Engineering at Vireon",
    avatar:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "The audio quality is superb. It feels like I'm in a studio, even when I'm streaming from a busy cafe. Absolute game changer for my content.",
    author: "Sarah Jenkins",
    role: "Twitch Streamer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    quote:
      "Finally, gear that keeps up with my workflow. No more tangled cables or complex setups. Just pure creativity.",
    author: "Marcus Chen",
    role: "Freelance Videographer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
  },
];

const companies = [
  { name: "Ankora", icon: Hexagon },
  { name: "Converra", icon: Circle },
  { name: "Nexora", icon: Triangle },
  { name: "Syncell", icon: Zap },
  { name: "Socium", icon: Square },
  { name: "Bridgr", icon: Layers },
  { name: "Netspire", icon: Box },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-50 rounded-[3rem] px-6 py-16 md:p-24 relative overflow-hidden">
          {/* Navigation Buttons - Absolute Positioned on Desktop */}
          <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-white hover:border-black transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 text-zinc-600 group-hover:text-black" />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-white hover:border-black transition-all duration-300 group"
            >
              <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-black" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-between mb-8">
            <button
              onClick={prevSlide}
              className="p-2 border border-black/10 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 border border-black/10 rounded-full"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonial Content */}
          <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
            <div
              key={currentIndex}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-12 leading-snug md:leading-tight tracking-tight">
                "{currentTestimonial.quote}"
              </h2>

              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-sm">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-black text-lg">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-zinc-500">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Companies Logo Strip */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {companies.map((company, i) => (
              <div key={i} className="flex items-center gap-2">
                <company.icon className="w-6 h-6" strokeWidth={2.5} />
                <span className="font-bold text-xl tracking-tight">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
