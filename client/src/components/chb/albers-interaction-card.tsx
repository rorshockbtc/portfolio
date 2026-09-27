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
      quote: "Pink isn't just a color. It's an attitude too.",
      author: "Miley Cyrus",
      subtext: "Josef Albers: 'The Interaction of Color' & Vignelli in CSS",
      accentBg: "#EECEE2",
      accentText: "#73385D",
      borderAccent: "#E29EC8",
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
    <div className="w-full max-w-md rounded-xl border border-border/80 bg-card p-6 space-y-6 shadow-sm">
      {/* Albers Specimen Surface Header */}
      <div className="flex items-center justify-between border-b border-border/60 pb-3 text-[11px] font-mono uppercase tracking-[2px] text-muted-foreground">
        <div className="flex items-center gap-2">
          <BrandMark size="sm" />
          <span>Albers Specimen</span>
        </div>
        <span className="text-[#FE299E] font-semibold">8pt Grid Rigor</span>
      </div>

      {/* Albers Color Interaction Quote Block */}
      <div
        className="rounded-lg p-5 border transition-all duration-300"
        style={{
          backgroundColor: active.accentBg,
          color: active.accentText,
          borderColor: active.borderAccent,
        }}
      >
        <p className="font-editorial text-lg italic leading-snug">&ldquo;{active.quote}&rdquo;</p>
        <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider opacity-85">
          <span>&mdash; {active.author}</span>
          <span className="text-[10px] hidden sm:inline">{active.subtext}</span>
        </div>
      </div>

      {/* Vignelli-Inspired Hairline Metric Grid */}
      <div className="grid grid-cols-2 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-card p-4 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block">
              {m.label}
            </span>
            <div className="text-xl font-bold font-editorial text-foreground tracking-tight">{m.value}</div>
            <p className="text-[11px] text-muted-foreground leading-tight line-clamp-1">{m.subtext}</p>
          </div>
        ))}
      </div>

      {/* Micro Specimen Footnote */}
      <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pt-1">
        <span>Colon Hyphen Bracket &bull; Design Manifesto</span>
        <span className="text-[#FE299E]">100% Human-Made</span>
      </div>
    </div>
  );
}
