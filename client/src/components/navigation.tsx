import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import chbLogoBlack from "@assets/chb-logo-black_1775922247108.png";

const navLinks = [
  { label: "Design Vault", targetId: "confidential-vault" },
  { label: "Track Record", targetId: "enterprise-work" },
  { label: "Public Work", targetId: "living-systems" },
  { label: "Demos", targetId: "demos-livestreams" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF6EE]/95 backdrop-blur-xl border-b border-[#E5DDD0] shadow-sm"
          : "bg-[#FAF6EE]/80 backdrop-blur-md border-b border-[#E5DDD0]/60"
      }`}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-18 md:h-20"
        role="navigation"
        aria-label="Main navigation"
        data-testid="nav-main"
      >
        <Link
          href="/"
          className="relative z-10 flex items-center gap-3 focus-visible:outline-none rounded-sm"
          aria-label="Kyle Cyree — Principal Architect"
          data-testid="nav-logo"
        >
          <img
            src={chbLogoBlack}
            alt="Colon Hyphen Bracket"
            className="h-5 md:h-6 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[#78645C] hidden sm:inline">
            // CYREE
          </span>
        </Link>

        <div className="flex items-center gap-8 md:gap-10" role="menubar">
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                onClick={() => scrollTo(link.targetId)}
                className="py-1 font-sans text-xs uppercase tracking-[0.2em] font-medium text-[#78645C] hover:text-[#2B1E19] transition-colors cursor-pointer bg-transparent border-none p-0 focus-visible:outline-none"
                role="menuitem"
                data-testid={`nav-link-${link.targetId}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#E5DDD0] text-[11px] font-sans text-[#78645C]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Available Q4</span>
            </div>

            <button
              onClick={() => scrollTo("sprint-offer")}
              className="font-sans text-xs uppercase tracking-[0.15em] px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-[#E05A36] hover:bg-[#C54320] text-white font-medium transition-all shadow-sm cursor-pointer"
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
