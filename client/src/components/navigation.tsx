import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import chbLogoBlack from "@assets/chb-logo-black_1775922247108.png";
import { openContactModal } from "@/lib/contact-events";

const navLinks = [
  { label: "Work", targetId: "selected-work" },
  { label: "Systems", targetId: "living-systems" },
  { label: "About", targetId: "about-kyle" },
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
        className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between h-20 md:h-22 w-full"
        role="navigation"
        aria-label="Main navigation"
        data-testid="nav-main"
      >
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-6 lg:gap-8">
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none group"
            aria-label="Kyle Cyree — Principal Designer & Systems Architect"
            data-testid="nav-logo"
          >
            <img
              src={chbLogoBlack}
              alt="Colon Hyphen Bracket"
              className="h-6 md:h-7 w-auto opacity-95 group-hover:opacity-100 transition-opacity shrink-0"
            />
            <span className="font-sans text-xs uppercase tracking-[0.22em] font-bold text-[#281B16] shrink-0 whitespace-nowrap pl-2 border-l border-[#D3C7B5]">
              Kyle Cyree
            </span>
          </Link>

          {/* Middle: Streamlined Editorial Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 pl-4" role="menubar">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                onClick={() => handleNavClick(link.targetId)}
                className="py-1 font-sans text-xs uppercase tracking-[0.18em] font-bold text-[#6B554D] hover:text-[#281B16] transition-colors cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
                role="menuitem"
                data-testid={`nav-link-${link.targetId}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Availability Status & Sprint CTA */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] text-[11px] font-sans text-[#281B16] font-semibold shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Available Q4</span>
          </div>

          <button
            onClick={() => openContactModal("1-Week Production Sprint ($7,500)")}
            className="font-sans text-xs uppercase tracking-[0.16em] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-bold transition-all shadow-md hover:shadow-lg cursor-pointer shrink-0 whitespace-nowrap"
            data-testid="nav-cta-sprint"
          >
            Book Sprint ($7,500)
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
