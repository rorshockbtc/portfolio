import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, MotionConfig } from "framer-motion";
import { Button } from "@/components/ui/button";
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

const ease = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const textReveal = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
};

const itemFade = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const imgRevealRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease } },
};

function PinkBullet() {
  return (
    <span
      className="mt-[6px] shrink-0 select-none"
      style={{ color: "#FE299E", fontSize: "9px", lineHeight: 1 }}
      aria-hidden="true"
    >
      ▲
    </span>
  );
}

function StickyNav({ activeSection, visible }: { activeSection: string; visible: boolean }) {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 30 }}
      transition={{ duration: 0.6, ease }}
      className="hidden lg:flex fixed right-0 top-0 bottom-0 z-40 flex-col justify-center items-start"
      style={{
        width: "26%",
        paddingLeft: "clamp(24px, 2.08vw, 40px)",
        pointerEvents: visible ? "auto" : "none",
      }}
      role="navigation"
      aria-label="Section navigation"
      data-testid="nav-sticky"
    >
      <div
        className="flex flex-col"
        style={{ background: "rgba(255,255,255,0.9)", padding: "18px 28px 18px 20px" }}
      >
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => {
              e.preventDefault();
              const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              document.getElementById(s.id)?.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
                block: "start",
              });
            }}
            className={`block py-[6px] font-display text-[12px] lowercase tracking-[0.08em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm whitespace-nowrap ${
              activeSection === s.id ? "" : "text-foreground/80"
            }`}
            style={
              activeSection === s.id
                ? { color: "#FE299E", fontWeight: 700 }
                : {}
            }
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
  const heroTextY = useTransform(heroScrollProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.6], [1, 0]);
  const heroBgScale = useTransform(heroScrollProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    setSections(SECTIONS);
    return () => setSections([]);
  }, [setSections]);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;
    const obs = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0.05 }
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
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StickyNav activeSection={activeSection} visible={stickyVisible} />

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-start pt-24 md:pt-28 pb-20"
        data-testid="section-studio-hero"
        aria-labelledby="studio-hero-heading"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-20"
            style={{ scale: heroBgScale }}
            data-testid="img-studio-hero-bg"
          />
        </div>

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 studio-content"
        >
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            id="studio-hero-heading"
            className="font-display leading-[1.2] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 8.33vw, 10rem)" }}
            data-testid="text-studio-hero-heading"
          >
            architecture Partner for the Stuck &amp; UnderServed.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="mt-8 md:mt-10 text-foreground leading-[1.5]"
            style={{ fontSize: "clamp(1rem, 1.15vw, 1.375rem)", fontWeight: 200 }}
            data-testid="text-studio-hero-subtitle"
          >
            Colon Hyphen Bracket (just say CHB) offers full-service design and development to products &amp; companies that have something to say.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="mt-10"
          >
            <Button
              onClick={() => setContactOpen(true)}
              data-testid="cta-studio-contact"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════ 01 — THE THESIS ═══════════════════════════════ */}
      <section
        id="thesis"
        className="relative py-28 md:py-40 lg:py-48 overflow-hidden"
        aria-labelledby="heading-thesis"
        data-testid="section-thesis"
      >
        {/* Full-bleed US map — no left margin, offset so west coast is partially cut */}
        <div className="absolute inset-0 z-0">
          <img
            src={sectionBg01}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "right center" }}
            loading="lazy"
          />
          {/* Gradient: white top → reveal map in middle → white bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 17%, rgba(255,255,255,0.75) 80%, #FFFFFF 100%)",
            }}
          />
        </div>

        <div className="relative z-10 studio-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.h2
              variants={textReveal}
              id="heading-thesis"
              className="font-display leading-[1.2] tracking-[-0.02em] mb-14 md:mb-20"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}
              data-testid="text-thesis-heading"
            >
              there's a joke all DEvELOPERS know:<br />
              good, fast, &amp; cheap. pick 2.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-14">
              <motion.p
                variants={itemFade}
                className="text-foreground/60 leading-[1.8] text-[16px] md:text-[17px]"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
                data-testid="text-thesis-p1"
              >
                With CHB, you get all three by hiring a Director/Staff level Product Architect. You get better results faster for less expense. We move at the speed of thought, outpacing traditional agencies because they have a lot of organizational complexity and often subcontract work to less experienced employees who spend time exploring instead of building.
              </motion.p>
              <motion.p
                variants={itemFade}
                className="text-foreground/60 leading-[1.8] text-[16px] md:text-[17px]"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
                data-testid="text-thesis-p2"
              >
                Big Tech, Big Business, and Big Agencies are out of reach and out of touch with the rest of America. CHB takes scary digital initiatives and humanizes them. While the brand name is a bit of a mouthful, it's easy enough for everyone to understand that we turn business complexities into a smile.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ 02 — THE OVERLOOKED ═══════════════════════════════ */}
      <section
        id="overlooked"
        className="py-28 md:py-40 lg:py-48"
        aria-labelledby="heading-overlooked"
        data-testid="section-overlooked"
      >
        <div className="studio-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={stagger}
          >
            <motion.h2
              variants={textReveal}
              id="heading-overlooked"
              className="font-display leading-[1.2] tracking-[-0.02em] mb-16 md:mb-24"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}
              data-testid="text-overlooked-heading"
            >
              architecture FOR ThE OvERLOOKED
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-10 md:gap-12">
              <OverlookedCard
                title="STARTUPS"
                subtitle="idea to series b"
                image={cardStartups}
                imageAlt="Abstract visualization of startup growth trajectory"
                imagePosition="center"
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
                imagePosition="center 40%"
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
                imagePosition="60% center"
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
                imagePosition="center center"
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

      {/* ═══════════════════════════════ 03 — REGULATED SYSTEMS ═══════════════════════════════ */}
      <section
        id="regulated"
        className="relative py-28 md:py-40 lg:py-48 overflow-hidden"
        aria-labelledby="heading-regulated"
        data-testid="section-regulated"
      >
        {/* Heading: standard studio-content left margin, matching all other sections */}
        <div className="studio-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.h2
              variants={textReveal}
              id="heading-regulated"
              className="font-display leading-[1.2] tracking-[-0.02em] mb-14 md:mb-20"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}
              data-testid="text-regulated-heading"
            >
              UNBLOCKING health &amp;<br />financial tech
            </motion.h2>
          </motion.div>
        </div>

        {/* Two-column: body text left (74%), building images right (26%) */}
        <div className="lg:grid lg:grid-cols-[74%_26%] items-start">
          {/* Left column: body text with standard left padding */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            style={{ paddingLeft: "clamp(24px, 2.08vw, 40px)" }}
            className="pr-6 lg:pr-20"
          >
            <motion.p
              variants={itemFade}
              className="text-foreground/60 leading-[1.8] text-[16px] md:text-[17px] mb-7"
              data-testid="text-regulated-p1"
            >
              In high-stakes environments like banking and healthcare, regulation is often used as an excuse for stagnation. We are used to regulated systems but we do ensure that security and compliance don't come at the cost of human-centered design. Having worked within the strictures of Fidelity, Walmart, UnitedHealth, Custodia Bank, and the DoD we understand how to architect systems that balance "bank-grade" with intuitively simple.
            </motion.p>
            <motion.p
              variants={itemFade}
              className="text-foreground/60 leading-[1.8] text-[16px] md:text-[17px] mb-10"
              data-testid="text-regulated-p2"
            >
              Large financial and medical institutions are often paralyzed by their own internal inefficiencies, processes, and dependencies. By operating as a single-core studio, we bypass the layers of bureaucratic consensus that slow down responsive innovation. CHB is competent within these systems, but since we've been forced to "drink our own champagne," we have developed a way of working that's differentiated.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-4" data-testid="list-regulated-points">
              {[
                "For small or large companies who need to get unstuck",
                "Architecture can span from sales/comms all the way to systems dev",
                "Process is close to fully auditable by default, code versioned with Git",
                "Design can include everything from IA to UI, Dev is full-stack",
                "While we can build good apps & products, you should still rely on internal legal, compliance, & security practices!",
              ].map((item, i) => (
                <motion.p
                  key={i}
                  variants={itemFade}
                  className="flex items-start gap-2 text-[15px] md:text-[16px] text-foreground/60 leading-[1.7]"
                >
                  <PinkBullet />
                  <span>{item}</span>
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right column: two building images stacked at 70% opacity, bleeding to right edge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="hidden lg:flex flex-col"
          >
            <motion.div variants={imgRevealRight} className="overflow-hidden">
              <img
                src={sideHealthFintech}
                alt="Architectural cross-section of a building representing systematic health and financial tech design"
                className="w-full object-cover"
                style={{ objectPosition: "center top", height: "340px", opacity: 0.7 }}
                loading="lazy"
                data-testid="img-regulated-building-1"
              />
            </motion.div>
            <motion.div variants={imgRevealRight} className="overflow-hidden mt-6">
              <img
                src={sideHealthFintech}
                alt="Architectural cross-section detail"
                className="w-full object-cover"
                style={{ objectPosition: "center bottom", height: "280px", opacity: 0.7 }}
                loading="lazy"
                data-testid="img-regulated-building-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ 04 — THE LAB ═══════════════════════════════ */}
      <section
        id="lab"
        className="relative"
        aria-labelledby="heading-lab"
        data-testid="section-lab"
      >
        {/* Heading: normal document flow above the machine image */}
        <div className="studio-content pt-20 md:pt-28 pb-10 md:pb-14">
          <motion.h2
            id="heading-lab"
            className="font-display leading-[1.2] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
            data-testid="text-lab-heading"
          >
            proprietary TEChNOLOGY
          </motion.h2>
        </div>

        {/* Full-bleed machine image below the heading */}
        <div className="overflow-hidden">
          <motion.img
            src={featurePropTech}
            alt="Steampunk-style machine illustration representing CHB's proprietary technology systems"
            className="w-full object-cover"
            style={{ display: "block", maxHeight: "85vh" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            loading="lazy"
            data-testid="img-lab-feature"
          />
        </div>

        {/* Cards below the image */}
        <div className="studio-content py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={stagger}
          >
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14 md:gap-x-20 md:gap-y-20">
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
                  "CHB has worked with popular LLMs, browser-based AI, & built our own models and modules",
                  "We have developed user-signed and agentic handshakes using SHA-256 and other encryption algorithms",
                  "Nothing is fully trusted until it can run without cloud dependency",
                ]}
                testId="lab-local"
              />
              <LabCard
                title="focused on cuRaTORS:"
                items={[
                  "The \u201ccurator economy\u201d is focused on human traits AI can\u2019t match",
                  "Our 5-year thesis sees many traditional jobs becoming curation-based",
                  "We are excited about this and would love to talk about it!",
                ]}
                testId="lab-curators"
              />
            </div>

            <motion.p
              variants={itemFade}
              className="mt-20 text-[18px] md:text-[20px] font-medium text-foreground leading-relaxed"
              data-testid="text-lab-patents"
            >
              Our proprietary technology includes much more than is listed here. We have{" "}
              <strong style={{ color: "#FE299E" }}>50+ patents and trademarks pending.</strong>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ TOPOGRAPHY DIVIDER ═══════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="relative overflow-hidden"
        style={{ height: "320px" }}
        data-testid="divider-topography"
        aria-hidden="true"
      >
        <img
          src={dividerTopo}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* ═══════════════════════════════ 05 — ENGAGEMENT (Manifesto + Working + Models) ═══════════════════════════════ */}
      <section
        id="engagement"
        className="py-28 md:py-40 lg:py-48"
        aria-labelledby="heading-manifesto"
        data-testid="section-engagement"
      >
        {/* MANIFESTO — single column, large editorial type */}
        <div className="studio-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.h2
              variants={textReveal}
              id="heading-manifesto"
              className="font-display leading-[1.2] tracking-[-0.02em] mb-14 md:mb-20"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}
              data-testid="text-manifesto-heading"
            >
              our DESIGN manifesto
            </motion.h2>

            {/* Single wide column, editorial body text — slightly larger than bullet text */}
            <div className="space-y-10 text-foreground/60 leading-[1.75] text-[17px] md:text-[18px] lg:text-[19px]">
              <motion.p variants={itemFade} data-testid="text-manifesto-p1">
                If poetry is language under pressure, design is measured order applied to ideational chaos. Most technical debt isn't built in the code—it's built in meetings where fragmented roles dilute a vision until it's unrecognizable. At CHB, design is the universal language that aligns the hacker, the hustler, the visionary, and the end-user into a single, unified system.
              </motion.p>
              <motion.p variants={itemFade} data-testid="text-manifesto-p2">
                Agencies are costly and slow because they are fragmented. They spend your budget on meetings to discuss ideas rather than time spent building. We bypass this cost because the person defining the brand positioning is the same person architecting the site/app design and the backend. There is no hand-off, zero loss in translation, and no committee-driven consensus that turns vibrant, living ideas into beige could-have-beens.
              </motion.p>
              <motion.p variants={itemFade} data-testid="text-manifesto-p3">
                A product is only successful if the company feels a sense of camaraderie with it. We don't just build apps; we design digital expressions that the team is actually excited to own and we document everything for successful, resilient handoffs. Whether we are designing a simplified MedTech interface for an 80-year-old grandmother or a high-velocity workflow for technical users, our goal is the same: meeting the end user exactly where they are.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* WORKING WITH CHB — full-bleed background, stacked vertical heading */}
        <div className="relative mt-36 md:mt-48 overflow-hidden" data-testid="section-working-with-chb">
          {/* Full-bleed background at 40% opacity */}
          <motion.img
            src={calloutWorkflow}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.4 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            loading="lazy"
            data-testid="img-working-callout"
          />

          {/* Content overlay */}
          <div
            className="relative z-10 flex flex-col lg:flex-row items-start py-20 md:py-28 lg:py-36 gap-0"
            style={{ paddingLeft: 0 }}
          >
            {/* Left: white scrim + stacked heading + button + fig */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              style={{
                background: "rgba(255,255,255,0.6)",
                padding: "clamp(1.5rem, 3vw, 3rem) clamp(2rem, 4vw, 4rem) clamp(1.5rem, 3vw, 3rem) clamp(24px, 2.08vw, 40px)",
                flexShrink: 0,
              }}
            >
              {/* Stacked heading: one word per line */}
              <div
                className="font-display tracking-[-0.02em]"
                style={{ fontSize: "clamp(3rem, 7vw, 8rem)", lineHeight: 1.0 }}
                data-testid="text-working-heading"
              >
                {["WORKING", "WITH", "COLON", "HYPHEN", "BRACKET"].map((word, i) => (
                  <motion.div key={word} variants={textReveal} custom={i}>
                    {word}
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemFade} className="mt-8">
                <Button
                  onClick={() => setContactOpen(true)}
                  data-testid="cta-working-contact"
                >
                  Contact Us
                </Button>
              </motion.div>

              <motion.p
                variants={itemFade}
                className="mt-3 text-[13px] text-foreground/50 italic"
                data-testid="text-fig-caption"
              >
                Fig. 1
              </motion.p>
            </motion.div>

            {/* Right: body text — slides in from RIGHT per spec */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="flex-1 space-y-7 text-foreground/70 leading-[1.8] text-[16px] md:text-[17px]"
              style={{
                paddingLeft: "clamp(2rem, 4vw, 4rem)",
                paddingRight: "clamp(2rem, 5vw, 7rem)",
              }}
            >
              <motion.p variants={imgRevealRight} data-testid="text-working-p1">
                CHB doesn't need a month-long discovery cycle to discover your product's "mood." We need a 30 to 120 minute high-intensity data dump. You provide the raw fuel—the copy, the technical dependencies, and the "why"—and CHB's system ingests that data to articulate a finished result. We don't throw darts in the dark, we execute with precision because we can visualize the outcome.
              </motion.p>
              <motion.p variants={imgRevealRight} data-testid="text-working-p2">
                The most efficient way to work is also the most affordable. If you trust the architect to make the decisions, we move at the speed of thought. If you want to move at a slower pace, CHB is happy to deep dive alongside you. We offer a Performance Tier for Trust: simple daily rates, zero bureaucracy, and high-fidelity output delivered in days, not months.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* ENGAGEMENT MODELS — no heading, no contact button */}
        <div className="studio-content mt-36 md:mt-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={stagger}
          >
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
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
                  "Most agencies sell you on the dream team, then subcontract to a junior",
                  "CHB is faster because our team has been doing this for 20+ years",
                  "Better is defined as: faster to market, faster to value, designed for ensuring client sovereignty post-engagement",
                ]}
                testId="model-faster"
              />
              <EngagementCard
                title="PERSONaL touch:"
                items={[
                  "CHB has no extended organizational structure. We\u2019re a phone call away.",
                  "Directly interact with the person designing and developing for you",
                  "We hold an MFA, MBA, and have design, marketing, and engineering expertise\u2014we\u2019ll have something in common!",
                ]}
                testId="model-personal"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
    </MotionConfig>
  );
}

function OverlookedCard({
  title,
  subtitle,
  image,
  imageAlt,
  imagePosition,
  items,
  testId,
}: {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  items: string[];
  testId: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
      className="group"
      data-testid={`card-${testId}`}
    >
      <div className="aspect-[4/3] overflow-hidden mb-6 bg-muted">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: imagePosition }}
          loading="lazy"
          data-testid={`img-${testId}`}
        />
      </div>
      <h3
        className="font-display tracking-tight mb-1 leading-[1.2]"
        style={{ fontSize: "clamp(1.2rem, 2vw, 1.75rem)" }}
        data-testid={`text-${testId}-title`}
      >
        {title}
      </h3>
      {subtitle && (
        <p className="text-[13px] font-mono text-foreground/40 uppercase tracking-wider mb-4">
          {subtitle}
        </p>
      )}
      <ul className="space-y-3 text-[15px] md:text-[16px] text-foreground/60 leading-[1.7] mt-4" role="list">
        {items.map((item, i) => {
          const isQuote = item.startsWith('"') || item.startsWith('\u201c');
          return (
            <li key={i} className="flex items-start gap-2">
              <PinkBullet />
              <span style={isQuote ? { fontStyle: "italic", opacity: 0.85 } : {}}>
                {item}
              </span>
            </li>
          );
        })}
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
    <motion.div variants={itemFade} className="space-y-5" data-testid={`card-${testId}`}>
      <h3
        className="font-display tracking-tight leading-[1.2]"
        style={{ fontSize: "clamp(1rem, 1.25vw, 1.5rem)" }}
        data-testid={`text-${testId}-title`}
      >
        {title}
      </h3>
      <ul className="space-y-3 text-[15px] md:text-[16px] text-foreground/60 leading-[1.7]" role="list">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <PinkBullet />
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
      className="px-6 py-8 md:px-8 md:py-10"
      data-testid={`card-${testId}`}
    >
      <h3
        className="font-display leading-[1.2] mb-6"
        style={{ fontSize: "clamp(1.2rem, 2vw, 1.75rem)" }}
        data-testid={`text-${testId}-title`}
      >
        {title}
      </h3>
      <ul className="space-y-3 text-[15px] md:text-[16px] text-foreground/60 leading-[1.7]" role="list">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <PinkBullet />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
