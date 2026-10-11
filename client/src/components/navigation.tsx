import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import chbLogoBlack from "@assets/chb-logo-black_1775922247108.png";

const navLinks = [
  { label: "Selected Work", targetId: "selected-work" },
  { label: "Colors & Grids", targetId: "manifesto-blueprint" },
  { label: "Live Demos", targetId: "demos-livestreams" },
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
          : "bg-[#EAE0D0]/85 backdrop-blur-md border-b border-[#D3C7B5]/70"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 md:h-20 w-full"
        role="navigation"
        aria-label="Main navigation"
        data-testid="nav-main"
      >
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2.5 shrink-0 focus-visible:outline-none rounded-sm"
          aria-label="Kyle Cyree — Principal Designer & Systems Architect"
          data-testid="nav-logo"
        >
          <img
            src={chbLogoBlack}
            alt="Colon Hyphen Bracket"
            className="h-5 md:h-6 w-auto opacity-95 hover:opacity-100 transition-opacity shrink-0"
          />
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-[#281B16] shrink-0 whitespace-nowrap">
            // CYREE
          </span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8" role="menubar">
          <div className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                onClick={() => handleNavClick(link.targetId)}
                className="py-1 font-sans text-xs uppercase tracking-[0.18em] font-semibold text-[#6B554D] hover:text-[#281B16] transition-colors cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
                role="menuitem"
                data-testid={`nav-link-${link.targetId}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] text-[11px] font-sans text-[#6B554D] shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Available Q4</span>
            </div>

            <button
              onClick={() => handleNavClick("sprint-offer")}
              className="font-sans text-xs uppercase tracking-[0.15em] px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-semibold transition-all shadow-sm cursor-pointer shrink-0 whitespace-nowrap"
              data-testid="nav-cta-sprint"
            >
              1-Week Sprint ($10k)
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
