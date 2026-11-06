import { ArrowRight, Check } from "lucide-react";
import { openContactModal } from "@/lib/contact-events";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

interface SprintCalloutProps {
  onContactClick?: (subject?: string) => void;
}

const ENGAGEMENT_TIERS = [
  {
    num: "01",
    tag: "Executive & Technical Leadership",
    title: "Principal / Staff Full-Time Role",
    price: "Principal · Staff · R&D Lead",
    cadence: "Full-Time or Fractional Principal",
    description:
      "Direct product architecture and hands-on engineering leadership for regulated fintech, healthcare, enterprise operations, or AI-native platforms.",
    deliverables: [
      "End-to-end systems architecture & UX governance",
      "Production TypeScript / React / Next.js prototyping",
      "Cross-pillar design system tokens & accessibility (WCAG AAA)",
      "Executive strategy, clinical/compliance alignment & mentorship",
    ],
    ctaLabel: "Discuss a Leadership Role",
    subject: "Full-time role (Product Architect / Staff)",
    featured: true,
  },
  {
    num: "02",
    tag: "Rapid Architectural Validation",
    title: "1-Week Diagnostic & Prototype Sprint",
    price: "$7,500",
    cadence: "Fixed Fee · 5 Business Days",
    description:
      "Go from a complex product bottleneck or blank slate to a live, interactive TypeScript/React prototype and architectural decision record in one week.",
    deliverables: [
      "60-minute high-signal architectural intake",
      "Working coded prototype (React / TypeScript / Tailwind)",
      "Core domain schema & information architecture map",
      "Clean Git repository handoff & Loom walkthrough",
    ],
    ctaLabel: "Book a 1-Week Sprint",
    subject: "1-week sprint ($7,500)",
    featured: false,
  },
  {
    num: "03",
    tag: "Turnkey Systems & Brand Build",
    title: "2–4 Week Production System",
    price: "$15,000 – $25,000",
    cadence: "Fixed Scope · 2 to 4 Weeks",
    description:
      "Full-stack product, sovereign web publication, or multi-language digital estate architected, designed, and deployed to production.",
    deliverables: [
      "Complete Accént / Swiss editorial design system",
      "Production frontend + API / edge data architecture",
      "AI agent harness, MCP integration, or multi-locale i18n",
      "100% Lighthouse performance & zero-bloat deployment",
    ],
    ctaLabel: "Scope a Production Build",
    subject: "2-4 week systems engagement ($15k-$25k)",
    featured: false,
  },
];

export function SprintCallout({ onContactClick }: SprintCalloutProps) {
  const handleTrigger = (subject: string) => {
    if (onContactClick) {
      onContactClick(subject);
    } else {
      openContactModal(subject);
    }
  };

  return (
    <section
      id="work-together"
      className="py-24 sm:py-32 px-5 sm:px-10 lg:px-16 bg-[#1A1310] text-[#F2EAE0] border-t border-[#3D2C24]"
      data-testid="section-sprint-callout"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-[#F2EAE0]/15">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#D3C7B5]/80 mb-4">
              07 // Work Together · Direct Principal Engagement
            </div>
            <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-[#F2EAE0] tracking-[-0.025em] leading-[1.04]">
              One architect. Zero agency bloat.{" "}
              <span className="italic font-normal text-[#FE299E]">Shipped in code.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#D3C7B5]/85 max-w-md leading-[1.65]">
            Available for Principal / Staff Product Architect roles and fixed-scope CHB Studio sprints. Every engagement works directly with Kyle.
          </p>
        </Reveal>

        {/* 3-Column Hairline Architectural Ledger */}
        <Stagger className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#F2EAE0]/15 border-b border-[#F2EAE0]/15">
          {ENGAGEMENT_TIERS.map((tier, idx) => (
            <StaggerItem
              key={tier.title}
              className={`py-10 sm:py-12 flex flex-col justify-between ${
                idx === 0
                  ? "lg:pr-10"
                  : idx === 1
                  ? "lg:px-10"
                  : "lg:pl-10"
              }`}
              data-testid={`sprint-tier-${idx}`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D3C7B5]/75">
                    {tier.num} // {tier.tag}
                  </span>
                  {tier.featured && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#FE299E]">
                      ● Primary Focus
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-normal text-2xl sm:text-3xl text-[#F2EAE0] tracking-[-0.015em] leading-[1.15] mb-3">
                  {tier.title}
                </h3>

                <div className="pb-5 mb-5 border-b border-[#F2EAE0]/12">
                  <div className="font-serif italic text-3xl sm:text-4xl text-[#F2EAE0] tracking-tight">
                    {tier.price}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#D3C7B5]/70 mt-1">
                    {tier.cadence}
                  </div>
                </div>

                <p className="font-sans text-sm text-[#D3C7B5]/85 leading-[1.68] mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {tier.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-sans text-xs sm:text-[13px] text-[#F2EAE0]/90 leading-relaxed"
                    >
                      <Check className="w-3.5 h-3.5 text-[#FE299E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleTrigger(tier.subject)}
                className={`w-full inline-flex items-center justify-between px-6 py-4 rounded-full font-mono text-[11px] uppercase tracking-[0.16em] font-medium transition-all cursor-pointer ${
                  tier.featured
                    ? "bg-[#FE299E] hover:bg-[#D1007E] text-white border border-[#FE299E]"
                    : "bg-transparent hover:bg-[#F2EAE0] text-[#F2EAE0] hover:text-[#281B16] border border-[#F2EAE0]/25"
                }`}
                data-testid={`button-sprint-cta-${idx}`}
              >
                <span>{tier.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default SprintCallout;
