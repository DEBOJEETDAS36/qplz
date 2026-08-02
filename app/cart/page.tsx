"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CartPage() {
  const { items, updateQty, removeItem, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <section className="px-5 py-24 text-center">
        <ShoppingBag size={40} className="mx-auto mb-4 opacity-30" />
        <h1 className="text-xl font-semibold mb-2">Your cart is empty</h1>
        <p className="text-sm opacity-70 mb-6">
          Browse the shop and add something you need for your next build.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                     bg-black text-white dark:bg-glow-blue dark:text-black
                     hover:opacity-90 transition-all duration-300"
        >
          Go to Shop
        </Link>
      </section>
    );
  }

  return (
    <section className="px-5 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Your <span className="text-glow-blue">Cart</span>
        </h1>

        <div className="space-y-4 mb-8">
          {items.map((item, i) => (
            <AnimatedSection key={item.productId} delay={i * 0.05}>
              <div
                className="flex items-center gap-4 p-4 rounded-2xl
                           border border-black/10 dark:border-white/10
                           bg-white dark:bg-white/2"
              >
                <div className="w-16 h-16 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <span className="text-[10px] opacity-40">Image</span>
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/shop/${item.slug}`}
                    className="text-sm font-medium hover:text-glow-blue transition-colors line-clamp-1"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-glow-blue font-medium mt-1">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="flex items-center gap-2 border border-black/10 dark:border-white/10 rounded-full px-2.5 py-1">
                  <button
                    onClick={() => updateQty(item.productId, item.qty - 1)}
                    className="hover:text-glow-blue transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="w-5 text-center text-sm">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.productId, item.qty + 1)}
                    className="hover:text-glow-blue transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={13} />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.productId)}
                  className="text-red-500/70 hover:text-red-500 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div
          className="flex items-center justify-between p-6 rounded-2xl
                     border border-black/10 dark:border-white/10
                     bg-white dark:bg-white/2 mb-6"
        >
          <span className="text-sm font-medium opacity-70">Total</span>
          <span className="text-xl font-semibold text-glow-blue">
            ₹{totalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/checkout"
            className="flex-1 text-center px-6 py-3 rounded-full text-sm font-medium
                      bg-black text-white dark:bg-glow-blue dark:text-black
                      hover:opacity-90 transition-all duration-300
                      dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.4)]"
          >
            Proceed to Checkout
          </Link>
          <button
            onClick={clearCart}
            className="px-6 py-3 rounded-full text-sm font-medium
                       border border-black/10 dark:border-white/10
                       hover:border-red-500/40 hover:text-red-500 transition-all duration-300"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
}