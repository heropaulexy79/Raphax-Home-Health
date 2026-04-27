"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Phone, CheckCircle2, ArrowRight, Heart, Video } from "lucide-react";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const benefits = [
  "Free, no-obligation assessment",
  "Personalized care plan discussion",
  "Insurance & coverage verification",
  "Meet your care coordinator",
  "Questions answered by a registered nurse",
];

const faqItems = [
  {
    q: "How long does the assessment take?",
    a: "The assessment is a 30–45 minute call or video consultation with one of our senior care coordinators.",
  },
  {
    q: "Is there any cost or commitment?",
    a: "Absolutely none. The assessment is completely free with no obligation to proceed.",
  },
  {
    q: "What should I prepare before the call?",
    a: "Have your insurance information handy if possible. Otherwise, just be ready to discuss your loved one's care needs in general terms.",
  },
];

export default function BookingPage() {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.q = cal.q || [];
            cal.t = Date.now();
            cal.loaded = true;
            let s = d.createElement("script");
            s.src = "https://embed.cal.com/embed/embed.js";
            d.head.appendChild(s);
          }
          p(cal, ar);
        };
    })(window as any, "https://app.cal.com/embed/embed.js", "Cal");

    if (window.Cal) {
      window.Cal("init", { origin: "https://cal.com" });

      window.Cal("inline", {
        elementOrSelector: "#my-cal-inline",
        calLink: "oke-oluwaseun-89brfh/30min",
        layout: "month_view",
        config: {
          theme: "light",
        },
      });

      window.Cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#4A90E2" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }
  }, []);

  return (
    <PageWrapper>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative py-20 bg-mesh overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/7 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-10 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="badge-green mb-6">
              <Heart className="w-3 h-3 fill-current" />
              Free Assessment — No Obligation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-goldplay mb-7 leading-[1.05]">
              Book Your{" "}
              <span className="text-gradient">Free Care</span>{" "}
              Assessment
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Speak with a Raphax care coordinator, discuss your loved one&apos;s needs, and receive a personalized care plan — completely free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main booking card ─────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-10 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-[2.5rem] shadow-premium-hover border border-border overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">

              {/* ── Sidebar ─────────────────────────────────────── */}
              <div className="lg:col-span-2 p-10 bg-surface lg:border-r border-border">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-7">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-goldplay mb-2">Free Care Assessment</h3>
                <p className="text-muted mb-8 leading-relaxed text-sm">
                  A dedicated 30–45 minute consultation with one of our senior care coordinators.
                </p>

                {/* Meeting details */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <div className="w-9 h-9 bg-white rounded-xl border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    30–45 Minutes
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <div className="w-9 h-9 bg-white rounded-xl border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    Phone Call
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <div className="w-9 h-9 bg-white rounded-xl border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Video className="w-4 h-4 text-primary" />
                    </div>
                    Or Video Consultation
                  </div>
                </div>

                {/* What's included */}
                <div className="mb-8">
                  <h4 className="font-bold font-goldplay mb-4 text-sm uppercase tracking-wider text-muted">
                    What&apos;s Included
                  </h4>
                  <div className="space-y-3">
                    {benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-foreground">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial quote */}
                <div className="p-5 bg-white rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl text-primary/20 font-goldplay leading-none mb-2 select-none">"</div>
                  <p className="text-sm text-muted italic leading-relaxed">
                    The assessment call was so helpful. They listened to all our concerns and had a care plan ready within 24 hours.
                  </p>
                  <p className="text-xs font-bold mt-3 text-foreground">— Sandra T., Family Member</p>
                </div>
              </div>

              {/* ── Cal.com Inline Panel ────────────────────────── */}
              <div className="lg:col-span-3 bg-white min-h-[600px] relative">
                <div id="my-cal-inline" className="w-full h-full min-h-[700px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 bg-mesh-surface">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <div className="badge mb-5">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold font-goldplay">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl border border-border p-7 hover:border-primary/25 hover:shadow-md transition-all"
              >
                <h4 className="font-bold font-goldplay mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {item.q}
                </h4>
                <p className="text-muted text-sm leading-relaxed pl-8">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alternative contact ───────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-10 xl:px-16">
          <motion.div {...fadeUp()} className="text-center">
            <p className="text-muted mb-6 font-medium">Prefer to talk first?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3147555894"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full font-bold hover:bg-surface hover:border-primary/30 transition-all group"
              >
                <Phone className="w-5 h-5 text-primary" />
                Call 314-755-5894
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold px-8 py-4 rounded-full border border-primary/25 hover:bg-primary/5 transition-all group"
              >
                Send a message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}

// Add types for Cal
declare global {
  interface Window {
    Cal: any;
  }
}
