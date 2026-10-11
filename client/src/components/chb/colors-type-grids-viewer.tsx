import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ZoomIn, ZoomOut, Maximize2, ExternalLink, Download, Compass } from "lucide-react";

export function ColorsTypeGridsViewer() {
  const [scale, setScale] = useState(0.75);
  const [activeCol, setActiveCol] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const columns = [
    { label: "Col 1: Manifesto & Rules", offset: 0 },
    { label: "Col 2: Grid & Card One", offset: 0.255 },
    { label: "Col 3: Cards Two & Three", offset: 0.51 },
    { label: "Col 4: Card Four & Color", offset: 0.76 },
  ];

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.15, 2.0));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.15, 0.2));
  };

  const handleResetZoom = () => {
    setScale(0.75);
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
    setActiveCol(0);
  };

  const jumpToColumn = (index: number) => {
    setActiveCol(index);
    if (!containerRef.current || !imgRef.current) return;
    const totalWidth = imgRef.current.clientWidth;
    const targetScrollLeft = Math.max(0, totalWidth * columns[index].offset - 24);
    const targetScrollTop = Math.max(0, 360 * scale);
    containerRef.current.scrollTo({
      left: targetScrollLeft,
      top: targetScrollTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full rounded-3xl border border-[#DBD3C4] bg-[#161413] text-[#f1ebd8] overflow-hidden shadow-2xl space-y-0">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 bg-[#110f0e] border-b border-white/10">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#FE299E]">
              Design Systems Blueprint
            </span>
            <Badge variant="outline" className="border-white/20 text-[#f1ebd8] text-[10px] font-mono uppercase">
              3846 × 4800 Canvas
            </Badge>
          </div>
          <h3 className="font-serif font-bold text-lg md:text-xl text-[#f1ebd8] tracking-tight">
            Albers &amp; Vignelli in CSS — The Interaction of Color
          </h3>
          <p className="text-xs text-[#f1ebd8]/70 font-sans">
            A Rebel&apos;s Manifesto on Grid-Based Design &amp; Typographic Breathing &bull; By Colon Hyphen Bracket
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="https://cassandra.colonhyphenbracket.pink/ColorsTypeGrids"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white text-xs font-sans uppercase tracking-[0.14em] font-semibold shadow-sm transition-all"
          >
            Open Standalone App <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="/images/cassandra/colors-type-grids.jpg"
            download="Colors-Type-Grids-Kyle-Cyree.jpg"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#f1ebd8] text-xs font-sans uppercase tracking-[0.14em] font-semibold border border-white/20 transition-all"
          >
            <Download className="w-3.5 h-3.5" /> Full Poster
          </a>
        </div>
      </div>

      {/* Guided 4-Column Jump Navigation */}
      <div className="flex items-center gap-2 px-6 py-2.5 bg-[#1c1917] border-b border-white/10 overflow-x-auto text-xs">
        <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 shrink-0 flex items-center gap-1">
          <Compass className="w-3 h-3 text-[#FE299E]" /> Jump To Column:
        </span>
        {columns.map((col, idx) => (
          <button
            key={idx}
            onClick={() => jumpToColumn(idx)}
            className={`px-3 py-1 rounded-md font-sans text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
              activeCol === idx
                ? "bg-[#FE299E] text-white font-bold shadow-sm"
                : "bg-white/5 text-[#f1ebd8]/80 hover:bg-white/15 hover:text-white border border-white/10"
            }`}
          >
            {col.label}
          </button>
        ))}
      </div>

      {/* Interactive Canvas Viewport */}
      <div
        ref={containerRef}
        className="relative w-full h-[620px] overflow-auto bg-[#191614] p-4 sm:p-8 cursor-grab active:cursor-grabbing"
      >
        <div className="inline-block min-w-min">
          <img
            ref={imgRef}
            src="/images/cassandra/colors-type-grids.jpg"
            alt="Colors Type Grids by Colon Hyphen Bracket"
            style={{ width: `${Math.round(3846 * scale)}px` }}
            className="max-w-none rounded shadow-2xl transition-[width] duration-200"
          />
        </div>

        {/* Floating Zoom & Controls Toolbar */}
        <div className="fixed bottom-6 right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#110f0e]/95 border border-white/20 backdrop-blur-md shadow-2xl text-xs text-[#f1ebd8]">
          <button
            onClick={handleZoomOut}
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/20 text-base font-bold transition-colors cursor-pointer"
            title="Zoom Out"
          >
            −
          </button>
          <span className="font-mono text-[11px] w-12 text-center text-white/90">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/20 text-base font-bold transition-colors cursor-pointer"
            title="Zoom In"
          >
            +
          </button>
          <div className="w-px h-4 bg-white/20 mx-1" />
          <button
            onClick={handleResetZoom}
            className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase hover:bg-white/20 transition-colors cursor-pointer"
            title="Reset to 75% Reading Zoom"
          >
            75% View
          </button>
        </div>
      </div>
    </div>
  );
}
