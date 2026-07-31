import Link from "next/link";
import { Cpu, ShoppingBag, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const items = [
  {
    icon: Cpu,
    title: "Workshop",
    tagline: "Hands-on R&D for students",
    description:
      "Structured electronics & IoT programs — build real circuits, sensors, and connected devices under expert guidance.",
    href: "/workshop",
    cta: "Explore Programs",
  },
  {
    icon: ShoppingBag,
    title: "Shop",
    tagline: "Everything you need to build",
    description:
      "Components, dev boards, sensors, and kits — sourced and tested for students and hobbyists alike.",
    href: "/shop",
    cta: "Browse Products",
  },
];

export default function OverviewSplit() {
  return (
    <section className="px-5 py-16 md:py-24">
      <AnimatedSection className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
          What we <span className="text-glow-blue">do</span>
        </h2>
        <p className="mt-3 text-sm md:text-base opacity-70 max-w-xl mx-auto">
          Two spaces, one mission — helping you learn electronics by building
          it, and giving you the parts to keep going.
        </p>
      </AnimatedSection>

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <Link
                href={item.href}
                className="group relative block h-full p-8 md:p-10 rounded-2xl
                           border border-black/10 dark:border-white/10
                           bg-white dark:bg-white/2
                           hover:border-glow-blue/50 transition-all duration-300
                           dark:hover:shadow-[0_0_30px_rgba(59,167,255,0.15)]
                           hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6
                             bg-black/5 dark:bg-glow-blue/10 text-glow-blue
                             group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-glow-blue font-medium mb-4">
                  {item.tagline}
                </p>
                <p className="text-sm opacity-70 leading-relaxed mb-8">
                  {item.description}
                </p>

                <span
                  className="inline-flex items-center gap-1.5 text-sm font-medium
                             group-hover:gap-2.5 transition-all duration-300"
                >
                  {item.cta}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}