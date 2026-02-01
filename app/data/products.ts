export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Lumen Smart Glasses",
    price: 299,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&auto=format&fit=crop&q=60",
    description: "Reimagining the way you see the world with AI-powered overlays.",
  },
  {
    id: "2",
    name: "Sonic Pro Headset",
    price: 199,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1546435770-a37d536c04e2?w=800&auto=format&fit=crop&q=60",
    description: "Immersive sound with active noise cancellation for creators.",
  },
  {
    id: "3",
    name: "Vision 4K Camera",
    price: 899,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
    description: "Cinematic quality in a compact body. Perfect for vlogging.",
  },
  {
    id: "4",
    name: "StreamDeck Mini",
    price: 149,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=60",
    description: "Control your stream with a touch. 6 LCD keys.",
  },
  {
    id: "5",
    name: "SkyDrone Air",
    price: 799,
    category: "Drones",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?w=800&auto=format&fit=crop&q=60",
    description: "4K aesthetic footage from above. Foldable and lightweight.",
  },
  {
    id: "6",
    name: "PodMic USB",
    price: 129,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=60",
    description: "Broadcast-quality dynamic microphone for podcasting.",
  },
];
