import AnimatedSection from "@/components/ui/AnimatedSection";

// Placeholder — swap with real project data/images later
const projects = [
  { title: "Smart Irrigation System", student: "Batch 2025" },
  { title: "Home Automation Hub", student: "Batch 2025" },
  { title: "Line Following Robot", student: "Batch 2024" },
  { title: "Weather Monitoring Station", student: "Batch 2024" },
  { title: "Gesture Controlled Car", student: "Batch 2024" },
  { title: "Smart Doorbell with Camera", student: "Batch 2023" },
];

export default function ProjectGallery() {
  return (
    <section
      id="projects"
      className="px-5 py-16 md:py-24 bg-black/[0.02] dark:bg-white/[0.02]"
    >
      <AnimatedSection className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
          Student <span className="text-glow-blue">projects</span>
        </h2>
        <p className="mt-3 text-sm md:text-base opacity-70 max-w-xl mx-auto">
          A glimpse at what past students have built in the workshop.
        </p>
      </AnimatedSection>

      <div className="max-w-6xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]
                         border border-black/10 dark:border-white/10
                         hover:border-glow-blue/50 transition-all duration-300
                         dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.15)]"
            >
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 flex items-center justify-center">
                <span className="text-xs opacity-40">Image</span>
              </div>

              <div
                className="absolute inset-0 flex flex-col justify-end p-4
                           bg-gradient-to-t from-black/80 via-black/10 to-transparent
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-xs text-glow-blue font-medium mb-1">
                  {item.student}
                </p>
                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}