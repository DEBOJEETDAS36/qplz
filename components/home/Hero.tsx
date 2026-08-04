"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Cpu, ShoppingBag } from "lucide-react";
import { useRef } from "react";

// Floating Hardware Component
function FloatingHardware({ children, x, y, delay }: { children: React.ReactNode; x: string; y: string; delay: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    mouseX.set(-distanceX * 0.4);
    mouseY.set(-distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, left: x, top: y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.25, 0.35, 0.25], // Slightly lowered mobile opacity footprint
        scale: 1,
        y: ["0px", "12px", "0px"] 
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay }
      }}
      className="absolute cursor-pointer p-2 md:p-3 scale-90 md:scale-100 rounded-xl border border-black/10 dark:border-white/10 
                 bg-white/80 dark:bg-black/40 backdrop-blur-md text-glow-blue
                 hover:border-glow-blue/50 hover:!opacity-100 hover:text-glow-blue transition-colors duration-300
                 shadow-sm dark:shadow-[0_0_20px_rgba(59,167,255,0.1)]"
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative overflow-hidden px-5 pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Ambient glow background — Heavily blurred and size-restricted on mobile layout screens */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 md:-top-40 left-1/2 -translate-x-1/2
                   w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full
                   dark:bg-glow-blue/15 blur-[100px] md:blur-[140px] opacity-0 dark:opacity-60 md:dark:opacity-100
                   transition-all duration-700"
      />

      {/* Dynamic Graphic Canvas Layout */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        
        {/* Bolder Technical Grid */}
        <svg className="absolute w-full h-full" xmlns="http://w3.org">
          <defs>
            <pattern id="tech-grid-bold" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-black/[0.07] dark:text-white/[0.07]" />
              <circle cx="0" cy="0" r="1.5" className="fill-black/20 dark:fill-white/20" />
            </pattern>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid-bold)" />

          {/* Heavy Glowing Circuit Board Path Traces */}
          <g stroke="currentColor" strokeWidth="1.5" fill="none" className="text-glow-blue/40 dark:text-glow-blue/60">
            <motion.path
              d="M -10,120 L 140,120 L 200,180 L 200,340 L 150,390"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
            <motion.path
              d="M 1200,160 L 980,160 L 900,240 L 900,380 L 960,440"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1.5, repeatDelay: 1 }}
            />
          </g>
        </svg>

        {/* Floating Hardware Elements */}
        <div className="absolute inset-0 pointer-events-auto">
          {/* Microchip / CPU */}
          <FloatingHardware x="4%" y="10%" delay={0}>
            <Cpu className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
          </FloatingHardware>

          {/* IoT Node / Wi-Fi Graphic */}
          <FloatingHardware x="3%" y="76%" delay={1}>
            <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h.01M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 14 0M1.5 9.5a15 15 0 0 1 21 0" />
            </svg>
          </FloatingHardware>

          {/* Microcontroller / Integrated Circuit (IC) */}
          <FloatingHardware x="89%" y="12%" delay={0.5}>
            <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M9 2v2M15 2v2M9 20v2M15 20v2M20 9h2M20 15h2M2 9h2M2 15h2" />
            </svg>
          </FloatingHardware>

          {/* Resistor / Electronic Component */}
          <FloatingHardware x="88%" y="78%" delay={1.2}>
            <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h4l2-5 4 10 4-10 2 5h4" />
              <circle cx="6" cy="12" r="1" fill="currentColor" />
              <circle cx="18" cy="12" r="1" fill="currentColor" />
            </svg>
          </FloatingHardware>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10 pointer-events-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs md:text-sm font-medium tracking-widest uppercase
                     text-glow-blue mb-5 border border-glow-blue/40 rounded-full px-4 py-1.5
                     dark:shadow-[0_0_15px_rgba(59,167,255,0.25)] bg-white/80 dark:bg-black/40 backdrop-blur-sm"
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
          className="mt-5 text-base md:text-lg opacity-80 max-w-xl mx-auto leading-relaxed text-black dark:text-white/80"
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
                       dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.5)] z-10"
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
                       border border-black/15 dark:border-white/15 bg-white/60 dark:bg-black/20 backdrop-blur-sm
                       hover:border-glow-blue/60 transition-all duration-300
                       dark:hover:shadow-[0_0_20px_rgba(59,167,255,0.25)] z-10"
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
