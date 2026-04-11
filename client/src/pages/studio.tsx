import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useStudioSections } from "@/hooks/use-studio-sections";
import ContactFormModal from "@/components/contact-form-modal";

import heroBg from "@assets/hero_1775928187189.png";
import sectionBg01 from "@assets/01-section-background_1775928187192.png";
import cardStartups from "@assets/02a-card-image-startups_1775928187194.png";
import cardFaith from "@assets/02b-card-image-faith_1775928187199.png";
import cardSchools from "@assets/02c-card-image-schools_1775928187199.png";
import cardSmallBiz from "@assets/02d-card-image-smallBusinesses_1775928187198.png";
import sideHealthFintech from "@assets/03-side-image-health-fintech_1775928187199.png";
import featurePropTech from "@assets/04-feature-image-proprietaryTechnology_1775928187201.png";
import dividerTopo from "@assets/05-divider-image-topography_1775928187201.png";
import calloutWorkflow from "@assets/06-callout-image-workingWithCHB_1775928187202.png";

const SECTIONS = [
  { id: "thesis", number: "01", shortLabel: "the thesis" },
  { id: "overlooked", number: "02", shortLabel: "the overlooked" },
  { id: "regulated", number: "03", shortLabel: "regulated_ systems" },
  { id: "lab", number: "04", shortLabel: "the_lab" },
  { id: "engagement", number: "05", shortLabel: "engagement" },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

function StickyNav({ activeSection, visible }: { activeSection: string; visible: boolean }) {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="hidden lg:flex fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-40 flex-col"
      role="navigation"
      aria-label="Section navigation"
      data-testid="nav-sticky"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <div className="bg-background/80 backdrop-blur-lg rounded-xl px-5 py-6 border border-border/30 shadow-sm">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`block py-2 font-display text-[11px] lowercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm whitespace-nowrap ${
              activeSection === s.id
                ? "opacity-100 translate-x-0"
                : "text-muted-foreground/60 hover:text-foreground hover:opacity-100 -translate-x-0"
            }`}
            style={activeSection === s.id ? { color: "#FE299E" } : undefined}
            aria-current={activeSection === s.id ? "true" : undefined}
            data-testid={`nav-sticky-${s.id}`}
          >
            {s.number} // {s.shortLabel}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

export default function Studio() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSectionLocal] = useState("");
  const [stickyVisible, setStickyVisible] = useState(false);
  const { setSections, setActiveSection } = useStudioSections();
  const sectionRefs = useRef<Map<string, IntersectionObserverEntry>>(new Map());
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroTextY = useTransform(heroScrollProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;
    const obs = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(heroEl);
    return () => obs.disconnect();
  }, []);

  const updateActive = useCallback(() => {
    let current = "";
    let maxRatio = 0;
    sectionRefs.current.forEach((entry, id) => {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio;
        current = id;
      }
    });
    if (!current) {
      let minTop = Infinity;
      sectionRefs.current.forEach((entry, id) => {
        if (entry.boundingClientRect.top >= 0 && entry.boundingClientRect.top < minTop) {
          minTop = entry.boundingClientRect.top;
          current = id;
        }
      });
    }
    if (current) {
      setActiveSectionLocal(current);
      setActiveSection(current);
    }
  }, [setActiveSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (id) sectionRefs.current.set(id, entry);
        });
        updateActive();
      },
      { threshold: [0, 0.1, 0.25, 0.5], rootMargin: "-80px 0px -20% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [updateActive]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StickyNav activeSection={activeSection} visible={stickyVisible} />

      {/* ═══════ HERO ═══════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-end pb-20 md:pb-28 pt-14 md:pt-16"
        data-testid="section-studio-hero"
        aria-labelledby="studio-hero-heading"
      >
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" data-testid="img-studio-hero-bg" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        </div>
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            id="studio-hero-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight max-w-5xl"
            data-testid="text-studio-hero-heading"
          >
            architecture Partner for the Stuck &amp; UnderServed.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            data-testid="text-studio-hero-subtitle"
          >
            Colon Hyphen Bracket (just say CHB) applies tasteful, measured order to complex products &amp; growing businesses that have the words but need a voice.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <Button onClick={() => setContactOpen(true)} data-testid="cta-studio-contact">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════ 01 — THE THESIS ═══════ */}
      <section
        id="thesis"
        className="relative py-28 md:py-40 overflow-hidden"
        aria-labelledby="heading-thesis"
        data-testid="section-thesis"
      >
        <div className="absolute inset-0 z-0">
          <img src={sectionBg01} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto lg:pr-56">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2
              variants={sectionReveal}
              id="heading-thesis"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-10 md:mb-14"
              data-testid="text-thesis-heading"
            >
              there's a joke all DEvELOPERS know: good, fast, &amp; cheap. pick 2.
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <motion.p variants={itemFade} className="text-muted-foreground leading-relaxed text-[15px]" data-testid="text-thesis-p1">
                With CHB, you get all three by hiring a Director/Staff level Product Architect. You get better results faster for less expense. We move at the speed of thought, outpacing traditional agencies because they have a lot of organizational complexity and often subcontract work to less experienced employees who spend time exploring instead of building.
              </motion.p>
              <motion.p variants={itemFade} className="text-muted-foreground leading-relaxed text-[15px]" data-testid="text-thesis-p2">
                Big Tech, Big Business, and Big Agencies are out of reach and out of touch with the rest of America. CHB takes scary digital initiatives and humanizes them. While the brand name is a bit of a mouthful, it's easy enough for everyone to understand that we turn business complexities into a smile.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ 02 — THE OVERLOOKED ═══════ */}
      <section
        id="overlooked"
        className="py-28 md:py-40"
        aria-labelledby="heading-overlooked"
        data-testid="section-overlooked"
      >
        <div className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto lg:pr-56">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <motion.h2
              variants={sectionReveal}
              id="heading-overlooked"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-14 md:mb-20"
              data-testid="text-overlooked-heading"
            >
              architecture FOR ThE OvERLOOKED
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
              <OverlookedCard
                title="STARTUPS"
                subtitle="idea to series b"
                image={cardStartups}
                imageAlt="Abstract visualization of startup growth trajectory"
                items={[
                  `"Everyone talks about 10x engineers but the real risk for most companies is not whether you can build it, it's if you're building the right thing. A designer that can distill why a user is adopting and then prototype the most clear version of that insight will save you millions." –Nikita Bier`,
                  "Full-time designers are rarely a right fit for most smaller startups. Most traditional designers are \"Figma Experts\" but lack an understanding of scalable systems design. While AI has come a long way, the product architecture and customer journey pieces are the hardest for most founders to get right.",
                  "CHB helps startups with small projects, as fractional design leadership, or as a partner during fundraising rounds focused on communication.",
                ]}
                testId="overlooked-startups"
              />
              <OverlookedCard
                title="private SChOOLS &amp; FaMILIES"
                image={cardSchools}
                imageAlt="Educational setting representing schools and family learning"
                items={[
                  "Private schools often lack the same resources as public schools and must rely on the same educational platforms that may not align with student needs or parent expectations.",
                  "Likewise, families who homeschool or who have goals to capture loved one's memories often have to rely on hostile applications build by Big Tech.",
                  "CHB has experience designing for education (Texas Tech University, Emerson College, Kaplan) and has proprietary software ready to be tailored to the family use case.",
                ]}
                testId="overlooked-schools"
              />
              <OverlookedCard
                title="FaITh-BaSED organizations"
                image={cardFaith}
                imageAlt="Architectural detail representing faith-based community spaces"
                items={[
                  "It is challenging for youth groups, pastors, priests, churches, or other religious institutions to find a technology partner that can deliver on-time, within budget, and who is aligned to their values-based doctrines.",
                  "CHB helps faith-based organizations build websites, reach out to congregations, and even develop custom apps for operations teams, spiritual leadership, or for members of the organization.",
                  "Since CHB has architected for small startups all the way to Fidelity Investments and UnitedHealth, the security we offer is unmatched for your needs.",
                ]}
                testId="overlooked-faith"
              />
              <OverlookedCard
                title="SMaLL BUSINESSES"
                image={cardSmallBiz}
                imageAlt="Small business storefront visualization"
                items={[
                  "So many small businesses use platforms like SquareSpace, Wix, Shopify, WordPress, or other template-based website builder tools that are challenging to modify and force small businesses to acquiesce.",
                  "Sometimes, the best thing is a de-coupled store front or marketing site and retaining your checkout flow or inventory management system as a separate concern.",
                  "Other times, for specialized use cases such as B2B sales, none of the website builders can satisfy a company's communication standards with prospective clients. CHB is comfortable designing digital storefronts, funnels, workflows and more to support your small business's growth.",
                ]}
                testId="overlooked-smallbiz"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ 03 — REGULATED SYSTEMS ═══════ */}
      <section
        id="regulated"
        className="py-28 md:py-40 bg-muted/20"
        aria-labelledby="heading-regulated"
        data-testid="section-regulated"
      >
        <div className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto lg:pr-56">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <motion.h2
              variants={sectionReveal}
              id="heading-regulated"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-14 md:mb-20"
              data-testid="text-regulated-heading"
            >
              UNBLOCKING health &amp; financial tech
            </motion.h2>

            <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">
              <motion.div variants={itemFade} className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-[15px]" data-testid="text-regulated-p1">
                  In high-stakes environments like banking and healthcare, regulation is often used as an excuse for stagnation. We are used to regulated systems but we do ensure that security and compliance don't come at the cost of human-centered design. Having worked within the strictures of Fidelity, Walmart, UnitedHealth, Custodia Bank, and the DoD we understand how to architect systems that balance "bank-grade" with intuitively simple.
                </p>
                <p className="text-muted-foreground leading-relaxed text-[15px]" data-testid="text-regulated-p2">
                  Large financial and medical institutions are often paralyzed by their own internal inefficiencies, processes, and dependencies. By operating as a single-core studio, we bypass the layers of bureaucratic consensus that slow down responsive innovation. CHB is competent within these systems, but since we've been forced to "drink our own champagne," we have developed a way of working that's differentiated.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground pt-2" role="list" data-testid="list-regulated-points">
                  {[
                    "For small or large companies who need to get unstuck",
                    "Architecture can span from sales/comms all the way to systems dev",
                    "Process is close to fully auditable by default, code versioned with Git",
                    "Design can include everything from IA to UI, Dev is full-stack",
                    "While we can build good apps & products, you should still rely on internal legal, compliance, & security practices!",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-foreground/40 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={scaleIn} className="hidden lg:block sticky top-28">
                <img
                  src={sideHealthFintech}
                  alt="Architectural cross-section of a building representing systematic health and financial tech design"
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                  data-testid="img-regulated-side"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ 04 — THE LAB ═══════ */}
      <section
        id="lab"
        className="py-28 md:py-40"
        aria-labelledby="heading-lab"
        data-testid="section-lab"
      >
        <div className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto lg:pr-56">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            <motion.h2
              variants={sectionReveal}
              id="heading-lab"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-14 md:mb-20"
              data-testid="text-lab-heading"
            >
              proprietary TEChNOLOGY
            </motion.h2>

            <motion.div variants={scaleIn} className="mb-16 md:mb-20">
              <img
                src={featurePropTech}
                alt="Steampunk-style machine illustration representing CHB's proprietary technology systems"
                className="w-full rounded-xl"
                loading="lazy"
                data-testid="img-lab-feature"
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12 md:gap-x-16 md:gap-y-16">
              <LabCard
                title="KNOWLEDGE bases:"
                items={[
                  "Knowledge Bases (using GraphQL) can drive internal & external comms",
                  "Can be hosted in the cloud, managed locally, or be integrated into tools",
                  "Optional fine-grain control + on-prem deployment increases safety",
                ]}
                testId="lab-knowledge"
              />
              <LabCard
                title="PRIvaCY first:"
                items={[
                  "Privacy comes from our background in Bitcoin, banking, and healthcare",
                  "Privacy is a human right that is critical for communities to defend",
                  "Nothing is perfectly private, but it can sometimes be Pretty Good Privacy",
                ]}
                testId="lab-privacy"
              />
              <LabCard
                title="LOCaL-first models:"
                items={[
                  "CHB has worked with popular LLMs, browser-based AI & built our own models and modules",
                  "We have developed user-signed and agentic handshakes using SHA-256 and other encryption algorithms",
                ]}
                testId="lab-local"
              />
              <LabCard
                title="focused on CURaTORS:"
                items={[
                  `The "curator economy" is focused on human traits AI can't match`,
                  "Our 5-year thesis sees many traditional jobs becoming curation-based",
                  "We are excited about this and would love to talk about it!",
                ]}
                testId="lab-curators"
              />
            </div>

            <motion.p
              variants={itemFade}
              className="mt-16 text-base md:text-lg font-medium text-foreground"
              data-testid="text-lab-patents"
            >
              Our proprietary technology includes much more than is listed here. We have <span style={{ color: "#FE299E" }}>50+ patents and trademarks pending.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ TOPOGRAPHY DIVIDER ═══════ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative h-64 md:h-80 lg:h-96 overflow-hidden"
        data-testid="divider-topography"
        aria-hidden="true"
      >
        <img src={dividerTopo} alt="" className="w-full h-full object-cover" loading="lazy" />
      </motion.div>

      {/* ═══════ 05 — ENGAGEMENT (Manifesto + Working + Models) ═══════ */}
      <section
        id="engagement"
        className="py-28 md:py-40"
        aria-labelledby="heading-manifesto"
        data-testid="section-engagement"
      >
        {/* MANIFESTO */}
        <div className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto lg:pr-56">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <motion.h2
              variants={sectionReveal}
              id="heading-manifesto"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-14 md:mb-16"
              data-testid="text-manifesto-heading"
            >
              our DESIGN manifesto
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-muted-foreground leading-relaxed text-[15px]">
              <motion.div variants={itemFade} className="space-y-6">
                <p data-testid="text-manifesto-p1">
                  If poetry is language under pressure, design is measured order applied to ideational chaos. Most technical debt isn't built in the code—it's built in meetings where fragmented roles dilute a vision until it's unrecognizable. At CHB, design is the universal language that aligns the hacker, the hustler, the visionary, and the end-user into a single, unified system.
                </p>
                <p data-testid="text-manifesto-p2">
                  Agencies are costly and slow because they are fragmented. They spend your budget on meetings to discuss ideas rather than time spent building. We bypass this cost because the person defining the brand positioning is the same person architecting the site/app design and the backend. There is no hand-off, zero loss in translation, and no committee-driven consensus that turns vibrant, living ideas into beige could-have-beens.
                </p>
              </motion.div>
              <motion.div variants={itemFade}>
                <p data-testid="text-manifesto-p3">
                  A product is only successful if the company feels a sense of camaraderie with it. We don't just build apps; we design digital expressions that the team is actually excited to own and we document everything for successful, resilient handoffs. Whether we are designing a simplified MedTech interface for an 80-year-old grandmother or a high-velocity workflow for technical users, our goal is the same: meeting the end user exactly where they are.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* WORKING WITH CHB */}
        <div className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto lg:pr-56 mt-32 md:mt-44">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <motion.h2
              variants={sectionReveal}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-14 md:mb-16"
              data-testid="text-working-heading"
            >
              working with COLON hyphen BRaCKET
            </motion.h2>

            <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">
              <motion.div variants={itemFade} className="space-y-6 text-muted-foreground leading-relaxed text-[15px]">
                <p data-testid="text-working-p1">
                  CHB doesn't need a month-long discovery cycle to discover your product's "mood." We need a 30 to 120 minute high-intensity data dump. You provide the raw fuel—the copy, the technical dependencies, and the "why"—and CHB's system ingests that data to articulate a finished result. We don't throw darts in the dark, we execute with precision because we can visualize the outcome.
                </p>
                <p data-testid="text-working-p2">
                  The most efficient way to work is also the most affordable. If you trust the architect to make the decisions, we move at the speed of thought. If you want to move at a slower pace, CHB is happy to deep dive alongside you. We offer a Performance Tier for Trust: simple daily rates, zero bureaucracy, and high-fidelity output delivered in days, not months.
                </p>
              </motion.div>
              <motion.div variants={scaleIn} className="hidden lg:block">
                <img
                  src={calloutWorkflow}
                  alt="Steampunk workflow diagram illustrating CHB's streamlined engagement process"
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                  data-testid="img-working-callout"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ENGAGEMENT MODELS */}
        <div className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto lg:pr-56 mt-32 md:mt-44">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <motion.h2
              variants={sectionReveal}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-14 md:mb-20"
              data-testid="text-models-heading"
            >
              engagement models
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <EngagementCard
                title="SIMPLE engagements:"
                items={[
                  "Hire us for 1 day or 1 year, it's your decision",
                  "Rates typically start at $1200/day and include time + materials (negotiable)",
                  "The longer the engagement, the lower the daily/hourly price",
                ]}
                testId="model-simple"
              />
              <EngagementCard
                title="EaSIER handoffs:"
                items={[
                  "CHB's work is fully-documented & we are happy to teach your team",
                  "Deliverables are made in a tool anyone can work with (conversational AI)",
                  "Full deployments + current system integrations are available",
                ]}
                testId="model-handoffs"
              />
              <EngagementCard
                title="FaSTER & BETTER:"
                items={[
                  "Most agencies sell you on the dream team, then subcontract to a junior. CHB is faster because our team has been doing this for 20+ years",
                  "Better is defined as: faster to market, faster to value, designed for ensuring client sovereignty post-engagement",
                ]}
                testId="model-faster"
              />
              <EngagementCard
                title="PERSONaL touch:"
                items={[
                  "CHB has no extended organizational structure. We're a phone call away. Directly interact with the person designing and developing for you",
                  "We hold an MFA, MBA, and have design, marketing, and engineering expertise—we'll have something in common!",
                ]}
                testId="model-personal"
              />
            </div>

            <motion.div variants={itemFade} className="mt-20 text-center">
              <Button onClick={() => setContactOpen(true)} data-testid="cta-studio-contact-bottom">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactFormModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}

