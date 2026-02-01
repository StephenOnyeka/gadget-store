import { Truck, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Get your gear delivered in record time.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "100% secure payment with WhatsApp integration.",
  },
  {
    icon: Zap,
    title: "Premium Quality",
    description: "Handpicked gear for professional creators.",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    description: "24/7 assistance for all your setup needs.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-zinc-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
