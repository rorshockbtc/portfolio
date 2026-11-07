import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { openContactModal } from "@/lib/contact-events";
import { CASE_STUDY_META } from "@/data/case-study-meta";

const EASE = [0.16, 1, 0.3, 1] as const;
const RESUME = "/resumes/kyle-cyree-resume.pdf";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Selected work: the six projects a hiring manager should see first ─── */
const FEATURED = [
  {
    slug: "custodia",
    client: "Custodia Bank",
    title: "A Federal Reserve–grade bank, designed from zero.",
    tag: "First design hire · Regulated banking",
    image: "/images/custodia/mm-01.png",
  },
  {
    slug: "unitedhealth",
    client: "UnitedHealth Group",
    title: "Care navigation for 35 million patients.",
    tag: "Principal lead · Healthcare at scale",
    image: "/images/uhg/uhg-hero.png",
  },
  {
    slug: "walmart",
    client: "Walmart",
    title: "Search and content tools for 3 million associates.",
    tag: "Staff designer · Enterprise retail",
    image: "/images/walmart/walmart-search-results.png",
  },
  {
    slug: "pipes",
    client: "Pipes",
    title: "A knowledge marketplace where people get paid when AI reads their work.",
    tag: "Founder & architect · AI protocol",
    image: "/images/pipes/pipes-hero.png",
  },
  {
    slug: "colors-type-grids",
    client: "Accént",
    title: "An open-source design system built for humans and 7B local AI models.",
    tag: "Creator · 43 pages · 197 AI rules · MIT",
    image: "/images/accent/01_accent_home_overview.png",
  },
  {
    slug: "chb-corporate",
    client: "Colon Hyphen Bracket",
    title: "From persona-switching clipart to a principal-led product & architecture studio.",
    tag: "Founder · Studio rebuild · 7 live products",
    image: "/images/chb-corporate/after/01_chb_home_hero_after.png",
  },
  {
    slug: "marigold",
    client: "Marigold",
    title: "Analyzing two million civic records without the data leaving the browser.",
    tag: "Architect · Zero-knowledge data",
    image: "/images/marigold/02_marigold_workspace_dashboard_kanban.png",
  },
  {
    slug: "chicuinaco",
    client: "Chicuinaco",
    title: "A four-language site for a mountain estate on a 3G budget.",
    tag: "Principal architect · Sovereign hospitality · BANG!",
    image: "/images/chicuinaco/site_redesign_hero.png",
  },
];

const MORE = [
  { slug: "chicuinaco", client: "Chicuinaco", title: "Four-language estate & venue site with BANG! sovereignty", year: "2026" },
  { slug: "chb-corporate", client: "Colon Hyphen Bracket", title: "Studio flagship redesign & 7-product punctuation suite", year: "2026" },
  { slug: "cassandra", client: "Cassandra", title: "AI career agent with a single-task focus mode", year: "2025" },
  { slug: "superstar", client: "Superstar", title: "Private mobile AI reflection companion", year: "2025" },
  { slug: "clubhouse1099", client: "Clubhouse 1099", title: "Voice-first venture scout network", year: "2025" },
  { slug: "highdraw", client: "High Draw Golf", title: "Editorial commerce for golf apparel", year: "2025" },
  { slug: "ultralinq", client: "UltraLinq", title: "Cloud medical imaging & clinical reporting", year: "2015 – 2017" },
  { slug: "foodler", client: "Foodler → Grubhub", title: "Marketplace checkout & live delivery tracking", year: "2010 – 2014" },
];

const EXPERIENCE = [
  { years: "2017 — Present", org: "Colon Hyphen Bracket", role: "Founder & Principal Systems Architect" },
  { years: "2022 — 2024", org: "Custodia Bank", role: "Lead Product Designer (First design hire)" },
  { years: "2021 — 2022", org: "Walmart (via PredictiveUX)", role: "Fractional / Consulting Lead Architect" },
  { years: "2020 — 2021", org: "UnitedHealth Group / Optum", role: "Senior Product Experience Designer" },
  { years: "2018 — 2020", org: "BLDG-25", role: "Design Director (Fidelity Investments, IronNet, Martin Marietta)" },
  { years: "2015 — 2017", org: "UltraLinq Healthcare", role: "Lead Product Designer / Design Director" },
  { years: "2014 — 2015", org: "ESO Fund", role: "Marketing Director (Pre-IPO Equity Liquidity)" },
  { years: "2010 — 2014", org: "Foodler (Acquired by Grubhub)", role: "Director of Business Operations" },
  { years: "2001 — 2010", org: "Foundations & Craft", role: "Emerson Graduate Tutor, TECHniques Lab Founder" },
];

