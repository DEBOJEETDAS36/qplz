"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const enquirySchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  program: z.string().min(1, "Select a program"),
  message: z.string().optional(),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (data: EnquiryForm) => {
    setLoading(true);
    try {
      const res = await fetch("/api/workshops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquire" className="px-5 py-16 md:py-24">
      <AnimatedSection className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
            Join a <span className="text-glow-blue">workshop</span>
          </h2>
          <p className="mt-3 text-sm md:text-base opacity-70">
            Fill this out and we'll reach out with batch details.
          </p>
        </div>

        {submitted ? (
          <div
            className="flex flex-col items-center text-center p-10 rounded-2xl
                       border border-glow-blue/30 dark:shadow-[0_0_25px_rgba(59,167,255,0.15)]"
          >
            <CheckCircle2 size={36} className="text-glow-blue mb-3" />
            <p className="font-medium">Enquiry submitted!</p>
            <p className="text-sm opacity-70 mt-1">
              We'll get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-5 text-sm text-glow-blue hover:underline"
            >
              Submit another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 p-7 md:p-8 rounded-2xl
                       border border-black/10 dark:border-white/10
                       bg-white dark:bg-white/[0.02]"
          >
            <div>
              <input
                {...register("name")}
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-xl text-sm
                           bg-black/[0.03] dark:bg-white/[0.03]
                           border border-black/10 dark:border-white/10
                           focus:outline-none focus:border-glow-blue/60
                           dark:focus:shadow-[0_0_15px_rgba(59,167,255,0.2)]
                           transition-all duration-300"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("email")}
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl text-sm
                           bg-black/[0.03] dark:bg-white/[0.03]
                           border border-black/10 dark:border-white/10
                           focus:outline-none focus:border-glow-blue/60
                           dark:focus:shadow-[0_0_15px_rgba(59,167,255,0.2)]
                           transition-all duration-300"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("phone")}
                placeholder="Phone number"
                className="w-full px-4 py-3 rounded-xl text-sm
                           bg-black/[0.03] dark:bg-white/[0.03]
                           border border-black/10 dark:border-white/10
                           focus:outline-none focus:border-glow-blue/60
                           dark:focus:shadow-[0_0_15px_rgba(59,167,255,0.2)]
                           transition-all duration-300"
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <select
                {...register("program")}
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl text-sm
                           bg-black/[0.03] dark:bg-white/[0.03]
                           border border-black/10 dark:border-white/10
                           focus:outline-none focus:border-glow-blue/60
                           dark:focus:shadow-[0_0_15px_rgba(59,167,255,0.2)]
                           transition-all duration-300"
              >
                <option value="" disabled>
                  Select a program
                </option>
                <option value="electronics-fundamentals">
                  Electronics Fundamentals
                </option>
                <option value="iot-connected-devices">
                  IoT &amp; Connected Devices
                </option>
                <option value="robotics-automation">
                  Robotics &amp; Automation
                </option>
                <option value="advanced-rd">Advanced R&amp;D Track</option>
              </select>
              {errors.program && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.program.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                {...register("message")}
                placeholder="Anything you'd like us to know? (optional)"
                rows={3}
                className="w-full px-4 py-3 rounded-xl text-sm resize-none
                           bg-black/[0.03] dark:bg-white/[0.03]
                           border border-black/10 dark:border-white/10
                           focus:outline-none focus:border-glow-blue/60
                           dark:focus:shadow-[0_0_15px_rgba(59,167,255,0.2)]
                           transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                         bg-black text-white dark:bg-glow-blue dark:text-black
                         hover:opacity-90 transition-all duration-300
                         dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.4)]
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
              {!loading && <Send size={14} />}
            </button>
          </form>
        )}
      </AnimatedSection>
    </section>
  );
}