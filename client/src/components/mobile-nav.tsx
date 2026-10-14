import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useStudioSections } from "@/hooks/use-studio-sections";

const sectionLinks = [
  { targetId: "experience", label: "Experience" },
  { targetId: "selected-work", label: "Work" },
  { targetId: "code", label: "Code" },
  { targetId: "work-together", label: "Hire" },
];

export default function MobileNav() {
  const [location, setLocation] = useLocation();
  const { sections, activeSection, scrollToSection } = useStudioSections();
  const isStudioPage = location === "/studio";
  const hasSections = isStudioPage && sections.length > 0;

  const scrollTo = (id: string) => {
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="navigation"
      aria-label={hasSections ? "Section navigation" : "Page navigation"}
      data-testid="nav-mobile-bottom"
    >
      <div className="bg-background/90 backdrop-blur-xl border-t border-border/40 safe-area-bottom">
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
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full font-sans text-[10px] uppercase tracking-[0.15em] transition-all duration-300 min-w-[44px] min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
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
          <div className="flex items-center justify-around py-2 px-2">
            {sectionLinks.map((link) => (
              <button
                key={link.targetId}
                onClick={() => scrollTo(link.targetId)}
                className="flex items-center justify-center min-w-[44px] min-h-[44px] px-3 py-2 font-sans text-sm font-semibold text-[#5C4840] hover:text-[#281B16] transition-colors cursor-pointer bg-transparent border-none"
                data-testid={`nav-mobile-${link.targetId}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
