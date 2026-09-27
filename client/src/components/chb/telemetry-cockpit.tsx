import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TelemetryRow {
  label: string;
  value: string;
  highlight?: "pink" | "green" | "default";
}

interface TelemetryCockpitProps {
  namespace?: string;
  title?: string;
  badgeText?: string;
  rows?: TelemetryRow[];
  experienceYears?: string;
  unitLabel?: string;
  floatingBadgeTitle?: string;
  floatingBadgeSub?: string;
  className?: string;
}

export function TelemetryCockpit({
  namespace = "systems-architecture",
  title = "Live Systems Telemetry",
  badgeText = "Verified Scale",
  rows = [
    { label: "Healthcare Scale", value: "35,000,000+ Patients" },
    { label: "Walmart Enterprise", value: "3,000,000 Associates" },
    { label: "Fraud Reduction", value: "-83% ($6M to <$1M)", highlight: "green" },
    { label: "AI Token Architecture", value: "$0.00 Marginal Cost", highlight: "pink" },
    { label: "Prediction Bot Telemetry", value: "<100ms WebSocket" },
  ],
  experienceYears = "20+ Yrs",
  unitLabel = "Unit of One",
  floatingBadgeTitle = "Turnaround in 24h",
  floatingBadgeSub = "Ready for sprint or hire",
  className,
}: TelemetryCockpitProps) {
  return (
    <div className={cn("relative", className)} data-testid="telemetry-cockpit">
      <Card className="p-6 space-y-5 border-border/80 bg-card/90 backdrop-blur-md shadow-lg relative z-10">
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FE299E]/10 flex items-center justify-center">
              <Activity className="w-4 h-4 text-[#FE299E]" />
            </div>
            <div>
              <code className="text-sm font-mono font-semibold text-foreground">
                pipe\{namespace}
              </code>
              <p className="text-[11px] text-muted-foreground font-mono">{title}</p>
            </div>
          </div>
          <Badge variant="secondary" className="font-mono text-[10px] bg-muted">
            {badgeText}
          </Badge>
        </div>

        <div className="space-y-2.5 font-mono text-xs">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2.5 bg-muted/40 rounded-lg border border-border/40"
            >
              <span className="text-muted-foreground">{row.label}</span>
              <span
                className={cn(
                  "font-bold text-foreground",
                  row.highlight === "green" && "text-emerald-600 dark:text-emerald-400",
                  row.highlight === "pink" && "text-[#FE299E]"
                )}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-foreground font-mono">{experienceYears}</span>
            <span>Execution Experience</span>
          </div>
          <span className="font-mono text-[11px] text-[#FE299E] font-medium">{unitLabel}</span>
        </div>
      </Card>

      {floatingBadgeTitle && (
        <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-background/95 backdrop-blur-md border border-border/80 rounded-xl p-3.5 shadow-md items-center gap-3 z-20">
          <div className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-foreground">{floatingBadgeTitle}</p>
            <p className="text-[11px] text-muted-foreground font-mono">{floatingBadgeSub}</p>
          </div>
        </div>
      )}
    </div>
  );
}
