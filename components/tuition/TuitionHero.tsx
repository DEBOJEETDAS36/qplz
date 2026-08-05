"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function TuitionHero() {
  return (
    <section className="relative overflow-hidden px-5 pt-20 pb-16 md:pt-28 md:pb-20">
      {/* Background Glow - Scaled down for mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 md:-top-40 left-1/2 -translate-x-1/2
                   w-[320px] h-[320px] md:w-[600px] md:h-[600px] rounded-full
                   dark:bg-glow-blue/10 blur-2xl md:blur-3xl opacity-0 dark:opacity-100
                   transition-opacity duration-700"
      />

      {/* Physics Network SVG Animation - Lower opacity on mobile */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25 md:opacity-70">
        <svg className="w-full h-full" xmlns="http://w3.org">
          {/* Animated Matrix Grid */}
          <defs>
            <pattern id="grid" width="40" height="40" md-width="60" md-height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-glow-blue/10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Drifting Physics Node 1 - Tighter bounds for small screens */}
          <motion.circle
            cx="15%"
            cy="25%"
            r="3"
            className="fill-glow-blue"
            animate={{ x: [0, 15, -10, 0], y: [0, -20, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="15%"
            cy="25%"
            r="12"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-glow-blue/20"
            animate={{ x: [0, 15, -10, 0], y: [0, -20, 10, 0], scale: [1, 1.1, 0.9, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Drifting Physics Node 2 */}
          <motion.circle
            cx="85%"
            cy="70%"
            r="4"
            className="fill-glow-blue"
            animate={{ x: [0, -20, 10, 0], y: [0, 15, -15, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="85%"
            cy="70%"
            r="18"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 3"
            fill="none"
            className="text-glow-blue/30"
            animate={{ x: [0, -20, 10, 0], y: [0, 15, -15, 0], rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Responsive Sine Wave (ViewBox independent layout compatibility) */}
          <motion.path
            d="M -50,160 Q 150,90 350,160 T 750,160"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-glow-blue/15"
            animate={{ d: [
              "M -50,160 Q 150,90 350,160 T 750,160",
              "M -50,140 Q 150,180 350,140 T 750,140",
              "M -50,160 Q 150,90 350,160 T 750,160"
            ]}}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest uppercase
                     text-glow-blue mb-5 border border-glow-blue/30 rounded-full px-4 py-1.5
                     dark:shadow-[0_0_15px_rgba(59,167,255,0.15)] bg-background/50 backdrop-blur-sm"
        >
          <BookOpen size={14} />
          Tuition
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15]"
        >
          Physics, taught with{" "}
          <span className="text-glow-blue">clarity and depth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base md:text-lg opacity-70 max-w-xl mx-auto leading-relaxed"
        >
          Structured Physics coaching from Class 8 through 12 — with a
          dedicated Foundation track and specialised JEE &amp; NEET batches
          for serious aspirants.
        </motion.p>
      </div>
    </section>
  );
}
