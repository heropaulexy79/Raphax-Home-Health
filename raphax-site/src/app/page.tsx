"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Heart, ShieldCheck, Zap, Star,
  Clock, Home as HomeIcon, UserCheck, Stethoscope, Award,
  Phone, ChevronLeft, ChevronRight, LucideIcon,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

// ── Update with your actual Calendly link ───────────────────
const CALENDLY_URL = "https://calendly.com/raphaxhealth";

/* ── Slider Data ────────────────────────────────────────────── */
const slides = [
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80",
    badge: "Trusted Home Health Agency",
    headline: "Premium Care, Right at Your Front Door.",
    highlight: "Right at Your Front Door.",
    sub: "Raphax Home Health connects you with skilled nurses and compassionate caregivers who deliver hospital-quality care in the comfort of your own home.",
  },
  {
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1920&q=80",
    badge: "Skilled Nursing & Clinical Care",
    headline: "Expert Nurses, Compassionate Caregivers.",
    highlight: "Compassionate Caregivers.",
    sub: "Our licensed RNs and LPNs provide wound care, IV management, medication administration, and chronic disease monitoring — all in your home.",
  },
  {
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1920&q=80",
    badge: "Post-Hospital & Recovery Care",
    headline: "Safe Recovery, In the Comfort of Home.",
    highlight: "In the Comfort of Home.",
    sub: "Transitioning home after hospitalization? Our dedicated team monitors your recovery, manages medications, and ensures a safe and smooth healing journey.",
  },
];

/* ── Animation Presets ──────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

const staggerParent = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.11 },
};

const staggerChild = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" },
};

/* ── Data ───────────────────────────────────────────────────── */
interface ServicePreview { icon: LucideIcon; title: string; desc: string; }

const servicesPreview: ServicePreview[] = [
  { icon: Stethoscope, title: "Personal Care Assistance",  desc: "Compassionate support with daily activities, including bathing, dressing, grooming, mobility assistance..." },
  { icon: Heart,       title: "Companion Care Services",   desc: "Meaningful social interaction, engaging activities, and emotional support for seniors and adults." },
  { icon: UserCheck,   title: "Skilled Nursing Care",        desc: "Professional medical care delivered by licensed nurses, including medication management, vital signs monitoring..." },
  { icon: HomeIcon,    title: "Pediatric Home Care",    desc: "Specialized care for children with medical needs, including skilled nursing, respiratory support, feeding assistance..." },
];

const testimonials = [
  { name: "Mary A.",  role: "Family Member",       rating: 5, quote: "Raphax gave my mother the care she deserved. The nurses were professional, kind, and always on time. I couldn't have asked for more." },
  { name: "James O.", role: "Patient",              rating: 5, quote: "After my surgery, the post-hospital care team was exceptional. They made my recovery so much smoother and I felt safe at home." },
  { name: "Linda K.", role: "Caregiver Daughter",   rating: 5, quote: "Finding reliable home health care is hard. Raphax made it easy. Their aides are trustworthy, warm, and incredibly professional." },
];

const processSteps = [
  { number: "01", title: "Book a Consultation",    desc: "Schedule a free initial assessment with our care coordinators — no obligation." },
  { number: "02", title: "Personalized Care Plan", desc: "We design a tailored care plan matched exactly to your health and lifestyle needs." },
  { number: "03", title: "Meet Your Care Team",    desc: "We personally match you with the best-fit nurses and caregivers for your family." },
  { number: "04", title: "Care Begins at Home",    desc: "Professional, compassionate care delivered with dignity, right at your door." },
];

const trustBadges = [
  { label: "State Licensed",       icon: Award },
  { label: "Medicare Certified",   icon: ShieldCheck },
  { label: "CHAP Accredited",      icon: CheckCircle2 },
  { label: "Medicaid Accepted",    icon: CheckCircle2 },
  { label: "24/7 On-Call Support", icon: Phone },
];

