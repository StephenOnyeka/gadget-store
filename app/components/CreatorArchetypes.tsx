"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mic,
  Video,
  Camera,
  Monitor,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const archetypes = [
  {
    id: "streamer",
    label: "The Streamer",
    icon: Video,
    description:
      "Build the ultimate streaming command center. From professional lighting to crystal-clear audio, we have the gear to keep your viewers engaged.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "vlogger",
    label: "The Vlogger",
    icon: Camera,
    description:
      "Lightweight, powerful gear for creators who never stop moving. Gimbals, compact cameras, and mobile kits designed for the streets.",
    image:
      "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: "podcaster",
    label: "The Podcaster",
    icon: Mic,
    description:
      "Broadcast your voice with clarity. Professional microphones, boom arms, and acoustic treatment for that perfect radio sound.",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: "editor",
    label: "The Editor",
    icon: Monitor,
    description:
      "Optimize your post-production with ergonomic peripherals, high-fidelity monitors, and productivity tools.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&auto=format&fit=crop&q=80",
  },
];

export function CreatorArchetypes() {
  const [activeId, setActiveId] = useState("streamer");
  const activeArchetype =
    archetypes.find((a) => a.id === activeId) || archetypes[0];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Accordion List */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-black">
              Whom We Serve
            </h2>

            <div className="space-y-4">
              {archetypes.map((archetype) => (
                <div
                  key={archetype.id}
                  className="border-b border-zinc-100 last:border-0 pb-4"
                >
                  <button
                    onClick={() => setActiveId(archetype.id)}
                    className="w-full text-left group flex items-start gap-6 py-4 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        "mt-1 transition-colors duration-300",
                        activeId === archetype.id
                          ? "text-black"
                          : "text-zinc-300 group-hover:text-zinc-400",
                      )}
                    >
                      <archetype.icon
                        className="w-8 h-8 fill-current"
                        strokeWidth={0}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className={cn(
                            "text-xl font-bold transition-colors duration-300",
                            activeId === archetype.id
                              ? "text-black"
                              : "text-zinc-300 group-hover:text-zinc-400",
                          )}
                        >
                          {archetype.label}
                        </h3>
                        {activeId === archetype.id ? (
                          <ChevronDown className="w-5 h-5 text-black" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-zinc-300 group-hover:text-zinc-400" />
                        )}
                      </div>

                      <div
                        className={cn(
                          "grid transition-[grid-template-rows] duration-500 ease-in-out",
                          activeId === archetype.id
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="text-zinc-500 leading-relaxed pt-2 pb-4">
                            {archetype.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image Display */}
          <div className="relative h-[600px] w-full bg-zinc-50 rounded-[3rem] p-8 md:p-12 overflow-hidden">
            {archetypes.map((archetype) => (
              <div
                key={archetype.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-in-out px-8 py-12 md:px-12 md:py-16 flex items-center justify-center",
                  activeId === archetype.id
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0",
                )}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={archetype.image}
                    alt={archetype.label}
                    fill
                    className="object-cover"
                    priority={archetype.id === "streamer"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
