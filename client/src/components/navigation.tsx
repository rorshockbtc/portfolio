import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { openContactModal } from "@/lib/contact-events";

const navLinks = [
  { label: "Work", targetId: "selected-work" },
  { label: "Experience", targetId: "experience" },
  { label: "Code", targetId: "code" },
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
        className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between gap-4 h-16 sm:h-20 w-full"
        role="navigation"
        aria-label="Main navigation"
        data-testid="nav-main"
      >
        {/* Left: Brand Identity — shrink-0 prevents flex crushing/overlapping */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 shrink-0 focus-visible:outline-none group no-underline"
          aria-label="Kyle Cyree — Product Architect & R&D Lead"
          data-testid="nav-logo"
        >
          <img
            src="/images/chb-logo-black.png"
            alt="Colon Hyphen Bracket"
            className="h-[18px] sm:h-6 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity shrink-0"
          />
          <span className="hidden xl:inline font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#281B16] shrink-0 whitespace-nowrap pl-3 border-l border-[#D3C7B5]">
            Kyle Cyree
          </span>
        </Link>

        {/* Center: Clean, Uncrowded Navigation */}
        <div className="hidden lg:flex items-center gap-8 shrink-0">
          {navLinks.map((link) => (
            <button
              key={link.targetId}
              onClick={() => handleNavClick(link.targetId)}
              className="py-1 font-sans text-sm font-semibold text-[#4A3A32] hover:text-[#281B16] transition-colors cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
              data-testid={`nav-link-${link.targetId}`}
            >
              {link.label}
            </button>
          ))}
          <Link
            href={location === "/studio" ? "/" : "/studio"}
            className={`py-1.5 px-4 rounded-full font-sans text-xs uppercase tracking-[0.14em] font-bold transition-all whitespace-nowrap border no-underline ${
              location === "/studio"
                ? "bg-[#281B16] text-[#F2EAE0] border-[#281B16]"
                : "bg-[#F2EAE0] text-[#281B16] border-[#D3C7B5] hover:border-[#FE299E] hover:text-[#FE299E]"
            }`}
            data-testid="nav-link-studio"
          >
            {location === "/studio" ? "← Portfolio" : "CHB Studio"}
          </Link>
        </div>

        {/* Right: Resume & Primary Contact CTA */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <Link
            href={location === "/studio" ? "/" : "/studio"}
            className="lg:hidden font-sans text-[11px] uppercase tracking-[0.12em] font-bold px-3.5 py-1.5 rounded-full border border-[#D3C7B5] bg-[#F2EAE0] text-[#281B16] hover:border-[#FE299E] whitespace-nowrap no-underline"
            data-testid="nav-link-studio-mobile-top"
          >
            {location === "/studio" ? "Portfolio" : "Studio"}
          </Link>

          <a
            href="/resumes/kyle-cyree-resume.pdf"
            target="_blank"
            rel="noopener"
            className="hidden md:inline font-sans text-sm font-semibold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E] whitespace-nowrap"
          >
            Resume
          </a>

          <button
            onClick={() => openContactModal("Full-time role (Product Architect / Staff)")}
            className="font-sans text-xs sm:text-sm px-4 sm:px-6 h-9 sm:h-10 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-bold transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0 whitespace-nowrap"
            data-testid="nav-cta-sprint"
          >
            Get in touch
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

