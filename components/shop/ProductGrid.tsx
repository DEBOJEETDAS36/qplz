"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch((err) => console.error("Failed to load products:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="px-5 py-10 md:py-16">
      <div className="max-w-6xl mx-auto">
        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-black/5 dark:bg-white/5 animate-pulse"
              />
            ))}
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-sm opacity-60 py-16">
            No products yet — check back soon.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <AnimatedSection key={product._id} delay={(i % 4) * 0.08}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}