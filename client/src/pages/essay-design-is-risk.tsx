import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactFormModal from "@/components/contact-form-modal";

function CitationLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="citation-link">
      {children}
    </a>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: "#FE299E" }}>{children}</strong>;
}

function PinkQuote({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <blockquote
      className={`border-l-2 pl-5 py-1 my-6 text-foreground/75 italic leading-[1.6] ${large ? "text-[20px] md:text-[22px]" : "text-[17px]"}`}
      style={{ borderColor: "#FE299E" }}
    >
      {children}
    </blockquote>
  );
}

export default function EssayDesignIsRisk() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal header — back link only, not in main nav */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-back-hire">
            <ArrowLeft className="w-4 h-4" />
            Back to Hire
          </a>
          <span className="font-mono font-bold text-xl select-none" style={{ color: "#FE299E" }} aria-hidden="true">:-]</span>
        </div>
      </header>

      <main className="pt-24 pb-24 max-w-4xl mx-auto px-6 md:px-10" data-testid="page-essay">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 mb-16 border-b border-border pb-12"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Design is Risk &mdash; A case study
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]" data-testid="text-essay-title">
            The data-exfiltration honeypot nobody is talking about.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-essay-subtitle">
            A non-traditional design architecture case study on portfolio IP risk, CoT mining, and
            why this site is intentionally light.
          </p>
          <p className="font-mono text-xs text-muted-foreground">Kyle Cyree &mdash; Colon Hyphen Bracket, LLC</p>
        </motion.div>

        {/* Article body */}
        <article className="space-y-14 text-[17px] leading-[1.78] text-foreground/85 max-w-[68ch]" data-testid="article-body">

          {/* Executive Summary */}
          <section className="space-y-5">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Executive Summary</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-foreground">
              Portfolio as security posture.
            </h2>
            <p>
              My portfolio is designed to prevent intellectual property exfiltration by including
              case studies as links to external, non-indexed domains rather than publishing
              process documentation directly. Chain-of-Thought (CoT) data-mining operations are
              increasing globally &mdash; specifically within the tech sector following recent
              mass layoffs &mdash; with bad actors targeting portfolios and case studies for
              IP-theft via automated data harvesting. This portfolio is intentionally lightweight
              to prevent that risk. The synthesis below includes documentation and proprietary
              research exploring this threat, why it is structurally underestimated by enterprise
              design leadership, and why information integrity is the most undervalued skill in
              the design profession.
            </p>
            <p className="text-sm text-muted-foreground border-l-2 border-border pl-4 italic">
              This synthesis may be freely distributed or quoted per the MIT license available on{" "}
              <a
                href="https://github.com/rorshockbtc"
                target="_blank"
                rel="noopener noreferrer"
                className="citation-link"
              >
                the project's GitHub repository
              </a>
              .
            </p>
          </section>

          {/* 01 — Current State */}
          <section className="space-y-5 border-t border-border pt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">01 / Current State</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-foreground">
              The hiring market has changed. Most people don't know it yet.
            </h2>

            <p>
              If you're either old school or haven't sought new employment since Q4 2025, you
              have no idea what's actually happening in the job market.
            </p>

            <p>
              Throughout my career &mdash; spanning fraud detection work with the FBI,
              device-level security at the nation-state level, regulated banking and
              healthcare &mdash; I have approached information integrity as a primary
              constraint. If a user can't trust you to deliver on your promises and safeguard
              their information, does anything else really matter?
            </p>

            <PinkQuote>
              If a designer is required to disclose Material Non-Public Information in their
              portfolio, either publicly or "password protected," is it really protected?
            </PinkQuote>

            <p>
              LinkedIn, within tech at least, has thousands of{" "}
              <CitationLink href="https://www.wsj.com/lifestyle/careers/ghost-jobs-2c0dcd4e">
                fake job postings
              </CitationLink>
              . Recent empirical research highlighted in the <em>Columbia Law Review</em> found
              that up to <Stat>21%</Stat> of job postings on major platforms are{" "}
              <CitationLink href="https://www.columbialawreview.org/content/ghost-jobs/">
                ghost jobs
              </CitationLink>
              . When you "Easy Apply" or fill out a direct application on a recruiting firm's
              website, you're often texted by an AI agent or asked to complete an "optional"
              video/audio exercise. You're allowed to decline, but then your application's
              rightness-of-fit is scored as "not available" &mdash; and if a recruiter has
              1,500+ resumes with 90 of them scoring 85/100 or higher, do you think the
              "optional" exercise will get your history reviewed?
            </p>

            <p>
              Other applications use firms like Crossover, which dangle a lucrative
              $100&ndash;$250/hr role over desperate jobseekers. When you apply, you're invited
              to "complete your application." I went through{" "}
              <CitationLink href="https://www.wired.com/story/ai-hiring-biometric-data/">
                the initial phases of this process
              </CitationLink>
              . It asks you to write your thought process, then you have "assessments" each
              taking 1&ndash;4 hours, and when you complete one: "don't worry, we're almost
              done, just complete the next assessment."{" "}
              <CitationLink href="https://hbr.org/2023/04/beware-the-free-work-job-interview-scam">
                Over and over
              </CitationLink>
              . Your voice, facial expressions, reasoning, typing speed, edit history &mdash;{" "}
              <CitationLink href="https://www.wired.com/story/ai-hiring-biometric-data/">
                all of it recorded
              </CitationLink>
              . The cost isn't just IP (which Accounting can quantify) &mdash; it is the waste
              of productivity and hope that occurs when a human is being mined for a position
              that never existed.
            </p>

            <p>
              The cardinal sin, for designers, is that this discipline is the only one I'm
              aware of where the disclosure of Material Non-Public Information and processes is
              a firm prerequisite to{" "}
              <CitationLink href="https://www.law.cornell.edu/wex/trade_secret">
                even apply for a job
              </CitationLink>
              : "Portfolio Required; if there is a password, provide it directly." Designers
              must show "process, product, outcome, impact." Early concepts, cross-functional
              alignment exercises, medium-to-high-fidelity output, revision rationale, market
              impact. It's all text and images with og-desc declarations, imminently{" "}
              <CitationLink href="https://techcrunch.com/2024/09/18/linkedin-scraped-user-data-for-training-before-updating-its-terms-of-service/">
                crawlable, harvestable, valuable
              </CitationLink>
              . Google DeepMind{" "}
              <CitationLink href="https://cloud.google.com/blog/topics/threat-intelligence/distillation-experimentation-integration-ai-adversarial-use">
                confirmed as much
              </CitationLink>{" "}
              in late 2025, arguing that "extraction attacks" are continually increasing.
            </p>

            <p>
              Design portfolios are a security risk for SMBs and enterprises alike &mdash;
              mitigated only by the discretion of what one individual deems public or private,
              then hidden behind a WordPress plugin with known vulnerabilities. If the designer
              wants future employment, they are heavily incentivized to exfiltrate work product
              via personal phone, keep notes in Drive protected by ChildName+Birthday passwords.
              Your attack surface on years of protected corporate IP is underestimated, if not
              unknown.
            </p>

            <p>
              Your design leads likely have no idea this is happening, so they go on-trend and
              require a portfolio: "if password=true, print; else: hide" &mdash; perpetuating
              the largest honeypot of private IP with the strongest individual incentive
              possible (disclose or your family starves) to people applying for
              10&ndash;50 jobs each day. Your prospective employees:
            </p>

            <p className="italic text-foreground/70">
              "
              <CitationLink href="https://www.gov.uk/government/news/new-app-to-counter-malicious-approaches-online">
                What's the harm
              </CitationLink>
              ? I need a job and this Codex/Claude-coded app someone put up in 30 minutes can
              be trusted with institutional property, right? I'll create a password &mdash; that'll{" "}
              <strong>definitely</strong> make everything safe."
            </p>

            <p>
              There are tens of thousands of American designers, engineers, salespeople, and
              others using fly-by-night auto-apply bots daily. Design is the best honeypot, but
              salespeople giving strategies, analysts discussing risk mitigation, biomedical
              researchers documenting pre-market breakthroughs&hellip;
            </p>

            <p>In the words of Maximus Decimus Meridius: "Are you not entertained?"</p>
          </section>

          {/* 02 — Current State of LLMs */}
          <section className="space-y-5 border-t border-border pt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">02 / Current State of LLMs</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-foreground">
              Why CoT case studies became the highest-value seed corpus.
            </h2>

            <p>
              In the current landscape, the requirement for designers to publicly disclose
              Chain-of-Thought (CoT) case studies has created a massive, unaddressed
              vulnerability for the enterprise. Nobody is talking about it because design is
              viewed as an interpolative layer &mdash; neither a center of cost nor profit,
              merely a fuel injector to the business engine that occasionally requires servicing
              at the Jiffy Lube for $39.99.
            </p>

            <p>
              The mechanical evolution of Large Language Models (LLMs) has fundamentally
              shifted the standard design portfolio from a professional requirement into a
              high-fidelity exfiltration vector, primarily through the optimization of CoT
              reasoning. CoT is no longer merely a prompting technique but the primary
              mechanism for knowledge distillation, allowing student models to absorb the
              granular,{" "}
              <CitationLink href="https://www.nature.com/articles/s41586-023-06647-8">
                step-by-step logical progression of human experts
              </CitationLink>
              . For a model to achieve Turing-test capabilities, it requires the deconstruction
              of complex problems into intermediate segments &mdash; which is exactly what a
              high-level design case study provides, detailing{" "}
              <CitationLink href="https://arxiv.org/abs/2201.11903">
                discovery, trade-offs, and strategic roadmaps
              </CitationLink>
              . This "pre-production logic" of an organization is traditionally treated as a
              trade secret but is now mandated for public disclosure in design hiring.
            </p>

            <p>
              When combined with "ghost job" harvesting operations, the result is an
              industrial-scale intelligence operation. MI5 has tracked over{" "}
              <Stat>10,000 "disguised approaches"</Stat> by foreign spies using fake LinkedIn
              profiles to target individuals in{" "}
              <CitationLink href="https://www.techmonitor.ai/technology/cybersecurity/fake-linkedin-profiles-mi5-fbi">
                high-tech and government sectors
              </CitationLink>
              . The US Department of Defense and Air University have published warnings about
              foreign adversaries exploiting LinkedIn to conduct virtual espionage &mdash;
              intentionally circumventing cybersecurity defenses through lucrative job offers.
            </p>

            <p>
              Research in model extraction attacks demonstrates that adversaries don't need to
              breach a firewall when they can simply harvest reasoning chains to replicate a
              company's competitive advantage at a{" "}
              <CitationLink href="https://www.google.com/search?q=https://ieeexplore.ieee.org/document/7745404">
                fraction of the original R&amp;D cost
              </CitationLink>
              .
            </p>

            <p>
              The threat is amplified by the exponential expansion of context windows, which in
              2026 have reached capacities of{" "}
              <Stat>1 million to 10 million tokens</Stat>, allowing simultaneous ingestion of{" "}
              <CitationLink href="https://arxiv.org/abs/2403.05530">
                entire corporate archives or exhaustive portfolio histories
              </CitationLink>
              , dependent upon contextualization and harness engineering which requires a "card
              catalog" that indexes information like a search engine at scale and facilitates
              low-cost token normalization with high performance (
              <CitationLink href="https://greater.pink">see my proof-of-concept</CitationLink>
              ). This aperture enables zero-shot reasoning across 1,000+ pages of documentation
              to identify patterns and vulnerabilities previously obscured by volume.
            </p>

            <p>
              As models become more sophisticated, they become increasingly sensitive to the
              quality of the reasoning chains they ingest &mdash; making the intellectual
              property of senior designers, analysts, and researchers the highest-value "seed
              corpus" available. The current mandate for designers to "show the work" creates a
              perverse incentive for exfiltrating material non-public information onto personal
              devices and vulnerable third-party platforms: a shadow honeypot that most
              enterprise security leads have yet to recognize.
            </p>

            <p>
              To treat the open web as anything other than a hostile environment &mdash; a
              "dark forest" (talk to me about Cixin Liu's books) &mdash; for sensitive IP is a
              strategic failure. A designer should be an asset to a company's security posture,
              not an unmapped leak in the institutional pipeline.
            </p>
          </section>

          {/* 03 — How & why this portfolio */}
          <section className="space-y-5 border-t border-border pt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">03 / How &amp; Why This Portfolio Is Constructed</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-foreground">
              External links are not a UX failure. They are the architecture.
            </h2>

            <p>
              Web crawlers and data extraction bots are heavily constrained by compute and time
              budgets. They are optimized for localized data density: harvest the target DOM
              tree aggressively, then drop external links to preserve resources. By forcing a
              jump to an external domain &mdash; specifically one outside the primary indexed
              URL in the allowed crawl list &mdash; you actively break the automated crawling
              pipeline.
            </p>

            <p>
              This is why my portfolio site has external links to case study material rather
              than inline process documentation. It is annoying for hiring managers. That's
              deliberate: the friction is calibrated to exceed a bot's budget while remaining
              trivial for a human. If you've read this far, you are not a bot. The case study
              material exists; it is simply hosted where automated harvesting can't profitably
              follow.
            </p>

            <p>
              The same principle governs which tools I use for protected work product.
            </p>

            <div className="border border-border rounded-lg p-6 space-y-4 bg-muted/30">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Q&amp;A</p>
              <p className="font-semibold text-foreground">
                Q: Why is your process deck in Sketch rather than Figma? Are you some type of design dinosaur?
              </p>
              <p>
                <strong>A:</strong> The underlying architecture of a design or documentation
                platform fundamentally dictates its attack surface vulnerability to automated IP
                exfiltration. Browser-native applications like Figma are built entirely on web
                technologies, rendering their user interfaces dynamically within a Document Object
                Model (DOM) tree. Recent research into automated data extraction explicitly notes
                that the primary mechanism for modern web scraping &mdash; whether through
                traditional scripts or advanced LLM-powered agents &mdash; relies on parsing and
                accessing this DOM structure.
              </p>
              <p>
                Since Figma is built to be an open, highly collaborative web system, its DOM is
                highly structured and natively accessible, making it frictionless for LLM
                harvesters to scrape comments, structural logic, and text components. Most
                organizations' intractable insistence on design systems and "following recognized
                best practices for consistent results" means most design teams are following the
                same component structure via "add Auto Layout" and preparing their data for
                developer ingestion. Convenient for handoff. Equally convenient for harvest.
              </p>
              <p>
                In contrast, systems with non-standard web architectures or those originating as
                localized applications (like Sketch) do not broadcast a universally accessible,
                standardized HTML DOM tree in the same manner as a browser-first platform. By
                migrating protected intellectual property away from a web-native, DOM-heavy
                ecosystem, you introduce <em>security through friction</em>. The system resists
                standard parsing algorithms, making mass-scale automated extraction technically
                unviable for standard scraping agents. For potentially sensitive material like
                CoT rationale and work product screenshots, a portfolio hosted as nested Sketch
                pages in a publicly-accessible document is too computationally expensive for
                cost-optimized webscrapers to consider worthwhile.
              </p>
              <p className="text-foreground/70 italic">
                Short answer: Figma is beautiful and I use it daily. I just don't publish client
                IP inside it.
              </p>
            </div>
          </section>

          {/* 04 — Why is this the headline */}
          <section className="space-y-5 border-t border-border pt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">04 / Why is this the headline section in your design portfolio?</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-foreground">
              Trust over decades. Users over vanity.
            </h2>

            <p>
              Simple: because I care more about the success of users and the safety of my
              clients than the vanity of the experiences I've designed across my career.
              UX/CX isn't about the most beautiful screens and most intuitive apps &mdash; it is
              about trust that is earned across years and decades. It is about users, or more
              appropriately: humans. It is about the trust we've worked so hard to earn, and
              the trust we must work harder to maintain.
            </p>

            <p>
              If you have an ego and want to win design awards, you should never design for
              life-or-death applications in banking or healthcare, or defense, or any other
              industry that impacts people's lives. Adoption is never worth more than trust and
              user safety in those industries, period.
            </p>

            <p>
              Design isn't about flash &mdash; it is about ensuring the Human-in-the-Loop
              achieves the jobs-to-be-done via clear workflows. Anything else is syntactic
              sugar, not meat.
            </p>

          </section>

          {/* Footer CTAs — single CTA block */}
          <div className="border-t border-border pt-14 space-y-8">
            <blockquote
              className="border-l-2 pl-5 py-1 text-[20px] md:text-[22px] text-foreground/75 italic leading-[1.6]"
              style={{ borderColor: "#FE299E" }}
            >
              If you want to work with a designer and product systems architect who thinks
              outside the screen and beyond the pixel, let's connect.
            </blockquote>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setContactOpen(true)} data-testid="cta-essay-contact">
                Let's Talk
              </Button>
              <Button variant="secondary" asChild data-testid="cta-essay-deck">
                <a
                  href="https://www.sketch.com/s/d826d733-5642-411a-8da3-72486d6164f0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Process Deck
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </a>
              </Button>
              <Button variant="secondary" asChild data-testid="cta-essay-back">
                <a href="/">← Back to Hire</a>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <ContactFormModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}
