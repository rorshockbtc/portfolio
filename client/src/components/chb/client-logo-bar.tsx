import { Building2, Shield, Zap, TrendingUp, Layers, HardHat } from "lucide-react";

interface ClientPill {
  name: string;
  subtext: string;
  scaleBadge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const enterpriseClients: ClientPill[] = [
  {
    name: "Walmart",
    subtext: "Global Tech / LMS & Search",
    scaleBadge: "3.2M Associates",
    icon: Zap,
  },
  {
    name: "UnitedHealth Group",
    subtext: "Flagship Native Patient Apps",
    scaleBadge: "70M+ Patients",
    icon: Shield,
  },
  {
    name: "Custodia Bank",
    subtext: "Chartered Full-Reserve Bank",
    scaleBadge: "4-Day Sprint",
    icon: Building2,
  },
  {
    name: "Fidelity Investments",
    subtext: "Giving Marketplace (Cloud-Native)",
    scaleBadge: "1M+ Charities",
    icon: TrendingUp,
  },
  {
    name: "IronNet Cybersecurity",
    subtext: "Gen. Keith Alexander (Ex-NSA)",
    scaleBadge: "Defense-Grade RBAC",
    icon: Shield,
  },
  {
    name: "Martin Marietta",
    subtext: "Heavy Materials & Quarry Modernization",
    scaleBadge: "Field Toughbook UX",
    icon: HardHat,
  },
];

export function ClientLogoBar() {
  return (
    <div className="w-full border-y border-border/40 bg-muted/20 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center space-y-1 mb-6">
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            Trusted In High-Stakes Production Environments
          </p>
          <p className="text-xs text-muted-foreground/80">
            Systems architecture, design systems, and software engineering deployed across global enterprises
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {enterpriseClients.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className="group rounded-lg border border-border/50 bg-card/60 p-3.5 flex flex-col justify-between hover:border-[#FE299E]/40 hover:bg-card/90 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-foreground/90 font-semibold text-xs tracking-tight">
                    <Icon className="w-3.5 h-3.5 text-[#FE299E] shrink-0" />
                    <span className="truncate">{client.name}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground line-clamp-1 leading-tight">{client.subtext}</p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-border/30">
                  <span className="inline-block text-[10px] font-mono text-[#FE299E] font-medium">
                    {client.scaleBadge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
