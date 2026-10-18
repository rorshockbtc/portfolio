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
  { id: "custodia", name: "Custodia Bank", context: "Chartered SPDI · First Design Hire" },
  { id: "fidelity", name: "Fidelity Investments", context: "2-Year Embedded Lead" },
  { id: "uhg", name: "UnitedHealth Group", context: "Optum · 35M+ Patients" },
  { id: "walmart", name: "Walmart", context: "Fortune 1 · 3M Workers" },
  { id: "ironnet", name: "IronNet", context: "Cybersecurity · Gen. Keith Alexander" },
  { id: "martin-marietta", name: "Martin Marietta", context: "Fortune 500" },
  { id: "ultralinq", name: "UltraLinq", context: "HIPAA Medical Telemetry" },
  { id: "foodler", name: "Foodler", context: "$500M+ Vol · Grubhub Exit" },
];

function Wordmark({ c }: { c: Company }) {
  return (
    <li className="flex items-baseline gap-2.5 shrink-0 px-6 sm:px-8" aria-label={`${c.name}, ${c.context}`}>
      <span className="font-serif font-bold text-xl sm:text-2xl text-[#281B16] whitespace-nowrap leading-none">
        {c.name}
      </span>
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4A3A32] whitespace-nowrap">
        · {c.context}
      </span>
    </li>
  );
}

export function ClientLogoBar() {
  return (
    <section
      aria-label="Enterprise Track Record"
      className="w-full border-y border-[#D3C7B5] bg-[#F2EAE0] py-4 md:py-5 overflow-hidden"
    >
      <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:[mask-image:none]">
        <ul className="animate-marquee group-hover:[animation-play-state:paused] items-center py-1 motion-reduce:hidden">
          {companies.map((c) => <Wordmark key={`a-${c.id}`} c={c} />)}
          {companies.map((c) => <Wordmark key={`b-${c.id}`} c={c} />)}
        </ul>
        <ul className="hidden motion-reduce:flex flex-wrap justify-center gap-y-3 py-1">
          {companies.map((c) => <Wordmark key={`r-${c.id}`} c={c} />)}
        </ul>
      </div>
    </section>
  );
}
