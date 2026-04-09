import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Heart, ArrowUpRight } from "lucide-react";

const footerServices = [
  "Skilled Nursing Care",
  "Personal Care Aides",
  "Companion Care",
  "Post-Hospital Care",
  "Dementia Care",
  "Respite Care",
];

const footerLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
  { name: "Book Appointment", href: "https://calendly.com/raphaxhealth" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-secondary opacity-60" />

      {/* Subtle background blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative container mx-auto px-6 lg:px-10 xl:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6 group">
              <Image 
                src="/Raphax_Logo_c_black@3x.png" 
                alt="Raphax Logo" 
                width={200} 
                height={60} 
                className="h-12 w-auto object-contain brightness-0 invert" 
                priority
              />
            </Link>
            <p className="text-white/55 max-w-sm mb-8 leading-relaxed text-sm">
              Licensed home health agency delivering compassionate, professional care to patients in the comfort of their own homes. Serving families with dignity since 2012.
            </p>
            <div className="space-y-4 text-sm">
              <a href="tel:3147555894" className="flex items-center gap-3 text-white/55 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>314-755-5894 — Available 24/7</span>
              </a>
              <a href="mailto:care@raphax.health" className="flex items-center gap-3 text-white/55 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/25 transition-colors">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <span>care@raphax.health</span>
              </a>
              <div className="flex items-center gap-3 text-white/55">
                <div className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white/50" />
                </div>
                <span>123 Health Street, Care City, CC 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 font-goldplay text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 font-goldplay text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/50 hover:text-secondary text-sm font-medium transition-colors flex items-center gap-1.5 group"
                  >
                    {service}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="relative rounded-2xl p-[1px] mb-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-40 rounded-2xl" />
          <div className="relative bg-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-lg font-goldplay">Ready to get started?</p>
              <p className="text-white/50 text-sm mt-1">Book your free, no-obligation care assessment today.</p>
            </div>
            <a
              href="https://calendly.com/raphaxhealth"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all flex-shrink-0 text-sm flex items-center gap-2 group shadow-md"
            >
              Book Appointment
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/8">
          <p className="text-xs text-white/35 flex items-center gap-1.5">
            © {currentYear} Raphax Home Health. Made with
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
            for our patients.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "HIPAA Notice"].map((item) => (
              <Link key={item} href="#" className="text-xs text-white/35 hover:text-white/70 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
