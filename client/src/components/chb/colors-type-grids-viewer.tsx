import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Download, Maximize2, X, Compass, Layers } from "lucide-react";

export function ColorsTypeGridsViewer() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<number>(0);

  const segments = [
    { title: "Complete Masterwork", desc: "3846 × 4800 4-column Vignelli unigrid & OKLCH color tokenization" },
    { title: "Col 1: The Manifesto", desc: "Typography scales, golden ratios, and rules for interfaces that breathe" },
    { title: "Col 2: Mathematical Unigrid", desc: "Single-card container systems with zero nested box bloat" },
    { title: "Col 3: Data Hierarchy", desc: "High-density information design without cognitive fatigue" },
    { title: "Col 4: The Interaction of Color", desc: "Josef Albers contrast dynamics and perceived luminescence in CSS" },
  ];

  return (
    <div className="w-full rounded-3xl border border-[#D3C7B5] bg-[#161413] text-[#f1ebd8] overflow-hidden shadow-2xl space-y-0">
      {/* Editorial Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 px-6 sm:px-8 py-5 bg-[#110f0e] border-b border-white/10">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              Design Systems Blueprint
            </span>
            <span className="text-white/30">&bull;</span>
            <Badge variant="outline" className="border-white/20 text-[#f1ebd8] text-[10px] font-sans uppercase font-bold tracking-wider">
              3846 × 4800 Masterwork Canvas
            </Badge>
          </div>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#f1ebd8] tracking-tight">
            Albers &amp; Vignelli in CSS — The Interaction of Color
          </h3>
          <p className="text-xs sm:text-sm text-[#f1ebd8]/70 font-sans max-w-2xl">
            A Rebel&apos;s Manifesto on Grid-Based Design &amp; Typographic Breathing &bull; By Colon Hyphen Bracket
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <a
            href="https://cassandra.colonhyphenbracket.pink/ColorsTypeGrids"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white text-xs font-sans uppercase tracking-[0.14em] font-bold shadow-md transition-all cursor-pointer"
          >
            Open Standalone App <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#f1ebd8] text-xs font-sans uppercase tracking-[0.14em] font-bold border border-white/20 transition-all cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#FE299E]" /> Fullscreen Poster
          </button>
          <a
            href="/images/cassandra/colors-type-grids.jpg"
            download="Colors-Type-Grids-Kyle-Cyree.jpg"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/15 text-[#f1ebd8]/80 text-xs font-sans uppercase tracking-[0.14em] font-medium border border-white/10 transition-all"
          >
            <Download className="w-3.5 h-3.5" /> JPG
          </a>
        </div>
      </div>

      {/* Segment Selector Tabs (Non-trapping touch navigation) */}
      <div className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-[#191614] border-b border-white/10 overflow-x-auto text-xs scrollbar-none">
        <span className="font-sans text-[11px] uppercase tracking-wider text-white/50 shrink-0 flex items-center gap-1.5 pr-2 border-r border-white/10">
          <Layers className="w-3.5 h-3.5 text-[#FE299E]" /> Blueprint Focus:
        </span>
        {segments.map((seg, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSegment(idx)}
            className={`px-3.5 py-1.5 rounded-full font-sans text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
              activeSegment === idx
                ? "bg-[#FE299E] text-white font-bold shadow-sm"
                : "bg-white/5 text-[#f1ebd8]/80 hover:bg-white/15 hover:text-white border border-white/10"
            }`}
          >
            {seg.title}
          </button>
        ))}
      </div>

      {/* Main Image Plate (Responsive & Touch-Friendly: Natural Document Flow, Zero Thumb Trap) */}
      <div className="relative w-full bg-[#0d0c0b] p-4 sm:p-8 flex flex-col items-center justify-center">
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="group relative max-w-5xl w-full rounded-2xl overflow-hidden cursor-zoom-in border border-white/10 shadow-2xl transition-all hover:border-[#FE299E]/60"
        >
          <img
            src="/images/cassandra/colors-type-grids.jpg"
            alt="Colors Type Grids: Albers & Vignelli in CSS by Colon Hyphen Bracket"
            className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
          />

          {/* Hover / Tap Hint Pill */}
          <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#110f0e]/90 backdrop-blur-md border border-white/20 text-xs font-sans font-bold text-white shadow-xl flex items-center gap-2 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5 text-[#FE299E]" />
            <span>Click to Inspect 3846×4800 Full Screen</span>
          </div>
        </div>

        {/* Caption & Segment Note */}
        <div className="pt-4 text-center space-y-1">
          <p className="text-xs text-[#f1ebd8]/80 font-sans">
            <strong className="text-white font-semibold">{segments[activeSegment].title}:</strong>{" "}
            {segments[activeSegment].desc}
          </p>
          <p className="text-[11px] text-[#f1ebd8]/50 font-sans">
            Touch and scroll down freely &bull; No iframe or canvas scroll trapping on mobile
          </p>
        </div>
      </div>

      {/* Dedicated Lightbox Dialog (Explicit Close Button, Safe on All Devices) */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-[96vw] max-h-[94vh] p-2 sm:p-4 bg-[#110f0e] border-white/20 text-white overflow-hidden flex flex-col">
          <DialogHeader className="flex flex-row items-center justify-between pb-2 border-b border-white/10 px-2">
            <div>
              <DialogTitle className="text-base sm:text-lg font-serif font-bold text-white">
                Albers &amp; Vignelli in CSS — High-Resolution Masterwork
              </DialogTitle>
              <DialogDescription className="text-xs text-white/60 font-sans">
                Full 3846 × 4800 design system poster. Tap or scroll to explore.
              </DialogDescription>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://cassandra.colonhyphenbracket.pink/ColorsTypeGrids"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white text-[11px] font-sans font-bold uppercase tracking-wider flex items-center gap-1"
              >
                Open Web App <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-auto p-2 bg-[#0c0b0a] rounded-xl flex items-start justify-center">
            <img loading="lazy" decoding="async"
              src="/images/cassandra/colors-type-grids.jpg"
              alt="Full Resolution Colors Type Grids Poster"
              className="max-w-none w-full sm:w-[1200px] lg:w-[1800px] h-auto object-contain rounded shadow-2xl"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
