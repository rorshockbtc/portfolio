import React from "react";

interface ClientBrand {
  name: string;
  subtext: string;
  scaleBadge: string;
  renderLogo: () => React.ReactNode;
}

const enterpriseClients: ClientBrand[] = [
  {
    name: "Walmart",
    subtext: "Global Tech / LMS & Graph Search",
    scaleBadge: "3.2M Global Associates",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#FFC220] shrink-0" fill="currentColor">
          <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5V7a1.5 1.5 0 0 1-3 0V3.5A1.5 1.5 0 0 1 12 2zm0 13a1.5 1.5 0 0 1 1.5 1.5V20.5a1.5 1.5 0 0 1-3 0V16.5A1.5 1.5 0 0 1 12 15zm8.5-4.5a1.5 1.5 0 0 1 0 3H17a1.5 1.5 0 0 1 0-3h3.5zM7 12a1.5 1.5 0 0 1-1.5 1.5H2a1.5 1.5 0 0 1 0-3h3.5A1.5 1.5 0 0 1 7 12zm10.7-6.2a1.5 1.5 0 0 1 2.12 2.12l-2.47 2.48a1.5 1.5 0 1 1-2.13-2.13l2.48-2.47zM6.3 17.7a1.5 1.5 0 0 1 2.12 2.12L5.95 22.3a1.5 1.5 0 0 1-2.12-2.13l2.47-2.47zm11.4 4.6a1.5 1.5 0 0 1-2.12 0l-2.48-2.48a1.5 1.5 0 1 1 2.13-2.12l2.47 2.47a1.5 1.5 0 0 1 0 2.13zM6.3 6.3a1.5 1.5 0 0 1 0-2.12L8.77 1.7a1.5 1.5 0 1 1 2.13 2.13L8.42 6.3a1.5 1.5 0 0 1-2.12 0z"/>
        </svg>
        <span className="font-sans font-black tracking-tight text-lg text-[#0071DC] leading-none">
          Walmart<span className="text-[10px] font-mono tracking-widest text-[#6B554D] block font-semibold uppercase">Global Tech</span>
        </span>
      </div>
    ),
  },
  {
    name: "UnitedHealth Group",
    subtext: "Flagship Native Patient Apps",
    scaleBadge: "70M+ Daily Patients",
    renderLogo: () => (
      <div className="flex flex-col justify-center">
        <span className="font-sans font-black tracking-tight text-sm text-[#002677] leading-none uppercase">
          UnitedHealth Group
        </span>
        <span className="font-sans text-[11px] font-bold tracking-widest text-[#002677]/70 uppercase">
          Optum Enterprise
        </span>
      </div>
    ),
  },
  {
    name: "Custodia Bank",
    subtext: "Chartered Full-Reserve Bank",
    scaleBadge: "4-Day Sprint • 30-Day Fed App",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <img
          src="/images/custodia/404 horse.png"
          alt="Custodia Horse"
          className="w-7 h-7 object-contain shrink-0"
        />
        <span className="font-serif font-black tracking-widest text-sm text-[#281B16] uppercase">
          Custodia Bank
        </span>
      </div>
    ),
  },
  {
    name: "Fidelity Investments",
    subtext: "Philanthropic Giving Marketplace",
    scaleBadge: "1M+ Indexed Charities",
    renderLogo: () => (
      <div className="flex flex-col justify-center">
        <span className="font-serif font-black tracking-wide text-base text-[#281B16] leading-none">
          Fidelity
        </span>
        <span className="font-mono text-[9px] font-bold text-[#008752] uppercase tracking-[0.2em]">
          Investments
        </span>
      </div>
    ),
  },
  {
    name: "UltraLinq Healthcare",
    subtext: "Cloud Cardiovascular PACS",
    scaleBadge: "Zero-Latency Diagnostic UX",
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <span className="font-sans font-black text-base text-[#281B16] tracking-tight leading-none">
          Ultra<span className="text-[#01a9f4]">Linq</span>
        </span>
        <span className="font-mono text-[9px] font-bold text-[#6B554D] uppercase tracking-wider block">
          Healthcare
        </span>
      </div>
    ),
  },
  {
    name: "Martin Marietta",
    subtext: "Heavy Materials & Quarry UX",
    scaleBadge: "Field Toughbook UX",
    renderLogo: () => (
      <div className="flex flex-col justify-center">
        <span className="font-sans font-black tracking-tighter text-sm text-[#281B16] leading-none uppercase">
          Martin Marietta
        </span>
        <span className="font-mono text-[9px] font-semibold text-[#8B6E32] uppercase tracking-widest">
          Materials &bull; Field UX
        </span>
      </div>
    ),
  },
  {
    name: "IronNet Cybersecurity",
    subtext: "Gen. Keith Alexander (Ex-NSA)",
    scaleBadge: "Defense-Grade RBAC",
    renderLogo: () => (
      <div className="flex flex-col justify-center">
        <span className="font-mono font-black tracking-wider text-sm text-[#281B16] leading-none uppercase">
          IRON<span className="text-[#FE299E]">NET</span>
        </span>
        <span className="font-mono text-[9px] font-medium text-[#6B554D] uppercase tracking-widest">
          Cybersecurity
        </span>
      </div>
    ),
  },
];

export function ClientLogoBar() {
  return (
    <div className="w-full border-y border-[#D3C7B5] bg-[#F2EAE0]/90 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D3C7B5]/60 pb-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#6B554D]">
            Verified Enterprise Production Systems
          </span>
          <span className="text-xs font-sans text-[#6B554D]">
            From Fortune 1 retail to Federal Reserve chartered banking &amp; defense
          </span>
        </div>

        {/* Large, Authoritative Typographic Logo Roster */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-5 items-center">
          {enterpriseClients.map((client, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-2 group"
            >
              <div className="h-9 flex items-center group-hover:scale-[1.02] transition-transform duration-200">
                {client.renderLogo()}
              </div>
              <div className="space-y-0.5">
                <span className="block font-mono text-[9px] text-[#FE299E] font-bold uppercase tracking-wider">
                  {client.scaleBadge}
                </span>
                <p className="text-[11px] text-[#6B554D] font-sans leading-tight">
                  {client.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
