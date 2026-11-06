import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Download, GraduationCap } from "lucide-react";
import { Reveal, EDITORIAL_EASE } from "@/components/motion/primitives";

interface ExperienceRole {
  period: string;
  role: string;
  company: string;
  location: string;
  scaleBadge: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

const EXPERIENCE: ExperienceRole[] = [
  {
    period: "2024 – Present",
    role: "Founder, Principal Product Architect & R&D Lead",
    company: "Colon Hyphen Bracket, LLC",
    location: "Remote · Global",
    scaleBadge: "AI & Web3 R&D Studio",
    summary:
      "Principal product design and systems architecture studio building sovereign web protocols, zero-knowledge analytics workbenches, and AI-accelerated enterprise systems.",
    highlights: [
      "Architected and shipped Pipes.Pink (sovereign knowledge marketplace, Hash Atelier + SEMI ;-], MCP server & HTTP 402 payment gates).",
      "Built Marigold (browser-native DuckDB-WASM analytics workbench analyzing 500k+ rows locally via WebGPU and Gemini 2.5).",
      "Shipped Cassandra (executive career strategist), Superstar (dual-portal neurodivergent support platform), and Hacienda Chicuinaco (4-language eco-estate & Bitcoin venue).",
    ],
    tags: ["TypeScript", "React 19", "Next.js", "DuckDB-WASM", "MCP", "Design Systems"],
  },
  {
    period: "2023 – 2024",
    role: "Principal Product Designer & Founding Design Lead",
    company: "Custodia Bank",
    location: "Cheyenne, WY (Remote)",
    scaleBadge: "1st Product Designer · Regulated Custody",
    summary:
      "Hired as the first product designer at Kaitlin Long's regulated Special Purpose Depository Institution (SPDI) to build the foundational digital asset custody platform and multi-sig treasury workflows.",
    highlights: [
      "Architected end-to-end institutional Bitcoin custody ceremony, multi-party quorum approvals, and cold-storage withdrawal verification.",
      "Created Custodia's first unified Figma-to-React enterprise design system across treasury, compliance, and audit operations.",
      "Reduced institutional onboarding and BSA/AML compliance review friction while satisfying strict federal and state banking examiners.",
    ],
    tags: ["Institutional Custody", "Multi-Sig UX", "Fintech Compliance", "Design Systems"],
  },
  {
    period: "2021 – 2023",
    role: "Principal / Lead Product Designer",
    company: "UnitedHealth Group (Optum)",
    location: "Minnetonka, MN (Remote)",
    scaleBadge: "35M+ Patients · Clinical & Pharmacy",
    summary:
      "Led patient-facing and clinical workflow architecture across UnitedHealth Group & Optum digital health ecosystems serving over 35 million active patients.",
    highlights: [
      "Redesigned end-to-end care navigation, prescription fulfillment, and benefits clarity flows for 35M+ members.",
      "Partnered with clinical informaticists and engineering directors to unify fragmented legacy portals into a cohesive, WCAG AAA-compliant experience.",
      "Mentored senior designers and established cross-pillar component governance across Optum consumer and provider teams.",
    ],
    tags: ["Healthcare UX", "35M+ Users", "WCAG Accessibility", "Clinical Systems"],
  },
  {
    period: "2019 – 2021",
    role: "Staff Product Designer",
    company: "Walmart Global Tech",
    location: "Bentonville, AR / Austin, TX",
    scaleBadge: "3M+ Associates · Supply Chain & Retail",
    summary:
      "Spearheaded enterprise operational tools, associate-facing mobile workflows, and real-time inventory logistics across Walmart's global store network.",
    highlights: [
      "Designed mission-critical fulfillment and floor operations tools deployed to 3M+ associates across 4,700+ stores.",
      "Shaved seconds off high-frequency barcode scanning and pick-path workflows, compounding into hundreds of thousands of saved labor hours.",
      "Collaborated directly with store associates on the warehouse floor to validate tactile ergonomics and low-latency UI patterns.",
    ],
    tags: ["Enterprise Logistics", "3M+ Users", "Mobile Ergonomics", "Design Systems"],
  },
  {
    period: "2017 – 2019",
    role: "Senior UX Architect",
    company: "Fidelity Investments",
    location: "Boston, MA",
    scaleBadge: "Institutional Wealth & Brokerage",
    summary:
      "Designed high-density portfolio management, retirement planning, and fixed-income trading interfaces for retail and institutional advisors.",
    highlights: [
      "Modernized legacy advisor workbenches into responsive, data-dense modular grids with real-time risk visualization.",
      "Conducted quantitative usability testing and eye-tracking research with active wealth managers and high-net-worth investors.",
    ],
    tags: ["Wealth Management", "Data Visualization", "Financial Systems"],
  },
  {
    period: "2015 – 2017",
    role: "Lead UX / Product Designer",
    company: "UltraLinq Healthcare Solutions",
    location: "New York, NY",
    scaleBadge: "Cloud PACS & Diagnostic Imaging",
    summary:
      "Led product design for a cloud-based medical imaging (PACS) and diagnostic reporting platform used by cardiologists, sonographers, and radiologists worldwide.",
    highlights: [
      "Streamlined diagnostic ultrasound and vascular reporting templates, cutting physician sign-off time by over 35%.",
      "Engineered dark-room optimized DICOM viewing controls and structured HL7/FHIR clinical report builders.",
    ],
    tags: ["DICOM / PACS", "Clinical Reporting", "Medical Devices"],
  },
  {
    period: "2013 – 2015",
    role: "Lead Product Designer",
    company: "Foodler (Acquired by Grubhub)",
    location: "Boston, MA",
    scaleBadge: "$500M+ Exit · Consumer Marketplace",
    summary:
      "Led consumer web, iOS/Android mobile ordering, and restaurant merchant portal design for one of North America's pioneering food delivery marketplaces prior to its acquisition by Grubhub.",
    highlights: [
      "Redesigned checkout conversion funnel, real-time delivery tracker, and loyalty rewards program across web and mobile.",
      "Contributed directly to marketplace retention and GMV growth culminating in Grubhub's acquisition.",
    ],
    tags: ["Consumer Marketplace", "iOS & Android", "Conversion Optimization"],
  },
];

const EDUCATION = [
  {
    degree: "Master of Business Administration (MBA)",
    school: "UNC Kenan-Flagler Business School",
    location: "Chapel Hill, NC",
    focus: "Corporate Finance, Strategy & Technology Commercialization",
  },
  {
    degree: "Master of Fine Arts (MFA)",
    school: "Emerson College",
    location: "Boston, MA",
    focus: "Media Design, Narrative Architecture & Interactive Systems",
  },
  {
    degree: "Bachelor of Arts (BA)",
    school: "Texas Tech University",
    location: "Lubbock, TX",
    focus: "Communication Design & Visual Rhetoric",
  },
];

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-5 sm:px-10 lg:px-16 border-b border-[#D3C7B5] bg-[#EAE0D0]"
      data-testid="section-experience"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#281B16]">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840] mb-4">
              03 // Career Ledger · 15+ Years in Production
            </div>
            <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-[#281B16] tracking-[-0.025em] leading-[1.04]">
              From regulated banking &amp; 35M-patient healthcare to{" "}
              <span className="italic font-normal text-[#FE299E]">sovereign AI.</span>
            </h2>
          </div>

          <a
            href="/resumes/kyle-cyree-resume.pdf"
            download="Resume - Kyle Cyree.pdf"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#281B16] hover:bg-[#FE299E] text-[#F2EAE0] hover:text-white font-mono text-[11px] uppercase tracking-[0.16em] font-medium transition-colors self-start lg:self-auto shrink-0 no-underline"
            data-testid="button-download-resume-timeline"
          >
            <Download className="w-3.5 h-3.5" />
            Download Full CV (PDF)
          </a>
        </Reveal>

        {/* Numbered Editorial Accordion Ledger */}
        <div className="divide-y divide-[#D3C7B5] border-b border-[#281B16]">
          {EXPERIENCE.map((item, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <div
                key={item.company}
                className={`transition-colors duration-300 ${
                  isOpen ? "bg-[#F2EAE0]/70" : "hover:bg-[#F2EAE0]/35"
                }`}
                data-testid={`experience-item-${idx}`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isOpen ? null : idx)}
                  className="w-full text-left py-7 sm:py-9 px-3 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-baseline cursor-pointer bg-transparent border-none"
                  aria-expanded={isOpen}
                >
                  {/* Number + Period */}
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="font-serif italic text-xl sm:text-2xl text-[#5C4840] tabular-nums w-8 shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#5C4840] tabular-nums">
                      {item.period}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <div className="lg:col-span-6">
                    <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[34px] text-[#281B16] tracking-[-0.02em] leading-[1.1]">
                      {item.company}
                    </h3>
                    <p className="font-sans text-sm sm:text-[15px] text-[#4A3A32] font-normal mt-1.5">
                      {item.role}
                    </p>
                  </div>

                  {/* Scale Badge + Expand Icon */}
                  <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5C4840]">
                      {item.scaleBadge}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all shrink-0 ${
                        isOpen
                          ? "bg-[#281B16] text-[#F2EAE0] border-[#281B16] rotate-180"
                          : "border-[#D3C7B5] text-[#281B16]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.42, ease: EDITORIAL_EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-6 pb-9 pt-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-3 hidden lg:block pl-12">
                          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
                            Location
                          </div>
                          <div className="font-sans text-xs text-[#281B16] mt-1">
                            {item.location}
                          </div>
                        </div>
                        <div className="lg:col-span-9 max-w-3xl space-y-5">
                          <p className="font-serif text-xl sm:text-[22px] text-[#281B16] leading-[1.55]">
                            {item.summary}
                          </p>
                          <ul className="space-y-2.5 border-l border-[#D3C7B5] pl-5">
                            {item.highlights.map((h, i) => (
                              <li
                                key={i}
                                className="font-sans text-sm sm:text-[15px] text-[#4A3A32] leading-[1.68]"
                              >
                                {h}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 border-t border-[#D3C7B5]/70">
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
                              Domain &amp; Stack:
                            </span>
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-[11px] text-[#281B16]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Academic Foundation — Hairline-Divided 3-Column Ledger (No Rounded Cards) */}
        <Reveal className="mt-20">
          <div className="flex items-center justify-between gap-3 pb-5 border-b border-[#D3C7B5]">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-4 h-4 text-[#281B16]" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#281B16] font-medium">
                03.B // Academic Foundation · Business Strategy × Fine Arts Craft
              </h3>
            </div>
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
              Dual Graduate Pedigree (MBA + MFA)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D3C7B5] border-b border-[#D3C7B5]">
            {EDUCATION.map((edu, idx) => (
              <div
                key={edu.school}
                className={`py-8 ${
                  idx === 0
                    ? "md:pr-8"
                    : idx === 1
                    ? "md:px-8"
                    : "md:pl-8"
                }`}
                data-testid={`education-item-${idx}`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C4840] mb-2 tabular-nums">
                  0{idx + 1} · {edu.location}
                </div>
                <div className="font-serif font-normal text-2xl sm:text-[28px] text-[#281B16] leading-[1.15] tracking-[-0.015em]">
                  {edu.degree}
                </div>
                <div className="font-sans text-sm font-medium text-[#281B16] mt-2">
                  {edu.school}
                </div>
                <p className="font-sans text-xs text-[#5C4840] mt-2 leading-relaxed">
                  {edu.focus}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
