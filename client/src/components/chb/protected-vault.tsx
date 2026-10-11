import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ZoomIn, X, ChevronLeft, ChevronRight, ShieldCheck, Eye } from "lucide-react";

interface VaultImage {
  src: string;
  title: string;
  caption: string;
  tag: string;
}

interface ProtectedVaultProps {
  id: string;
  title: string;
  subtitle: string;
  disclaimer?: string;
  images: VaultImage[];
  defaultOpen?: boolean;
}

export function ProtectedVault({
  id,
  title,
  subtitle,
  disclaimer = "Client artifacts showcased under mutual commercial confidentiality. Click any plate to inspect full high-resolution interface.",
  images,
}: ProtectedVaultProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div id={id} className="rounded-2xl border border-[#D3C7B5] bg-[#F2EAE0] p-6 md:p-8 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D3C7B5] pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="w-8 h-8 rounded-full bg-[#FE299E]/10 text-[#FE299E] flex items-center justify-center text-xs shrink-0">
              <Eye className="w-4 h-4" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-[#281B16] tracking-tight">{title}</h3>
            <Badge
              variant="outline"
              className="text-[11px] font-sans uppercase tracking-[0.15em] rounded-full border-[#FE299E]/40 text-[#FE299E] bg-[#FE299E]/5 shrink-0 whitespace-nowrap"
            >
              Direct Work Plates
            </Badge>
          </div>
          <p className="text-sm md:text-base text-[#6B554D] font-sans">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2 text-xs font-sans text-[#6B554D] shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{images.length} High-Res UI Plates Available</span>
        </div>
      </div>

      {/* Visual Product Grid: Instantly visible with high craft */}
      <div className="space-y-4">
        <p className="text-xs text-[#6B554D] font-sans leading-relaxed">{disclaimer}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-[#D3C7B5] bg-[#EAE0D0]/60 overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#FE299E] hover:shadow-md flex flex-col justify-between"
              onClick={() => setActiveImageIndex(idx)}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F2EAE0] flex items-center justify-center p-3 border-b border-[#D3C7B5]/60">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#281B16]/0 group-hover:bg-[#281B16]/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="px-3 py-1.5 rounded-full bg-[#F2EAE0]/95 text-[#281B16] text-xs font-sans font-semibold shadow-lg flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-all">
                    <ZoomIn className="w-3.5 h-3.5 text-[#FE299E]" /> Inspect Plate
                  </span>
                </div>
              </div>

              {/* Caption & Metadata */}
              <div className="p-3.5 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold tracking-tight text-[#281B16] truncate">{img.title}</span>
                  <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 h-auto shrink-0 border-[#D3C7B5] bg-[#F2EAE0] text-[#6B554D] whitespace-nowrap">
                    {img.tag}
                  </Badge>
                </div>
                <p className="text-[11px] text-[#6B554D] line-clamp-2 leading-relaxed font-sans">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enlarged Full-Resolution Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#281B16]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#F2EAE0] border border-[#D3C7B5] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#D3C7B5] px-6 py-4 bg-[#F2EAE0]">
              <div className="space-y-0.5 pr-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#FE299E] text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5">
                    {images[activeImageIndex].tag}
                  </Badge>
                  <span className="text-xs font-mono text-[#6B554D]">
                    {activeImageIndex + 1} of {images.length}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-lg md:text-xl text-[#281B16]">{images[activeImageIndex].title}</h4>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-9 h-9 border-[#D3C7B5] bg-[#F2EAE0] text-[#281B16] hover:bg-[#EAE0D0]"
                  onClick={handlePrev}
                  aria-label="Previous plate"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-9 h-9 border-[#D3C7B5] bg-[#F2EAE0] text-[#281B16] hover:bg-[#EAE0D0]"
                  onClick={handleNext}
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

            {/* High-Resolution Viewport */}
            <div className="flex-1 overflow-auto bg-[#EAE0D0]/80 p-4 sm:p-6 flex items-center justify-center min-h-[350px]">
              <img
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-sm border border-[#D3C7B5]/60 bg-white"
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="border-t border-[#D3C7B5] px-6 py-3.5 bg-[#F2EAE0] flex items-center justify-between text-xs text-[#6B554D] font-sans">
              <p className="max-w-3xl leading-relaxed">{images[activeImageIndex].caption}</p>
              <span className="hidden sm:inline font-mono text-[10px] text-[#6B554D] shrink-0 ml-4">
                ESC to close &bull; Arrows to navigate
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
