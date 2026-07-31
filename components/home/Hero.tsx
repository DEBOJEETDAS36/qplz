"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Ambient glow background — dark mode only */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2
                   w-[600px] h-[600px] rounded-full
                   dark:bg-glow-blue/10 blur-3xl opacity-0 dark:opacity-100
                   transition-opacity duration-700"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs md:text-sm font-medium tracking-widest uppercase
                     text-glow-blue mb-5 border border-glow-blue/30 rounded-full px-4 py-1.5
                     dark:shadow-[0_0_15px_rgba(59,167,255,0.15)]"
        >
          Electronics &middot; IoT &middot; R&amp;D
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]"
        >
          Build. Learn. <span className="text-glow-blue">Create.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base md:text-lg opacity-70 max-w-xl mx-auto leading-relaxed"
        >
          Hands-on electronics &amp; IoT workshops for curious students, and a
          shop stocked with everything you need to bring your next project to
          life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/workshop"
            className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                       bg-black text-white dark:bg-glow-blue dark:text-black
                       hover:opacity-90 transition-all duration-300
                       dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.5)]"
          >
            <Cpu size={16} />
            Explore Workshops
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/shop"
            className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                       border border-black/15 dark:border-white/15
                       hover:border-glow-blue/60 transition-all duration-300
                       dark:hover:shadow-[0_0_20px_rgba(59,167,255,0.25)]"
          >
            <ShoppingBag size={16} />
            Visit Shop
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}