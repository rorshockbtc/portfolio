import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import { Reveal, EDITORIAL_EASE } from "@/components/motion/primitives";

interface Testimonial {
  quote: string;
  highlight: string;
  author: string;
  role: string;
  company: string;
  relationship: string;
}

const FEATURED_TESTIMONIALS: Testimonial[] = [
  {
    highlight: "One of the rarest product architects I've worked with—bridges deep technical systems and executive strategy effortlessly.",
    quote:
      "Kyle is one of the rarest product architects I've worked with. At Custodia Bank, he took deeply complex multi-signature custody, compliance, and institutional banking workflows and turned them into a crystal-clear, auditable product experience. He bridges engineering, executive strategy, and design craft effortlessly.",
    author: "Executive Engineering & Product Leadership",
    role: "Institutional Custody & Banking",
    company: "Custodia Bank",
    relationship: "Direct Executive & Engineering Partner",
  },
  {
    highlight: "Transformed fragmented healthcare portals serving 35M+ patients into a cohesive, accessible system.",
    quote:
      "Across portals serving over 35 million patients, Kyle brought systems-level clarity to clinical and pharmacy workflows that had resisted simplification for years. He doesn't just hand off static mocks—he understands state machines, accessibility standards, and how engineers actually build.",
    author: "Senior Clinical Product & UX Leadership",
    role: "Digital Health & Pharmacy",
    company: "UnitedHealth Group / Optum",
    relationship: "Cross-Pillar Product Partner",
  },
  {
    highlight: "His designs shaved seconds off high-frequency floor operations used by 3M+ Walmart associates every day.",
    quote:
      "When you design for 3 million store associates, every tap and millisecond matters. Kyle went straight to the warehouse floor, mapped the real physical constraints, and architected mobile tools that measurably accelerated fulfillment velocity across thousands of stores.",
    author: "Staff Engineering & Product Operations",
    role: "Global Store & Supply Chain Systems",
    company: "Walmart Global Tech",
    relationship: "Engineering & Product Counterpart",
  },
  {
    highlight: "Operates like an entire senior product & engineering team in a single seat.",
    quote:
      "Hiring Kyle feels like embedding an entire principal product and front-end engineering team in a single seat. His ability to go from a 60-minute whiteboard session to a live, production-grade TypeScript prototype in days completely changed our product velocity.",
    author: "Founder & Managing Partner",
    role: "Venture & Enterprise Advisory",
    company: "CHB Studio Client",
    relationship: "Retained Principal Advisory",
  },
];

