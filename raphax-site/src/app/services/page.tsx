"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope, Heart, UserCheck, Home, Brain, Pill,
  Activity, Users, ArrowRight, CheckCircle2, ChevronRight, LucideIcon
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { BOOKING_URL } from "@/constants/links";


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const staggerParent = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" },
};

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  benefits: string[];
}

const services: Service[] = [
  {
    icon: Stethoscope,
    title: "Personal Care Assistance",
    desc: "Compassionate support with daily activities, including bathing, dressing, grooming, mobility assistance, and hygiene management. Our caregivers help maintain dignity and independence while ensuring safety, comfort, and well-being.",
    benefits: ["Wound and IV management", "Medication administration", "Chronic disease monitoring", "Post-surgical care"],
  },
  {
    icon: Heart,
    title: "Companion Care Services",
    desc: "Meaningful social interaction, engaging activities, and emotional support for seniors and adults. We provide companionship that enhances overall well-being and reduces feelings of isolation.",
    benefits: ["Bathing and hygiene assistance", "Dressing and grooming", "Meal preparation", "Mobility assistance"],
  },
  {
    icon: UserCheck,
    title: "Skilled Nursing Care",
    desc: "Professional medical care delivered by licensed nurses, including medication management, vital signs monitoring, IV therapy, post-surgical recovery support, and complex care coordination.",
    benefits: ["Friendly conversation", "Light housekeeping", "Errands and transportation", "Medication reminders"],
  },
  {
    icon: Home,
    title: "Pediatric Home Care",
    desc: "Specialized care for children with medical needs, including skilled nursing, respiratory support, feeding assistance, developmental care, and family training. Our pediatric team ensures safe, nurturing care that supports growth and independence.",
    benefits: ["Discharge planning support", "Medication reconciliation", "Vital sign monitoring", "Fall prevention"],
  },
  {
    icon: Brain,
    title: "Disability Support Services",
    desc: "Personalized support for individuals with disabilities, including assistance with daily living, community engagement, skill development, and independence promotion. Our team empowers individuals to live fulfilling lives with dignity and choice.",
    benefits: ["Cognitive stimulation activities", "Safe environment monitoring", "Family respite support", "Behaviour management"],
  },
  {
    icon: Activity,
    title: "Non-Medical Home Support",
    desc: "Our licensed therapists help patients regain strength, mobility, and independence through targeted in-home rehabilitation programs.",
    benefits: ["Strength and balance training", "Fall prevention exercises", "Daily living skill rebuilding", "Home safety evaluations"],
  },
  {
    icon: Pill,
    title: "Wound Care Management",
    desc: "Professional at-home wound care services including dressing changes, infection monitoring, and recovery support for optimal healing.",
    benefits: ["Medication reminders and setup", "Prescription tracking", "Coordination with physicians", "Error prevention"],
  },
  {
    icon: Users,
    title: "Respite Care",
    desc: "We give primary caregivers the break they need. Our professional team steps in so family members can rest and recharge without worry.",
    benefits: ["Short-term and long-term relief", "Trusted, familiar caregivers", "Flexible scheduling", "Seamless handoffs"],
  },
];

const insurers = ["Medicare", "Medicaid", "Blue Cross", "United Healthcare", "Aetna", "Cigna"];

export default function ServicesPage() {
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
            <div className="badge mb-6">What We Offer</div>
            <h1 className="text-5xl md:text-7xl font-bold font-goldplay mb-7 leading-[1.05]">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              A full range of home health services — from skilled nursing to companionship — all delivered with warmth and clinical professionalism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-10 xl:px-16">
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="group bg-white p-10 rounded-[2rem] shadow-card hover:shadow-premium border border-border hover:border-primary/25 flex flex-col transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold font-goldplay mb-4">{service.title}</h3>
                <p className="text-muted mb-8 flex-grow leading-relaxed">{service.desc}</p>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <a
                    href={BOOKING_URL}

                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link hover:gap-3 transition-all"
                  >
                    Book Appointment
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-xs text-muted font-medium bg-surface px-3 py-1.5 rounded-full border border-border">
                    Service #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Insurance ─────────────────────────────────────────── */}
      <section className="py-24 bg-mesh-surface">
        <div className="container mx-auto px-6 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div {...fadeUp()}>
              <div className="badge mb-6">Coverage</div>
              <h2 className="text-4xl md:text-5xl font-bold font-goldplay mb-7">
                We Accept Most{" "}
                <span className="text-gradient">Insurance Plans</span>
              </h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                We work with Medicare, Medicaid, most private insurance plans, and offer self-pay options. Our care coordinators verify your benefits and handle paperwork so you can focus on what matters most.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {insurers.map((ins) => (
                  <span
                    key={ins}
                    className="px-4 py-2 rounded-full bg-white border border-border text-sm font-semibold shadow-sm hover:border-primary/30 hover:shadow-md transition-all cursor-default"
                  >
                    {ins}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold group border border-primary/25 px-6 py-3 rounded-full hover:bg-primary/5 transition-all"
              >
                Verify Your Coverage
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right — Image CTA card */}
            <motion.div
              {...fadeUp(0.15)}
              className="relative rounded-[2.5rem] overflow-hidden group shadow-premium"
            >
              <Image
                src="/raphaz.jpg"
                alt="Professional Care"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-goldplay mb-4 text-white">
                  Not sure which service you need?
                </h3>
                <p className="text-white/80 mb-8 leading-relaxed max-w-sm">
                  Our care coordinators will conduct a free in-home assessment to determine the right care plan for your loved one.
                </p>
                <div className="flex">
                  <a
                    href={BOOKING_URL}

                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg"
                  >
                    Book Appointment
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
