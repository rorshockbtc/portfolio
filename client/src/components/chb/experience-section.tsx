import { useState } from "react";
import { Link } from "wouter";
import { Plus, Minus, Download } from "lucide-react";

/**
 * Experience timeline. Content mirrors the resume (client/public/resumes/kyle-cyree-resume.pdf)
 * so a recruiter cross-checking the two finds the same facts.
 * Rows open in place (single-open accordion) instead of stacking cards.
 */
interface Role {
  id: string;
  company: string;
  title: string;
  dates: string;
  headline: string;
  points: string[];
  caseStudy?: string;
}

const roles: Role[] = [
  {
    id: "chb",
    company: "Colon Hyphen Bracket",
    title: "Founder, Product Architect & R&D Lead",
    dates: "2018 – Present",
    headline: "I architect, design, and ship my own products end to end.",
    points: [
      "Architected and shipped Pipes.Pink (sovereign knowledge protocol & marketplace with the integrated Hash Sanctuary and SEMI (;-]) Socratic agent), Marigold Insights (500k+-record in-browser DuckDB-WASM voter-roll audit engine), Greater-Than (WebGPU local support bots), and Cassandra—each solo from data schema to production.",
      "Mostly TypeScript with React/Next.js and Node, backed by Python, DuckDB-WASM, and Rust through AI-accelerated engineering.",
    ],
    caseStudy: "pipes",
  },
  {
    id: "custodia",
    company: "Custodia Bank",
    title: "Lead Product Designer (First Design Hire)",
    dates: "2022 – 2024",
    headline: "First design hire at a chartered Wyoming SPDI bank. I built the design function from nothing.",
    points: [
      "Took the company from rough internal tools to a complete institutional banking suite covering Fedwire fiat rails, Money Market yield accrual, programmable interbank settlement, and multi-sig Bitcoin UTXO custody in 30 days ahead of Federal Reserve review.",
      "Executed the ground-up company rebrand solo in 4 days (including art direction and brand marks) and facilitated 100+ rapid prototyping sprints with engineering and executive leadership.",
    ],
    caseStudy: "custodia",
  },
  {
    id: "predictiveux",
    company: "PredictiveUX → Walmart",
    title: "Senior UX/UI Architect",
    dates: "2021 – 2022",
    headline: "Led UX architecture for Walmart's internal enterprise search, used by 3M employees.",
    points: [
      "Replaced legacy keyword lookups with GraphQL and graph-database discovery for the largest private workforce in the world (3M direct users).",
      "Also architected diagnostic clinical decision-support tools (RecoverX) for physicians in high-acuity care settings.",
    ],
    caseStudy: "walmart",
  },
  {
    id: "uhg",
    company: "Optum & UnitedHealth Group",
    title: "Senior Product Experience Designer (Principal Mobile Lead)",
    dates: "2020 – 2021",
    headline: "Principal designer for UHG's flagship iOS and Android apps: 35M+ patients, 400K+ employees.",
    points: [
      "Championed UHG's enterprise adoption of Apple Health guidelines and native integrations, driving an estimated $100M+ in personal revenue impact while producing 80%+ of Android and 50%+ of iOS screens.",
      "Operated inside an internal McKinsey-style executive consulting group, running service-design workshops for C-suite leadership.",
    ],
    caseStudy: "unitedhealth",
  },
  {
    id: "bldg25",
    company: "BLDG-25 (Fidelity Investments & IronNet)",
    title: "Design Director",
    dates: "2018 – 2020",
    headline: "Embedded wealth-management & enterprise architecture across Fidelity Investments, IronNet, and Martin Marietta.",
    points: [
      "Spent 2 years embedded at Fidelity Investments in Raleigh as primary client liaison to architect their first cloud-native application launch.",
      "Designed enterprise RBAC roles-and-permissions frameworks for IronNet Cybersecurity (led by former NSA Director Gen. Keith Alexander) and led the full rework of Martin Marietta's inventory tooling.",
    ],
  },
  {
    id: "ultralinq",
    company: "UltraLinq Healthcare",
    title: "Design Director",
    dates: "2016 – 2018",
    headline: "Founded the internal design team and shipped HIPAA-certified medical telemetry.",
    points: [
      "Built design systems from scratch for cloud PACS web platforms, diagnostic medical devices, and wearable health monitors; led clinical user research and FDA/HIPAA usability compliance.",
    ],
    caseStudy: "ultralinq",
  },
  {
    id: "foodler",
    company: "Foodler (acquired by Grubhub)",
    title: "Director of Business Operations",
    dates: "2010 – 2015",
    headline: "Rose from customer service rep to running two-thirds of the company in 18 months ($500M+ volume).",
    points: [
      "Engineered a proprietary fraud detection system that cut chargebacks 83% (from $6M to under $1M) working alongside local police and the FBI, helping drive 10x revenue growth through to the Grubhub acquisition.",
    ],
    caseStudy: "foodler",
  },
];

