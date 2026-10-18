import { useState } from "react";
import { Quote, Linkedin, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  role: string;
  context: string;
  linkedin: string;
  featuredQuote: string;
  fullQuote?: string;
  isFeatured?: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jeremy Smith",
    role: "Strategic Product Leader | Systems Thinking",
    context: "Managed Kyle directly",
    linkedin: "https://www.linkedin.com/in/jeremysmithdesign/",
    isFeatured: true,
    featuredQuote:
      "Kyle is a rare bird. He glides along on the winds of curiosity, visiting new worlds to collect seeds of knowledge in his suitcase, then dispersing them throughout other worlds. When he visits your world, expect him to bring perspectives you hadn't considered. But he won't stop there… he'll dive in and help evolve your ideas into actionable plans and then he'll help create it with high focus on the craft of delivering those budding ideas. If you're considering a working relationship with Kyle, my recommendation would be that you make it happen.",
  },
  {
    name: "Brittany (Drury) Sadighi",
    role: "Director, Product Strategy & Experience",
    context: "Senior to Kyle (Healthcare Innovation)",
    linkedin: "https://www.linkedin.com/in/brittanyldrury/",
    isFeatured: true,
    featuredQuote:
      "Kyle is the very definition of a polymath, and a true lifelong learner. His unique lived experiences, quest for knowledge, and curious nature elevate every team discussion and project he takes part in.",
  },
  {
    name: "Alexa Colyer",
    role: "Healthcare Experience Strategy Leader",
    context: "Worked with Kyle on the same team",
    linkedin: "https://www.linkedin.com/in/alexacolyer/",
    isFeatured: true,
    featuredQuote:
      "Kyle brings diverse perspectives to his work and team. I've personally experienced Kyle bring new ideas to our team and transform how we conduct our work, for the better. He has a growth mindset and balances teaching his expertise and skillsets to others while learning from his teammates. Kyle is user-focused, meaning he ensures whatever he is delivering will impact the end user positively and change their life for the better.",
  },
  {
    name: "Brian Prince",
    role: "Senior Software Engineer",
    context: "Engineering Colleague at UltraLinq Healthcare",
    linkedin: "https://www.linkedin.com/in/brian-prince-417aa110/",
    isFeatured: true,
    featuredQuote:
      "I was a developer at UltraLinq and had the pleasure of working with Kyle. He is an excellent designer who is hard working and a great team player. Kyle is extremely passionate about solving clients' problems through creative design. Kyle is friendly, easy to get along with, well-liked and respected by his co-workers. Kyle would be a great asset to any company.",
  },
  {
    name: "Jennifer Humbert",
    role: "Regulatory Operations & Data Governance Leader",
    context: "Worked together across 3 companies over 6 years",
    linkedin: "https://www.linkedin.com/in/jennifer-humbert/",
    featuredQuote:
      "Kyle is a consummate champion of the entirety of a business—its people, its structures, its successes, and especially its necessary changes. Kyle and I have worked together in three different companies/capacities over the last six years, and Kyle is easily the most dedicated and passionate manager I've ever worked for, or alongside. He continuously encourages his staff to review and suggest ideas and changes... Kyle is a strong communicator, a powerful writer, and an incredibly creative force within any managerial or directorial dynamic he takes on.",
  },
  {
    name: "Tamer Salam",
    role: "Fractional CFO & Strategic Finance Executive",
    context: "Kenan-Flagler MBA Classmate & Colleague",
    linkedin: "https://www.linkedin.com/in/tamerasalam/",
    featuredQuote:
      "Kyle has a tremendous acumen of business knowledge, specifically when it comes to marketing and operations. He is highly technical and his experience in startups makes him extremely resourceful, hard-working and operationally sound... He understands how to manage from the bottom-up and is always willing to give anything his 110% effort to bask in its success.",
  },
  {
    name: "Heather Real",
    role: "Human-Centered Design Lead for Veteran Services",
    context: "Kenan-Flagler MBA Classmate",
    linkedin: "https://www.linkedin.com/in/heatherreal/",
    featuredQuote:
      "I most respect Kyle's ability to think critically about complex issues and make calculated recommendations. He often offered a starkly different point of view during our group sessions, poking holes in our processes and assumptions, which challenged the group to view each problem with new eyes to find unique solutions... It was very clear early on that he possessed finesse for prose that engaged the reader and allowed for even the more subtle points be brought to the forefront.",
  },
  {
    name: "Jeff Kotalik",
    role: "General Manager, PCC Structurals, Inc.",
    context: "Studied together",
    linkedin: "https://www.linkedin.com/in/jeff-kotalik-6b167a82/",
    featuredQuote:
      "I could describe Kyle as an innovative and hard-working team player who approaches tasks with an acute attention to detail… but that only describes what anyone would notice shortly after meeting him. The thing that impresses me most about Kyle is his ability to take part in nearly any conversation, not as a know-it-all but rather as a thinker and as a listener. He is thoughtful and never wastes words.",
  },
  {
    name: "Jason Abbot, PharmD, MBA",
    role: "Senior Partner, Pharmacy Consulting",
    context: "Kenan-Flagler MBA Classmate",
    linkedin: "https://www.linkedin.com/in/jason-abbot-pharmd-mba-81933a68/",
    featuredQuote:
      "Kyle is a highly motivated and positive individual that brings a spark of innovation into any situation that he is involved in. His creative and innovative thinking clearly give him a knack for marketing and operations. When these skills are combined with his tech savvy it becomes clear how Kyle is able to push businesses to stay on the cutting edge.",
  },
  {
    name: "Jennifer Fink",
    role: "Career & Executive Coach for Mid-Career Leaders",
    context: "Kenan-Flagler MBA Classmate",
    linkedin: "https://www.linkedin.com/in/jennfink/",
    featuredQuote:
      "I was immediately impressed by Kyle's honesty, friendliness, and fierce determination to make a major impact on the world and others... Kyle has an intuitive sense of each person's personality style and uses that to not only listen and share his opinion effectively, but to draw people together and build community. I value Kyle's talent for developing creative and innovative ideas and solutions and believe he can add value to any organization looking for someone to see the big picture and think out of the box.",
  },
  {
    name: "Teal Sallen",
    role: "Artist, Illustrator & Designer",
    context: "Industry Colleague",
    linkedin: "https://www.linkedin.com/in/teal-sallen-65920011/",
    featuredQuote:
      "Kyle's personality is defined by creativity, curiosity, intellect, and a sharp wit tempered by the empathy of one with a deep sensitivity to the human condition. Self reliant and full of ingenuity, he will readily seize upon new ideas and opportunities and apply himself to making them work for him.",
  },
];

