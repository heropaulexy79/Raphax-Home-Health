"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { 
  Briefcase, Heart, Clock, DollarSign, ChevronDown, 
  CheckCircle2, Send, ArrowRight
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

type ApplicationFormData = {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resumeUrl: string;
};

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
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const jobs = [
  {
    title: "Registered Nurse (RN)",
    type: "Full-time",
    salary: "$45 - $60 / hr",
    desc: "Provide skilled nursing care, administer medications, and manage patient care plans in a home setting. Requires current state RN license.",
  },
  {
    title: "Licensed Practical Nurse (LPN)",
    type: "Full-time / Part-time",
    salary: "$35 - $45 / hr",
    desc: "Assist with patient care tasks, monitor vital signs, and support the RN in executing care plans. Requires current state LPN license.",
  },
  {
    title: "Certified Home Health Aide (CHHA)",
    type: "Flexible",
    salary: "$18 - $25 / hr",
    desc: "Assist patients with daily living activities, personal hygiene, and provide companionship. CHHA certification required.",
  },
  {
    title: "Physical Therapist",
    type: "Per Diem",
    salary: "$70 - $95 / visit",
    desc: "Provide rehabilitative services to help patients improve mobility, relieve pain, and prevent physical disabilities. Valid PT license required.",
  }
];

const benefits = [
  { icon: DollarSign, title: "Competitive Pay", desc: "We offer top-tier compensation packages and recognize hard work." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Work when it suits your life. Choose from full-time, part-time, or per diem." },
  { icon: Heart, title: "Supportive Culture", desc: "Join a team that treats each other like family, with 24/7 clinical support." },
  { icon: Briefcase, title: "Career Growth", desc: "Access ongoing clinical training and clear pathways for advancement." }
];

const inputBase =
  "w-full px-5 py-4 rounded-2xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm font-medium placeholder:text-muted/60";
const inputError =
  "w-full px-5 py-4 rounded-2xl bg-white border border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/15 outline-none transition-all text-sm font-medium placeholder:text-muted/60";

export default function CareersPage() {
  const [openJobId, setOpenJobId] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ApplicationFormData>();

  const onSubmit = async (data: ApplicationFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Application Submitted:", data);
    setIsSubmitted(true);
    reset();
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
            <div className="badge mb-6">Join Our Team</div>
            <h1 className="text-5xl md:text-7xl font-bold font-goldplay mb-7 leading-[1.05]">
              Build a Career with <span className="text-gradient">Purpose</span>
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              At Raphax Home Health, we’re looking for compassionate, skilled professionals to help us deliver premium care to families in need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-6 lg:px-10 xl:px-16">
          <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-goldplay mb-5">
              Why Work With Us?
            </h2>
            <p className="text-muted text-lg">
              We take care of our caregivers, so they can take the best care of our patients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="bg-surface p-8 rounded-2xl border border-border text-center hover:border-primary/25 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-5">
                  <b.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold font-goldplay mb-3">{b.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Open Roles & Form ─────────────────────────────────── */}
      <section className="py-24 bg-mesh-surface">
        <div className="container mx-auto px-6 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Job Listings (Accordion) */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div {...fadeUp()}>
                <h3 className="text-3xl font-bold font-goldplay mb-2">Open Positions</h3>
                <p className="text-muted mb-8">Click on a role to see more details.</p>
              </motion.div>

              <div className="space-y-4">
                {jobs.map((job, index) => {
                  const isOpen = openJobId === index;
                  return (
                    <motion.div
                      {...fadeUp(index * 0.1)}
                      key={index}
                      className={`border rounded-2xl bg-white overflow-hidden transition-all ${
                        isOpen ? "border-primary/40 shadow-md" : "border-border shadow-sm hover:border-primary/20"
                      }`}
                    >
                      <button
                        onClick={() => setOpenJobId(isOpen ? null : index)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                      >
                        <div>
                          <h4 className="text-lg font-bold font-goldplay text-foreground">{job.title}</h4>
                          <div className="flex items-center gap-3 mt-1 text-sm font-medium text-muted">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" /> {job.type}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <span className="flex items-center gap-1 text-primary">
                              <DollarSign className="w-4 h-4" /> {job.salary}
                            </span>
                          </div>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? "bg-primary text-white rotate-180" : "bg-surface text-muted"}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-border mt-2">
                              <p className="text-muted text-sm leading-relaxed mb-4">
                                {job.desc}
                              </p>
                              <a 
                                href="#apply" 
                                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                                onClick={() => {
                                  document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                                  // Auto select in form could be added here
                                }}
                              >
                                Apply for this role <ArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-5" id="apply">
              <motion.div
                {...fadeUp(0.2)}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-premium border border-border sticky top-32"
              >
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className="absolute inset-0 bg-primary/15 rounded-full animate-pulse" />
                      <div className="relative w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold font-goldplay mb-3">Application Received!</h3>
                    <p className="text-muted text-sm mb-6 max-w-sm mx-auto leading-relaxed">
                      Thank you for your interest in joining Raphax. Our recruiting team will review your details and reach out soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-bold hover:underline text-sm"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold font-goldplay mb-1">Apply Now</h3>
                      <p className="text-sm text-muted">Take the first step toward a rewarding career.</p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted uppercase tracking-wider">Full Name</label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className={errors.name ? inputError : inputBase}
                        placeholder="Jane Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-muted uppercase tracking-wider">Email</label>
                        <input
                          {...register("email", { required: "Email is required" })}
                          className={errors.email ? inputError : inputBase}
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-muted uppercase tracking-wider">Phone</label>
                        <input
                          {...register("phone", { required: "Phone is required" })}
                          className={errors.phone ? inputError : inputBase}
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted uppercase tracking-wider">Position</label>
                      <select
                        {...register("position", { required: "Please select a role" })}
                        className={errors.position ? inputError : inputBase}
                      >
                        <option value="">Select a role...</option>
                        {jobs.map((job, idx) => (
                          <option key={idx} value={job.title}>{job.title}</option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                      {errors.position && <p className="text-red-500 text-xs">{errors.position.message}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted uppercase tracking-wider">Experience Summary</label>
                      <textarea
                        {...register("experience", { required: "Please provide a brief summary" })}
                        rows={3}
                        className={`${errors.experience ? inputError : inputBase} resize-none`}
                        placeholder="Tell us briefly about your clinical experience..."
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted uppercase tracking-wider">Resume Link (Optional)</label>
                      <input
                        {...register("resumeUrl")}
                        className={inputBase}
                        placeholder="Link to LinkedIn or PDF"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-4 flex items-center justify-center gap-2 rounded-2xl font-bold shadow-md hover:bg-primary-dark transition-all disabled:opacity-70 mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
