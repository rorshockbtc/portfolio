import { Stagger, StaggerItem } from "@/components/motion/primitives";

const LOGOS = [
  { name: "Custodia Bank", context: "1st Product Designer · Digital Asset Custody" },
  { name: "UnitedHealth Group", context: "Principal Lead · 35M+ Patient Portal" },
  { name: "Optum", context: "Fusion Senior Designer · Clinical Mobile Experience" },
  { name: "Walmart Global Tech", context: "Staff Systems · 3M+ Associate Platform" },
  { name: "Martin Marietta", context: "Fortune 500 · Enterprise Logistics & Materials" },
  { name: "IronNet", context: "Gen. Keith Alexander · Network Defense Telemetry" },
  { name: "Fidelity Investments", context: "Enterprise UX · Wealth & Brokerage" },
  { name: "Foodler → Grubhub", context: "Lead Ops · $500M+ Volume Acquisition Exit" },
];

export function ClientLogoBar() {
  return (
    <section
      className="border-b border-[#D3C7B5] bg-[#EAE0D0] py-10 sm:py-12"
      aria-label="Enterprise pedigree and client history"
      data-testid="section-client-logos"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 mb-6 border-b border-[#D3C7B5]/80">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C4840] font-medium">
            01.A // Proven Pedigree Across Regulated Enterprise &amp; Sovereign Systems
          </p>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840]">
            15+ Years · Healthcare · Banking · Retail · Protocol R&amp;D
          </span>
        </div>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 divide-y sm:divide-y-0 sm:divide-x divide-[#D3C7B5]">
          {LOGOS.map((logo, idx) => (
            <StaggerItem
              key={logo.name}
              className={`py-4 sm:py-1 ${
                idx === 0 ? "sm:pr-6" : idx === LOGOS.length - 1 ? "sm:pl-6" : "sm:px-6"
              }`}
              data-testid={`logo-item-${idx}`}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C4840] mb-1 tabular-nums">
                0{idx + 1}
              </div>
              <div className="font-serif font-normal text-2xl sm:text-[26px] text-[#281B16] tracking-[-0.015em] leading-tight">
                {logo.name}
              </div>
              <div className="font-sans text-xs text-[#5C4840] mt-1 leading-relaxed">
                {logo.context}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default ClientLogoBar;
