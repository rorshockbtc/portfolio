import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { openContactModal } from "@/lib/contact-events";

const links = [
  { label: "Work", targetId: "work" },
  { label: "About", targetId: "about" },
  { label: "Reviews", targetId: "recommendations" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#EAE0D0]/90 backdrop-blur-xl border-b border-[#D3C7B5]" : "bg-transparent border-b border-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-0 h-16 sm:h-20 flex items-center justify-between gap-6"
        aria-label="Main navigation"
        data-testid="nav-main"
      >
        <Link href="/" className="no-underline text-[#281B16] flex items-baseline gap-2.5" data-testid="nav-logo">
          <span className="font-sans font-bold text-[#FE299E] tracking-[0.06em]">: - ]</span>
          <span className="font-serif text-2xl leading-none">Kyle Cyree</span>
        </Link>

        <div className="flex items-center gap-6 sm:gap-8">
          {links.map((l) => (
            <button
              key={l.targetId}
              onClick={() => go(l.targetId)}
              className="hidden sm:inline-flex items-center min-h-[44px] bg-transparent border-none p-0 cursor-pointer text-[15px] text-[#3A2A22] hover:text-[#FE299E] transition-colors"
              data-testid={`nav-link-${l.targetId}`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="/resumes/kyle-cyree-resume.pdf"
            download="Resume - Kyle Cyree.pdf"
            className="hidden sm:inline-flex items-center min-h-[44px] text-[15px] text-[#3A2A22] hover:text-[#FE299E] transition-colors no-underline"
            data-testid="nav-link-resume"
          >
            Résumé
          </a>
          <a
            href="https://colonhyphenbracket.pink/studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center min-h-[44px] text-[15px] text-[#3A2A22] hover:text-[#FE299E] transition-colors no-underline"
            data-testid="nav-link-studio"
          >
            Studio ↗
          </a>
          <button
            onClick={() => openContactModal("Full-time role (Staff / Principal)")}
            className="min-h-[44px] px-5 inline-flex items-center rounded-full bg-[#281B16] hover:bg-[#FE299E] text-[#F2EAE0] text-sm font-medium transition-colors cursor-pointer"
            data-testid="nav-cta-contact"
          >
            Get in touch
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
