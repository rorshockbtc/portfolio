import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SprintCalloutProps {
  onContactClick: (subject?: string) => void;
  className?: string;
}

export function SprintCallout({ onContactClick, className }: SprintCalloutProps) {
  return (
    <section id="sprint-offer" className={cn("px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto", className)} data-testid="section-sprint-offer">
      <div className="border border-border/80 bg-card/70 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FE299E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#FE299E]/10 text-[#FE299E] border border-[#FE299E]/20">
              <Zap className="w-3.5 h-3.5" />
              Immediate Availability &bull; Direct to Founder / Executive
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-editorial tracking-tight">
              Need zero-to-one velocity or broken systems untangled right now?
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl font-sans">
              I am available for high-impact 1-week turnaround sprints and selective fractional leadership while evaluating long-term principal roles. Bypass the 2-month hiring cycle and ship working, high-craft software in days.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="border border-[#FE299E]/30 bg-[#FE299E]/5 rounded-xl p-5 space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FE299E] font-bold">
                    Fastest Path to Production
                  </span>
                  <span className="font-mono text-sm font-bold text-foreground bg-background px-2.5 py-0.5 rounded border border-border/60">
                    $10,000 Flat
                  </span>
                </div>
                <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FE299E]" />
                  1-Week Production Turnaround Sprint
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  5-day intensive. Audit the architecture, redesign the complete product UI with Massimo Vignelli typographic rigor, and ship production-ready React/TypeScript frontend code. Zero agency bloat.
                </p>
                <div className="pt-2 border-t border-border/40 text-[11px] font-mono text-foreground/80 flex items-center justify-between">
                  <span>Timeline: 5 Business Days</span>
                  <span className="text-[#FE299E] font-semibold">1 Client at a Time</span>
                </div>
              </div>

              <div className="border border-border/60 bg-background/60 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                    Technical Leadership
                  </span>
                  <span className="font-mono text-xs font-semibold text-muted-foreground bg-muted/40 px-2 py-0.5 rounded">
                    Retainer / W2
                  </span>
                </div>
                <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FE299E]" />
                  Principal Architect / Fractional Lead
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Hands-on systems leadership: local-first zero-PII security, complex distributed protocols, multi-tenant design systems, and C-suite stakeholder facilitation (McKinsey-style Fusion pedigree).
                </p>
                <div className="pt-2 border-t border-border/40 text-[11px] font-mono text-foreground/80 flex items-center justify-between">
                  <span>Scope: 15-20 hrs/week or Full-Time</span>
                  <span className="text-foreground/70">Remote / Raleigh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-5 border-t lg:border-t-0 lg:border-l border-border/60 pt-6 lg:pt-0 lg:pl-8">
            <div className="space-y-1.5 text-left lg:text-right">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Location &amp; Speed</span>
              <p className="font-semibold text-base">Raleigh, NC &amp; US Remote</p>
              <p className="text-xs text-muted-foreground font-mono">Response within 24 hours guaranteed</p>
            </div>

            <div className="space-y-2.5 w-full lg:w-auto">
              <Button
                size="lg"
                onClick={() => onContactClick("1-Week Production Sprint ($10k)")}
                className="w-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-medium cursor-pointer shadow-sm text-sm"
                data-testid="btn-inquire-sprint"
              >
                <Zap className="w-4 h-4 mr-2" />
                Book 1-Week Sprint ($10k)
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => onContactClick("Principal Role / Fractional Inquiry")}
                className="w-full border-border/80 hover:border-foreground/40 text-foreground text-sm"
                data-testid="btn-inquire-principal"
              >
                <Mail className="w-4 h-4 mr-2" />
                Discuss Principal Role
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
