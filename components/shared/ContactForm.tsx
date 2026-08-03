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

const workshopSchema = z.object({
  ...baseSchema,
  phone: z.string().min(10, "Enter a valid phone number"),
  program: z.string().min(1, "Select a program"),
});

type GeneralForm = z.infer<typeof generalSchema>;
type WorkshopForm = z.infer<typeof workshopSchema>;
type FormValues = GeneralForm & Partial<WorkshopForm>;

interface ContactFormProps {
  variant?: "general" | "workshop";
}

export default function ContactForm({ variant = "general" }: ContactFormProps) {
  const isWorkshop = variant === "workshop";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(isWorkshop ? workshopSchema : generalSchema),
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

  return (
    <section
      id="contact"
      className={`px-5 py-16 md:py-24 ${
        isWorkshop ? "" : "bg-black/2 dark:bg-white/2"
      }`}
    >
      <AnimatedSection className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
          {isWorkshop ? (
            <>
              Join a <span className="text-glow-blue">workshop</span>
            </>
          ) : (
            <>
              Get in <span className="text-glow-blue">touch</span>
            </>
          )}
        </h2>
        <p className="mt-3 text-sm md:text-base opacity-70 max-w-xl mx-auto">
          {isWorkshop
            ? "Fill this out and we'll reach out with batch details."
            : "Questions about a workshop, an order, or anything else — reach out."}
        </p>
      </AnimatedSection>

      <div className={`max-w-4xl mx-auto grid gap-8 ${isWorkshop ? "" : "md:grid-cols-5"}`}>
        {/* Contact info side — only shown on general/home variant */}
        {!isWorkshop && (
          <AnimatedSection className="md:col-span-2 space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-glow-blue/10 text-glow-blue shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm opacity-70">+91-89102 42462</p>
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
                <p className="text-sm opacity-70">Kolkata, India</p>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Form side */}
        <AnimatedSection delay={0.1} className={isWorkshop ? "max-w-xl mx-auto w-full" : "md:col-span-3"}>
          {submitted ? (
            <div
              className="flex flex-col items-center text-center p-10 rounded-2xl h-full justify-center
                         border border-glow-blue/30 dark:shadow-[0_0_25px_rgba(59,167,255,0.15)]"
            >
              <CheckCircle2 size={32} className="text-glow-blue mb-3" />
              <p className="font-medium">
                {isWorkshop ? "Enquiry submitted!" : "Message sent!"}
              </p>
              <p className="text-sm opacity-70 mt-1">We'll get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-5 text-sm text-glow-blue hover:underline"
              >
                {isWorkshop ? "Submit another" : "Send another"}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 p-7 rounded-2xl
                         border border-black/10 dark:border-white/10
                         bg-white dark:bg-white/2"
            >
              <div>
                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm
                             bg-black/3 dark:bg-white/3
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
                             bg-black/3 dark:bg-white/3
                             border border-black/10 dark:border-white/10
                             focus:outline-none focus:border-glow-blue/60
                             dark:focus:shadow-[0_0_15px_rgba(59,167,255,0.2)]
                             transition-all duration-300"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              {isWorkshop && (
                <>
                  <div>
                    <input
                      {...register("phone")}
                      placeholder="Phone number"
                      className="w-full px-4 py-3 rounded-xl text-sm
                                 bg-black/3 dark:bg-white/3
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
                                 bg-black/3 dark:bg-white/3
                                 border border-black/10 dark:border-white/10
                                 focus:outline-none focus:border-glow-blue/60
                                 dark:focus:shadow-[0_0_15px_rgba(59,167,255,0.2)]
                                 transition-all duration-300"
                    >
                      <option value="" disabled>
                        Select a program
                      </option>
                      <option value="electronics-fundamentals">Electronics Fundamentals</option>
                      <option value="iot-connected-devices">IoT &amp; Connected Devices</option>
                      <option value="robotics-automation">Robotics &amp; Automation</option>
                      <option value="advanced-rd">Advanced R&amp;D Track</option>
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
                  placeholder={isWorkshop ? "Anything you'd like us to know? (optional context helps)" : "Your message"}
                  rows={isWorkshop ? 3 : 4}
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none
                             bg-black/3 dark:bg-white/3
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
                {loading ? "Sending..." : isWorkshop ? "Submit Enquiry" : "Send Message"}
                {!loading && <Send size={14} />}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}