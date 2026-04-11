import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useStudioSections } from "@/hooks/use-studio-sections";

const pageLinks = [
  { href: "/", label: "Hire" },
  { href: "/studio", label: "Studio" },
];

export default function MobileNav() {
  const [location] = useLocation();
  const { sections, activeSection, scrollToSection } = useStudioSections();
  const isStudioPage = location === "/studio";
  const hasSections = isStudioPage && sections.length > 0;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="navigation"
      aria-label={hasSections ? "Section navigation" : "Page navigation"}
      data-testid="nav-mobile-bottom"
    >
      <div className="bg-background/80 backdrop-blur-xl border-t border-border/30 safe-area-bottom">
        {hasSections ? (
          <div className="px-3 py-2">
            <div
              className="flex gap-1 overflow-x-auto scrollbar-hide py-1 -mx-1 px-1"
              role="tablist"
              aria-label="Page sections"
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-300 min-w-[44px] min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeSection === section.id
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground bg-transparent"
                  }`}
                  style={
                    activeSection === section.id
                      ? { backgroundColor: "#FE299E" }
                      : undefined
                  }
                  role="tab"
                  aria-selected={activeSection === section.id}
                  aria-controls={section.id}
                  data-testid={`nav-mobile-section-${section.id}`}
                >
                  <span className="font-bold">{section.number}</span>
                  <span className="hidden xs:inline whitespace-nowrap">
                    {section.shortLabel}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-around py-2">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center justify-center min-w-[44px] min-h-[44px] px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${
                  location === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                aria-current={location === link.href ? "page" : undefined}
                data-testid={`nav-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
                <AnimatePresence>
                  {location === link.href && (
                    <motion.span
                      layoutId="mobile-nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ backgroundColor: "#FE299E" }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
