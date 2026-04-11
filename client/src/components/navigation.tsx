import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import chbLogoBlack from "@assets/chb-logo-black_1775922247108.png";

const navLinks = [
  { href: "/", label: "Hire" },
  { href: "/studio", label: "Studio" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent border-b border-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
      data-testid="nav-main"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-14 md:h-16">
        <Link
          href="/"
          className="relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          aria-label="CHB — Home"
          data-testid="nav-logo"
        >
          <img
            src={chbLogoBlack}
            alt="Colon Hyphen Bracket"
            className="h-4 md:h-[18px] w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10" role="menubar">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm ${
                location === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              role="menuitem"
              aria-current={location === link.href ? "page" : undefined}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
              <AnimatePresence>
                {location === link.href && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full"
                    style={{ backgroundColor: "#FE299E" }}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
