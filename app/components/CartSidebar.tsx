"use client";

import { Sheet } from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";
import { useCart } from "@/app/context/cart-context";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export function CartSidebar() {
  const { isCartOpen, toggleCart, items, removeItem, total } = useCart();

  const handleCheckout = () => {
    const phoneNumber = "2349162342603";
    let message = "New Order Request:\n\n";

    items.forEach((item) => {
      message += `- ${item.name} (x${item.quantity}) - $${item.price * item.quantity}\n`;
    });

    message += `\nTotal: $${total}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <Sheet isOpen={isCartOpen} onClose={toggleCart} title="Your Cart">
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <div className="relative w-16 h-16 rounded overflow-hidden bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeItem(item.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <Button
              className="w-full bg-white text-black hover:bg-zinc-200"
              onClick={handleCheckout}
            >
              Checkout via WhatsApp
            </Button>
          </div>
        </div>
      )}
    </Sheet>
  );
}