const education = [
  { degree: "MBA, Business Strategy & Accounting", school: "UNC Chapel Hill (Kenan-Flagler)" },
  { degree: "MFA, Storytelling & Creative Writing", school: "Emerson College" },
  { degree: "BA, Writing & Literature, Summa Cum Laude", school: "Texas Tech University" },
];

export function ExperienceSection() {
  const [openId, setOpenId] = useState<string>("custodia");

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-12 md:py-16 border-t border-[#D3C7B5] scroll-mt-16">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-4 space-y-5">
          <div className="space-y-2.5">
            <p className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E]">
              03 // Career Timeline &amp; Education
            </p>
            <h2 id="experience-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.1]">
              15+ years, from operations to principal product architecture.
            </h2>
            <p className="text-sm sm:text-base text-[#4A3A32] font-sans leading-[1.7]">
              I started out running marketplace operations and fighting fraud, moved into enterprise design leadership at Fidelity, UnitedHealth, and Custodia Bank, and now architect and ship the working software end to end.
            </p>
          </div>

          <a
            href="/resumes/kyle-cyree-resume.pdf"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#281B16] hover:bg-[#FE299E] text-[#F2EAE0] hover:text-white text-xs sm:text-sm font-sans font-bold transition-colors whitespace-nowrap no-underline"
          >
            <Download className="w-4 h-4 text-[#FE299E] group-hover:text-white shrink-0" /> Download Full Resume (PDF)
          </a>

          <div className="pt-4 border-t border-[#D3C7B5] space-y-2.5">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-[#FE299E]">Education</h3>
            <ul className="space-y-2">
              {education.map((e) => (
                <li key={e.school} className="p-3 rounded-xl bg-[#F2EAE0] border border-[#D3C7B5]">
                  <span className="block font-serif font-bold text-sm sm:text-base text-[#281B16] leading-snug">{e.school}</span>
                  <span className="block text-xs text-[#4A3A32] font-sans mt-0.5">{e.degree}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ol className="border-t border-[#D3C7B5]">
            {roles.map((r) => {
              const isOpen = openId === r.id;
              const panelId = `exp-panel-${r.id}`;
              return (
                <li key={r.id} className="border-b border-[#D3C7B5]">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? "" : r.id)}
                      className="group w-full grid grid-cols-[1fr_auto] sm:grid-cols-[8.5rem_1fr_auto] items-baseline gap-x-5 gap-y-0.5 py-3.5 sm:py-4 text-left cursor-pointer"
                    >
                      <span className="order-2 sm:order-1 col-span-2 sm:col-span-1 font-mono text-xs font-semibold tabular-nums text-[#4A3A32]">
                        {r.dates}
                      </span>
                      <span className="order-1 sm:order-2 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                        <span className="font-serif font-bold text-lg sm:text-xl text-[#281B16] group-hover:text-[#FE299E] transition-colors leading-snug">
                          {r.company}
                        </span>
                        <span className="font-sans text-xs sm:text-sm text-[#4A3A32]">· {r.title}</span>
                      </span>
                      <span className="order-1 sm:order-3 self-center w-7 h-7 rounded-full border border-[#D3C7B5] flex items-center justify-center text-[#281B16] group-hover:border-[#FE299E] group-hover:text-[#FE299E] transition-colors shrink-0">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    hidden={!isOpen}
                    className="pb-4 sm:pl-[calc(8.5rem+1.25rem)] pr-2 sm:pr-8 space-y-2.5"
                  >
                    <p className="text-sm sm:text-base font-sans font-semibold text-[#281B16] leading-snug">{r.headline}</p>
                    <ul className="space-y-1.5">
                      {r.points.map((pt, i) => (
                        <li key={i} className="relative pl-4 text-xs sm:text-sm text-[#4A3A32] font-sans leading-[1.65] before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-px before:bg-[#FE299E]">
                          {pt}
                        </li>
                      ))}
                    </ul>
                    {r.caseStudy && (
                      <Link href={`/case-studies/${r.caseStudy}`} className="inline-block text-xs sm:text-sm font-sans font-bold text-[#FE299E] hover:underline underline-offset-4 whitespace-nowrap">
                        Read the case study →
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