export function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);

  const featured = TESTIMONIALS.filter((t) => t.isFeatured);
  const secondary = TESTIMONIALS.filter((t) => !t.isFeatured);

  return (
    <section
      id="recommendations"
      aria-labelledby="testimonials-heading"
      className="py-12 md:py-16 border-t border-[#D3C7B5] bg-[#F2EAE0]"
      data-testid="section-testimonials"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        {/* Compact Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#D3C7B5] pb-5">
          <div className="space-y-1.5 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold text-[#FE299E] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FE299E]" /> 06 // Endorsements
            </span>
            <h2 id="testimonials-heading" className="text-2xl sm:text-4xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.08]">
              What leaders, directors &amp; engineers say.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 self-start lg:self-end">
            <div className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#281B16] bg-[#EAE0D0] px-3.5 py-1.5 rounded-full border border-[#D3C7B5] whitespace-nowrap">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>11 Verified LinkedIn Recommendations</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAll(!showAll)}
              className="rounded-full px-4 h-8 border-[#281B16]/25 bg-[#EAE0D0] hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] font-sans text-xs font-bold cursor-pointer whitespace-nowrap"
              data-testid="button-toggle-testimonials"
            >
              {showAll ? (
                <>
                  Show fewer <ChevronUp className="w-3.5 h-3.5 ml-1" />
                </>
              ) : (
                <>
                  View all 11 ({secondary.length} more) <ChevronDown className="w-3.5 h-3.5 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Featured 4-Column Single-Viewport Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((t) => (
            <article
              key={t.name}
              className="bg-[#EAE0D0] rounded-2xl p-5 border border-[#D3C7B5] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#281B16]/30 transition-colors"
            >
              <div className="space-y-3">
                <Quote className="w-5 h-5 text-[#FE299E] opacity-75" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-[#281B16] font-sans leading-[1.68] italic">
                  &ldquo;{t.featuredQuote}&rdquo;
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#D3C7B5] flex items-center justify-between gap-3">
                <div className="space-y-0.5 min-w-0">
                  <h3 className="font-serif font-bold text-base text-[#281B16] truncate">{t.name}</h3>
                  <p className="text-xs font-sans font-semibold text-[#4A3A32] truncate">{t.role}</p>
                  <p className="text-[11px] font-sans text-[#4A3A32] truncate">{t.context}</p>
                </div>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] flex items-center justify-center text-[#281B16] hover:bg-[#FE299E] hover:text-white hover:border-[#FE299E] transition-colors shrink-0"
                  aria-label={`View ${t.name}'s LinkedIn profile`}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Expandable Archive for Remaining Recommendations */}
        {showAll && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2 animate-in fade-in duration-300">
            {secondary.map((t) => (
              <article
                key={t.name}
                className="bg-[#EAE0D0]/70 rounded-2xl p-5 border border-[#D3C7B5] shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <Quote className="w-4 h-4 text-[#FE299E] opacity-60" aria-hidden="true" />
                  <p className="text-xs sm:text-sm text-[#281B16] font-sans leading-[1.68] italic">
                    &ldquo;{t.featuredQuote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D3C7B5]/60 flex items-center justify-between gap-3">
                  <div className="space-y-0.5 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-[#281B16] truncate">{t.name}</h4>
                    <p className="text-xs font-sans text-[#4A3A32] truncate">{t.role}</p>
                    <p className="text-[11px] font-sans text-[#4A3A32] truncate">{t.context}</p>
                  </div>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#F2EAE0] border border-[#D3C7B5] flex items-center justify-center text-[#281B16] hover:bg-[#FE299E] hover:text-white hover:border-[#FE299E] transition-colors shrink-0"
                    aria-label={`View ${t.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
