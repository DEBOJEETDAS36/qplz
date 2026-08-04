"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function WorkshopHero() {
  return (
    <section className="relative overflow-hidden px-5 pt-20 pb-16 md:pt-28 md:pb-20">
      {/* Ambient glow background — Restricted and blurred properly to prevent crowding */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 md:-top-40 left-1/2 -translate-x-1/2
                   w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full
                   dark:bg-glow-blue/10 blur-[100px] md:blur-[140px] opacity-0 dark:opacity-70 md:dark:opacity-100
                   transition-all duration-700"
      />

      {/* Oscilloscope / Signal Graph Canvas Background */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none opacity-40 dark:opacity-60">
        <svg className="absolute w-full h-full" xmlns="http://w3.org">
          <defs>
            {/* Fine Laboratory Grid */}
            <pattern id="lab-grid" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-black/[0.05] dark:text-white/[0.04]" />
            </pattern>
            {/* Soft Glow Filter for Waveform Vectors */}
            <filter id="wave-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#lab-grid)" />

          {/* Laboratory Axis Crosshairs */}
          <line x1="0" y1="55%" x2="100%" y2="55%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="text-black/10 dark:text-white/10" />
          
          {/* Waveform 1: Sine Analog Signal (Slower, Smooth) */}
          <motion.path
            d="M -100,200 Q 150,50 400,200 T 900,200 T 1400,200 T 1900,200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            filter="url(#wave-glow)"
            className="text-glow-blue/40 dark:text-glow-blue/50"
            animate={{ x: [-100, -500] }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
          />

          {/* Waveform 2: Square Digital PWM Signal (Fast, High Frequency) */}
          <motion.path
            d="M -50,280 L 50,280 L 50,220 L 150,220 L 150,280 L 250,280 L 250,220 L 350,220 L 350,280 L 450,280 L 450,220 L 550,220 L 550,280 L 650,280 L 650,220 L 750,220 L 750,280 L 850,280 L 850,220 L 950,220 L 950,280 L 1050,280 L 1050,220 L 1150,220 L 1150,280 L 1250,280 L 1250,220 L 1350,220 L 1350,280 L 1450,280 L 1450,220 L 1550,220 L 1550,280"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-glow-blue/20 dark:text-glow-blue/30"
            animate={{ x: [0, -200] }}
            transition={{ ease: "linear", duration: 8, repeat: Infinity }}
          />
        </svg>

        {/* Blinking Measurement Matrix Nodes */}
        <motion.div 
          className="absolute left-[20%] top-[40%] w-1.5 h-1.5 rounded-full bg-glow-blue"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute right-[15%] top-[65%] w-1.5 h-1.5 rounded-full bg-glow-blue"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest uppercase
                     text-glow-blue mb-5 border border-glow-blue/30 rounded-full px-4 py-1.5
                     dark:shadow-[0_0_15px_rgba(59,167,255,0.15)] bg-white/80 dark:bg-black/40 backdrop-blur-sm"
        >
          <Cpu size={14} />
          Workshop
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15]"
        >
          Learn electronics &amp; IoT by{" "}
          <span className="text-glow-blue">building it</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base md:text-lg opacity-80 max-w-xl mx-auto leading-relaxed text-black dark:text-white/80"
        >
          Structured R&amp;D programs where students design circuits, work
          with sensors, and build real connected devices — guided every step
          of the way.
        </motion.p>
      </div>
    </section>
  );
}
