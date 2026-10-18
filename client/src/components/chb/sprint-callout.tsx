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
      className={cn("py-12 md:py-16 border-t border-[#D3C7B5] bg-[#281B16] text-[#F2EAE0]", className)}
      data-testid="section-sprint-offer"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        {/* Compact Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#F2EAE0]/15 pb-5">
          <div className="max-w-3xl space-y-1.5">
            <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FE299E]" /> 07 // Work Together · Executive W2 or Turnkey B2B
            </span>
            <h2 id="work-together-heading" className="text-2xl sm:text-4xl font-serif font-bold tracking-tight leading-[1.08]">
              Three ways to work together.
            </h2>
            <p className="text-sm sm:text-base text-[#E4DACB] font-sans leading-[1.68] max-w-2xl">
              Join your team full-time to lead product &amp; systems architecture, or start with a focused 1-week sprint to ship a production feature and prove velocity first.
            </p>
          </div>

          <div className="shrink-0 self-start lg:self-end">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm font-bold shadow-lg transition-all whitespace-nowrap no-underline"
            >
              <Calendar className="w-4 h-4 shrink-0" /> Book 30-Min Intro Call →
            </a>
          </div>
        </div>

        {/* 3-Column Single-Viewport Offer Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Full-Time / Principal Leadership (Primary Highlighted) */}
          <div className="rounded-2xl p-6 bg-[#3D2C24] border-2 border-[#FE299E] shadow-xl flex flex-col justify-between space-y-5 relative">
            <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-[#FE299E] text-white text-[10px] font-mono font-bold uppercase tracking-wider whitespace-nowrap">
              Executive W2 or B2B
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#FE299E]">Full-Time / Embedded</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F2EAE0]/15 text-[#F2EAE0] text-xs font-mono font-bold whitespace-nowrap">Principal / Lead</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F2EAE0]">Product Architect &amp; R&amp;D Lead</h3>
                <p className="text-sm sm:text-base font-sans text-[#FE299E] font-semibold mt-0.5">Principal Product Designer · Staff IC</p>
              </div>

              <p className="text-xs sm:text-sm text-[#E4DACB] font-sans leading-[1.65]">
                Full-time ownership for fintech, wealth management, healthcare, and AI-native teams where regulatory precision and shipping speed both matter.
              </p>

              <ul className="space-y-2 pt-3 border-t border-[#F2EAE0]/10 text-xs sm:text-sm text-[#F2EAE0] font-sans leading-snug">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>Collapses strategy, data modeling, UI design &amp; code prototyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>MBA (UNC Kenan-Flagler) business rigor + 15+ yrs regulated scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>US Remote (EST/CST) or hybrid near Raleigh–Durham, NC</span>
                </li>
              </ul>
            </div>

            <Button
              size="lg"
              onClick={() => onContactClick("Full-time role (Product Architect / Staff)")}
              className="w-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs sm:text-sm font-bold rounded-full py-3.5 cursor-pointer whitespace-nowrap"
            >
              Discuss a Full-Time Role <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
            </Button>
          </div>

          {/* Card 2: 1-Week Trial / Rapid Sprint */}
          <div className="rounded-2xl p-6 bg-[#35251F] border border-[#F2EAE0]/15 flex flex-col justify-between space-y-5 hover:border-[#FE299E]/50 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#FE299E]">Trial or Unblocker</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FE299E]/20 text-[#FE299E] text-xs font-mono font-bold whitespace-nowrap">5 Business Days</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F2EAE0]">1-Week Surgical Sprint</h3>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#FE299E] mt-0.5">$7,500 <span className="text-xs font-sans font-normal text-[#E4DACB]">flat · B2B/1099</span></p>
              </div>

              <p className="text-xs sm:text-sm text-[#E4DACB] font-sans leading-[1.65]">
                Unblock a high-priority product workflow in five days—or test-drive working together on a real problem before a full-time commitment.
              </p>

              <ul className="space-y-2 pt-3 border-t border-[#F2EAE0]/10 text-xs sm:text-sm text-[#F2EAE0] font-sans leading-snug">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>Production-ready feature or prototype in React / TypeScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>Complete brand identity, design tokens &amp; component primitives</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>Recorded architectural walkthrough &amp; clean repo handoff</span>
                </li>
              </ul>
            </div>

            <Button
              size="lg"
              onClick={() => onContactClick("1-week sprint ($7,500)")}
              className="w-full bg-[#F2EAE0] hover:bg-white text-[#281B16] font-sans text-xs sm:text-sm font-bold rounded-full py-3.5 cursor-pointer whitespace-nowrap"
            >
              Book $7,500 Sprint <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
            </Button>
          </div>

          {/* Card 3: 2–4 Week Systems Engagement */}
          <div className="rounded-2xl p-6 bg-[#35251F] border border-[#F2EAE0]/15 flex flex-col justify-between space-y-5 hover:border-[#FE299E]/50 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#E4DACB]">Deep Architecture</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F2EAE0]/10 text-[#F2EAE0] text-xs font-mono font-bold whitespace-nowrap">2–4 Weeks</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F2EAE0]">Systems Engagement</h3>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#FE299E] mt-0.5">$15,000 – $25,000</p>
              </div>

              <p className="text-xs sm:text-sm text-[#E4DACB] font-sans leading-[1.65]">
                Zero-to-one product architecture, relational data modeling, and working full-stack MVP delivery for complex institutional initiatives.
              </p>

              <ul className="space-y-2 pt-3 border-t border-[#F2EAE0]/10 text-xs sm:text-sm text-[#F2EAE0] font-sans leading-snug">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>First-principles service blueprint &amp; normalized data schema</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>Executive &amp; engineering alignment without agency handoff loss</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FE299E]" />
                  <span>Multi-platform design system &amp; live working codebase</span>
                </li>
              </ul>
            </div>

            <Button
              size="lg"
              variant="outline"
              onClick={() => onContactClick("2-4 week systems engagement ($15k-$25k)")}
              className="w-full border-[#F2EAE0]/40 bg-transparent hover:bg-[#F2EAE0] hover:text-[#281B16] text-[#F2EAE0] font-sans text-xs sm:text-sm font-bold rounded-full py-3.5 cursor-pointer whitespace-nowrap"
            >
              Scope Systems Engagement <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
            </Button>
          </div>
        </div>

        {/* Bottom Fast-Contact Bar */}
        <div className="pt-4 border-t border-[#F2EAE0]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm font-sans text-[#E4DACB]">
          <p>
            Prefer direct calendar or email?{" "}
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
          <p className="text-[11px] text-[#E4DACB]/80 font-mono uppercase tracking-wider">
            Kyle Cyree · Replies within 1 business day
          </p>
        </div>
      </div>
    </section>
  );
}
