import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { CASE_STUDIES, type CaseStudyData, type CaseStudyImage } from "@/data/case-studies";
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
  const slug = params?.slug || "";
  const study: CaseStudyData | undefined = CASE_STUDIES[slug];

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
      {/* ── Sticky Sub-Navigation Bar ── */}
      <div className="sticky top-16 sm:top-20 z-40 bg-[#F2EAE0]/95 backdrop-blur-md border-b border-[#D3C7B5] py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-sans uppercase tracking-[0.12em] sm:tracking-[0.16em] font-semibold text-[#6B554D] hover:text-[#281B16] transition-colors whitespace-nowrap"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FE299E] shrink-0" />
            <span>Back<span className="hidden xs:inline sm:inline"> to Work</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-3 text-xs font-sans">
            <span className="text-[#6B554D] uppercase tracking-wider">Other Deep Dives:</span>
            {Object.values(CASE_STUDIES)
              .filter((s) => s.slug !== study.slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/case-studies/${s.slug}`}
                  className="font-medium text-[#6B554D] hover:text-[#FE299E] transition-colors uppercase tracking-wider"
                >
                  {s.client}
                </Link>
              ))}
          </div>

          <Button
            size="sm"
            className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.15em] font-bold rounded-full px-3.5 sm:px-4 shrink-0 shadow-sm cursor-pointer"
            onClick={() => setIsContactOpen(true)}
          >
            Hire Kyle · $7,500
          </Button>
        </div>
      </div>

      {/* ── Case Study Header ── */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 w-full space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              {study.client}
            </span>
            <span className="text-[#D3C7B5]">&bull;</span>
            <Badge variant="outline" className="border-[#D3C7B5] bg-[#F2EAE0] text-[#6B554D] text-[11px] font-sans uppercase tracking-wider">
              {study.scaleBadge}
            </Badge>
            <span className="text-[#D3C7B5]">&bull;</span>
            <span className="text-xs font-sans text-[#6B554D]">{study.timeline}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.12]">
            {study.title}
          </h1>

          <p className="text-lg md:text-xl text-[#6B554D] font-sans leading-relaxed max-w-3xl">
            {study.subtitle}
          </p>
        </div>

        {/* Role & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#D3C7B5]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#6B554D] font-semibold">
              Role:
            </span>
            <span className="text-xs font-sans font-bold text-[#281B16] px-3 py-1 rounded-full bg-[#E4DACB]">
              {study.role}
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {study.liveUrl && (
              <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-[0.15em] font-semibold rounded-full px-5">
                  {study.liveUrlLabel || "Visit Live Product"} <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </a>
            )}
            {study.repoUrl && (
              <a href={study.repoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#D3C7B5] bg-[#F2EAE0] text-[#281B16] hover:bg-[#EAE0D0] font-sans text-xs uppercase tracking-[0.15em] font-medium rounded-full px-5">
                  Inspect Source Code <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ── Full-Bleed Primary Specimen Showcase ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
        <div
          className="group relative rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-3 sm:p-6 shadow-xl overflow-hidden cursor-pointer"
          onClick={() => setActiveImageIndex(0)}
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#EAE0D0] rounded-2xl overflow-hidden flex items-center justify-center border border-[#D3C7B5]/60">
            <img loading="lazy" decoding="async"
              src={study.heroImage}
              alt={study.title}
              className="w-full h-full object-contain p-2 sm:p-4 group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#281B16]/0 group-hover:bg-[#281B16]/15 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="px-4 py-2 rounded-full bg-[#F2EAE0]/95 text-[#281B16] text-xs font-sans font-bold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <ZoomIn className="w-4 h-4 text-[#FE299E]" /> Click to Inspect Full-Resolution Interface
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#6B554D] font-sans px-2">
            <span>Primary Architecture &amp; Interface Plate</span>
            <span className="font-sans text-[11px] text-[#FE299E] font-semibold flex items-center gap-1">
              Click to Enlarge <ZoomIn className="w-3 h-3" />
            </span>
          </div>
        </div>
      </section>

      {/* ── Key Impact Metrics Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {study.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] flex flex-col justify-center space-y-1 shadow-sm"
            >
              <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#6B554D] font-semibold truncate">
                {m.label}
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#281B16] tracking-tight">
                {m.value}
              </span>
              {m.subtext && (
                <p className="text-[11px] text-[#6B554D] leading-tight font-sans">{m.subtext}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Deep-Dive Case Study Narrative (2-Column Architecture Layout) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Executive Summary, The Challenge & Systems Solution */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] shadow-sm">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#FE299E]">
                Executive Summary
              </span>
              <p className="text-base sm:text-lg text-[#281B16] font-sans leading-relaxed">
                {study.executiveSummary}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#6B554D]" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#281B16] tracking-tight">
                  The Strategic Challenge
                </h2>
              </div>
              <p className="text-base text-[#6B554D] font-sans leading-relaxed pl-4 border-l-2 border-[#D3C7B5]">
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
              <p className="text-base text-[#281B16]/90 font-sans leading-relaxed pl-4 border-l-2 border-[#FE299E]/40">
                {study.solution}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-serif font-bold text-[#281B16] tracking-tight">
                Systems &amp; Protocol Execution
              </h3>
              <p className="text-base text-[#6B554D] font-sans leading-relaxed">
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
              <p className="text-sm sm:text-base text-[#6B554D] font-sans leading-relaxed">
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
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#6B554D]">
                Stack &amp; Methods
              </span>
              <div className="flex flex-wrap gap-1.5">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] text-xs font-sans text-[#281B16] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {study.ndaNotice && (
              <div className="p-4 rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] text-xs text-[#6B554D] font-sans flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#FE299E] shrink-0 mt-0.5" />
                <p className="leading-relaxed">{study.ndaNotice}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Architecture, Stack & Real Codebase Deconstruction ── */}
      {study.codebaseBreakdown && (
        <section className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 pb-20 w-full space-y-10">
          <div className="border-t border-[#D3C7B5] pt-12 space-y-4">
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#FE299E]" /> Architectural &amp; Codebase Deconstruction
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight">
              {study.codebaseBreakdown.headline}
            </h2>
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F2EAE0] border border-[#D3C7B5] shadow-sm">
              <p className="text-base sm:text-lg text-[#281B16] font-sans leading-relaxed italic">
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
                <p className="text-xs sm:text-sm text-[#6B554D] font-sans leading-relaxed">{tier.rationale}</p>
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
                    <Badge variant="outline" className="border-white/20 text-white/70 text-[10px] uppercase font-sans">
                      {snippet.language}
                    </Badge>
                  </div>
                  <div className="p-6 overflow-x-auto text-xs sm:text-sm font-sans leading-relaxed text-[#f1ebd8]/90">
                    <pre className="font-sans">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                  <div className="px-6 py-3 bg-[#110f0e] border-t border-white/10 text-xs text-[#f1ebd8]/60 font-sans">
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
        <section className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 pb-16 w-full space-y-6">
          <div className="space-y-1">
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              Interface Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#281B16]">
              Additional Production Plates &amp; Workflows
            </h2>
            <p className="text-sm text-[#6B554D] font-sans">
              Click any plate to inspect full high-resolution interface details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {study.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] overflow-hidden cursor-pointer hover:border-[#FE299E] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                onClick={() => setActiveImageIndex(idx)}
              >
                <div className="relative aspect-[16/10] bg-[#EAE0D0] p-3 flex items-center justify-center border-b border-[#D3C7B5]">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#281B16]/0 group-hover:bg-[#281B16]/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1.5 rounded-full bg-[#F2EAE0]/95 text-[#281B16] text-xs font-sans font-bold shadow-md flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5 text-[#FE299E]" /> Zoom
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-sans font-bold text-xs text-[#281B16] truncate">{img.title}</h3>
                    {img.tag && (
                      <Badge variant="outline" className="text-[10px] font-sans border-[#D3C7B5] text-[#6B554D]">
                        {img.tag}
                      </Badge>
                    )}
                  </div>
                  <p className="text-[11px] text-[#6B554D] line-clamp-2 leading-relaxed font-sans">{img.caption}</p>
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
                  <span className="text-xs font-sans text-[#6B554D]">
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
                  className="rounded-full w-9 h-9 text-[#6B554D] hover:text-[#281B16] hover:bg-[#EAE0D0]"
                  onClick={() => setActiveImageIndex(null)}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-auto bg-[#EAE0D0]/80 p-4 sm:p-6 flex items-center justify-center min-h-[350px]">
              <img loading="lazy" decoding="async"
                src={study.galleryImages[activeImageIndex].src}
                alt={study.galleryImages[activeImageIndex].title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-sm border border-[#D3C7B5]/60 bg-white"
              />
            </div>

            <div className="border-t border-[#D3C7B5] px-6 py-3.5 bg-[#F2EAE0] flex items-center justify-between text-xs text-[#6B554D] font-sans">
              <p className="max-w-3xl leading-relaxed">{study.galleryImages[activeImageIndex].caption}</p>
              <span className="hidden sm:inline font-sans text-[10px] text-[#6B554D] shrink-0 ml-4">
                ESC to close &bull; Arrow keys to navigate
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── High-Conversion Velocity Banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <div className="rounded-3xl border border-[#D3C7B5] bg-[#F2EAE0] p-8 md:p-12 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Studio of One · Surgical Deploy
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight">
              Need this velocity on your product?
            </h3>
            <p className="text-base sm:text-lg text-[#6B554D] font-sans leading-relaxed">
              Whether you need a 1-week rapid sprint ($7,500) to unblock a flagship feature, a 2–4 week surgical systems overhaul ($15k–$25k), or a dedicated Product Architect for an embedded role—let's look at the problem together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="https://calendly.com/cubby-colonhyphenbracket/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-7 py-4 shadow-md transition-all text-center"
            >
              <Calendar className="w-4 h-4" /> Book 30-Min Intro Call
            </a>
            <Button
              variant="outline"
              className="border-[#281B16]/30 bg-transparent hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-6 py-4 cursor-pointer"
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
