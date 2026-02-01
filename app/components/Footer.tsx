export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">
            Gadgetar<span className="text-zinc-600">.</span>
          </h2>
          <p className="text-sm text-zinc-500">
            Empowering creators with the best tech.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">
            Shop
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Refund Policy
          </a>
        </div>
        <div className="text-xs text-zinc-600">
          © 2024 Gadgetar Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
