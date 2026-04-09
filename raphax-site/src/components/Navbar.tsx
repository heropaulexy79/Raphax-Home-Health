"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ArrowRight, Phone, Mail, MapPin, 
  ChevronDown
} from "lucide-react";

// Social Icons Custom SVGs
const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const CALENDLY_URL = "https://calendly.com/raphaxhealth";


const navLinks = [
  { name: "Home",     href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Blog",     href: "#" },
  { name: "Contacts", href: "/contact" },
];

const topBarInfo = {
  phone: "314-755-5894",
  email: "care@raphax.health",
  address: "123 Health Street, Care City, CC 10001",
};

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        scrolled ? "translate-y-[-40px]" : "translate-y-0"
      }`}
    >
      {/* ── Top Bar ─────────────────────────────────────────────── */}
      <div className="bg-primary text-white w-full hidden md:block border-b border-primary-dark/30 h-10 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10 xl:px-16 flex items-center justify-between h-full text-[11px] font-semibold tracking-wider">
          {/* Left: Info */}
          <div className="flex items-center gap-6">
            <a href={`tel:${topBarInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white/80 transition-all">
              <Phone className="w-3 h-3" />
              {topBarInfo.phone}
            </a>
            <a href={`mailto:${topBarInfo.email}`} className="flex items-center gap-2 hover:text-white/80 transition-all">
              <Mail className="w-3 h-3" />
              {topBarInfo.email}
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              {topBarInfo.address}
            </div>
          </div>
          {/* Right: Socials */}
          <div className="flex items-center gap-4">
            {socials.map((social, i) => (
              <a key={i} href={social.href} className="hover:scale-110 transition-transform">
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Navbar ─────────────────────────────────────────── */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-border shadow-sm shadow-black/5">
        <div className="container mx-auto px-6 lg:px-10 xl:px-16 flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/Raphax_Logo_c_black@3x.png" 
              alt="Raphax Logo" 
              width={180} 
              height={50} 
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links (Centered) */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-bold tracking-tight uppercase transition-colors relative group py-2 flex items-center gap-1 ${
                  pathname === link.href ? "text-secondary" : "text-foreground hover:text-secondary"
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-60" />}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-secondary rounded-full transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-full text-[13px] font-bold hover:bg-primary-dark transition-all shadow-md flex items-center gap-2 group tracking-tight"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-bold uppercase p-3 rounded-xl transition-colors ${
                      pathname === link.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-surface"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Top Bar Info (merged into menu) */}
                <div className="mt-4 pt-6 border-t border-border space-y-4">
                  <div className="flex flex-col gap-3">
                    <a href={`tel:${topBarInfo.phone}`} className="flex items-center gap-3 text-sm text-muted">
                      <Phone className="w-4 h-4 text-primary" />
                      {topBarInfo.phone}
                    </a>
                    <a href={`mailto:${topBarInfo.email}`} className="flex items-center gap-3 text-sm text-muted">
                      <Mail className="w-4 h-4 text-primary" />
                      {topBarInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    {socials.map((social, i) => (
                      <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-muted hover:text-primary transition-all shadow-sm">
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-white py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 mt-2"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
