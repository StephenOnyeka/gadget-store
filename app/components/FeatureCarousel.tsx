"use client";

import {
  ArrowLeft,
  ArrowRight,
  Languages,
  Video,
  Bell,
  Mic,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Real-time translation",
    description:
      "Break down language barriers instantly. Our advanced AI model translates conversations in real-time, ensuring seamless collaboration.",
    icon: Languages,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    color: "bg-white",
    overlay: (
      <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md text-white px-4 py-3 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <Video className="w-4 h-4 text-zinc-300" />
        <span className="text-sm font-medium">Recording video...</span>
      </div>
    ),
  },
  {
    title: "Notifications display",
    description:
      "Stay connected without distraction. Critical alerts and messages appear discreetly in your peripheral vision.",
    icon: Bell,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&auto=format&fit=crop&q=80", // Woman with glasses
    color: "bg-zinc-50",
    overlay: (
      <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col gap-3">
        <div className="bg-black/90 backdrop-blur-md text-white p-4 rounded-xl shadow-xl max-w-xs animate-in slide-in-from-right-8 fade-in duration-700 delay-100">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-xs font-medium text-zinc-400">
              Lumen • Now
            </span>
          </div>
          <p className="text-sm">
            You've been focused for 45 minutes. Time for a short break?
          </p>
        </div>
        <div className="bg-black/90 backdrop-blur-md text-white p-4 rounded-xl shadow-xl max-w-xs animate-in slide-in-from-right-8 fade-in duration-700 delay-300">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-xs font-medium text-zinc-400">
              Calendar • 10m
            </span>
          </div>
          <p className="text-sm">
            Meeting with Design Team starts in 10 minutes.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Voice assistant control",
    description:
      "Control your world with your voice. From sending emails to adjusting your environment, just ask Lumen.",
    icon: Mic,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&auto=format&fit=crop&q=80", // Man portrait
    color: "bg-zinc-100",
    overlay: (
      <div className="absolute bottom-12 left-8 md:left-12 flex flex-col gap-4">
        <div className="flex items-end gap-2">
          <div className="bg-black text-white px-4 py-2 rounded-2xl rounded-bl-sm animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-white/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
              <span className="text-sm">
                Hey Lumen, send this PDF to email.
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="bg-white/90 backdrop-blur text-black px-4 py-3 rounded-2xl rounded-tl-sm shadow-lg max-w-xs animate-in fade-in slide-in-from-left-4 duration-500 delay-300">
            <p className="text-sm font-medium">
              PDF sent to your inbox. Let me know if you'd like to forward it to
              someone else.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export function FeatureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentFeature = features[currentSlide];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">
            Smarter tech, sleeker vision
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Experience technology that adapts to your workflow. From real-time
            translation to intuitive controls, everything is designed to amplify
            your creativity.
          </p>
        </div>

        {/* Feature Card */}
        <div className="relative">
          <div
            className={cn(
              "bg-zinc-50 rounded-[3rem] p-4 md:p-6 overflow-hidden border border-zinc-100 shadow-sm transition-all duration-500 ease-in-out",
              isAnimating ? "opacity-80 scale-[0.99]" : "opacity-100 scale-100",
            )}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[500px]">
              {/* Left Content */}
              <div className="flex flex-col justify-center p-8 lg:p-12 order-2 lg:order-1">
                <div
                  key={`icon-${currentSlide}`}
                  className="animate-in fade-in zoom-in duration-500"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-8">
                    <currentFeature.icon className="w-6 h-6 text-black" />
                  </div>
                </div>

                <h3
                  key={`title-${currentSlide}`}
                  className="text-3xl font-bold mb-4 text-black animate-in fade-in slide-in-from-left-4 duration-500"
                >
                  {currentFeature.title}
                </h3>

                <p
                  key={`desc-${currentSlide}`}
                  className="text-zinc-500 mb-8 leading-relaxed animate-in fade-in slide-in-from-left-4 duration-500 delay-100"
                >
                  {currentFeature.description}
                </p>

                <div
                  key={`btn-${currentSlide}`}
                  className="animate-in fade-in slide-in-from-left-4 duration-500 delay-200"
                >
                  <Button className="rounded-full bg-black text-white px-8 py-6 text-base hover:bg-zinc-800 transition-colors">
                    Reserve now
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-[400px] lg:h-auto bg-zinc-200 rounded-[2.5rem] overflow-hidden order-1 lg:order-2">
                <Image
                  key={`img-${currentSlide}`}
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  fill
                  className="object-cover animate-in fade-in duration-700"
                  priority
                />

                {/* Custom Overlay for each feature */}
                <div key={`overlay-${currentSlide}`}>
                  {currentFeature.overlay}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-zinc-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black hover:scale-110 active:scale-95 transition-all duration-300 group"
            >
              <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
