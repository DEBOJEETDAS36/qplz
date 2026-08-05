import { Sprout, GraduationCap, Atom, HeartPulse } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const batches = [
  {
    icon: Sprout,
    title: "Foundation Batch",
    level: "Class 8 - 10",
    description:
      "Builds core Physics concepts and problem-solving habits early — the groundwork for everything that follows.",
  },
  {
    icon: GraduationCap,
    title: "Class 11 - 12",
    level: "Board + Concept Mastery",
    description:
      "Board-aligned Physics with strong conceptual grounding, so students aren't just memorizing for exams.",
  },
  {
    icon: Atom,
    title: "JEE Batch",
    level: "Class 11 - 12 / Droppers",
    description:
      "Problem-solving focused, exam-pattern-driven Physics for JEE Main &amp; Advanced aspirants.",
  },
  {
    icon: HeartPulse,
    title: "NEET Batch",
    level: "Class 11 - 12 / Droppers",
    description:
      "NEET-focused Physics with emphasis on application and speed — tailored to the NEET exam pattern.",
  },
];

export default function BatchesList() {
  return (
    <section id="batches" className="px-5 py-16 md:py-24">
      <AnimatedSection className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
          Batches &amp; <span className="text-glow-blue">tracks</span>
        </h2>
        <p className="mt-3 text-sm md:text-base opacity-70 max-w-xl mx-auto">
          Choose the batch that matches where your child is right now.
        </p>
      </AnimatedSection>

      <div className="max-w-6xl mx-auto grid gap-5 sm:grid-cols-2">
        {batches.map((item, i) => {
          const Icon = item.icon;
          return (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div
                className="group h-full p-7 rounded-2xl
                           border border-black/10 dark:border-white/10
                           bg-white dark:bg-white/[0.02]
                           hover:border-glow-blue/50 transition-all duration-300
                           dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.15)]
                           hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center
                               bg-black/5 dark:bg-glow-blue/10 text-glow-blue
                               group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full border border-black/10 dark:border-white/10 opacity-70 text-right">
                    {item.level}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
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