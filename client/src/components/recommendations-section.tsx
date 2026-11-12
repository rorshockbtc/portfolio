import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, ChevronDown, ChevronUp, Quote } from "lucide-react";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";

const EASE = [0.16, 1, 0.3, 1] as const;

export function RecommendationsSection() {
  const [showAll, setShowAll] = useState(false);

  const featured = TESTIMONIALS.filter((t) => t.isFeatured);
  const remaining = TESTIMONIALS.filter((t) => !t.isFeatured);

  return (
    <section
      id="recommendations"
      aria-labelledby="recommendations-heading"
      className="px-5 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-[#D3C7B5]"
      data-testid="section-recommendations"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#D3C7B5]">
          <div className="max-w-[65ch]">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FE299E]">
              ENDORSEMENTS &amp; LETTERS
            </p>
            <h2
              id="recommendations-heading"
              className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#281B16]"
            >
              What collaborators &amp; leaders say.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5C4840] leading-relaxed">
              Perspectives from direct managers, healthcare strategy directors, software engineers,
              and MBA peers who have worked shoulder-to-shoulder with me in the trenches.
            </p>
          </div>

          <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#5C4840] border border-[#D3C7B5] px-4 py-2 rounded-full self-start md:self-end">
            11 Verified Recommendations
          </div>
        </div>

        {/* Featured 4-card grid (clean hairlines, archival sandstone aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-12 sm:pt-16">
          {featured.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Expandable drawer for the remaining 7 recommendations */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8 lg:pt-12 border-t border-[#D3C7B5] mt-12">
                {remaining.map((t) => (
                  <TestimonialCard key={t.name} testimonial={t} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#281B16] text-[#281B16] hover:bg-[#281B16] hover:text-[#F2EAE0] transition-colors text-sm font-medium cursor-pointer"
            data-testid="toggle-all-testimonials"
          >
            {showAll ? (
              <>
                Show fewer recommendations <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Read all 11 recommendations <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <article className="flex flex-col justify-between p-7 sm:p-9 rounded-2xl bg-[#F2EAE0]/70 border border-[#D3C7B5] space-y-6">
      <div className="space-y-4">
        <Quote className="w-6 h-6 text-[#FE299E] opacity-75" aria-hidden="true" />
        <blockquote className="font-serif italic text-lg sm:text-xl text-[#281B16] leading-[1.6]">
          &ldquo;{t.featuredQuote}&rdquo;
        </blockquote>
      </div>

      <div className="pt-4 border-t border-[#D3C7B5]/80 flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-serif font-bold text-lg text-[#281B16]">{t.name}</h3>
            {t.linkedin && (
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.name}'s LinkedIn Profile`}
                className="text-[#5C4840] hover:text-[#FE299E] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <p className="text-xs text-[#5C4840] font-sans mt-0.5">{t.role}</p>
          <p className="text-[13px] font-mono text-[#5C4840]/75 uppercase tracking-wider mt-1">
            {t.context}
          </p>
        </div>
      </div>
    </article>
  );
}
