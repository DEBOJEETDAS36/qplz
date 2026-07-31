import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CallToAction() {
  return (
    <section className="px-5 py-20 md:py-28">
      <AnimatedSection className="max-w-4xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl text-center px-8 py-14 md:py-20
                     border border-black/10 dark:border-white/10
                     bg-black dark:bg-glow-blue/5"
        >
          {/* Ambient glow — dark mode only */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2
                       w-125 h-75 rounded-full
                       dark:bg-glow-blue/20 blur-3xl opacity-0 dark:opacity-100
                       transition-opacity duration-700"
          />

          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white dark:text-white">
              Ready to start <span className="text-glow-blue">building?</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
              Join a workshop to learn by doing, or head to the shop and get
              the parts you need for your next project.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/workshop"
                className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                           bg-glow-blue text-black
                           hover:opacity-90 transition-all duration-300
                           hover:shadow-[0_0_25px_rgba(59,167,255,0.5)]"
              >
                Join a Workshop
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/shop"
                className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                           border border-white/20 text-white
                           hover:border-glow-blue/60 transition-all duration-300
                           hover:shadow-[0_0_20px_rgba(59,167,255,0.25)]"
              >
                Visit the Shop
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}