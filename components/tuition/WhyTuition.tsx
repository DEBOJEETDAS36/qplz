import { Users, Target, ClipboardCheck, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const highlights = [
  {
    icon: Users,
    title: "Small Batches",
    description: "Focused group sizes so every student gets real attention.",
  },
  {
    icon: Target,
    title: "Concept First",
    description: "Physics taught to be understood, not just memorized.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Tests",
    description: "Periodic assessments to track progress and fix gaps early.",
  },
  {
    icon: MessageCircle,
    title: "Doubt Support",
    description: "Dedicated time outside class hours for doubt-clearing.",
  },
];

export default function WhyTuition() {
  return (
    <section className="px-5 py-16 md:py-24 bg-black/[0.02] dark:bg-white/[0.02]">
      <AnimatedSection className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
          Why this <span className="text-glow-blue">tuition</span>
        </h2>
        <p className="mt-3 text-sm md:text-base opacity-70 max-w-xl mx-auto">
          What makes the learning experience different.
        </p>
      </AnimatedSection>

      <div className="max-w-6xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div
                className="group h-full p-6 rounded-2xl text-center
                           border border-black/10 dark:border-white/10
                           bg-white dark:bg-white/[0.02]
                           hover:border-glow-blue/50 transition-all duration-300
                           dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.15)]
                           hover:-translate-y-1"
              >
                <div
                  className="w-11 h-11 mx-auto rounded-xl flex items-center justify-center mb-4
                             bg-black/5 dark:bg-glow-blue/10 text-glow-blue
                             group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold mb-1.5">{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}