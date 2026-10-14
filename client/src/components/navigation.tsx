import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { openContactModal } from "@/lib/contact-events";

const navLinks = [
  { label: "Experience", targetId: "experience" },
  { label: "Work", targetId: "selected-work" },
  { label: "Code", targetId: "code" },
  { label: "Work with me", targetId: "work-together" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    if (location !== "/") {
      setLocation(`/#${targetId}`);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#EAE0D0]/95 backdrop-blur-xl border-b border-[#D3C7B5] shadow-sm"
          : "bg-[#EAE0D0]/90 backdrop-blur-md border-b border-[#D3C7B5]/70"
      }`}
      role="banner"
    >
      <nav
        className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-16 flex items-center justify-between gap-3 h-16 sm:h-20 md:h-22 w-full"
        role="navigation"
        aria-label="Main navigation"
        data-testid="nav-main"
      >
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-4 lg:gap-8 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-3 min-w-0 focus-visible:outline-none group"
            aria-label="Kyle Cyree — Product Architect & R&D Lead"
            data-testid="nav-logo"
          >
            <img
              src="/images/chb-logo-black.png"
              alt="Colon Hyphen Bracket"
              className="h-[17px] sm:h-6 md:h-7 w-auto max-w-[175px] sm:max-w-none object-contain opacity-95 group-hover:opacity-100 transition-opacity shrink-0"
            />
            <span className="hidden sm:inline font-sans text-xs uppercase tracking-[0.22em] font-bold text-[#281B16] shrink-0 whitespace-nowrap pl-2 border-l border-[#D3C7B5]">
              Kyle Cyree
            </span>
          </Link>

          {/* Middle: Streamlined Editorial Nav Links */}
          <div className="hidden lg:flex items-center gap-7 pl-4">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                onClick={() => handleNavClick(link.targetId)}
                className="py-1 font-sans text-sm font-semibold text-[#5C4840] hover:text-[#281B16] transition-colors cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
                data-testid={`nav-link-${link.targetId}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Availability Status & Sprint CTA */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href="/resumes/kyle-cyree-resume.pdf"
            target="_blank"
            rel="noopener"
            className="hidden lg:inline font-sans text-sm font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]"
          >
            Resume
          </a>

          <button
            onClick={() => openContactModal("Full-time role (Product Architect / Staff)")}
            className="font-sans text-xs sm:text-sm px-4 sm:px-6 h-9 sm:h-11 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-bold transition-all shadow-md hover:shadow-lg cursor-pointer shrink-0 whitespace-nowrap"
            data-testid="nav-cta-sprint"
          >
            Get in touch
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
