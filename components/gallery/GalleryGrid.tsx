"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { GalleryImage } from "@/types";

const images: GalleryImage[] = [
  { id: "p1", src: "/images/gallery/projects/project-1.jpg", alt: "Smart Irrigation System", category: "project" },
  { id: "p2", src: "/images/gallery/projects/project-2.jpg", alt: "Home Automation Hub", category: "project" },
  { id: "p3", src: "/images/gallery/projects/project-3.jpg", alt: "Line Following Robot", category: "project" },
  { id: "pr1", src: "/images/gallery/products/product-1.jpg", alt: "ESP32 Dev Board", category: "product" },
  { id: "pr2", src: "/images/gallery/products/product-2.jpg", alt: "Sensor Starter Pack", category: "product" },
  { id: "pr3", src: "/images/gallery/products/product-3.jpg", alt: "Arduino Uno R3", category: "product" },
  { id: "s1", src: "/images/gallery/students/student-1.jpg", alt: "Workshop batch, 2025", category: "student" },
  { id: "s2", src: "/images/gallery/students/student-2.jpg", alt: "Tuition classroom session", category: "student" },
  { id: "s3", src: "/images/gallery/students/student-3.jpg", alt: "Project demo day", category: "student" },
];

const tabs = [
  { label: "All", value: "all" as const },
  { label: "Projects", value: "project" as const },
  { label: "Products", value: "product" as const },
  { label: "Students", value: "student" as const },
];

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<
    "all" | "project" | "product" | "student"
  >("all");
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const filtered =
    activeTab === "all" ? images : images.filter((img) => img.category === activeTab);

  return (
    <section className="px-5 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const active = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    active
                      ? "bg-black text-white dark:bg-glow-blue dark:text-black dark:shadow-[0_0_20px_rgba(59,167,255,0.4)]"
                      : "border border-black/10 dark:border-white/10 hover:border-glow-blue/50"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid with filter transition */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(img)}
                className="group relative rounded-2xl overflow-hidden aspect-4/3 text-left
                           border border-black/10 dark:border-white/10
                           hover:border-glow-blue/50 transition-all duration-300
                           dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.15)]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4
                             bg-linear-to-t from-black/80 via-black/10 to-transparent
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="text-[10px] uppercase tracking-wide text-glow-blue font-medium mb-1">
                    {img.category}
                  </p>
                  <h3 className="text-sm font-semibold text-white">{img.alt}</h3>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-sm opacity-60 py-16">
            No images in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-100 flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden
                         border border-white/10 dark:shadow-[0_0_40px_rgba(59,167,255,0.2)]"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full
                           bg-black/60 text-white hover:bg-black/80 transition-colors duration-300"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  sizes="768px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-black">
                <p className="text-[10px] uppercase tracking-wide text-glow-blue font-medium mb-1">
                  {selected.category}
                </p>
                <h3 className="text-sm font-semibold text-white">{selected.alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}