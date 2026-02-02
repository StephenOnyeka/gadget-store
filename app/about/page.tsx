"use client";

import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/app/components/ui/TextReveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* 1. HERO SECTION */}
      {/* <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Redefining the Creator Experience
            </h1>
            <p className="text-xl text-zinc-500 mb-8 max-w-md leading-relaxed">
              We bridge the gap between imagination and reality. Gadgetar
              provides the ultimate toolkit for the modern digital creator.
            </p>
            <Button className="rounded-full px-8 py-6 text-base bg-black text-white hover:bg-zinc-800">
              Reserve now
            </Button>
          </div>
          <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-zinc-100">
            <Image
              src="https://images.unsplash.com/photo-1572569028738-411a39a74aa9?q=80&w=2070&auto=format&fit=crop"
              alt="Smart Glasses Close-up"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section> */}

      {/* 2. MISSION & STATS SECTION */}
      <section className="container mx-auto px-6 py-24 border-t border-zinc-100">
        <div className="">
          <div className="lg:col-span-5 relative">
            <TextReveal text="We are building the ultimate wearable toolkit for the modern creator, bridging the gap between imagination and reality to redefine how stories are told; The one-stop for all digital creators." />
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 md:pt-24 text-center">
            <div>
              <p className="text-6xl font-bold mb-2">50+</p>
              <p className="text-zinc-500">Global Partners</p>
            </div>
            <div>
              <p className="text-6xl font-bold mb-2">230+</p>
              <p className="text-zinc-500">Products Pre-ordered</p>
            </div>
            <div>
              <p className="text-6xl font-bold mb-2">500+</p>
              <p className="text-zinc-500">Products Curated</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUES SECTION */}
      <ValuesSection />

      {/* 4. SHOWROOM SECTION */}
      {/* <section className="container mx-auto px-6 py-24">
        <div className="relative rounded-[3rem] overflow-hidden h-[600px] bg-black">
          <Image
            src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop"
            alt="Showroom"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent p-12 md:p-24 flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 max-w-xl">
              Experience it in person
            </h2>
            <div className="flex flex-col gap-4 text-white/80 text-lg">
              <p className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" /> San Francisco HQ
              </p>
              <p className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" /> New York Pop-up
              </p>
              <p className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" /> London Studio
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <TeamSection /> */}
      <FAQSection />
      <Footer />
    </main>
  );
}

import { useRef } from "react";
// import { Lightbulb, Target, Lock, TrendingUp } from "lucide-react";
import { MdBarChart, MdLightbulb, MdLock } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const ValuesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const values = [
    {
      title: "Innovation",
      description:
        "We curate the bleeding edge of creator tech. If it changes the game, you'll find it here first.",
      icon: MdLightbulb,
    },
    {
      title: "Accuracy",
      description:
        "Precision tools for precision work. We only stock gear that meets the rigorous demands of professional workflows.",
      icon: FaPaperPlane,
    },
    {
      title: "Trust",
      description:
        "Genuine products, verified suppliers, and a community that backs you up. We take the risk out of buying high-end tech.",
      icon: MdLock,
    },
    {
      title: "Scalability",
      description:
        "From solo creators to enterprise studios, our catalog scales with your ambition. Grow your toolkit as you grow your audience.",
      icon: MdBarChart,
    },
    // Duplicating for scroll demo effect
    {
      title: "Vision",
      description:
        "We believe the future belongs to those who create it. Our mission is to put the most powerful tools in your hands.",
      icon: MdLightbulb,
    },
  ];

  return (
    <section className="bg-zinc-50 py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              Guided by what matters
            </h2>
            <p className="text-zinc-500 text-base">
              Our philosophy is simple: Technology should be an extension of
              your creativity, not a barrier. We prioritize tools that are
              intuitive, powerful, and reliable.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-white hover:border-black transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={scrollRight}
              className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-white hover:border-black transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {values.map((item, i) => (
            <div
              key={i}
              className="w-[300px] md:w-[350px] bg-white p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between h-[250px] snap-center shrink-0 border"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-black" />
                </div>
              </div>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section

function TeamSection() {
  const team = [
    {
      name: "Alex Rivera",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Sarah Chen",
      role: "Head of AI",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Michael Ross",
      role: "Design Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Elena Silva",
      role: "Lead Engineer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-24">
      <h2 className="text-4xl font-semibold mb-16">Meet our experts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-zinc-100">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-zinc-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "How fast is shipping?",
      a: "We offer expedited worldwide shipping. Most orders are processed within 24 hours and arrive within 2-5 business days.",
    },
    {
      q: "Do you offer warranties?",
      a: "Yes, all Gadgetar products come with a comprehensive 2-year warranty and lifetime technical support.",
    },
    {
      q: "What is your return policy?",
      a: "We offer a 30-day no-questions-asked return policy. If the gear doesn't fit your workflow, send it back for a full refund.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container mx-auto px-6 py-24 border-t border-zinc-100 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-semibold sticky top-32">
            Got questions?
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-zinc-100 pb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left py-6 flex items-center justify-between group"
                >
                  <span className="text-xl font-medium flex gap-8">
                    <span className="text-zinc-300">0{i + 1}</span>
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-bold uppercase transition-colors",
                      openIndex === i ? "text-black" : "text-zinc-400",
                    )}
                  >
                    {openIndex === i ? "Close" : "Open"}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out pl-14",
                    openIndex === i
                      ? "grid-rows-[1fr] opacity-100 pb-8"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-zinc-500 text-lg leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
