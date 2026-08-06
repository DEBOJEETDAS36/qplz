"use client";

import { motion } from "framer-motion";
import { Images } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden px-5 pt-20 pb-10 md:pt-28 md:pb-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2
                   w-[600px] h-[600px] rounded-full
                   dark:bg-glow-blue/10 blur-3xl opacity-0 dark:opacity-100
                   transition-opacity duration-700"
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest uppercase
                     text-glow-blue mb-5 border border-glow-blue/30 rounded-full px-4 py-1.5
                     dark:shadow-[0_0_15px_rgba(59,167,255,0.15)]"
        >
          <Images size={14} />
          Gallery
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15]"
        >
          Moments from{" "}
          <span className="text-glow-blue">across the center</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base md:text-lg opacity-70 max-w-xl mx-auto leading-relaxed"
        >
          Student projects, shop products, and everyday moments — a look
          inside what we do.
        </motion.p>
      </div>
    </section>
  );
}