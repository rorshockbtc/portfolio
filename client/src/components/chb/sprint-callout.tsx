import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SprintCalloutProps {
  onContactClick: (subject?: string) => void;
  className?: string;
}

export function SprintCallout({ onContactClick, className }: SprintCalloutProps) {
  return (
    <section id="sprint-offer" className={cn("py-16 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 w-full", className)} data-testid="section-sprint-offer">
      <div className="border border-[#D3C7B5] bg-[#F2EAE0] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FE299E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans bg-[#FE299E]/10 text-[#FE299E] border border-[#FE299E]/20 font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              Immediate Availability &bull; Direct to Founder / Executive
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#281B16] tracking-tight">
              Need zero-to-one velocity or broken systems untangled right now?
            </h2>

            <p className="text-lg text-[#6B554D] leading-relaxed max-w-3xl font-sans">
              I am available for high-impact 1-week turnaround sprints and selective fractional leadership while evaluating long-term principal roles. Bypass the 2-month hiring cycle and ship working, high-craft software in days.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="border border-[#FE299E]/40 bg-[#FE299E]/5 rounded-2xl p-6 space-y-3 relative shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#FE299E] font-bold">
                    Fastest Path to Production
                  </span>
                  <span className="font-sans text-sm font-bold text-[#281B16] bg-[#F2EAE0] px-3 py-1 rounded-full border border-[#FE299E]/30 shadow-xs">
                    $7,500 Flat
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#281B16] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FE299E]" />
                  1-Week Production Turnaround Sprint
                </h3>
                <p className="text-xs text-[#6B554D] leading-relaxed font-sans">
                  5-day intensive. Audit the architecture, redesign the complete product UI with Massimo Vignelli typographic rigor, and ship production-ready React/TypeScript frontend code. Zero agency bloat.
                </p>
                <div className="pt-3 border-t border-[#D3C7B5]/60 text-xs font-sans text-[#281B16] flex items-center justify-between">
                  <span className="font-medium">Timeline: 5 Business Days</span>
                  <span className="text-[#FE299E] font-bold">1 Client at a Time</span>
                </div>
              </div>

              <div className="border border-[#D3C7B5] bg-[#EAE0D0]/50 rounded-2xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#6B554D] font-bold">
                    Technical Leadership
                  </span>
                  <span className="font-sans text-xs font-semibold text-[#6B554D] bg-[#F2EAE0] px-3 py-1 rounded-full border border-[#D3C7B5]">
                    Retainer / W2
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#281B16] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FE299E]" />
                  Principal Architect / Fractional Lead
                </h3>
                <p className="text-xs text-[#6B554D] leading-relaxed font-sans">
                  Hands-on systems leadership: local-first zero-PII security, complex distributed protocols, multi-tenant design systems, and C-suite stakeholder facilitation (McKinsey-style Fusion pedigree).
                </p>
                <div className="pt-3 border-t border-[#D3C7B5]/60 text-xs font-sans text-[#6B554D] flex items-center justify-between">
                  <span className="font-medium">Scope: 15-20 hrs/week or Full-Time</span>
                  <span className="text-[#281B16] font-semibold">Remote / Raleigh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-6 border-t lg:border-t-0 lg:border-l border-[#D3C7B5] pt-6 lg:pt-0 lg:pl-10">
            <div className="space-y-1.5 text-left lg:text-right">
              <span className="font-sans text-xs uppercase tracking-wider text-[#6B554D] font-semibold">Location &amp; Speed</span>
              <p className="font-serif font-bold text-lg text-[#281B16]">Raleigh, NC &amp; US Remote</p>
              <p className="text-xs text-[#6B554D] font-sans">Response within 24 hours guaranteed</p>
            </div>

            <div className="space-y-3 w-full lg:w-auto">
              <Button
                size="lg"
                onClick={() => onContactClick("1-Week Production Sprint ($7,500)")}
                className="w-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs uppercase tracking-wider font-bold rounded-full py-4 px-8 cursor-pointer shadow-md"
                data-testid="btn-inquire-sprint"
              >
                <Zap className="w-4 h-4 mr-2" />
                Book 1-Week Sprint ($7,500)
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => onContactClick("Principal Role / Fractional Inquiry")}
                className="w-full border-[#D3C7B5] bg-[#F2EAE0] hover:bg-[#EAE0D0] text-[#281B16] font-sans text-xs uppercase tracking-wider font-semibold rounded-full py-3.5 px-6"
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
