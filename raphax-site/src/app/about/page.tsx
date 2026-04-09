"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target, Eye, Heart, Award, Users, ArrowRight,
  ShieldCheck, CheckCircle2, Star
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut", delay },
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

const stats = [
  { value: "2,400+", label: "Patients Served",      color: "text-primary" },
  { value: "12+",    label: "Years in Operation",    color: "text-secondary-dark" },
  { value: "50K+",   label: "Care Hours Delivered",  color: "text-primary" },
  { value: "98%",    label: "Patient Satisfaction",  color: "text-secondary-dark" },
];

const values = [
  { icon: Heart,       title: "Compassion",    desc: "We hire for the heart. Every caregiver treats clients with empathy, respect, and patience." },
  { icon: ShieldCheck, title: "Integrity", desc: "We are transparent with our families, honest in our billing, and ethical in every interaction." },
  { icon: Star,        title: "Excellence",        desc: "We utilize the latest best practices in home health to ensure safety and superior clinical outcomes." },
];

export default function AboutPage() {
  return (
    <PageWrapper>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative py-24 bg-mesh overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-primary/7 rounded-full blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="badge mb-6">Est. 2012</div>
            <h1 className="text-5xl md:text-7xl font-bold font-goldplay mb-7 leading-[1.05]">
              Our <span className="text-gradient">Story</span>
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Raphax Home Health was founded with a simple belief — every person deserves to age with dignity, receive care with compassion, and heal in the comfort of their own home. Skilled Nursing Care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="group text-center p-8 rounded-3xl border border-border hover:border-primary/25 hover:shadow-premium bg-white transition-all"
              >
                <div className={`text-4xl font-bold font-goldplay mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Who We Are ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left — Text */}
            <motion.div {...fadeUp()}>
              <div className="badge mb-6">Who We Are</div>
              <h2 className="text-4xl font-bold font-goldplay mb-7">
                Caring for Families{" "}
                <span className="text-gradient">Since 2012</span>
              </h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                We started Raphax home to bridge the gap between clinical medical care in the hospital and the genuine human connection every person deserves. We aren’t just looking for vitals; we are listening to stories, sharing laughter, and ensuring safety. Whether it’s assisting with daily tasks, providing skilled nursing, or simply being a companion, we treat every client with the same respect and compassion we would offer our own grandparents or parents.
              </p>
              <p className="text-lg text-muted mb-10 leading-relaxed">
                Our team consists of Registered Nurses, and Certified Home Health Aides who specialize in post-operative recovery, chronic disease management, transitional care, and companionship as we work closely with your primary care physician.
              </p>
              <div className="space-y-4">
                {[
                  "All caregivers are background-checked and licensed.",
                  "Personalized care plans for every unique patient.",
                  "Medicaid, Medicare, and private insurance accepted.",
                  "24/7 on-call support for patients and families.",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary/15 text-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-foreground text-[0.95rem]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Visual card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Ambient glow */}
              <div className="absolute -inset-4 bg-primary/8 rounded-[3rem] blur-3xl" />
              <div className="relative bg-gradient-to-br from-white to-surface rounded-[2.5rem] shadow-premium border border-border overflow-hidden p-10">
                {/* Icon cluster */}
                <div className="flex items-center justify-center mb-10">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                    <div className="absolute inset-3 bg-primary/15 rounded-full" />
                    <div className="absolute inset-6 bg-primary rounded-full flex items-center justify-center shadow-glow-primary">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Pull quote */}
                <div className="glass rounded-2xl p-6 border border-white/70 text-center">
                  <p className="text-sm font-semibold text-foreground leading-relaxed mb-3">
                    "Our team of 200+ certified caregivers is ready to support your family — wherever you are in your care journey."
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs text-primary font-bold">
                    <Heart className="w-3 h-3 fill-current" />
                    The Raphax Team
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { n: "200+", l: "Caregivers" },
                    { n: "98%",  l: "Satisfaction" },
                    { n: "24/7", l: "On-Call" },
                  ].map((s) => (
                    <div key={s.l} className="text-center p-4 bg-white rounded-2xl border border-border shadow-sm">
                      <div className="text-xl font-bold font-goldplay text-primary">{s.n}</div>
                      <div className="text-[10px] text-muted font-semibold mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────── */}
      <section className="py-24 bg-mesh-surface">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
            <div className="badge mb-5">Our Purpose</div>
            <h2 className="text-4xl md:text-5xl font-bold font-goldplay mb-5">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <motion.div
              {...fadeUp(0)}
              className="relative p-12 bg-white rounded-[2rem] shadow-card hover:shadow-premium border border-border hover:border-primary/25 transition-all group"
            >
              <div className="absolute top-8 right-8 text-8xl font-bold text-primary/5 font-goldplay select-none leading-none">M</div>
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-goldplay mb-5">Our Mission</h3>
              <p className="text-lg text-muted leading-relaxed">
                Our mission is to empower individuals to live independently and safely in their own homes by delivering compassionate, reliable, and personalized health care services. We strive to enhance the quality of life for our clients and provide peace of mind for their families.x``
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              {...fadeUp(0.1)}
              className="relative p-12 bg-gradient-to-br from-primary to-primary-dark text-white rounded-[2rem] shadow-premium overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/8 rounded-full blur-2xl -translate-y-1/4 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-8">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-goldplay mb-5">Our Vision</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  To be the most trusted home health agency in the region — recognized for clinical excellence, compassionate care, and the positive impact we make on every family we serve.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="bg-white p-8 rounded-2xl border border-border hover:border-primary/25 hover:shadow-md transition-all text-center group"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                  <v.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold font-goldplay mb-3">{v.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Recognition ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
            <div className="badge mb-5">Accreditations</div>
            <h2 className="text-4xl md:text-5xl font-bold font-goldplay mb-5">
              Recognized for Excellence
            </h2>
            <p className="text-muted text-lg">
              We hold the certifications and partnerships that matter most in home health care.
            </p>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Award,       title: "State Licensed Agency",   desc: "Fully licensed by state health authorities to deliver home health services." },
              { icon: ShieldCheck, title: "Medicare Certified",      desc: "Officially certified by Medicare and Medicaid programs." },
              { icon: Heart,       title: "CHAP Accredited",         desc: "Community Health Accreditation Partner certified for quality and safety." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="text-center p-10 rounded-3xl bg-white border border-border hover:border-primary/25 hover:shadow-premium shadow-card transition-all group hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-goldplay mb-3">{item.title}</h4>
                <p className="text-muted leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-mesh-surface">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl md:text-5xl font-bold font-goldplay mb-6">
              Ready to learn more?
            </h2>
            <p className="text-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Speak with our care coordinators today and discover how Raphax can support your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/raphaxhealth"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-premium hover:bg-primary-dark hover:shadow-premium-hover transition-all flex items-center gap-2 justify-center group"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="px-10 py-4 rounded-full font-bold border border-border hover:bg-white hover:border-primary/30 hover:shadow-md transition-all text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
