import React from "react";
import { Shield, Zap, Building2, Landmark, Activity, Layers } from "lucide-react";

interface EnterpriseLogo {
  id: string;
  name: string;
  category: string;
  scaleMetric: string;
  renderLogo: () => React.ReactNode;
}

const enterpriseLogos: EnterpriseLogo[] = [
  {
    id: "walmart",
    name: "Walmart Global Tech",
    category: "Fortune 1 Retail & LMS",
    scaleMetric: "3.2M Global Associates",
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#FFC220] shrink-0" fill="currentColor">
          <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5V7a1.5 1.5 0 0 1-3 0V3.5A1.5 1.5 0 0 1 12 2zm0 13a1.5 1.5 0 0 1 1.5 1.5V20.5a1.5 1.5 0 0 1-3 0V16.5A1.5 1.5 0 0 1 12 15zm8.5-4.5a1.5 1.5 0 0 1 0 3H17a1.5 1.5 0 0 1 0-3h3.5zM7 12a1.5 1.5 0 0 1-1.5 1.5H2a1.5 1.5 0 0 1 0-3h3.5A1.5 1.5 0 0 1 7 12zm10.7-6.2a1.5 1.5 0 0 1 2.12 2.12l-2.47 2.48a1.5 1.5 0 1 1-2.13-2.13l2.48-2.47zM6.3 17.7a1.5 1.5 0 0 1 2.12 2.12L5.95 22.3a1.5 1.5 0 0 1-2.12-2.13l2.47-2.47zm11.4 4.6a1.5 1.5 0 0 1-2.12 0l-2.48-2.48a1.5 1.5 0 1 1 2.13-2.12l2.47 2.47a1.5 1.5 0 0 1 0 2.13zM6.3 6.3a1.5 1.5 0 0 1 0-2.12L8.77 1.7a1.5 1.5 0 1 1 2.13 2.13L8.42 6.3a1.5 1.5 0 0 1-2.12 0z"/>
        </svg>
        <div className="flex flex-col">
          <span className="font-sans font-black text-xl text-[#0071DC] tracking-tight leading-none">
            Walmart
          </span>
          <span className="font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#6B554D]">
            Global Tech
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "optum",
    name: "UnitedHealth Group / Optum",
    category: "Fortune 5 Healthcare",
    scaleMetric: "70M+ Daily Patients",
    renderLogo: () => (
      <div className="flex flex-col justify-center">
        <span className="font-sans font-black tracking-tight text-lg text-[#002677] leading-none uppercase">
          UnitedHealth Group
        </span>
        <span className="font-sans text-xs font-bold tracking-widest text-[#002677]/80 uppercase">
          Optum Enterprise
        </span>
      </div>
    ),
  },
  {
    id: "custodia",
    name: "Custodia Bank",
    category: "Full-Reserve Banking",
    scaleMetric: "Federal Reserve Review",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <img
          src="/images/custodia/404 horse.png"
          alt="Custodia Horse Mark"
          className="w-8 h-8 object-contain shrink-0"
        />
        <div className="flex flex-col">
          <span className="font-serif font-black tracking-wider text-base text-[#281B16] uppercase leading-none">
            Custodia Bank
          </span>
          <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-[#8B6E32]">
            Chartered SPDI
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "ultralinq",
    name: "UltraLinq Healthcare",
    category: "Cloud PACS Telemetry",
    scaleMetric: "Zero-Latency Diagnostic UX",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <Activity className="w-6 h-6 text-[#01a9f4] shrink-0" />
        <div className="flex flex-col">
          <span className="font-sans font-black text-lg text-[#281B16] tracking-tight leading-none">
            Ultra<span className="text-[#01a9f4]">Linq</span>
          </span>
          <span className="font-sans text-[10px] uppercase font-bold tracking-wider text-[#6B554D]">
            Cardiovascular PACS
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "blockstream",
    name: "Blockstream",
    category: "Bitcoin Infrastructure",
    scaleMetric: "Core Protocol Support",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-[#00D4AA] flex items-center justify-center font-sans font-black text-xs text-[#111]">
          BS
        </div>
        <div className="flex flex-col">
          <span className="font-sans font-black text-base text-[#281B16] tracking-wider uppercase leading-none">
            Blockstream
          </span>
          <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-[#00A381]">
            Bitcoin Infrastructure
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "fidelity",
    name: "Fidelity Investments",
    category: "Philanthropic Marketplace",
    scaleMetric: "1M+ Indexed Charities",
    renderLogo: () => (
      <div className="flex flex-col justify-center">
        <span className="font-serif font-black tracking-wide text-lg text-[#281B16] leading-none">
          Fidelity
        </span>
        <span className="font-sans text-[10px] font-bold text-[#008752] uppercase tracking-[0.2em]">
          Investments
        </span>
      </div>
    ),
  },
  {
    id: "martin-marietta",
    name: "Martin Marietta",
    category: "Heavy Materials & Field UX",
    scaleMetric: "Field Toughbook UX",
    renderLogo: () => (
      <div className="flex flex-col justify-center">
        <span className="font-sans font-black tracking-tighter text-base text-[#281B16] leading-none uppercase">
          Martin Marietta
        </span>
        <span className="font-sans text-[10px] font-semibold text-[#8B6E32] uppercase tracking-widest">
          Materials &bull; Field UX
        </span>
      </div>
    ),
  },
  {
    id: "ironnet",
    name: "IronNet Cybersecurity",
    category: "Gen. Keith Alexander (Ex-NSA)",
    scaleMetric: "Defense-Grade RBAC",
    renderLogo: () => (
      <div className="flex flex-col justify-center">
        <span className="font-sans font-black tracking-wider text-base text-[#281B16] leading-none uppercase">
          IRON<span className="text-[#FE299E]">NET</span>
        </span>
        <span className="font-sans text-[10px] font-semibold text-[#6B554D] uppercase tracking-widest">
          Cybersecurity &bull; Defense
        </span>
      </div>
    ),
  },
];

export function ClientLogoBar() {
  return (
    <div className="w-full border-y border-[#D3C7B5] bg-[#F2EAE0]/95 py-14 overflow-hidden">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
        {/* Executive Positioning Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D3C7B5]/70 pb-8">
          <div className="space-y-3 max-w-3xl">
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#FE299E] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#FE299E]" /> Elite Systems Architect &bull; Proven Scale
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#281B16] tracking-tight leading-tight">
              Fortune 10 Experience &bull; Early-Stage Velocity
            </h2>
            <p className="text-base sm:text-lg text-[#6B554D] font-sans leading-relaxed">
              Specializing in high-stakes regulated environments where design errors and architectural mistakes are fatal: chartered full-reserve banking, 70M-patient healthcare ecosystems, defense-grade RBAC, and zero-PII sovereign AI protocols.
            </p>
          </div>

          {/* Three Positioning Strategic Pillars */}
          <div className="flex flex-wrap lg:flex-col gap-3 shrink-0">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EAE0D0] border border-[#D3C7B5] text-xs font-sans font-bold text-[#281B16]">
              <Building2 className="w-3.5 h-3.5 text-[#FE299E]" /> Fortune 10 Governance &amp; Scale
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EAE0D0] border border-[#D3C7B5] text-xs font-sans font-bold text-[#281B16]">
              <Landmark className="w-3.5 h-3.5 text-[#FE299E]" /> Regulated Banking &amp; Healthcare
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EAE0D0] border border-[#D3C7B5] text-xs font-sans font-bold text-[#281B16]">
              <Zap className="w-3.5 h-3.5 text-[#FE299E]" /> 4-Day Sprints &bull; Unit of One Velocity
            </div>
          </div>
        </div>

        {/* Continuous Smooth Infinite Marquee Scrolling Ribbon */}
        <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee items-center gap-12 sm:gap-20">
            {/* First Set of Logos */}
            {enterpriseLogos.map((client) => (
              <div
                key={`m1-${client.id}`}
                className="flex items-center gap-4 shrink-0 px-4 py-2 rounded-2xl transition-transform hover:scale-105"
              >
                {client.renderLogo()}
                <div className="hidden sm:flex flex-col pl-3 border-l border-[#D3C7B5]">
                  <span className="font-sans text-[11px] font-bold text-[#FE299E] uppercase tracking-wider">
                    {client.scaleMetric}
                  </span>
                  <span className="font-sans text-xs text-[#6B554D]">
                    {client.category}
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicated Set for Seamless Infinite Loop */}
            {enterpriseLogos.map((client) => (
              <div
                key={`m2-${client.id}`}
                className="flex items-center gap-4 shrink-0 px-4 py-2 rounded-2xl transition-transform hover:scale-105"
              >
                {client.renderLogo()}
                <div className="hidden sm:flex flex-col pl-3 border-l border-[#D3C7B5]">
                  <span className="font-sans text-[11px] font-bold text-[#FE299E] uppercase tracking-wider">
                    {client.scaleMetric}
                  </span>
                  <span className="font-sans text-xs text-[#6B554D]">
                    {client.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