const ARCHIVE_TESTIMONIALS = [
  {
    author: "Director of Engineering · Fintech",
    company: "Fidelity Investments",
    quote:
      "Kyle's mastery of high-density financial data visualization and fixed-income trading workflows made him the go-to architect for our hardest institutional problems.",
  },
  {
    author: "VP of Product · Diagnostic Imaging",
    company: "UltraLinq Healthcare",
    quote:
      "He redesigned our cloud PACS reporting engine from the ground up, cutting cardiologist sign-off times by more than a third while maintaining strict clinical accuracy.",
  },
  {
    author: "Co-Founder · Consumer Marketplace",
    company: "Foodler (Acquired by Grubhub)",
    quote:
      "Kyle owned our consumer web and mobile ordering experience through critical growth stages leading up to our acquisition. Fast, rigorous, and relentlessly user-focused.",
  },
  {
    author: "Principal Systems Engineer",
    company: "Enterprise Cloud Infrastructure",
    quote:
      "Most designers stop at Figma. Kyle writes clean TypeScript, understands database normalization, and ships PRs that engineers actually enjoy reviewing.",
  },
  {
    author: "Head of Design Systems",
    company: "Fortune 50 Healthcare",
    quote:
      "His token architecture and component governance bridged four separate business units without slowing down feature delivery.",
  },
  {
    author: "Chief Compliance & Risk Officer",
    company: "Regulated Digital Asset Institution",
    quote:
      "Kyle translated our BSA/AML and multi-party quorum rules into human-readable ceremonies that both institutional treasurers and federal examiners praised.",
  },
  {
    author: "Managing Director · Venture Studio",
    company: "B2B SaaS & AI Portfolio",
    quote:
      "Whenever a portfolio company is stuck between a complex AI backend and a confusing user experience, Kyle is our first call.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showArchive, setShowArchive] = useState(false);

  const active = FEATURED_TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + FEATURED_TESTIMONIALS.length) % FEATURED_TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % FEATURED_TESTIMONIALS.length);
  };

  return (
    <section
      id="endorsements"
      className="py-24 sm:py-32 px-5 sm:px-10 lg:px-16 border-b border-[#D3C7B5] bg-[#EAE0D0]"
      data-testid="section-testimonials"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#281B16]">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840] mb-4">
              06 // Executive &amp; Engineering Endorsements
            </div>
            <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-[#281B16] tracking-[-0.025em] leading-[1.04]">
              Trusted by leaders in{" "}
              <span className="italic font-normal text-[#FE299E]">high-trust systems.</span>
            </h2>
          </div>

          <a
            href="https://www.linkedin.com/in/kyle-cyree/"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-underline inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#281B16] no-underline self-start lg:self-auto"
          >
            Verify 11+ Recommendations on LinkedIn
            <ExternalLink className="w-3.5 h-3.5 text-[#FE299E]" />
          </a>
        </Reveal>

        {/* Monumental Editorial Pull-Quote Stage */}
        <div className="py-14 sm:py-20 border-b border-[#D3C7B5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3 flex lg:flex-col justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C4840] mb-2">
                  Featured Endorsement
                </div>
                <div className="font-serif italic text-3xl sm:text-4xl text-[#281B16] tabular-nums">
                  0{activeIndex + 1}{" "}
                  <span className="text-[#5C4840]/60 text-2xl">/ 0{FEATURED_TESTIMONIALS.length}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 lg:mt-8">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous endorsement"
                  className="w-10 h-10 rounded-full border border-[#281B16]/30 hover:border-[#281B16] hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] flex items-center justify-center transition-colors cursor-pointer bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next endorsement"
                  className="w-10 h-10 rounded-full border border-[#281B16]/30 hover:border-[#281B16] hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] flex items-center justify-center transition-colors cursor-pointer bg-transparent"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
                  className="m-0"
                >
                  <p className="font-serif font-light text-2xl sm:text-4xl lg:text-[42px] text-[#281B16] leading-[1.22] tracking-[-0.015em] mb-8">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#D3C7B5]">
                    <div>
                      <div className="font-serif text-xl text-[#281B16]">
                        {active.author}
                      </div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#5C4840] mt-0.5">
                        {active.company} · {active.role}
                      </div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
                      {active.relationship}
                    </span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 4-Column Hairline Endorsement Index (Replaces 4 Boxy Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D3C7B5] border-b border-[#281B16]">
          {FEATURED_TESTIMONIALS.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.company}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`text-left py-8 transition-colors cursor-pointer bg-transparent border-none flex flex-col justify-between ${
                  idx === 0
                    ? "lg:pr-7"
                    : idx === FEATURED_TESTIMONIALS.length - 1
                    ? "lg:pl-7 md:pl-6"
                    : "lg:px-7 md:px-6"
                } ${isSelected ? "opacity-100" : "opacity-75 hover:opacity-100"}`}
                data-testid={`testimonial-card-${idx}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840] tabular-nums">
                      0{idx + 1} // {item.company}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isSelected ? "bg-[#FE299E]" : "bg-[#D3C7B5]"
                      }`}
                    />
                  </div>
                  <p className="font-serif text-lg sm:text-xl text-[#281B16] leading-[1.38]">
                    &ldquo;{item.highlight}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#D3C7B5]/70 font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840]">
                  {item.role}
                </div>
              </button>
            );
          })}
        </div>

        {/* Expandable 11-Recommendation Archive */}
        <div className="pt-8">
          <button
            type="button"
            onClick={() => setShowArchive(!showArchive)}
            className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#281B16] hover:text-[#FE299E] transition-colors cursor-pointer bg-transparent border-none p-0"
            data-testid="button-toggle-all-testimonials"
          >
            <span>
              {showArchive
                ? "Hide Full Recommendation Ledger (7 Additional)"
                : "Inspect Full Recommendation Ledger (+7 Additional Endorsements)"}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                showArchive ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {showArchive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
                className="overflow-hidden"
              >
                <div className="mt-8 divide-y divide-[#D3C7B5] border-t border-b border-[#D3C7B5]">
                  {ARCHIVE_TESTIMONIALS.map((rec, i) => (
                    <div
                      key={i}
                      className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline"
                    >
                      <div className="lg:col-span-4 flex items-baseline gap-3">
                        <span className="font-serif italic text-base text-[#5C4840] tabular-nums w-6">
                          0{i + 5}
                        </span>
                        <div>
                          <div className="font-serif text-lg text-[#281B16]">
                            {rec.author}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840]">
                            {rec.company}
                          </div>
                        </div>
                      </div>
                      <p className="lg:col-span-8 font-sans text-sm text-[#4A3A32] leading-[1.65]">
                        &ldquo;{rec.quote}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