const LOGOS = [
  "Custodia Bank",
  "UnitedHealth Group",
  "Optum",
  "Walmart",
  "Martin Marietta",
  "IronNet Cybersecurity",
  "Fidelity",
  "Foodler → Grubhub",
];

export default function Portfolio() {
  return (
    <div className="bg-[#EAE0D0] text-[#281B16]">
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-20 sm:pb-28" data-testid="section-hero">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-sans text-sm sm:text-base text-[#5C4840] mb-6 sm:mb-8"
            >
              <span className="text-[#FE299E] font-semibold mr-2">: - ]</span>
              Staff Product Designer & Systems Architect
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="font-serif font-light text-[clamp(2.6rem,6.2vw,6rem)] leading-[0.95] tracking-[-0.03em]"
            >
              I design the <span className="whitespace-nowrap">hard parts</span>
              <br />
              <span className="italic text-[#FE299E]">and ship them.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mt-8 sm:mt-10 font-serif text-xl sm:text-2xl leading-[1.45] max-w-[40ch] text-[#3A2A22]"
            >
              15 years turning regulated, high-stakes systems into calm software, for banks, healthcare,
              retail, and AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#281B16] text-[#F2EAE0] hover:bg-[#FE299E] hover:text-white transition-colors text-base font-medium no-underline"
                data-testid="button-see-work"
              >
                See the work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={RESUME}
                download="Resume - Kyle Cyree.pdf"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#281B16] text-[#281B16] hover:bg-[#281B16] hover:text-[#F2EAE0] transition-colors text-base font-medium no-underline"
                data-testid="button-download-resume-hero"
              >
                <Download className="w-4 h-4" /> Résumé
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="lg:col-span-4 max-w-[220px] sm:max-w-[320px] lg:max-w-none"
          >
            <img
              src="/images/kyle-portrait.jpg"
              alt="Kyle Cyree"
              className="w-full aspect-[4/5] object-cover rounded-[20px]"
              loading="eager"
            />
            <div className="mt-4 flex items-center justify-between text-sm text-[#5C4840]">
              <span>Kyle Cyree · MBA, MFA</span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2F9E5B]" /> Open to roles
              </span>
            </div>
          </motion.div>
        </div>

        {/* Logo line */}
        <FadeUp delay={0.4} className="max-w-[1280px] mx-auto mt-20 sm:mt-28 pt-8 border-t border-[#D3C7B5]">
          <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3">
            <span className="text-sm text-[#5C4840]">Previously</span>
            {LOGOS.map((l) => (
              <span key={l} className="font-serif text-2xl sm:text-3xl text-[#281B16]/80">
                {l}
              </span>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ── Selected work ──────────────────────────────────── */}
      <section id="work" className="scroll-mt-24 px-5 sm:px-10 lg:px-16 py-20 sm:py-28 bg-[#F2EAE0]" data-testid="section-selected-work">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp className="flex flex-wrap items-end justify-between gap-6 mb-12 sm:mb-16">
            <h2 className="font-serif font-light text-5xl sm:text-6xl tracking-[-0.02em]">Selected work</h2>
            <p className="text-base text-[#5C4840] max-w-[36ch]">
              Each project opens into a full case study: the problem, the decisions, and the outcome.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-14 sm:gap-y-20">
            {FEATURED.map((p, i) => (
              <FadeUp key={p.slug} delay={(i % 2) * 0.08}>
                <Link
                  href={`/case-studies/${p.slug}`}
                  className="group block no-underline text-[#281B16]"
                  data-testid={`card-work-${p.slug}`}
                >
                  <div className="overflow-hidden rounded-[18px] bg-[#E3D8C7] aspect-[16/10]">
                    <img
                      src={p.image}
                      alt={`${p.client} case study`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <div className="text-sm font-medium text-[#FE299E]">{p.client}</div>
                      <h3 className="mt-2 font-serif text-2xl sm:text-[28px] leading-[1.2] max-w-[28ch]">
                        {CASE_STUDY_META[p.slug]?.headline ?? p.title}
                      </h3>
                      <div className="mt-3 text-sm text-[#5C4840]">{p.tag}</div>
                    </div>
                    <ArrowUpRight className="w-6 h-6 shrink-0 mt-1 text-[#5C4840] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FE299E]" />
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          {/* More work — compact index */}
          <FadeUp className="mt-24 sm:mt-32">
            <h3 className="font-serif text-3xl mb-6">More work</h3>
            <ul className="border-t border-[#D3C7B5]">
              {MORE.map((m) => (
                <li key={m.slug} className="border-b border-[#D3C7B5]">
                  <Link
                    href={`/case-studies/${m.slug}`}
                    className="group grid grid-cols-12 items-baseline gap-4 py-5 no-underline text-[#281B16]"
                    data-testid={`row-work-${m.slug}`}
                  >
                    <span className="col-span-12 sm:col-span-3 font-medium">{m.client}</span>
                    <span className="col-span-10 sm:col-span-7 text-[#5C4840] group-hover:text-[#281B16] transition-colors">
                      {m.title}
                    </span>
                    <span className="col-span-2 sm:col-span-2 text-right text-sm text-[#5C4840] tabular-nums">
                      {m.year} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-24 px-5 sm:px-10 lg:px-16 py-20 sm:py-28" data-testid="section-about">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          <FadeUp className="lg:col-span-5">
            <h2 className="font-serif font-light text-5xl sm:text-6xl tracking-[-0.02em]">About</h2>
            <div className="mt-8 space-y-5 font-serif text-xl leading-[1.55] text-[#3A2A22] max-w-[42ch]">
              <p>
                I&apos;m a designer who architects. I sit between product, engineering, and leadership, and I
                turn ambiguous, regulated problems into systems teams can actually build and ship.
              </p>
              <p>
                Most people know me as <em>Cubby</em>. I hold an MBA in Strategy &amp; Finance from UNC Kenan-Flagler and an MFA from Emerson College, and I ship production TypeScript myself.
              </p>
              <p className="text-lg text-[#5C4840]">
                Beyond software, I&apos;m a published poet, author, and independent musician. I spent six years (2003–2009) fronting the rock band <em>American Kitchens</em> and have written, recorded, and produced my own records across 25 years. That lifelong discipline of rhythm, lyricism, and live performance directly informs how I architect systems, write code, and direct products under pressure.
              </p>
            </div>
            <a
              href={RESUME}
              download="Resume - Kyle Cyree.pdf"
              className="mt-8 inline-flex items-center gap-2 text-base font-medium text-[#281B16] hover:text-[#FE299E] no-underline border-b border-[#281B16]/30 hover:border-[#FE299E] pb-1"
            >
              <Download className="w-4 h-4" /> Download résumé (PDF)
            </a>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-7">
            <ul className="border-t border-[#D3C7B5]">
              {EXPERIENCE.map((e) => (
                <li key={e.org} className="grid grid-cols-12 gap-4 py-5 border-b border-[#D3C7B5] items-baseline">
                  <span className="col-span-12 sm:col-span-3 text-sm text-[#5C4840] tabular-nums">{e.years}</span>
                  <span className="col-span-12 sm:col-span-4 font-medium">{e.org}</span>
                  <span className="col-span-12 sm:col-span-5 text-[#5C4840]">{e.role}</span>
                </li>
              ))}
            </ul>

            <figure className="mt-14">
              <blockquote className="font-serif italic text-2xl sm:text-3xl leading-[1.35] text-[#281B16]">
                “One of the rarest product architects I&apos;ve worked with. He bridges engineering, executive
                strategy, and design craft effortlessly.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-[#5C4840]">
                Executive engineering &amp; product leadership, Custodia Bank
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </section>

      {/* ── Close ──────────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-[#D3C7B5] text-center" data-testid="section-close">
        <FadeUp className="max-w-[880px] mx-auto">
          <div className="font-sans font-bold text-[64px] sm:text-[88px] leading-none text-[#FE299E] tracking-[0.08em]">
            : - ]
          </div>
          <h2 className="mt-6 font-serif font-light text-5xl sm:text-6xl tracking-[-0.02em]">
            Let&apos;s build something serious.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-[#5C4840] max-w-[46ch] mx-auto">
            Open to staff and principal roles in product, design systems, and AI. I reply to every note
            personally.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openContactModal("Full-time role (Staff / Principal)")}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white text-base font-medium cursor-pointer"
              data-testid="button-contact-close"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:cubby@colonhyphenbracket.pink"
              className="inline-flex items-center px-8 py-4 rounded-full border border-[#281B16] text-[#281B16] hover:bg-[#281B16] hover:text-[#F2EAE0] transition-colors text-base font-medium no-underline"
            >
              cubby@colonhyphenbracket.pink
            </a>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
