import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SprintCalloutProps {
  onContactClick: (subject?: string) => void;
  className?: string;
}

const sprintIncludes = [
  "Day 1: a working session with you and an audit of the product, the data, and the code",
  "Days 2–4: redesign of the flows that matter most, built as real React/TypeScript",
  "Day 5: handoff with the code, a short design system, and a recorded walkthrough",
];

export function SprintCallout({ onContactClick, className }: SprintCalloutProps) {
  return (
    <section
      id="work-together"
      aria-labelledby="work-together-heading"
      className={cn("py-24 md:py-36 border-t border-[#D3C7B5] bg-[#281B16] text-[#F2EAE0]", className)}
      data-testid="section-sprint-offer"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        <div className="max-w-4xl space-y-5">
          <p className="font-sans text-sm uppercase tracking-[0.22em] font-bold text-[#FE299E]">Work with me</p>
          <h2 id="work-together-heading" className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.02]">
            Two ways to work together.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 lg:divide-x lg:divide-[#F2EAE0]/15">
          {/* Full-time */}
          <div className="space-y-7 lg:pr-16">
            <div className="space-y-2">
              <p className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#F2EAE0]/60">Full-time</p>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold">Principal or Staff Product Designer</h3>
            </div>
            <p className="text-lg sm:text-xl text-[#F2EAE0]/80 font-sans leading-relaxed">
              Best fit: a team building something complex in healthcare, fintech, AI, or enterprise, that wants one person
              who can go from strategy to systems to shipped interface. Remote in the US, or hybrid near Raleigh–Durham.
            </p>
            <Button
              size="lg"
              onClick={() => onContactClick("Full-time role (Principal / Staff)")}
              className="bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-base font-bold rounded-full h-14 px-9 cursor-pointer"
              data-testid="btn-inquire-principal"
            >
              Talk about a role <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Sprint */}
          <div className="space-y-7 lg:pl-16">
            <div className="space-y-2">
              <p className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#F2EAE0]/60">Project</p>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold">
                1-week sprint <span className="text-[#FE299E]">· $7,500 flat</span>
              </h3>
            </div>
            <ul className="space-y-4">
              {sprintIncludes.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-[#F2EAE0]/80 font-sans leading-relaxed">
                  <Check className="w-5 h-5 mt-1 shrink-0 text-[#FE299E]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-[#F2EAE0]/60 font-sans">One client at a time, five business days, and a fixed price.</p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onContactClick("1-week sprint ($7,500)")}
              className="border-[#F2EAE0]/40 bg-transparent hover:bg-[#F2EAE0] hover:text-[#281B16] text-[#F2EAE0] font-sans text-base font-bold rounded-full h-14 px-9 cursor-pointer"
              data-testid="btn-inquire-sprint"
            >
              Book a sprint <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        <p className="pt-10 border-t border-[#F2EAE0]/15 text-lg font-sans text-[#F2EAE0]/70">
          Prefer email?{" "}
          <a href="mailto:rorshock@protonmail.com" className="font-semibold text-[#F2EAE0] underline decoration-[#FE299E] underline-offset-4">
            rorshock@protonmail.com
          </a>{" "}
          · I reply within one business day.
        </p>
      </div>
    </section>
  );
}
