import React from "react";

/**
 * Company roster. Every entry is sourced from Kyle's resume.
 * Wordmarks are typographic (no imitation brand logos) so the strip reads as an
 * honest, uniform list rather than a collage of half-right trademarks.
 */
interface Company {
  id: string;
  name: string;
  context: string;
}

const companies: Company[] = [
  { id: "uhg", name: "UnitedHealth Group", context: "Optum · Fortune 10" },
  { id: "walmart", name: "Walmart", context: "via PredictiveUX · Fortune 1" },
  { id: "fidelity", name: "Fidelity Investments", context: "2-year embed" },
  { id: "custodia", name: "Custodia Bank", context: "First design hire" },
  { id: "ironnet", name: "IronNet", context: "Cybersecurity" },
  { id: "martin-marietta", name: "Martin Marietta", context: "Fortune 500" },
  { id: "ultralinq", name: "UltraLinq", context: "HIPAA medical devices" },
  { id: "foodler", name: "Foodler", context: "Acquired by Grubhub" },
];

const proofPoints = [
  { value: "35M+", label: "patients on UnitedHealth Group apps I led design for" },
  { value: "3M", label: "Walmart employees using the search UX I architected" },
  { value: "83%", label: "drop in chargebacks from a fraud system I built at Foodler" },
];

function Wordmark({ c }: { c: Company }) {
  return (
    <li className="flex flex-col shrink-0 px-8 sm:px-12" aria-label={`${c.name}, ${c.context}`}>
      <span className="font-serif font-bold text-2xl sm:text-3xl text-[#281B16] whitespace-nowrap leading-none">
        {c.name}
      </span>
      <span className="mt-2 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#8A736A] whitespace-nowrap">
        {c.context}
      </span>
    </li>
  );
}

export function ClientLogoBar() {
  return (
    <section
      aria-labelledby="track-record-heading"
      className="w-full border-y border-[#D3C7B5] bg-[#F2EAE0] py-12 md:py-16 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#FE299E]">
              01 // Enterprise Track Record
            </p>
            <h2 id="track-record-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.12]">
              Fortune 10 scale. Startup speed. Regulated industries.
            </h2>
          </div>
          <dl className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:pl-6 border-t lg:border-t-0 lg:border-l border-[#D3C7B5] pt-6 lg:pt-0">
            {proofPoints.map((p) => (
              <div key={p.value} className="space-y-1.5">
                <dt className="sr-only">{p.label}</dt>
                <dd className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tabular-nums leading-none">{p.value}</dd>
                <dd className="text-sm text-[#4A3A32] font-sans leading-relaxed">{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Full-bleed marquee. Pauses on hover/focus; static, wrapping list for reduced motion. */}
      <div className="group relative mt-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:[mask-image:none]">
        <ul className="animate-marquee group-hover:[animation-play-state:paused] items-center py-5 border-t border-[#D3C7B5]/70 motion-reduce:hidden">
          {companies.map((c) => <Wordmark key={`a-${c.id}`} c={c} />)}
          {companies.map((c) => <Wordmark key={`b-${c.id}`} c={c} />)}
        </ul>
        <ul className="hidden motion-reduce:flex flex-wrap justify-center gap-y-6 py-5 border-t border-[#D3C7B5]/70">
          {companies.map((c) => <Wordmark key={`r-${c.id}`} c={c} />)}
        </ul>
      </div>
    </section>
  );
}
