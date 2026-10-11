import { SiWalmart } from "react-icons/si";

interface ClientBrand {
  name: string;
  subtext: string;
  scaleBadge: string;
  renderLogo: () => React.ReactNode;
}

const enterpriseClients: ClientBrand[] = [
  {
    name: "Walmart",
    subtext: "Global Tech / LMS & Search",
    scaleBadge: "3.2M Global Associates",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <SiWalmart className="w-8 h-8 text-[#FFC220] shrink-0" />
        <span className="font-sans font-black tracking-tight text-xl md:text-2xl text-[#0071DC]">Walmart</span>
      </div>
    ),
  },
  {
    name: "UnitedHealth Group",
    subtext: "Flagship Native Patient Apps",
    scaleBadge: "70M+ Daily Patients",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 text-[#002677]" fill="currentColor">
          <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4zm-1 6h2v3h3v2h-3v3h-2v-3H8v-2h3V8z"/>
        </svg>
        <span className="font-sans font-bold tracking-tight text-base md:text-lg text-[#002677] leading-none">
          UnitedHealth<br />
          <span className="text-xs font-semibold text-[#735F57] tracking-wider uppercase">Optum</span>
        </span>
      </div>
    ),
  },
  {
    name: "Custodia Bank",
    subtext: "Chartered Full-Reserve Bank",
    scaleBadge: "4-Day Sprint & 30-Day Core App",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <img
          src="/images/custodia/404 horse.png"
          alt="Custodia Horse"
          className="w-8 h-8 object-contain shrink-0"
        />
        <span className="font-serif font-black tracking-wider text-base md:text-lg text-[#2B1E19] uppercase">
          Custodia
        </span>
      </div>
    ),
  },
  {
    name: "Fidelity Investments",
    subtext: "Giving Marketplace (Cloud-Native)",
    scaleBadge: "1M+ Indexed Charities",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 text-[#008752]" fill="currentColor">
          <polygon points="12,2 2,22 22,22" fill="#008752" opacity="0.95" />
          <polygon points="12,7 6,19 18,19" fill="#FAF5EC" />
          <polygon points="12,11 8,19 16,19" fill="#008752" />
        </svg>
        <span className="font-serif font-bold tracking-tight text-base md:text-lg text-[#2B1E19]">
          Fidelity
        </span>
      </div>
    ),
  },
  {
    name: "IronNet Cybersecurity",
    subtext: "Gen. Keith Alexander (Ex-NSA)",
    scaleBadge: "Defense-Grade RBAC",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 text-[#2B1E19]" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="12" r="3" fill="#FE299E" stroke="none" />
        </svg>
        <span className="font-sans font-black tracking-tight text-base md:text-lg text-[#2B1E19]">
          IronNet
        </span>
      </div>
    ),
  },
  {
    name: "Martin Marietta",
    subtext: "Heavy Materials & Quarry UX",
    scaleBadge: "Field Toughbook UX",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 text-[#D9A206]" fill="currentColor">
          <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="#2B1E19" />
          <polygon points="12,5 18,9 18,15 12,19 6,15 6,9" fill="#D9A206" />
        </svg>
        <span className="font-sans font-bold tracking-tight text-base md:text-lg text-[#2B1E19] leading-tight">
          Martin<br />
          <span className="text-xs font-semibold text-[#735F57] tracking-wider uppercase">Marietta</span>
        </span>
      </div>
    ),
  },
];

export function ClientLogoBar() {
  return (
    <div className="w-full border-y border-[#DBD3C4] bg-[#FAF5EC]/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DBD3C4]/60 pb-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#735F57]">
            Trusted In High-Stakes Production Environments
          </span>
          <span className="text-xs font-sans text-[#735F57]">
            From Fortune 1 retail to Federal Reserve chartered banking
          </span>
        </div>

        {/* Large, Authoritative Logo Roster */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
          {enterpriseClients.map((client, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-2 group"
            >
              <div className="h-10 flex items-center group-hover:scale-105 transition-transform duration-200">
                {client.renderLogo()}
              </div>
              <div className="space-y-0.5">
                <span className="block font-mono text-[10px] text-[#FE299E] font-bold uppercase tracking-wider">
                  {client.scaleBadge}
                </span>
                <p className="text-[11px] text-[#735F57] font-sans leading-tight">
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
