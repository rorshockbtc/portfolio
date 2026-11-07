import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, ChevronLeft, X, Sparkles } from "lucide-react";
import { CASE_STUDIES, CASE_STUDY_ORDER, type CaseStudyData, type BeforeAfterPair } from "@/data/case-studies";
import { CASE_STUDY_META } from "@/data/case-study-meta";
import { openContactModal } from "@/lib/contact-events";
import NotFound from "@/pages/not-found";

const EASE = [0.16, 1, 0.3, 1] as const;

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Split long prose into sentences so we can lead with a short summary. */
function sentences(text: string): string[] {
  return (text || "").match(/[^.!?]+(?:[.!?]+["”']?|$)/g)?.map((s) => s.trim()).filter(Boolean) ?? [];
}

/** If prose is written as "(1) … (2) …", turn it into an intro + list. */
function enumerated(text: string): { intro: string; items: string[] } | null {
  const parts = text.split(/\s*\(\d\)\s*/);
  if (parts.length < 3) return null;
  return {
    intro: parts[0].replace(/[:;,\s]+$/, ""),
    items: parts.slice(1).map((p) => p.replace(/[;,]?\s*(and)?\s*$/i, "").replace(/^\w/, (c) => c.toUpperCase())),
  };
}

/** Section with a short visible lead and the rest behind "Read more". */
function Story({ label, text }: { label: string; text: string }) {
  const [open, setOpen] = useState(false);
  if (!text) return null;
  const list = enumerated(text);
  const all = sentences(list ? list.intro : text);
  const lead = all.slice(0, 1).join(" ");
  const rest = all.slice(1).join(" ");
  const hasMore = Boolean(rest) || Boolean(list);

  return (
    <FadeUp className="grid md:grid-cols-12 gap-4 md:gap-10 py-12 sm:py-14 border-t border-[#D3C7B5]">
      <h2 className="md:col-span-3 text-sm font-medium text-[#FE299E] pt-1.5">{label}</h2>
      <div className="md:col-span-9 max-w-[62ch]">
        <p className="font-serif text-xl sm:text-[25px] leading-[1.45] text-[#281B16]">{lead}</p>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="overflow-hidden"
            >
              {rest && <p className="mt-5 text-[17px] leading-[1.75] text-[#4A3A32]">{rest}</p>}
              {list && (
                <ol className="mt-5 space-y-3 list-decimal pl-5 text-[17px] leading-[1.7] text-[#4A3A32] marker:text-[#FE299E]">
                  {list.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ol>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        {hasMore && (
          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#5C4840] hover:text-[#FE299E] bg-transparent border-none p-0 cursor-pointer"
          >
            {open ? "Show less" : "Read more"}
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
    </FadeUp>
  );
}

/** Interactive Before & After comparison carousel */
function BeforeAfterSection({ pairs }: { pairs: BeforeAfterPair[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"side-by-side" | "diff">("side-by-side");
  const current = pairs[activeIdx];

  if (!pairs || pairs.length === 0) return null;

  return (
    <section className="px-5 sm:px-10 lg:px-16 py-20 sm:py-28 bg-[#E3D8C7] border-y border-[#D3C7B5]">
      <div className="max-w-[1280px] mx-auto">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider font-bold text-[#FE299E] mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Direct Transformation
            </div>
            <h2 className="font-serif font-light text-4xl sm:text-5xl tracking-[-0.02em] text-[#281B16]">
              Before &amp; After
            </h2>
          </div>
          {/* Slide Navigation Tabs */}
          <div className="flex flex-wrap gap-2">
            {pairs.map((p, idx) => (
              <button
                key={p.label}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-2 rounded-full text-xs font-medium font-sans cursor-pointer transition-all border ${
                  activeIdx === idx
                    ? "bg-[#281B16] text-[#F2EAE0] border-[#281B16] shadow-sm"
                    : "bg-[#EAE0D0] text-[#5C4840] border-[#D3C7B5] hover:text-[#281B16]"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Carousel Card */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* BEFORE PANEL */}
            <div className="rounded-[18px] bg-[#1C1715] p-5 sm:p-6 text-[#E0D8D0] shadow-md border border-[#3A2E28]">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#3A2E28] mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#E07A5F] font-bold">
                  Legacy / Before
                </span>
                <span className="text-xs text-[#9E8E84]">{current.beforeTitle}</span>
              </div>
              <div className="overflow-hidden rounded-[12px] bg-black/40 aspect-[16/10] border border-white/5">
                <img
                  src={current.beforeSrc}
                  alt={current.beforeTitle}
                  className="w-full h-full object-cover object-top opacity-90"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-xs sm:text-sm text-[#B3A499] leading-relaxed">
                {current.beforeCaption}
              </p>
            </div>

            {/* AFTER PANEL */}
            <div className="rounded-[18px] bg-[#F7F2EC] p-5 sm:p-6 text-[#281B16] shadow-md border border-[#D3C7B5]">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#D3C7B5] mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1B5E3A] font-bold">
                  Redesigned Monograph / After
                </span>
                <span className="text-xs text-[#5C4840]">{current.afterTitle}</span>
              </div>
              <div className="overflow-hidden rounded-[12px] bg-[#E3D8C7] aspect-[16/10] border border-[#D3C7B5]">
                <img
                  src={current.afterSrc}
                  alt={current.afterTitle}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-xs sm:text-sm text-[#4A3A32] leading-relaxed font-medium">
                {current.afterCaption}
              </p>
            </div>
          </div>

          {/* Bottom Step Indicator */}
          <div className="mt-8 flex items-center justify-between text-xs text-[#5C4840]">
            <div>
              Transformation {activeIdx + 1} of {pairs.length}: <strong className="text-[#281B16] font-semibold">{current.label}</strong>
            </div>
            <div className="flex items-center gap-2">
              <button
                disabled={activeIdx === 0}
                onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
                className="w-8 h-8 rounded-full border border-[#D3C7B5] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#281B16] hover:text-white transition-colors cursor-pointer"
                aria-label="Previous comparison"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={activeIdx === pairs.length - 1}
                onClick={() => setActiveIdx((i) => Math.min(pairs.length - 1, i + 1))}
                className="w-8 h-8 rounded-full border border-[#D3C7B5] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#281B16] hover:text-white transition-colors cursor-pointer"
                aria-label="Next comparison"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/** Collapsible deep-dive panel for engineering detail. */
function DeepDive({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[#D3C7B5]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-6 py-6 bg-transparent border-none cursor-pointer text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-2xl text-[#281B16]">{title}</span>
        <span className={`text-2xl text-[#FE299E] transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-[16px] leading-[1.75] text-[#4A3A32] max-w-[70ch]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CaseStudyPage() {
  const [, params] = useRoute("/case-studies/:slug");
  const slug = params?.slug || "";
  const study: CaseStudyData | undefined = CASE_STUDIES[slug];
  const meta = CASE_STUDY_META[slug];
  const [lightbox, setLightbox] = useState<number | null>(null);

  const idx = Math.max(0, CASE_STUDY_ORDER.indexOf(slug as any));
  const nextSlug = CASE_STUDY_ORDER[(idx + 1) % CASE_STUDY_ORDER.length];
  const next = CASE_STUDIES[nextSlug];
  const nextMeta = CASE_STUDY_META[nextSlug];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (study) document.title = `${meta?.name ?? study.client} — Kyle Cyree`;
    return () => {
      document.title = "Kyle Cyree — Staff Product Designer & Systems Architect";
    };
  }, [slug, study, meta]);

  useEffect(() => {
    if (lightbox === null || !study) return;
    const n = study.galleryImages.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % n));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + n) % n));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, study]);

  if (!study) return <NotFound />;

  const name = meta?.name ?? study.client;
  const headline = meta?.headline ?? study.title;
  const gallery = study.galleryImages.filter((g) => g.src !== study.heroImage).slice(0, 6);
  const cb = study.codebaseBreakdown;

  return (
    <article className="bg-[#EAE0D0] text-[#281B16]">
      {/* ── Hero ── */}
      <header className="px-5 sm:px-10 lg:px-16 pt-12 sm:pt-20 pb-12">
        <div className="max-w-[1280px] mx-auto">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-[#5C4840] hover:text-[#FE299E] no-underline">
            <ArrowLeft className="w-4 h-4" /> All work
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
            <div className="mt-10 text-sm font-medium text-[#FE299E]">{name}</div>
            <h1 className="mt-4 font-serif font-light text-[clamp(2.4rem,5.4vw,5rem)] leading-[1.02] tracking-[-0.025em] max-w-[20ch]">
              {headline}
            </h1>
          </motion.div>

          {/* Fact strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#D3C7B5] text-sm"
          >
            <div>
              <dt className="text-[#5C4840]">Role</dt>
              <dd className="mt-1 font-medium">{meta?.myRole ?? study.role}</dd>
            </div>
            <div>
              <dt className="text-[#5C4840]">Timeline</dt>
              <dd className="mt-1 font-medium">{study.timeline}</dd>
            </div>
            <div>
              <dt className="text-[#5C4840]">Context</dt>
              <dd className="mt-1 font-medium">{meta?.domain ?? study.scaleBadge}</dd>
            </div>
            <div>
              <dt className="text-[#5C4840]">Live</dt>
              <dd className="mt-1 font-medium">
                {study.liveUrl ? (
                  <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#281B16] hover:text-[#FE299E] no-underline">
                    {study.liveUrlLabel || new URL(study.liveUrl).hostname.replace("www.", "")}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[#5C4840]">Under NDA</span>
                )}
              </dd>
            </div>
          </motion.dl>
        </div>
      </header>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        className="px-5 sm:px-10 lg:px-16"
      >
        <div className="max-w-[1280px] mx-auto overflow-hidden rounded-[20px] bg-[#E3D8C7]">
          <img src={study.heroImage} alt={`${name} — primary interface`} className="w-full max-h-[78vh] object-cover object-top" />
        </div>
      </motion.div>

      <div className="px-5 sm:px-10 lg:px-16 pt-20 sm:pt-28">
        <div className="max-w-[1280px] mx-auto">
          {/* Metrics */}
          {study.metrics?.length > 0 && (
            <FadeUp className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 pb-20 sm:pb-24">
              {study.metrics.slice(0, 4).map((m) => (
                <div key={m.label}>
                  <div className="font-serif font-light text-5xl sm:text-6xl tracking-[-0.02em]">{m.value}</div>
                  <div className="mt-2 font-medium">{m.label}</div>
                  {m.subtext && <div className="mt-1 text-sm text-[#5C4840]">{m.subtext}</div>}
                </div>
              ))}
            </FadeUp>
          )}

          {/* Narrative */}
          <Story label="Overview" text={study.executiveSummary} />
          <Story label="The problem" text={study.challenge} />
          <Story label="What I did" text={study.solution} />
        </div>
      </div>

      {/* Before & After Transformation Carousel (if present) */}
      {study.beforeAfter && study.beforeAfter.length > 0 && (
        <BeforeAfterSection pairs={study.beforeAfter} />
      )}

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="px-5 sm:px-10 lg:px-16 py-20 sm:py-28 mt-12 bg-[#F2EAE0]">
          <div className="max-w-[1280px] mx-auto">
            <FadeUp>
              <h2 className="font-serif font-light text-4xl sm:text-5xl tracking-[-0.02em] mb-12">The work</h2>
            </FadeUp>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              {gallery.map((g, i) => (
                <FadeUp key={g.src} delay={(i % 2) * 0.06} className={i === 0 && gallery.length % 2 === 1 ? "md:col-span-2" : ""}>
                  <button
                    onClick={() => setLightbox(study.galleryImages.indexOf(g))}
                    className="group block w-full text-left bg-transparent border-none p-0 cursor-zoom-in"
                  >
                    <div className="overflow-hidden rounded-[16px] bg-[#E3D8C7]">
                      <img
                        src={g.src}
                        alt={g.title}
                        loading="lazy"
                        className="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="mt-4 font-medium text-[#281B16]">{g.title}</div>
                    <div className="mt-1 text-sm leading-[1.6] text-[#5C4840] max-w-[56ch]">{sentences(g.caption)[0]}</div>
                  </button>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="px-5 sm:px-10 lg:px-16 pt-20 sm:pt-28 pb-8">
        <div className="max-w-[1280px] mx-auto">
          {/* Outcomes */}
          {study.outcomes?.length > 0 && (
            <FadeUp className="grid md:grid-cols-12 gap-4 md:gap-10 pb-16">
              <h2 className="md:col-span-3 text-sm font-medium text-[#FE299E] pt-1.5">Outcomes</h2>
              <ul className="md:col-span-9 space-y-5">
                {study.outcomes.map((o) => (
                  <li key={o} className="flex gap-4 font-serif text-xl sm:text-2xl leading-[1.4]">
                    <span className="text-[#FE299E] shrink-0">→</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          )}

          {/* Deep dive — for the engineers and design leads who want more */}
          <FadeUp className="grid md:grid-cols-12 gap-4 md:gap-10 pt-12 border-t border-[#D3C7B5]">
            <div className="md:col-span-3">
              <h2 className="text-sm font-medium text-[#FE299E] pt-1.5">Deep dive</h2>
              <p className="mt-2 text-sm text-[#5C4840]">For engineers and design leads.</p>
            </div>
            <div className="md:col-span-9">
              {study.uiUxCraft && (
                <DeepDive title="Interface craft">
                  <p>{study.uiUxCraft}</p>
                </DeepDive>
              )}
              {study.systemsArchitecture && (
                <DeepDive title="Systems architecture">
                  <p>{study.systemsArchitecture}</p>
                </DeepDive>
              )}
              {cb && (
                <DeepDive title={cb.headline || "Codebase"}>
                  {cb.philosophy && <p className="mb-6">{cb.philosophy}</p>}
                  {cb.stackArchitecture?.length > 0 && (
                    <ul className="border-t border-[#D3C7B5] mb-6">
                      {cb.stackArchitecture.map((t) => (
                        <li key={t.role} className="grid sm:grid-cols-3 gap-2 sm:gap-6 py-4 border-b border-[#D3C7B5]">
                          <span className="font-medium text-[#281B16]">{t.role}</span>
                          <span className="sm:col-span-2">
                            <span className="text-[#281B16]">{t.tech}</span>
                            {t.rationale && <span className="block mt-1 text-sm text-[#5C4840]">{t.rationale}</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {cb.codeSnippets?.map((s) => (
                    <div key={s.title} className="mb-8">
                      <div className="font-medium text-[#281B16] mb-2">{s.title}</div>
                      <pre className="overflow-x-auto rounded-xl bg-[#140E0C] text-[#F2EAE0] p-5 text-[13px] leading-[1.6]">
                        <code>{s.code}</code>
                      </pre>
                      {s.explanation && <p className="mt-3 text-sm">{s.explanation}</p>}
                    </div>
                  ))}
                </DeepDive>
              )}
              {study.technologies?.length > 0 && (
                <DeepDive title="Tools & technologies">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-full border border-[#D3C7B5] text-sm text-[#281B16]">
                        {t}
                      </span>
                    ))}
                  </div>
                </DeepDive>
              )}
              <div className="border-t border-[#D3C7B5]" />
            </div>
          </FadeUp>

          {study.ndaNotice && <p className="mt-10 text-xs text-[#5C4840] max-w-[70ch]">{study.ndaNotice}</p>}
        </div>
      </div>

      {/* Next project */}
      {next && (
        <section className="px-5 sm:px-10 lg:px-16 py-20 sm:py-28 mt-16 border-t border-[#D3C7B5]">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-12 gap-10 items-center">
            <Link href={`/case-studies/${nextSlug}`} className="md:col-span-7 group no-underline text-[#281B16]">
              <div className="text-sm text-[#5C4840]">Next project</div>
              <div className="mt-3 text-sm font-medium text-[#FE299E]">{nextMeta?.name ?? next.client}</div>
              <div className="mt-2 font-serif font-light text-4xl sm:text-5xl leading-[1.08] tracking-[-0.02em] group-hover:text-[#FE299E] transition-colors">
                {nextMeta?.headline ?? next.title}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 font-medium">
                Read case study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link href={`/case-studies/${nextSlug}`} className="md:col-span-5 block overflow-hidden rounded-[16px] bg-[#E3D8C7]">
              <img src={next.heroImage} alt="" loading="lazy" className="w-full aspect-[16/10] object-cover object-top hover:scale-[1.03] transition-transform duration-700" />
            </Link>
          </div>
          <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-[#D3C7B5] flex flex-wrap items-center justify-between gap-4">
            <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-[#5C4840] hover:text-[#FE299E] no-underline">
              <ArrowLeft className="w-4 h-4" /> All work
            </Link>
            <button
              onClick={() => openContactModal(`Conversation about ${name}`)}
              className="px-6 h-11 rounded-full bg-[#281B16] hover:bg-[#FE299E] text-[#F2EAE0] text-sm font-medium transition-colors cursor-pointer"
            >
              Talk about this project
            </button>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#140E0C]/95 flex flex-col items-center justify-center p-4 sm:p-10"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-5 right-5 text-[#F2EAE0] bg-transparent border-none cursor-pointer" aria-label="Close">
              <X className="w-7 h-7" />
            </button>
            <img
              src={study.galleryImages[lightbox].src}
              alt={study.galleryImages[lightbox].title}
              className="max-w-full max-h-[82vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-5 text-center text-[#F2EAE0] max-w-[70ch]">
              <div className="font-medium">{study.galleryImages[lightbox].title}</div>
              <div className="mt-1 text-sm text-[#F2EAE0]/70">{study.galleryImages[lightbox].caption}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
