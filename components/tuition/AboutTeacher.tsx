import Image from "next/image";
import { GraduationCap, Award, Clock } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const credentials = [
  {
    icon: GraduationCap,
    label: "M.Sc. Physics",
  },
  {
    icon: Clock,
    label: "10+ Years Teaching Experience",
  },
  {
    icon: Award,
    label: "500+ Students Mentored",
  },
];

export default function AboutTeacher() {
  return (
    <section className="px-5 py-16 md:py-24 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-5 items-center">
        {/* Photo side */}
        <AnimatedSection className="md:col-span-2 flex justify-center">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            {/* Rotating glow ring — dark mode only */}
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full opacity-0 dark:opacity-100
                         transition-opacity duration-700"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(59,167,255,0.6), transparent 40%)",
                animation: "spin 4s linear infinite",
              }}
            />

            {/* Soft static glow behind the photo */}
            <div
              aria-hidden
              className="absolute -inset-2 rounded-full blur-2xl
                         bg-glow-blue/0 dark:bg-glow-blue/40
                         transition-colors duration-700"
            />

            {/* Photo itself */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden
                         border-2 border-white dark:border-black
                         ring-2 ring-black/10 dark:ring-glow-blue/50"
            >
              <Image
                src="/images/tuition/teacher.jpg"
                alt="Physics Teacher"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Text side */}
        <AnimatedSection delay={0.1} className="md:col-span-3 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-2">
            About the <span className="text-glow-blue">Teacher</span>
          </h2>
          <p className="text-sm font-medium text-glow-blue mb-5">
            [Teacher's Name]
          </p>

          <p className="text-sm md:text-base opacity-70 leading-relaxed mb-6">
            [Teacher's Name] has spent over a decade helping students build a
            genuine understanding of Physics — not just exam-ready formulas.
            The teaching philosophy here is simple: concepts first, practice
            second, and confidence follows naturally. Every batch, from
            Foundation to JEE/NEET, is built around this same principle.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
                             border border-black/10 dark:border-white/10
                             bg-white dark:bg-white/[0.02]
                             hover:border-glow-blue/50 transition-all duration-300
                             dark:hover:shadow-[0_0_15px_rgba(59,167,255,0.15)]"
                >
                  <Icon size={15} className="text-glow-blue" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}