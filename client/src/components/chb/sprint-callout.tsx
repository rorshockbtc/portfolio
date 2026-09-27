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
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#FE299E]/10 text-[#FE299E] border border-[#FE299E]/20">
              <Zap className="w-3.5 h-3.5" />
              Immediate Availability • Direct to Founder / Executive
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-editorial tracking-tight">
              Need zero-to-one velocity or broken systems untangled right now?
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl font-sans">
              I am available for immediate high-impact contract sprints and strategic advisory while evaluating selective executive / principal founding roles. Bypass the 2-month hiring cycle and ship working software in days.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="border border-border/60 bg-background/60 rounded-xl p-5 space-y-2">
                <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FE299E]" />
                  1-Week Architecture &amp; UI Sprint
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Deep audit of broken UX, component library stabilization, or a high-fidelity 0-to-1 prototype designed and built in production code.
                </p>
              </div>

              <div className="border border-border/60 bg-background/60 rounded-xl p-5 space-y-2">
                <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FE299E]" />
                  Fractional Staff / Principal Architect
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Hands-on technical leadership: model orchestration, local-first zero-PII security, or untangling complex multi-tenant design systems.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-4 border-t lg:border-t-0 lg:border-l border-border/60 pt-6 lg:pt-0 lg:pl-8">
            <div className="space-y-1 text-left lg:text-right">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Location</span>
              <p className="font-semibold text-base">Raleigh, NC &amp; US Remote</p>
              <p className="text-xs text-muted-foreground font-mono">Response within 24 hours</p>
            </div>

            <Button
              size="lg"
              onClick={() => onContactClick("Urgent Sprint / Advisory Inquiry")}
              className="w-full lg:w-auto bg-[#FE299E] hover:bg-[#D1007E] text-white font-medium cursor-pointer shadow-sm"
              data-testid="btn-inquire-sprint"
            >
              <Mail className="w-4 h-4 mr-2" />
              Inquire for Sprint or Contract
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
