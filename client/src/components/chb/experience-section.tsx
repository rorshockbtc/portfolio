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
    title: "Founder & Product Architect",
    dates: "2018 – Present",
    headline: "I architect, design, and ship my own products end to end.",
    points: [
      "Architected and shipped Pipes.Pink (sovereign knowledge protocol & marketplace with the integrated Hash Sanctuary and SEMI (;-]) Socratic agent), Marigold Insights (2M-record in-browser DuckDB-WASM voter-roll audit engine), Greater-Than (WebGPU local support bots), and Cassandra—each solo from data schema to production.",
      "Mostly TypeScript with React/Next.js and Node, backed by Python, DuckDB-WASM, and Rust through AI-accelerated engineering.",
    ],
    caseStudy: "pipes",
  },
  {
    id: "custodia",
    company: "Custodia Bank",
    title: "Lead Product Designer",
    dates: "2022 – 2024",
    headline: "First design hire at a chartered Wyoming bank. I built the design function from nothing.",
    points: [
      "Took the company from rough internal tools to a full banking management system covering Bitcoin custody, fiat banking, and interbank smart-contract products.",
      "Did the full company rebrand myself, including art direction and the brand marks.",
      "Ran 100+ rapid prototyping sprints and workshops with engineering and business teams.",
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
      "Set new search patterns and behaviors for the largest private workforce in the world.",
      "Also designed clinical decision-support tools (RecoverX) for diagnostic workflows.",
    ],
    caseStudy: "walmart",
  },
  {
    id: "uhg",
    company: "Optum & UnitedHealth Group",
    title: "Senior Product Experience Designer",
    dates: "2020 – 2021",
    headline: "Principal designer for UHG's flagship iOS and Android apps: 35M+ patients, 400K+ employees.",
    points: [
      "Pushed for UHG to adopt Apple Health guidelines and integrations, with an estimated revenue impact in the hundreds of millions.",
      "Worked inside an internal McKinsey-style consulting group, running service-design workshops for executive leadership.",
    ],
    caseStudy: "unitedhealth",
  },
  {
    id: "bldg25",
    company: "BLDG-25 (Fidelity & IronNet)",
    title: "Design Director",
    dates: "2018 – 2020",
    headline: "Directed a team of 3 designers across enterprise and security clients.",
    points: [
      "Spent 2 years embedded at Fidelity Investments in Raleigh as the main client liaison, and architected their first cloud-native app launch.",
      "Designed roles-and-permissions frameworks for IronNet, the cybersecurity company led by former NSA Director Gen. Keith Alexander.",
      "Led the full rework of Martin Marietta's internal inventory tools.",
    ],
    caseStudy: "ironnet",
  },
  {
    id: "ultralinq",
    company: "UltraLinq Healthcare",
    title: "Design Director",
    dates: "2016 – 2018",
    headline: "Founded the internal design team and shipped HIPAA-certified products.",
    points: [
      "Built design systems from scratch for web, medical devices, and wearable health monitors.",
      "Ran user research in clinical settings and formal healthcare compliance testing.",
    ],
    caseStudy: "ultralinq",
  },
  {
    id: "foodler",
    company: "Foodler (acquired by Grubhub)",
    title: "Director of Business Operations",
    dates: "2010 – 2015",
    headline: "Went from customer service rep to running two-thirds of the company in 18 months.",
    points: [
      "Built a fraud detection system that cut chargebacks 83% (from $6M to under $1M), working alongside local police and the FBI.",
      "Oversaw $500M+ in order volume and helped drive 10x revenue growth through to the exit.",
    ],
    caseStudy: "foodler",
  },
];

const education = [
  { degree: "MBA, Business Strategy & Accounting", school: "UNC Chapel Hill" },
  { degree: "MFA, Storytelling & Creative Writing", school: "Emerson College" },
  { degree: "BA, Writing & Literature, Summa Cum Laude", school: "Texas Tech University" },
];

export function ExperienceSection() {
  const [openId, setOpenId] = useState<string>("custodia");

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-16 md:py-24 border-t border-[#D3C7B5] scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28 self-start">
          <p className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E]">
            03 // Career Timeline
          </p>
          <h2 id="experience-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.1]">
            15 years, from operations to principal design.
          </h2>
          <p className="text-base sm:text-lg text-[#4A3A32] font-sans leading-[1.72]">
            I started out running operations and fighting fraud, then moved into design leadership, and now I architect and ship the working software too.
            That&apos;s why I always start with the business problem.
          </p>
          <a
            href="/resumes/kyle-cyree-resume.pdf"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-sans font-bold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E] whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-[#FE299E]" /> Download Full Resume (PDF)
          </a>
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
                      className="group w-full grid grid-cols-[1fr_auto] sm:grid-cols-[9rem_1fr_auto] items-baseline gap-x-6 gap-y-1 py-5 sm:py-6 text-left cursor-pointer"
                    >
                      <span className="order-2 sm:order-1 col-span-2 sm:col-span-1 font-mono text-xs sm:text-sm font-semibold tabular-nums text-[#4A3A32]">
                        {r.dates}
                      </span>
                      <span className="order-1 sm:order-2 space-y-0.5">
                        <span className="block font-serif font-bold text-xl sm:text-2xl text-[#281B16] group-hover:text-[#FE299E] transition-colors leading-snug">
                          {r.company}
                        </span>
                        <span className="block font-sans text-sm sm:text-base text-[#4A3A32]">{r.title}</span>
                      </span>
                      <span className="order-1 sm:order-3 self-center w-9 h-9 rounded-full border border-[#D3C7B5] flex items-center justify-center text-[#281B16] group-hover:border-[#FE299E] group-hover:text-[#FE299E] transition-colors shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    hidden={!isOpen}
                    className="pb-7 sm:pl-[calc(9rem+1.5rem)] pr-2 sm:pr-12 space-y-4"
                  >
                    <p className="text-lg sm:text-xl font-sans font-semibold text-[#281B16] leading-relaxed">{r.headline}</p>
                    <ul className="space-y-2.5">
                      {r.points.map((pt, i) => (
                        <li key={i} className="relative pl-5 text-base text-[#4A3A32] font-sans leading-[1.7] before:absolute before:left-0 before:top-[0.75em] before:w-2 before:h-px before:bg-[#FE299E]">
                          {pt}
                        </li>
                      ))}
                    </ul>
                    {r.caseStudy && (
                      <Link href={`/case-studies/${r.caseStudy}`} className="inline-block text-sm font-sans font-bold text-[#FE299E] hover:underline underline-offset-4 whitespace-nowrap">
                        Read the case study →
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="pt-10 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E]">Education</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {education.map((e) => (
                <li key={e.school} className="p-4 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] space-y-1">
                  <span className="block font-serif font-bold text-lg text-[#281B16]">{e.school}</span>
                  <span className="block text-sm text-[#4A3A32] font-sans leading-relaxed">{e.degree}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
