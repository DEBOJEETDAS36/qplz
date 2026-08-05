"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const baseSchema = {
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(5, "Message is too short"),
};

const generalSchema = z.object(baseSchema);

const extendedSchema = z.object({
  ...baseSchema,
  phone: z.string().min(10, "Enter a valid phone number"),
  program: z.string().min(1, "Please select an option"),
});

type GeneralForm = z.infer<typeof generalSchema>;
type ExtendedForm = z.infer<typeof extendedSchema>;
type FormValues = GeneralForm & Partial<ExtendedForm>;

interface ContactFormProps {
  variant?: "general" | "workshop" | "tuition";
}

export default function ContactForm({ variant = "general" }: ContactFormProps) {
  const isWorkshop = variant === "workshop";
  const isTuition = variant === "tuition";
  const showExtraFields = isWorkshop || isTuition;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(showExtraFields ? extendedSchema : generalSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
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

  const heading = isWorkshop
    ? "Join a workshop"
    : isTuition
    ? "Enroll in a batch"
    : "Get in touch";

  const subtext = isWorkshop
    ? "Fill this out and we'll reach out with batch details."
    : isTuition
    ? "Fill this out and we'll reach out with class timing and fee details."
    : "Questions about a workshop, an order, or anything else — reach out.";

  return (
    <section
      id="contact"
      className={`px-5 py-16 md:py-24 ${
        showExtraFields ? "" : "bg-black/[0.02] dark:bg-white/[0.02]"
      }`}
    >
      <AnimatedSection className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
          {heading.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-glow-blue">{heading.split(" ").slice(-1)}</span>
        </h2>
        <p className="mt-3 text-sm md:text-base opacity-70 max-w-xl mx-auto">
          {subtext}
        </p>
      </AnimatedSection>

      <div className={`max-w-4xl mx-auto grid gap-8 ${showExtraFields ? "" : "md:grid-cols-5"}`}>
        {!showExtraFields && (
          <AnimatedSection className="md:col-span-2 space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-glow-blue/10 text-glow-blue shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm opacity-70">+91-XXXXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-glow-blue/10 text-glow-blue shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm opacity-70">yourcenter@email.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-glow-blue/10 text-glow-blue shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm opacity-70">Your City, India</p>
              </div>
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.1} className={showExtraFields ? "max-w-xl mx-auto w-full" : "md:col-span-3"}>
          {submitted ? (
            <div
              className="flex flex-col items-center text-center p-10 rounded-2xl h-full justify-center
                         border border-glow-blue/30 dark:shadow-[0_0_25px_rgba(59,167,255,0.15)]"
            >
              <CheckCircle2 size={32} className="text-glow-blue mb-3" />
              <p className="font-medium">
                {showExtraFields ? "Enquiry submitted!" : "Message sent!"}
              </p>
              <p className="text-sm opacity-70 mt-1">We'll get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-5 text-sm text-glow-blue hover:underline"
              >
                {showExtraFields ? "Submit another" : "Send another"}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 p-7 rounded-2xl
                         border border-black/10 dark:border-white/10
                         bg-white dark:bg-white/[0.02]"
            >
              <div>
                <input
                  {...register("name")}
                  placeholder="Your name"
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

              {showExtraFields && (
                <>
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
                        {isTuition ? "Select a batch" : "Select a program"}
                      </option>
                      {isTuition ? (
                        <>
                          <option value="foundation-8-10">Foundation (Class 8-10)</option>
                          <option value="class-11-12">Class 11-12</option>
                          <option value="jee-batch">JEE Batch</option>
                          <option value="neet-batch">NEET Batch</option>
                        </>
                      ) : (
                        <>
                          <option value="electronics-fundamentals">Electronics Fundamentals</option>
                          <option value="iot-connected-devices">IoT &amp; Connected Devices</option>
                          <option value="robotics-automation">Robotics &amp; Automation</option>
                          <option value="advanced-rd">Advanced R&amp;D Track</option>
                        </>
                      )}
                    </select>
                    {errors.program && (
                      <p className="text-xs text-red-500 mt-1">{errors.program.message}</p>
                    )}
                  </div>
                </>
              )}

              <div>
                <textarea
                  {...register("message")}
                  placeholder={showExtraFields ? "Anything you'd like us to know? (optional context helps)" : "Your message"}
                  rows={showExtraFields ? 3 : 4}
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none
                             bg-black/[0.03] dark:bg-white/[0.03]
                             border border-black/10 dark:border-white/10
                             focus:outline-none focus:border-glow-blue/60
                             dark:focus:shadow-[0_0_15px_rgba(59,167,255,0.2)]
                             transition-all duration-300"
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                )}
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
                {loading ? "Sending..." : showExtraFields ? "Submit Enquiry" : "Send Message"}
                {!loading && <Send size={14} />}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}