function OverlookedCard({
  title,
  subtitle,
  image,
  imageAlt,
  items,
  testId,
}: {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  items: string[];
  testId: string;
}) {
  return (
    <motion.div variants={scaleIn} className="group" data-testid={`card-${testId}`}>
      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-muted">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          data-testid={`img-${testId}`}
        />
      </div>
      <h3 className="font-display text-lg md:text-xl tracking-tight mb-1" data-testid={`text-${testId}-title`}>
        {title}
      </h3>
      {subtitle && (
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
          {subtitle}
        </p>
      )}
      <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed mt-3" role="list">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground/40 shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function LabCard({
  title,
  items,
  testId,
}: {
  title: string;
  items: string[];
  testId: string;
}) {
  return (
    <motion.div variants={itemFade} className="space-y-4" data-testid={`card-${testId}`}>
      <h3 className="font-display text-base md:text-lg tracking-tight pb-2 border-b border-border/40" data-testid={`text-${testId}-title`}>
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed" role="list">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground/40 shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function EngagementCard({
  title,
  items,
  testId,
}: {
  title: string;
  items: string[];
  testId: string;
}) {
  return (
    <motion.div
      variants={scaleIn}
      className="p-6 md:p-8 rounded-xl border border-border/30 bg-muted/20 hover:bg-muted/40 transition-colors duration-500"
      data-testid={`card-${testId}`}
    >
      <h3 className="font-semibold text-sm uppercase tracking-wide mb-4" data-testid={`text-${testId}-title`}>
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed" role="list">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground/40 shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
