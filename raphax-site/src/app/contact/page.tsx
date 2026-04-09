"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const contactItems = [
  {
    icon: Phone,
    label: "Call Us Anytime",
    primary: "314-755-5894",
    secondary: "Available 24 hours a day, 7 days a week",
    href: "tel:3147555894",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Mail,
    label: "Email Us",
    primary: "care@raphax.health",
    secondary: "We respond within 2–4 business hours",
    href: "mailto:care@raphax.health",
    accent: "bg-secondary/10 text-secondary-dark",
  },
  {
    icon: MapPin,
    label: "Office Location",
    primary: "123 Health Street",
    secondary: "Care City, CC 10001",
    href: null,
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    label: "Office Hours",
    primary: "Mon – Fri: 8AM – 6PM",
    secondary: "On-call support available 24/7",
    href: null,
    accent: "bg-secondary/10 text-secondary-dark",
  },
];

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "skilled-nursing",  label: "Skilled Nursing Care" },
  { value: "personal-care",    label: "Personal Care Aide" },
  { value: "companion",        label: "Companion Care" },
  { value: "post-hospital",    label: "Post-Hospital Care" },
  { value: "dementia",         label: "Dementia & Alzheimer's Care" },
  { value: "therapy",          label: "Physical / Occupational Therapy" },
  { value: "medication",       label: "Medication Management" },
  { value: "respite",          label: "Respite Care" },
  { value: "other",            label: "Other / Not Sure" },
];

const inputBase =
  "w-full px-5 py-4 rounded-2xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm font-medium placeholder:text-muted/60";
const inputError =
  "w-full px-5 py-4 rounded-2xl bg-surface border border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/15 outline-none transition-all text-sm font-medium placeholder:text-muted/60";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <PageWrapper>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative py-24 bg-mesh overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/7 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-10 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="badge mb-6">Get In Touch</div>
            <h1 className="text-5xl md:text-7xl font-bold font-goldplay mb-7 leading-[1.05]">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Have questions about our home health services? Our care coordinators are ready to help — available 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* ── Contact Info ──────────────────────────────────── */}
            <motion.div
              {...fadeUp()}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold font-goldplay mb-8">Get in Touch</h3>

              {contactItems.map((item, i) => {
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? { href: item.href, className: "flex items-start gap-5 group cursor-pointer" }
                  : { className: "flex items-start gap-5" };

                return (
                  <Wrapper key={i} {...(wrapperProps as React.HTMLAttributes<HTMLElement>)}>
                    <div
                      className={`w-12 h-12 ${item.accent} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm transition-all ${item.href ? "group-hover:shadow-md group-hover:scale-105" : ""}`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className={`text-lg font-bold transition-colors ${item.href ? "group-hover:text-primary" : ""}`}>
                        {item.primary}
                      </p>
                      <p className="text-sm text-muted mt-0.5">{item.secondary}</p>
                    </div>
                  </Wrapper>
                );
              })}

              {/* Urgent care card */}
              <div className="mt-8 relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/8 rounded-full blur-2xl -translate-y-1/3 translate-x-1/3" />
                <div className="relative z-10 p-7">
                  <h4 className="font-bold text-white text-lg font-goldplay mb-3">
                    Need Urgent Care?
                  </h4>
                  <p className="text-white/75 leading-relaxed text-sm mb-6">
                    If you need immediate home health assistance, don&apos;t wait — call our 24/7 emergency line and get connected to a care coordinator right away.
                  </p>
                  <a
                    href="tel:3147555894"
                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    Call 24/7 Hotline
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ── Contact Form ──────────────────────────────────── */}
            <motion.div
              {...fadeUp(0.15)}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-premium border border-border"
            >
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="relative w-20 h-20 mx-auto mb-8">
                    <div className="absolute inset-0 bg-secondary/15 rounded-full animate-pulse" />
                    <div className="relative w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold font-goldplay mb-4">Message Received!</h3>
                  <p className="text-muted text-lg mb-8 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to Raphax Home Health. A care coordinator will follow up shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-bold hover:underline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold font-goldplay mb-1">Send Us a Message</h3>
                    <p className="text-sm text-muted">Fill in your details and we&apos;ll get back to you promptly.</p>
                  </div>

                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted uppercase tracking-wider">Full Name</label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className={errors.name ? inputError : inputBase}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted uppercase tracking-wider">Phone Number</label>
                      <input
                        {...register("phone", { required: "Phone is required" })}
                        className={errors.phone ? inputError : inputBase}
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-muted uppercase tracking-wider">Email Address</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" },
                      })}
                      className={errors.email ? inputError : inputBase}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>

                  {/* Service */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-muted uppercase tracking-wider">Service Needed</label>
                    <select
                      {...register("service", { required: "Please select a service" })}
                      className={errors.service ? inputError : inputBase}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs">{errors.service.message}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-muted uppercase tracking-wider">Your Message</label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={4}
                      className={`${errors.message ? inputError : inputBase} resize-none`}
                      placeholder="Tell us about your loved one's care needs..."
                    />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold shadow-md hover:bg-primary-dark hover:shadow-premium disabled:opacity-60 transition-all flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-muted pt-2">
                    Your information is protected and never shared with third parties.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
