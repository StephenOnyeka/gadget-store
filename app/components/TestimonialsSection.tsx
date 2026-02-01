import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Gadgetar completely transformed my streaming setup. The quality of gear is unmatched.",
    author: "Sarah Jenkins",
    role: "Twitch Streamer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
  },
  {
    quote:
      "Fast shipping and incredible customer support. Highly recommended for any creator.",
    author: "Marcus Chen",
    role: "YouTuber",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
  },
  {
    quote:
      "The curated selection makes it so easy to find exactly what I need for my studio.",
    author: "Elena Rodriguez",
    role: "Podcaster",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Trusted by Top Creators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg md:text-xl font-medium mb-8 leading-relaxed max-w-sm">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">{testimonial.author}</p>
                  <p className="text-xs text-zinc-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