/* ── Hero Slider ────────────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = () => {
    const idx = (current - 1 + slides.length) % slides.length;
    goTo(idx, -1);
  };

  const next = useCallback(() => {
    const idx = (current + 1) % slides.length;
    goTo(idx, 1);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => next(), 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section
      className="relative w-full h-[88vh] min-h-[500px] overflow-hidden bg-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          {/* Image */}
          <Image
            src={slides[current].image}
            alt={slides[current].headline}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradient overlay — heavy on left for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-12 xl:px-22">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.55 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase mb-7"
                >
                  <Zap className="w-3 h-3" />
                  {slides[current].badge}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-6xl xl:text-7xl font-bold font-goldplay text-white leading-[1.08] mb-7"
                >
                  {slides[current].headline.replace(slides[current].highlight, "")}
                  <span className="text-gradient">{slides[current].highlight}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.55 }}
                  className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl"
                >
                  {slides[current].sub}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-premium hover:bg-primary-dark hover:shadow-premium-hover transition-all group"
                  >
                    Book Appointment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold backdrop-blur-sm hover:bg-white/15 hover:border-white/60 transition-all"
                  >
                    View Services
                  </Link>
                </motion.div>

                {/* Trust markers */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex flex-wrap gap-5 mt-10 text-sm font-semibold text-white/70"
                >
                  {[
                    { icon: CheckCircle2, text: "Licensed & Insured" },
                    { icon: CheckCircle2, text: "Medicare & Medicaid" },
                    { icon: CheckCircle2, text: "24/7 Support" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-secondary" />
                      {text}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Prev / Next Arrows ──────────────────────────────── */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all group hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ── Dot Indicators ──────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 ${
              i === current
                ? "w-8 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Slide count ─────────────────────────────────────── */}
      <div className="absolute bottom-8 right-8 z-20 text-white/50 text-xs font-bold font-goldplay tracking-wider">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <PageWrapper>

      {/* ════ HERO SLIDER ════════════════════════════════════════ */}
      <HeroSlider />

      {/* ════ ABOUT SNIPPET ══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-primary/8 rounded-[3rem] blur-3xl" />
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-premium-hover border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=900&q=80"
                  alt="Raphax Home Health caregivers"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay strip */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating stat badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 glass px-5 py-4 rounded-2xl shadow-premium z-10 border border-white/70"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/15 text-secondary-dark rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-lg font-bold font-goldplay text-foreground leading-none">2,400+</p>
                    <p className="text-xs text-muted font-semibold mt-0.5">Families Cared For</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — years */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                className="absolute -top-5 -left-4 glass px-5 py-4 rounded-2xl shadow-premium z-10 border border-white/70"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/12 text-primary rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold font-goldplay text-foreground leading-none">12+</p>
                    <p className="text-xs text-muted font-semibold mt-0.5">Years of Excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="badge mb-6">About Raphax Health</div>
              <h2 className="text-4xl md:text-5xl font-bold font-goldplay mb-6 leading-tight">
                Caring for Families{" "}
                <span className="text-gradient">Since 2012</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Raphax Home Healthcare was founded on a simple belief: that nothing compares to the comfort of home. Therefore, we provide companionship, comfort, and skilled nursing care directly to your doorstep.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-10">
                We are a family-owned and operated agency, and we treat every patient like one of our own. Our team of 200+ certified nurses, caregivers, and companions serve families across the region with compassion, clinical excellence, and unwavering commitment to dignity.
              </p>

              {/* Quick trust points */}
              <div className="space-y-3 mb-10">
                {[
                  "All caregivers background-checked and state-licensed",
                  "Medicare, Medicaid & private insurance accepted",
                  "24/7 on-call support for patients and families",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-md hover:bg-primary-dark hover:shadow-premium transition-all group"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════ TRUST BAR ══════════════════════════════════════════ */}
      <section className="py-5 border-y border-border bg-surface">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustBadges.map(({ label, icon: Icon }, i) => (
              <div key={label} className="flex items-center gap-2 text-sm font-semibold text-muted">
                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                {label}
                {i < trustBadges.length - 1 && (
                  <span className="hidden sm:inline text-border ml-3">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SERVICES PREVIEW ═══════════════════════════════════ */}
      <section className="py-28 bg-mesh-surface">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <motion.div {...fadeUp()} className="max-w-xl">
              <div className="badge mb-5">Our Services</div>
              <h2 className="text-4xl md:text-5xl font-bold font-goldplay mb-5">
                Care tailored to your needs.
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Every service we offer is designed with one goal — keeping your loved ones safe, healthy, and happy at home.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-bold border border-primary/25 px-5 py-2.5 rounded-full hover:bg-primary/5 transition-all group"
              >
                View all services
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {servicesPreview.map((s, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="group bg-white p-8 rounded-3xl border border-border hover:border-primary/30 transition-all shadow-card hover:shadow-premium hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <s.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-2.5 font-goldplay">{s.title}</h4>
                <p className="text-sm text-muted leading-relaxed mb-5">{s.desc}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all"
                >
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════ WHY RAPHAX ═════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
            <div className="badge mb-5">Why Choose Us</div>
            <h2 className="text-4xl md:text-5xl font-bold font-goldplay mb-5">
              Why Families Choose Raphax
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              We don't just provide caregivers — we deliver peace of mind, dignity, and genuine compassion to every family we serve.
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
              {
                icon: Heart,
                title: "Compassionate Care",
                desc: "Our caregivers are not just trained professionals — they genuinely care about the people they serve, treating every patient like family.",
                featured: false,
              },
              {
                icon: ShieldCheck,
                title: "Vetted & Certified",
                desc: "Every nurse and aide is background-checked, licensed, and trained to the highest clinical standards before entering your home.",
                featured: true,
              },
              {
                icon: Clock,
                title: "Flexible Scheduling",
                desc: "From a few hours a week to full-time live-in care — we adapt to your schedule and your needs, not the other way around.",
                featured: false,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className={`group relative p-10 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
                  item.featured
                    ? "bg-gradient-to-br from-primary to-primary-dark text-white border-transparent shadow-premium-hover"
                    : "bg-white border-border hover:border-primary/25 hover:shadow-premium"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                  item.featured ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
                }`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className={`text-xl font-bold mb-4 font-goldplay ${item.featured ? "text-white" : ""}`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed text-[0.95rem] ${item.featured ? "text-white/80" : "text-muted"}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════ PROCESS ════════════════════════════════════════════ */}
      <section className="py-28 bg-mesh-surface">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
            <div className="badge mb-5">How It Works</div>
            <h2 className="text-4xl md:text-5xl font-bold font-goldplay mb-5">
              Getting Started is Simple
            </h2>
            <p className="text-muted text-lg">
              We make it easy to access quality care — from first call to first visit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-secondary/30 to-primary/20 z-0" />

            {processSteps.map((step, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="relative z-10 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/15 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary-dark group-hover:border-transparent transition-all duration-400 shadow-sm group-hover:shadow-glow-primary">
                  <span className="text-2xl font-bold font-goldplay text-primary group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-lg font-bold font-goldplay mb-3">{step.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ═══════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
            <div className="badge mb-5">Testimonials</div>
            <h2 className="text-4xl md:text-5xl font-bold font-goldplay mb-5">
              Trusted by Families Like Yours
            </h2>
            <p className="text-muted text-lg">
              Real words from families and patients who've experienced the Raphax difference.
            </p>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="bg-white p-8 rounded-3xl shadow-card hover:shadow-premium border border-border hover:border-primary/20 flex flex-col transition-all hover:-translate-y-1"
              >
                <div className="text-6xl font-bold text-primary/12 font-goldplay leading-none mb-2 select-none">"</div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8 flex-grow text-[0.95rem]">{t.quote}</p>
                <div className="flex items-center gap-3 pt-6 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold font-goldplay">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════ FINAL CTA ══════════════════════════════════════════ */}
      <section className="py-24 bg-mesh-surface">
        <div className="container mx-auto px-6 lg:px-12 xl:px-22">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2.5rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#1a6eb5]" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-10 w-60 h-60 bg-secondary/20 rounded-full blur-2xl translate-y-1/3" />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }} />

            <div className="relative z-10 text-center text-white px-8 py-20 md:py-28">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-xs font-bold tracking-widest uppercase mb-8">
                <Heart className="w-3 h-3 fill-current" />
                No Obligation
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-goldplay mb-7 leading-tight max-w-3xl mx-auto">
                Your loved one deserves the very best care.
              </h2>
              <p className="text-white/75 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Take the first step toward quality home health care. Book an appointment with our care team today — we'll guide you through every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+18005553273"
                  className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 (800) 555-CARE
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </PageWrapper>
  );
}
