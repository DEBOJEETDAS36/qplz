import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Placeholder data — swap with real projects/products once you have images & content
const projects = [
  {
    title: "Smart Irrigation System",
    tag: "IoT · Workshop Project",
    image: "/images/workshop/project-1.jpg",
  },
  {
    title: "Home Automation Hub",
    tag: "Electronics · Workshop Project",
    image: "/images/workshop/project-2.jpg",
  },
  {
    title: "ESP32 Dev Kit",
    tag: "Best Seller · Shop",
    image: "/images/shop/product-1.jpg",
  },
  {
    title: "Sensor Starter Pack",
    tag: "Popular · Shop",
    image: "/images/shop/product-2.jpg",
  },
];

export default function FeaturedWork() {
  return (
    <section className="px-5 py-16 md:py-24">
      <AnimatedSection className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
          Featured <span className="text-glow-blue">work</span>
        </h2>
        <p className="mt-3 text-sm md:text-base opacity-70 max-w-xl mx-auto">
          A look at what students are building, and what's flying off the
          shelves.
        </p>
      </AnimatedSection>

      <div className="max-w-6xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div
              className="group relative rounded-2xl overflow-hidden aspect-4/5
                         border border-black/10 dark:border-white/10
                         hover:border-glow-blue/50 transition-all duration-300
                         dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.15)]"
            >
              {/* Image placeholder — replace bg-* with actual <Image> once assets exist */}
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 flex items-center justify-center">
                <span className="text-xs opacity-40">Image</span>
              </div>

              <div
                className="absolute inset-0 flex flex-col justify-end p-4
                           bg-linear-to-t from-black/80 via-black/10 to-transparent
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-xs text-glow-blue font-medium mb-1">
                  {item.tag}
                </p>
                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-10">
        <Link
          href="/workshop"
          className="group inline-flex items-center gap-1.5 text-sm font-medium
                     hover:text-glow-blue transition-colors duration-300"
        >
          See more work
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </Link>
      </AnimatedSection>
    </section>
  );
}