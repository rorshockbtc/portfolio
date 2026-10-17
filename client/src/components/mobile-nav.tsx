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
      <div className="bg-[#EAE0D0]/95 backdrop-blur-xl border-t border-[#D3C7B5] safe-area-bottom">
        {hasSections ? (
          <div className="px-3 py-2">
            <div
              className="flex gap-1.5 overflow-x-auto scrollbar-hide py-1 -mx-1 px-1"
              role="tablist"
              aria-label="Page sections"
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-sm font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-200 min-w-[44px] min-h-[40px] cursor-pointer border ${
                    activeSection === section.id
                      ? "bg-[#281B16] text-[#F2EAE0] border-[#281B16]"
                      : "bg-[#F2EAE0] text-[#5C4840] border-[#D3C7B5] hover:text-[#281B16]"
                  }`}
                  role="tab"
                  aria-selected={activeSection === section.id}
                  aria-controls={section.id}
                  data-testid={`nav-mobile-section-${section.id}`}
                >
                  <span className="font-bold text-[#FE299E]">{section.number}</span>
                  <span className="whitespace-nowrap">
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
                className="flex items-center justify-center min-w-[44px] min-h-[44px] px-2.5 py-2 font-sans text-xs font-semibold text-[#5C4840] hover:text-[#281B16] transition-colors cursor-pointer bg-transparent border-none"
                data-testid={`nav-mobile-${link.targetId}`}
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/studio"
              className="flex items-center gap-1.5 justify-center min-h-[36px] px-3 py-1.5 rounded-sm bg-[#281B16] text-[#F2EAE0] font-mono text-[10px] font-bold uppercase tracking-[0.12em] no-underline"
              data-testid="nav-mobile-studio"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FE299E]" />
              Studio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
