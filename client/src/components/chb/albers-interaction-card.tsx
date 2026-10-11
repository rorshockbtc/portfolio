import { BrandMark } from "./brand-mark";

interface SpecimenMetric {
  label: string;
  value: string;
  subtext: string;
}

interface AlbersInteractionCardProps {
  perspective: "design" | "development" | "architecture";
  metrics: SpecimenMetric[];
}

export function AlbersInteractionCard({ perspective, metrics }: AlbersInteractionCardProps) {
  const quotes = {
    design: {
      quote: "Styles come and go. Good design is a language, not a style.",
      author: "Massimo Vignelli",
      subtext: "Josef Albers: 'The Interaction of Color' & 8pt Grid Rigor",
      accentBg: "#FDF0F7",
      accentText: "#9B0A5E",
      borderAccent: "#FE299E",
    },
    development: {
      quote: "Computers generally understand zeroes and ones. The grid is divisible by eight.",
      author: "Colon Hyphen Bracket",
      subtext: "Pre-Karpathy Harness Engineering & Sovereign Protocol Mechanics",
      accentBg: "#FFF8E2",
      accentText: "#9A7304",
      borderAccent: "#D9A206",
    },
    architecture: {
      quote: "I architect the system, design the interface, and ship the production code.",
      author: "The Unit of One",
      subtext: "Zero-to-one velocity meets enterprise-grade resilience",
      accentBg: "#E0EFE8",
      accentText: "#1E5C44",
      borderAccent: "#2A7B5C",
    },
  };

  const active = quotes[perspective];

  return (
    <div className="w-full max-w-md rounded-2xl border border-[#DBD3C4] bg-[#FAF5EC] p-6 space-y-6 shadow-sm">
      {/* Albers Specimen Surface Header */}
      <div className="flex items-center justify-between border-b border-[#DBD3C4] pb-3 text-xs font-sans uppercase tracking-[0.2em] text-[#735F57]">
        <div className="flex items-center gap-2">
          <BrandMark size="sm" />
          <span className="font-semibold">Albers Specimen</span>
        </div>
        <span className="text-[#FE299E] font-bold">8pt Grid Rigor</span>
      </div>

      {/* Albers Color Interaction Quote Block */}
      <div
        className="rounded-xl p-5 border transition-all duration-300"
        style={{
          backgroundColor: active.accentBg,
          color: active.accentText,
          borderColor: active.borderAccent,
        }}
      >
        <p className="font-serif text-xl italic leading-snug">&ldquo;{active.quote}&rdquo;</p>
        <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-xs font-sans uppercase tracking-wider opacity-85">
          <span className="font-semibold">&mdash; {active.author}</span>
          <span className="text-[11px] hidden sm:inline">{active.subtext}</span>
        </div>
      </div>

      {/* Vignelli-Inspired Hairline Metric Grid */}
      <div className="grid grid-cols-2 gap-px bg-[#DBD3C4] rounded-xl overflow-hidden border border-[#DBD3C4]">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-[#FAF5EC] p-4 space-y-1">
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#735F57] block font-semibold">
              {m.label}
            </span>
            <div className="text-2xl font-bold font-serif text-[#2B1E19] tracking-tight">{m.value}</div>
            <p className="text-xs text-[#735F57] leading-tight line-clamp-1">{m.subtext}</p>
          </div>
        ))}
      </div>

      {/* Micro Specimen Footnote */}
      <div className="flex items-center justify-between text-xs font-sans text-[#735F57] pt-1">
        <span>Colon Hyphen Bracket &bull; Design Manifesto</span>
        <span className="text-[#FE299E] font-bold">Human-Crafted</span>
      </div>
    </div>
  );
}
