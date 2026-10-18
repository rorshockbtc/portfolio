import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Calendar, Sparkles, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SprintCalloutProps {
  onContactClick: (subject?: string) => void;
  className?: string;
}

const CALENDLY_URL = "https://calendly.com/cubby-colonhyphenbracket/30min";

export function SprintCallout({ onContactClick, className }: SprintCalloutProps) {
  return (
    <section
      id="work-together"
      aria-labelledby="work-together-heading"
      className={cn("py-16 md:py-24 border-t border-[#D3C7B5] bg-[#281B16] text-[#F2EAE0]", className)}
      data-testid="section-sprint-offer"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#F2EAE0]/15 pb-8">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FE299E]" /> Studio of One · Surgical Deploy
            </span>
            <h2 id="work-together-heading" className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.06]">
              Three ways to work together.
            </h2>
            <p className="text-base sm:text-lg text-[#E4DACB] font-sans leading-[1.7] max-w-2xl">
              From first-principles service design and brand marks to database schemas and production TypeScript/Rust code—I resolve critical bottlenecks fast without agency handoff loss.
            </p>
          </div>

          <div className="shrink-0 self-start lg:self-end">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-sm font-bold shadow-lg transition-all whitespace-nowrap no-underline"
            >
              <Calendar className="w-4 h-4 shrink-0" /> Book 30-Min Intro Call →
            </a>
          </div>
        </div>

        {/* 3-Column Offer Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: 1-Week Rapid Sprint */}
          <div className="rounded-2xl p-7 sm:p-8 bg-[#35251F] border border-[#F2EAE0]/15 flex flex-col justify-between space-y-7 hover:border-[#FE299E]/50 transition-colors">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#FE299E]">Rapid Sprint</span>
                <span className="px-3 py-1 rounded-full bg-[#FE299E]/20 text-[#FE299E] text-xs font-mono font-bold whitespace-nowrap">5 Days</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F2EAE0]">1-Week Sprint</h3>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#FE299E] mt-1">$7,500 <span className="text-sm font-sans font-normal text-[#E4DACB]">flat</span></p>
              </div>

              <p className="text-sm sm:text-base text-[#E4DACB] font-sans leading-[1.68]">
                One surgical deliverable in five business days. Ideal for unblocking a high-priority feature or launching a foundational brand.
              </p>

              <ul className="space-y-3 pt-3 border-t border-[#F2EAE0]/10 text-sm text-[#F2EAE0] font-sans leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span><strong>Deliverable A</strong>: Prod-ready feature or workflow in React / TypeScript</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span><strong>Deliverable B</strong>: Complete brand identity, marks &amp; design system tokens</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>Recorded video walkthrough &amp; clean repository handoff</span>
                </li>
              </ul>
            </div>

            <Button
              size="lg"
              onClick={() => onContactClick("1-week sprint ($7,500)")}
              className="w-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-sm font-bold rounded-full py-4 cursor-pointer whitespace-nowrap"
            >
              Book $7,500 Sprint <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
            </Button>
          </div>

          {/* Card 2: 2–4 Week Systems Engagement */}
          <div className="rounded-2xl p-7 sm:p-8 bg-[#3D2C24] border-2 border-[#FE299E] shadow-xl flex flex-col justify-between space-y-7 relative">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#FE299E] text-white text-[11px] font-mono font-bold uppercase tracking-wider whitespace-nowrap">
              Most Transformative
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#FE299E]">Surgical Deploy</span>
                <span className="px-3 py-1 rounded-full bg-[#F2EAE0]/15 text-[#F2EAE0] text-xs font-mono font-bold whitespace-nowrap">2–4 Weeks</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F2EAE0]">Systems Engagement</h3>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#FE299E] mt-1">$15,000 – $25,000</p>
              </div>

              <p className="text-sm sm:text-base text-[#E4DACB] font-sans leading-[1.68]">
                Full-spectrum systems architecture and cross-functional facilitation for complex institutional or early-stage initiatives.
              </p>

              <ul className="space-y-3 pt-3 border-t border-[#F2EAE0]/10 text-sm text-[#F2EAE0] font-sans leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>Zero-to-one service architecture &amp; core data model</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>Executive &amp; engineering facilitation to eliminate handoff friction</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>Multi-platform design system &amp; live working prototype</span>
                </li>
              </ul>
            </div>

            <Button
              size="lg"
              onClick={() => onContactClick("2-4 week systems engagement ($15k-$25k)")}
              className="w-full bg-[#F2EAE0] hover:bg-white text-[#281B16] font-sans text-sm font-bold rounded-full py-4 cursor-pointer whitespace-nowrap"
            >
              Scope Systems Engagement <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
            </Button>
          </div>

          {/* Card 3: Full-Time / Embedded Role */}
          <div className="rounded-2xl p-7 sm:p-8 bg-[#35251F] border border-[#F2EAE0]/15 flex flex-col justify-between space-y-7 hover:border-[#FE299E]/50 transition-colors">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#E4DACB]">Full-Time / Retainer</span>
                <span className="px-3 py-1 rounded-full bg-[#F2EAE0]/10 text-[#F2EAE0] text-xs font-mono font-bold whitespace-nowrap">Principal / Staff</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F2EAE0]">Product Architect</h3>
                <p className="text-base sm:text-lg font-sans text-[#E4DACB] mt-1">R&amp;D Lead · Principal Designer</p>
              </div>

              <p className="text-sm sm:text-base text-[#E4DACB] font-sans leading-[1.68]">
                Embedded leadership for teams in regulated fintech, healthcare, AI systems, or enterprise where mistakes cost millions.
              </p>

              <ul className="space-y-3 pt-3 border-t border-[#F2EAE0]/10 text-sm text-[#F2EAE0] font-sans leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>US Remote or hybrid near Raleigh–Durham, NC</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>MBA (Kenan-Flagler) business rigor + AI-native execution</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>Bridges C-suite vision to engineering ship-readiness</span>
                </li>
              </ul>
            </div>

            <Button
              size="lg"
              variant="outline"
              onClick={() => onContactClick("Full-time role (Product Architect / Staff)")}
              className="w-full border-[#F2EAE0]/40 bg-transparent hover:bg-[#F2EAE0] hover:text-[#281B16] text-[#F2EAE0] font-sans text-sm font-bold rounded-full py-4 cursor-pointer whitespace-nowrap"
            >
              Discuss a Role <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
            </Button>
          </div>
        </div>

        {/* Bottom Fast-Contact Bar */}
        <div className="pt-8 border-t border-[#F2EAE0]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm sm:text-base font-sans text-[#E4DACB]">
          <p>
            Prefer calendar or email?{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-[#FE299E] underline-offset-4 hover:text-[#FE299E]"
            >
              Pick a time on Calendly
            </a>{" "}
            or write to{" "}
            <a
              href="mailto:rorshock@protonmail.com"
              className="font-semibold text-white underline decoration-[#FE299E] underline-offset-4 hover:text-[#FE299E]"
            >
              rorshock@protonmail.com
            </a>
          </p>
          <p className="text-xs text-[#E4DACB]/80 font-mono uppercase tracking-wider">
            Kyle Cyree · Replies within 1 business day
          </p>
        </div>
      </div>
    </section>
  );
}
