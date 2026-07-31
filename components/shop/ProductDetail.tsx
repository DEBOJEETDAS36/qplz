"use client";

import { useState } from "react";
import { ShoppingCart, Minus, Plus, Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Product } from "@/types";

export default function ProductDetail({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    // Cart logic will be wired up later (context/state management)
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="px-5 py-16 md:py-24">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        <AnimatedSection>
          <div className="aspect-square rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/10 dark:border-white/10">
            <span className="text-sm opacity-40">Product Image</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <span className="text-xs font-medium px-3 py-1 rounded-full border border-black/10 dark:border-white/10 opacity-70">
            {product.category}
          </span>

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mt-4 mb-2">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold text-glow-blue mb-5">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="text-sm opacity-70 leading-relaxed mb-8">
            {product.description || "No description available yet."}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium">Quantity</span>
            <div className="flex items-center gap-3 border border-black/10 dark:border-white/10 rounded-full px-3 py-1.5">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="hover:text-glow-blue transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center text-sm">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="hover:text-glow-blue transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium
                       bg-black text-white dark:bg-glow-blue dark:text-black
                       hover:opacity-90 transition-all duration-300
                       dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.4)]"
          >
            {added ? (
              <>
                <Check size={16} /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart size={16} /> Add to Cart
              </>
            )}
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}