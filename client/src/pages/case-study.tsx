import { useState, useEffect } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { CASE_STUDIES, CASE_STUDY_ORDER, type CaseStudyData, type CaseStudyImage } from "@/data/case-studies";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Check,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Shield,
  Layers,
  Sparkles,
  ArrowRight,
  Cpu,
  Calendar,
} from "lucide-react";
import ContactFormModal from "@/components/contact-form-modal";

export default function CaseStudyPage() {
  const [, params] = useRoute("/case-studies/:slug");
  const [, setLocation] = useLocation();
  const slug = params?.slug || "";
  const study: CaseStudyData | undefined = CASE_STUDIES[slug];

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sequential Walkthrough pointers
  const currentIndex = CASE_STUDY_ORDER.indexOf(slug as any);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const prevSlug = CASE_STUDY_ORDER[(safeIndex - 1 + CASE_STUDY_ORDER.length) % CASE_STUDY_ORDER.length];
  const nextSlug = CASE_STUDY_ORDER[(safeIndex + 1) % CASE_STUDY_ORDER.length];
  const prevStudy = CASE_STUDIES[prevSlug];
  const nextStudy = CASE_STUDIES[nextSlug];

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    if (study) {
      document.title = `${study.client}: ${study.title} | Kyle Cyree`;
    }
    return () => {
      document.title = "Kyle Cyree | Product Architect & R&D Lead";
    };
  }, [slug, study]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        isContactOpen
      ) {
        return;
      }

      if (activeImageIndex !== null && study) {
        if (e.key === "Escape") {
          setActiveImageIndex(null);
        } else if (e.key === "ArrowRight") {
          setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % study.galleryImages.length : null));
        } else if (e.key === "ArrowLeft") {
          setActiveImageIndex((prev) =>
            prev !== null ? (prev - 1 + study.galleryImages.length) % study.galleryImages.length : null
          );
        }
      } else {
        if (e.key === "ArrowRight" || e.key === "]" || e.key === "j") {
          setLocation(`/case-studies/${nextSlug}`);
        } else if (e.key === "ArrowLeft" || e.key === "[" || e.key === "k") {
          setLocation(`/case-studies/${prevSlug}`);
        } else if (e.key === "Escape") {
          setIsMenuOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, study, isContactOpen, prevSlug, nextSlug, setLocation]);

  if (!study) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-serif font-bold text-[#281B16] mb-4">Case Study Not Found</h1>
        <p className="text-base text-[#6B554D] mb-6 max-w-md">
          The requested case study could not be located. Explore our selected flagship records:
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {Object.values(CASE_STUDIES).map((s) => (
            <Link key={s.slug} href={`/case-studies/${s.slug}`}>
              <Button variant="outline" className="border-[#D3C7B5] text-xs font-sans uppercase tracking-wider">
                {s.client}
              </Button>
            </Link>
          ))}
        </div>
        <Link href="/">
          <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-wider rounded-full">
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Main Portfolio
          </Button>
        </Link>
      </div>
    );
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % study.galleryImages.length);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + study.galleryImages.length) % study.galleryImages.length);
    }
  };

  return (
    <article className="min-h-screen bg-background text-foreground flex flex-col selection:bg-[#FE299E]/20">
      {/* ── Sticky Sub-Navigation Bar: Sequential Walkthrough Ribbon ── */}
      <div className="sticky top-16 sm:top-20 z-40 bg-[#F2EAE0]/95 backdrop-blur-md border-b border-[#D3C7B5] py-2 sm:py-2.5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Back to Case Studies Directory */}
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-sans uppercase tracking-[0.14em] font-bold text-[#4A3A32] hover:text-[#281B16] transition-colors whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FE299E] shrink-0" />
            <span>All Studies</span>
          </Link>

          {/* Center: Walkthrough Controller */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 text-xs font-sans">
            <Link
              href={`/case-studies/${prevSlug}`}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full border border-[#D3C7B5] bg-[#EAE0D0]/80 hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] font-mono text-[10px] sm:text-[11px] font-bold uppercase transition-colors"
              title={`Previous: ${prevStudy?.client}`}
            >
              <ChevronLeft className="w-3.5 h-3.5 text-[#FE299E]" />
              <span className="hidden md:inline">{prevStudy?.client}</span>
            </Link>

            {/* Case Study Switcher Popover */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#281B16] text-[#F2EAE0] hover:bg-[#FE299E] font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Study {safeIndex + 1} of {CASE_STUDY_ORDER.length}</span>
                <ChevronDown className={`w-3 h-3 text-[#FE299E] transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {isMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 sm:w-80 max-h-96 overflow-y-auto bg-[#F2EAE0] border border-[#281B16] rounded-2xl shadow-2xl p-2 z-50 space-y-1">
                  <div className="px-3 py-1.5 border-b border-[#D3C7B5] flex items-center justify-between text-[10px] font-mono uppercase text-[#4A3A32]">
                    <span>All 12 Case Studies</span>
                    <span>Click to Jump</span>
                  </div>
                  {CASE_STUDY_ORDER.map((itemSlug, idx) => {
                    const item = CASE_STUDIES[itemSlug];
                    if (!item) return null;
                    const isCurrent = itemSlug === slug;
                    return (
                      <Link
                        key={itemSlug}
                        href={`/case-studies/${itemSlug}`}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors no-underline ${
                          isCurrent
                            ? "bg-[#281B16] text-[#F2EAE0] font-bold"
                            : "hover:bg-[#EAE0D0] text-[#281B16]"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="font-mono text-[10px] text-[#FE299E]">{String(idx + 1).padStart(2, "0")}</span>
                          <span className="truncate">{item.client}</span>
                        </div>
                        {isCurrent ? (
                          <span className="text-[10px] text-[#FE299E] font-mono font-bold">Reading</span>
                        ) : (
                          <ArrowRight className="w-3 h-3 text-[#4A3A32]/60" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href={`/case-studies/${nextSlug}`}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full border border-[#D3C7B5] bg-[#EAE0D0]/80 hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] font-mono text-[10px] sm:text-[11px] font-bold uppercase transition-colors"
              title={`Next: ${nextStudy?.client}`}
            >
              <span className="hidden md:inline">{nextStudy?.client}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#FE299E]" />
            </Link>
          </div>

          {/* Right: Primary Action */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden xl:inline font-mono text-[10px] text-[#6B554D] uppercase">
              Use ← → to step
            </span>
            <Button
              size="sm"
              className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.15em] font-bold rounded-full px-3.5 sm:px-4 shrink-0 shadow-sm cursor-pointer"
              onClick={() => setIsContactOpen(true)}
            >
              Hire Kyle · $7,500
            </Button>
          </div>
        </div>
      </div>

      {/* ── Case Study Header ── */}
      <header className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 pb-8 w-full space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              {study.client}
            </span>
            <span className="text-[#D3C7B5]">&bull;</span>
            <Badge variant="outline" className="border-[#D3C7B5] bg-[#F2EAE0] text-[#3D2C24] font-semibold text-[11px] font-sans uppercase tracking-wider">
              {study.scaleBadge}
            </Badge>
            <span className="text-[#D3C7B5]">&bull;</span>
            <span className="text-xs font-sans text-[#4A3A32] font-semibold">{study.timeline}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.12]">
            {study.title}
          </h1>

          <p className="text-lg md:text-xl text-[#4A3A32] font-sans leading-relaxed max-w-3xl">
            {study.subtitle}
          </p>
        </div>

        {/* Role & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#D3C7B5]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#4A3A32] font-semibold">
              Role:
            </span>
            <span className="text-xs font-sans font-bold text-[#281B16] px-3 py-1 rounded-full bg-[#E4DACB]">
              {study.role}
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {study.slug === "pipes" && (
              <>
                <a href="https://pipes.pink" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.15em] font-bold rounded-full px-5 cursor-pointer">
                    | | | Claim Your Pipe ($9/yr) <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </a>
                <a href="https://pipes.pink/write" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button className="bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-xs uppercase tracking-[0.15em] font-bold rounded-full px-5 cursor-pointer">
                    Open # Hash + ;-] Semi Free <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-[#FE299E]" />
                  </Button>
                </a>
              </>
            )}
            {study.liveUrl && study.slug !== "pipes" && (
              <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.15em] font-semibold rounded-full px-5 cursor-pointer">
                  {study.liveUrlLabel || "Visit Live Product"} <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </a>
            )}
            {study.repoUrl && (
              <a href={study.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="outline" className="border-[#D3C7B5] bg-[#F2EAE0] text-[#281B16] hover:bg-[#EAE0D0] font-sans text-xs uppercase tracking-[0.15em] font-semibold rounded-full px-5 cursor-pointer">
                  Inspect Source Code <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ── Full-Bleed Primary Specimen Showcase ── */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-12 w-full">
        <div
          className="group relative rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-3 sm:p-6 shadow-xl overflow-hidden cursor-pointer"
          onClick={() => setActiveImageIndex(0)}
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden flex items-center justify-center border bg-[#231814] border-[#3D2C24] shadow-inner">
            <img loading="lazy" decoding="async"
              src={study.heroImage}
              alt={study.title}
              className="w-full h-full object-contain p-2 sm:p-4 drop-shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#281B16]/0 group-hover:bg-[#281B16]/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="px-4 py-2 rounded-full bg-[#F2EAE0]/95 text-[#281B16] text-xs font-sans font-bold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <ZoomIn className="w-4 h-4 text-[#FE299E]" /> Click to Inspect Full-Resolution Interface
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#4A3A32] font-semibold font-sans px-2">
            <span>Primary Architecture &amp; Interface Plate</span>
            <span className="font-sans text-[11px] text-[#FE299E] font-bold flex items-center gap-1">
              Click to Enlarge <ZoomIn className="w-3 h-3" />
            </span>
          </div>
        </div>
      </section>

      {/* ── Key Impact Metrics Grid ── */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-14 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {study.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] flex flex-col justify-center space-y-1 shadow-sm"
            >
              <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#4A3A32] font-bold truncate">
                {m.label}
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#281B16] tracking-tight">
                {m.value}
              </span>
              {m.subtext && (
                <p className="text-[11px] text-[#4A3A32] leading-tight font-sans">{m.subtext}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Deep-Dive Case Study Narrative (2-Column Architecture Layout) ── */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Executive Summary, The Challenge & Systems Solution */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] shadow-sm">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                Executive Summary
              </span>
              <p className="text-base sm:text-lg text-[#281B16] font-sans leading-relaxed max-w-[65ch]">
                {study.executiveSummary}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3D2C24]" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#281B16] tracking-tight">
                  The Strategic Challenge
                </h2>
              </div>
              <p className="text-base text-[#4A3A32] font-sans leading-relaxed pl-4 border-l-2 border-[#D3C7B5] max-w-[65ch]">
                {study.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FE299E]" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#281B16] tracking-tight">
                  The Systems Architecture Solution
                </h2>
              </div>
              <p className="text-base text-[#281B16] font-sans leading-relaxed pl-4 border-l-2 border-[#FE299E]/40 max-w-[65ch]">
                {study.solution}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-serif font-bold text-[#281B16] tracking-tight">
                Systems &amp; Protocol Execution
              </h3>
              <p className="text-base text-[#4A3A32] font-sans leading-relaxed max-w-[65ch]">
                {study.systemsArchitecture}
              </p>
            </div>
          </div>

          {/* Right Column: UI/UX Craft, Technical Stack, and Verified Outcomes */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] shadow-sm">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                UI/UX Craft &amp; Psychology
              </span>
              <p className="text-sm sm:text-base text-[#4A3A32] font-sans leading-relaxed max-w-[60ch]">
                {study.uiUxCraft}
              </p>
            </div>

            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-[#EAE0D0]/60 border border-[#D3C7B5] shadow-sm">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#281B16]">
                Verified Production Outcomes
              </span>
              <ul className="space-y-3">
                {study.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#281B16] font-sans">
                    <Check className="w-4 h-4 text-[#FE299E] shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#4A3A32]">
                Stack &amp; Methods
              </span>
              <div className="flex flex-wrap gap-1.5">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] text-xs font-sans text-[#281B16] font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {study.ndaNotice && (
              <div className="p-4 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] text-xs text-[#4A3A32] font-sans flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#FE299E] shrink-0 mt-0.5" />
                <p className="leading-relaxed">{study.ndaNotice}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Architecture, Stack & Real Codebase Deconstruction ── */}
      {study.codebaseBreakdown && (
        <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-20 w-full space-y-10">
          <div className="border-t border-[#D3C7B5] pt-12 space-y-4">
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#FE299E]" /> Architectural &amp; Codebase Deconstruction
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
              {study.codebaseBreakdown.headline}
            </h2>
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] shadow-sm">
              <p className="text-base sm:text-lg text-[#281B16] font-sans leading-relaxed italic max-w-[75ch]">
                &ldquo;{study.codebaseBreakdown.philosophy}&rdquo;
              </p>
            </div>
          </div>

          {/* 4-Tier Stack Architecture Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.codebaseBreakdown.stackArchitecture.map((tier, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] space-y-3 shadow-sm">
                <span className="text-[11px] font-sans uppercase font-bold tracking-wider text-[#FE299E] block">
                  {tier.role}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#281B16]">{tier.tech}</h3>
                <p className="text-xs sm:text-sm text-[#4A3A32] font-sans leading-relaxed">{tier.rationale}</p>
              </div>
            ))}
          </div>

          {/* Real Code Snippets */}
          {study.codebaseBreakdown.codeSnippets && (
            <div className="space-y-6 pt-4">
              {study.codebaseBreakdown.codeSnippets.map((snippet, idx) => (
                <div key={idx} className="rounded-3xl border border-[#D3C7B5] bg-[#161413] text-[#f1ebd8] overflow-hidden shadow-xl">
                  <div className="flex items-center justify-between px-6 py-4 bg-[#110f0e] border-b border-white/10">
                    <span className="font-sans text-xs uppercase tracking-wider font-bold text-[#FE299E]">
                      {snippet.title}
                    </span>
                    <Badge variant="outline" className="border-white/20 text-white/80 text-[10px] uppercase font-sans">
                      {snippet.language}
                    </Badge>
                  </div>
                  <div className="p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-[#f1ebd8]">
                    <pre className="font-mono">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                  <div className="px-6 py-3 bg-[#110f0e] border-t border-white/10 text-xs text-[#E4DACB] font-sans">
                    {snippet.explanation}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ── Multi-Plate Gallery Section (If > 1 Image) ── */}
      {study.galleryImages.length > 1 && (
        <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-16 w-full space-y-6">
          <div className="space-y-1">
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              Interface Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#281B16]">
              Additional Production Plates &amp; Workflows
            </h2>
            <p className="text-sm text-[#4A3A32] font-sans">
              Click any plate to inspect full high-resolution interface details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {study.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] overflow-hidden cursor-pointer hover:border-[#FE299E] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                onClick={() => setActiveImageIndex(idx)}
              >
                <div className="relative aspect-[16/10] p-3 flex items-center justify-center border-b border-[#3D2C24] bg-[#231814]">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-contain rounded-lg shadow-lg group-hover:scale-[1.03] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#281B16]/0 group-hover:bg-[#281B16]/25 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1.5 rounded-full bg-[#F2EAE0]/95 text-[#281B16] text-xs font-sans font-bold shadow-md flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5 text-[#FE299E]" /> Zoom
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-sans font-bold text-xs text-[#281B16] truncate">{img.title}</h3>
                    {img.tag && (
                      <Badge variant="outline" className="text-[10px] font-sans border-[#D3C7B5] text-[#3D2C24] font-semibold shrink-0">
                        {img.tag}
                      </Badge>
                    )}
                  </div>
                  <p className="text-[11px] text-[#4A3A32] line-clamp-2 leading-relaxed font-sans">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── High-Resolution Lightbox Modal ── */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#281B16]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#F2EAE0] border border-[#D3C7B5] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#D3C7B5] px-6 py-4 bg-[#F2EAE0]">
              <div className="space-y-0.5 pr-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#FE299E] text-white text-[10px] font-sans uppercase tracking-wider px-2 py-0.5">
                    {study.galleryImages[activeImageIndex].tag || "Work Specimen"}
                  </Badge>
                  <span className="text-xs font-sans text-[#4A3A32] font-semibold">
                    {activeImageIndex + 1} of {study.galleryImages.length}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-lg md:text-xl text-[#281B16]">
                  {study.galleryImages[activeImageIndex].title}
                </h4>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-9 h-9 border-[#D3C7B5] bg-[#F2EAE0] text-[#281B16] hover:bg-[#EAE0D0]"
                  onClick={handlePrevImage}
                  aria-label="Previous plate"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-9 h-9 border-[#D3C7B5] bg-[#F2EAE0] text-[#281B16] hover:bg-[#EAE0D0]"
                  onClick={handleNextImage}
                  aria-label="Next plate"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-9 h-9 text-[#4A3A32] hover:text-[#281B16] hover:bg-[#EAE0D0]"
                  onClick={() => setActiveImageIndex(null)}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center min-h-[350px] bg-[#231814]">
              <img loading="lazy" decoding="async"
                src={study.galleryImages[activeImageIndex].src}
                alt={study.galleryImages[activeImageIndex].title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-[#D3C7B5]/40 bg-white"
              />
            </div>

            <div className="border-t border-[#D3C7B5] px-6 py-3.5 bg-[#F2EAE0] flex items-center justify-between text-xs text-[#4A3A32] font-sans">
              <p className="max-w-3xl leading-relaxed">{study.galleryImages[activeImageIndex].caption}</p>
              <span className="hidden sm:inline font-sans text-[10px] text-[#4A3A32] font-semibold shrink-0 ml-4">
                ESC to close &bull; Arrow keys to navigate
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── WALKTHROUGH: UP NEXT IN SEQUENCE & FULL 12-STUDY ARCHIVE ── */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-16 w-full space-y-10">
        {/* Up Next Card */}
        {nextStudy && (
          <div className="rounded-3xl border-2 border-[#281B16] bg-[#281B16] text-[#F2EAE0] p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full bg-[#FE299E] text-white">
                  UP NEXT · STUDY {((safeIndex + 1) % CASE_STUDY_ORDER.length) + 1} OF {CASE_STUDY_ORDER.length}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#D3C7B5]">
                  {nextStudy.timeline}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#FE299E]">
                  {nextStudy.scaleBadge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#F2EAE0] leading-snug">
                {nextStudy.client}: {nextStudy.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D3C7B5] font-sans line-clamp-2 leading-relaxed">
                {nextStudy.subtitle}
              </p>
            </div>

            <Link
              href={`/case-studies/${nextSlug}`}
              className="inline-flex items-center gap-2 bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-6 py-4 shadow-md transition-all whitespace-nowrap shrink-0 no-underline"
            >
              <span>Continue to {nextStudy.client}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* All 12 Case Studies Visual Catalog */}
        <div className="space-y-5 pt-4 border-t border-[#D3C7B5]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E] block">
                PORTFOLIO DIRECTORY · ALL 12 PRODUCTION CASE STUDIES
              </span>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#281B16] tracking-tight mt-0.5">
                Explore the complete body of architectural work
              </h3>
            </div>
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-1 font-sans text-xs uppercase tracking-[0.14em] font-bold text-[#4A3A32] hover:text-[#FE299E] transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#FE299E]" /> Portfolio Directory
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CASE_STUDY_ORDER.map((itemSlug, idx) => {
              const item = CASE_STUDIES[itemSlug];
              if (!item) return null;
              const isCurrent = itemSlug === slug;
              return (
                <Link
                  key={itemSlug}
                  href={`/case-studies/${itemSlug}`}
                  className={`group p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 no-underline ${
                    isCurrent
                      ? "bg-[#281B16] text-[#F2EAE0] border-[#FE299E] shadow-md ring-2 ring-[#FE299E]/40"
                      : "bg-[#F2EAE0] text-[#281B16] border-[#D3C7B5] hover:border-[#FE299E] hover:shadow-xs"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-mono text-[10px] font-bold uppercase text-[#FE299E]">
                        {String(idx + 1).padStart(2, "0")} / {CASE_STUDY_ORDER.length}
                      </span>
                      {isCurrent ? (
                        <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#FE299E] text-white font-bold">
                          Reading Now
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] text-[#4A3A32] truncate max-w-[120px]">
                          {item.timeline}
                        </span>
                      )}
                    </div>
                    <h4
                      className={`font-serif font-bold text-base leading-snug line-clamp-1 ${
                        isCurrent ? "text-white" : "text-[#281B16] group-hover:text-[#FE299E]"
                      }`}
                    >
                      {item.client}
                    </h4>
                    <p className={`text-xs line-clamp-2 ${isCurrent ? "text-[#D3C7B5]" : "text-[#4A3A32]"}`}>
                      {item.title}
                    </p>
                  </div>
                  <div
                    className={`pt-2 border-t flex items-center justify-between text-xs font-bold ${
                      isCurrent
                        ? "border-white/10 text-[#FE299E]"
                        : "border-[#D3C7B5] text-[#281B16] group-hover:text-[#FE299E]"
                    }`}
                  >
                    <span>{isCurrent ? "Current Study" : "Read Study"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── High-Conversion Velocity Banner ── */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-20 w-full">
        <div className="rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-8 md:p-12 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Studio of One · Surgical Deploy
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight">
              Need this velocity on your product?
            </h3>
            <p className="text-base sm:text-lg text-[#4A3A32] font-sans leading-relaxed">
              Whether you need a 1-week rapid sprint ($7,500) to unblock a flagship feature, a 2–4 week surgical systems overhaul ($15k–$25k), or a dedicated Product Architect for an embedded role—let's look at the problem together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="https://calendly.com/cubby-colonhyphenbracket/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-7 py-4 shadow-md transition-all text-center no-underline"
            >
              <Calendar className="w-4 h-4" /> Book 30-Min Intro Call
            </a>
            <Button
              variant="outline"
              className="border-[#281B16]/30 bg-transparent hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-6 py-4 h-auto cursor-pointer"
              onClick={() => setIsContactOpen(true)}
            >
              Inquire for Sprint ($7,500)
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal
        open={isContactOpen}
        onOpenChange={setIsContactOpen}
        defaultSubject={`Inquiry regarding ${study.client} (${study.title})`}
      />
    </article>
  );
}
