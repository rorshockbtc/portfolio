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
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-background/60 backdrop-blur-md border-b border-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
      data-testid="nav-main"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-14 md:h-16">
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          aria-label="Kyle Cyree — Principal Architect"
          data-testid="nav-logo"
        >
          <img
            src={chbLogoBlack}
            alt="Colon Hyphen Bracket"
            className="h-4 md:h-[18px] w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
          <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground hidden sm:inline">
            // CYREE
          </span>
        </Link>

        <div className="flex items-center gap-8" role="menubar">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                onClick={() => scrollTo(link.targetId)}
                className="py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                role="menuitem"
                data-testid={`nav-link-${link.targetId}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("sprint-offer")}
            className="font-mono text-[11px] uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-medium transition-all shadow-sm cursor-pointer"
            data-testid="nav-cta-sprint"
          >
            Book a Sprint
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
