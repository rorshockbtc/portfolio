import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowUpRight,
  FileText,
  Mail,
  Presentation,
  Lock,
  Brain,
  TrendingUp,
  Shield,
  ChevronRight,
  Download,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  Loader2,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import heroImage from "/artwork/hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  executiveSummary: string;
  humanProblem: string;
  uxOutcomes: string;
  technicalProblem1: string;
  technicalProblem2: string;
  technicalOutcomes: string[];
  invitation: string;
  invitationLink?: string;
  invitationLinkText?: string;
  image: string;
  icon: typeof Brain;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "chb",
    title: "The Persistent Memory AI Ecosystem",
    subtitle: "The CHB Ecosystem (Hash, Semi, Pipes)",
    executiveSummary:
      "A suite of interconnected web apps that share a universal cryptographic identity and persistent memory. It is an AI ecosystem that actually remembers who you are across platforms.",
    humanProblem:
      "AI amnesia. Having to repeat your context, your projects, and your preferences to an AI every single session is a form of digital torture. High-bandwidth thinkers need an AI sparring partner that remembers their context, not a goldfish.",
    uxOutcomes:
      "Zero-friction context. A conversational UI that adapts its tone, rhetorical style, and challenge-level based on the user\u2019s psychological profile (Big Five, MBTI, Enneagram) derived automatically from their journaling habits.",
    technicalProblem1:
      "The \u201cAI Tax\u201d\u2014users burning expensive API tokens just trying to establish context through massive prompt engineering.",
    technicalProblem2:
      "Securely managing user identity across a decentralized suite of tools without relying on Big Tech OAuth providers.",
    technicalOutcomes: [
      "Architected the \u201cReference Library Pattern\u201d (Curated Template + Keyword Matching + User Words = Personalized Output). This system delivers PhD-tier, 25-page psychological insights at exactly $0.00 in AI API costs by running local keyword detection against curated JSON libraries.",
      "Built cross-product APIs secured by a custom Auth Hub using both traditional email/bcrypt and NOSTR (NIP-07) cryptographic authentication, generating a chbUniversalId for seamless cross-app memory sharing.",
    ],
    invitation: "Experience an AI that doesn\u2019t forget.",
    invitationLink: "https://colonhyphenbracket.pink",
    invitationLinkText: "Visit colonhyphenbracket.pink",
    image: "/artwork/chb-ecosystem.png",
    icon: Brain,
    tags: ["AI/ML", "Cryptographic Auth", "NOSTR", "Persistent Memory"],
  },
  {
    id: "slash",
    title: "High-Velocity Binary Arbitrage Engine",
    subtitle: "Slash V6",
    executiveSummary:
      "A production-grade, market-neutral high-frequency trading bot designed for 15-minute cryptocurrency prediction windows.",
    humanProblem:
      "Prediction markets are chaotic, 24/7, and structurally inefficient. Humans need to sleep; mathematical arbitrage opportunities do not.",
    uxOutcomes:
      "A centralized, React-based dashboard that translates sub-100ms websocket chaos into human-readable scorecards, forensic event logs, and strategic levers. It turns anxiety-inducing market volatility into a manageable game of dials and switches.",
    technicalProblem1:
      "Geographic latency and exchange access restrictions requiring sub-second execution.",
    technicalProblem2:
      "Catastrophic capital loss scenarios during violent market breakouts, and \u201ctrading deadlocks\u201d where competing safety systems freeze the bot\u2019s logic.",
    technicalOutcomes: [
      "Scaled to 37,000+ lines of TypeScript utilizing a distributed \u201cBrain + Hands\u201d architecture. The Cloud UI handles monitoring and simulation, while a low-latency Amsterdam VPS executes trades, communicating via a custom WebSocket bridge.",
      "\u201cThe Crucible,\u201d a custom Monte Carlo simulator to backtest 50+ tunable parameters against 126 recorded historical markets.",
      "Engineered 6 independent, concurrent risk management systems including Pace Brakes (to prevent runaway accumulation), Margin Oracles (for capital efficiency), and Liquidity Throttles.",
    ],
    invitation: "I build systems that don\u2019t sleep so that I can.",
    image: "/artwork/slash-v6.png",
    icon: TrendingUp,
    tags: ["TypeScript", "WebSocket", "Monte Carlo", "HFT"],
  },
  {
    id: "workshop",
    title: "The Sovereign Blueprint (Anti-Chaos Engine)",
    subtitle: "Workshop.pink",
    executiveSummary:
      "A strategic governance system that generates \u201cProject Constitutions\u201d to tame chaotic, overly-opinionated AI builder agents.",
    humanProblem:
      "The \u201cTemplate Tyranny\u201d of modern AI. You ask a coding agent to build a simple landing page, and it confidently builds a full-stack monorepo you didn\u2019t ask for. Founders are reduced from visionaries to exasperated micromanagers.",
    uxOutcomes:
      "Restoring sanity and creative flow to founders. Workshop provides a \u201cLiving Primer\u201d\u2014a massive, human-readable and machine-parseable Markdown document that acts as the un-ignorable law for the AI, keeping it aligned with the human\u2019s actual vision.",
    technicalProblem1:
      "AI agents suffer from context window amnesia and fall into \u201ccircular logic hell\u201d during complex software builds.",
    technicalProblem2:
      "Discrepancies between development and production environments caused by rogue AI dependency choices.",
    technicalOutcomes: [
      "Developed a strict Constitutional Governance middleware pattern that enforces hard dependency limits (e.g., max 50 production dependencies), API timeout fallbacks (max 10s), and environment parity.",
      "Engineered the \u201cAgentic Handshake,\u201d an API connection allowing the builder agent to continuously re-sync with the project\u2019s master constitution, bypassing context window limitations.",
    ],
    invitation: "Stop arguing with your tools. Give them a constitution.",
    image: "/artwork/workshop.png",
    icon: Shield,
    tags: ["Governance", "Middleware", "Agent Systems", "Markdown"],
  },
];

const enterpriseCards = [
  {
    id: "bank",
    title: "Architecting a Full-Reserve Digital Asset Bank",
    label: "Zero-to-One Launch",
    image: "/artwork/enterprise-vault.png",
  },
  {
    id: "health",
    title: "Scaling Flagship Patient Ecosystems for a Fortune 50 Healthcare Provider",
    label: "35M+ Users",
    image: "/artwork/enterprise-health.png",
  },
  {
    id: "fraud",
    title: "Engineering Fraud Detection & Operations for a Major Food Delivery Network",
    label: "10x Exit",
    image: "/artwork/enterprise-fraud.png",
  },
  {
    id: "invest",
    title: "Directing a Tier-1 Global Investment Firm through Cloud-Native App and Agile Design Processes",
    label: "Enterprise",
    image: "/artwork/enterprise-invest.png",
  },
];

function BrandIcon({ className }: { className?: string }) {
  return (
    <span
      className={`font-mono font-bold select-none ${className || ""}`}
      style={{ color: "#FE299E" }}
      data-testid="brand-icon"
    >
      :-]
    </span>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center pt-14 md:pt-16"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-center"
          data-testid="img-hero-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-6xl mx-auto w-full">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-8 max-w-2xl bg-background/75 backdrop-blur-md rounded-xl p-6 md:p-10"
      >
        <motion.div variants={fadeUp} custom={0}>
          <BrandIcon className="text-5xl md:text-7xl" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl"
          data-testid="text-headline"
        >
          Principal Product Designer
          <span className="text-muted-foreground"> &amp;</span> Systems Architect
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-lg md:text-xl font-medium text-foreground/80 max-w-2xl leading-relaxed"
          data-testid="text-subheadline"
        >
          I build enterprise-scale design systems, zero-to-one fintech platforms,
          and collaborative agentic AI models. My background spans 20+ years in art, business, and technology while my career has been focused on healthcare and FinTech applications.
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={3}
          className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          data-testid="text-intro"
        >
          I don&apos;t just push pixels. I align complex business strategy with
          high-fidelity technical execution. I believe technology should feel
          human, which is why my systems prioritize persistent memory, privacy,
          and actual utility over AI hype. I&apos;m a &ldquo;high-bandwidth&rdquo;
          thinker who bridges the gap between executive vision and engineering
          reality.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={4}
          className="flex flex-wrap gap-3 pt-4"
        >
          <Button asChild data-testid="cta-resume">
            <a href="/images/cyree_resume_2026.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="w-4 h-4 mr-2" />
              View Resume
            </a>
          </Button>
          <Button variant="secondary" asChild data-testid="cta-contact">
            <a href="mailto:rorshock@protonmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </a>
          </Button>
          <Button variant="secondary" asChild data-testid="cta-deck">
            <a
              href="https://www.sketch.com/s/d826d733-5642-411a-8da3-72486d6164f0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Presentation className="w-4 h-4 mr-2" />
              View Process Deck
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
    </section>
  );
}

function CaseStudyModal({
  study,
  open,
  onClose,
}: {
  study: CaseStudy;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-3xl max-h-[85vh] overflow-y-auto p-0"
        data-testid={`modal-${study.id}`}
      >
        <div className="relative w-full h-48 md:h-64 bg-muted rounded-t-lg">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover rounded-t-lg"
            data-testid={`img-modal-${study.id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent rounded-t-lg" />
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-2" role="list" aria-label="Technology tags">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="font-mono text-xs px-2 py-0.5 backdrop-blur-sm rounded-md border"
                  style={{ color: "#01a9f4", borderColor: "#01a9f4" }}
                  data-testid={`tag-modal-${study.id}-${tag}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 md:px-8 pb-8 pt-2 space-y-8">
          <DialogHeader className="space-y-2">
            <p
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
              data-testid={`text-modal-subtitle-${study.id}`}
            >
              {study.subtitle}
            </p>
            <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tight">
              {study.title}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              {study.executiveSummary}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 text-[15px] leading-[1.7]">
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-2">
                The Human Problem
              </h3>
              <p className="text-foreground/85" data-testid={`text-human-problem-${study.id}`}>
                {study.humanProblem}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-2">
                UX Outcomes
              </h3>
              <p className="text-foreground/85" data-testid={`text-ux-outcomes-${study.id}`}>
                {study.uxOutcomes}
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-3">
                Technical Challenges
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-mono text-xs text-muted-foreground mt-1 shrink-0">01</span>
                  <p className="text-foreground/85">{study.technicalProblem1}</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-mono text-xs text-muted-foreground mt-1 shrink-0">02</span>
                  <p className="text-foreground/85">{study.technicalProblem2}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-3">
                Technical Outcomes
              </h3>
              <div className="space-y-4">
                {study.technicalOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex gap-3">
                    <ChevronRight className="w-4 h-4 mt-1 shrink-0" style={{ color: "#FE299E" }} />
                    <p className="text-foreground/85" data-testid={`text-outcome-${study.id}-${idx}`}>
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p
                className="text-lg font-medium italic text-foreground/70"
                data-testid={`text-invitation-${study.id}`}
              >
                {study.invitation}
              </p>
              {study.invitationLink && (
                <a
                  href={study.invitationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-sm mt-2 transition-colors"
                  style={{ color: "#FE299E" }}
                  data-testid={`link-invitation-${study.id}`}
                >
                  {study.invitationLinkText}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
              {!study.invitationLink && (
                <p
                  className="font-mono text-xs text-muted-foreground mt-2"
                  data-testid={`text-private-${study.id}`}
                >
                  Private Repository &mdash; Architecture available upon request
                </p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const whitepaperTags = [
  "Customer Experience",
  "Scalable Agents",
  "Knowledge Base Chatbots",
  "Bitcoin",
  "Developer Tools",
];

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const blobUrlRef = useRef<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    fetch("/api/tts/emerald/status")
      .then((r) => r.json())
      .then((data) => {
        if (data.ready) setReady(true);
      })
      .catch(() => {});

    return () => {
      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    };
  }, []);

  const setAudioSourceFromResponse = async (res: Response) => {
    const audio = audioRef.current;
    if (!audio) return false;

    const blob = await res.blob();
    const cachedUrl = URL.createObjectURL(blob);
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    blobUrlRef.current = cachedUrl;
    audio.src = cachedUrl;
    await audio.load();
    return true;
  };

  const loadAndPlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setLoading(true);
    setAudioError(false);
    try {
      const res = await fetch("/api/tts/emerald");
      if (res.status === 202) {
        setLoading(false);
        setAudioError(true);
        return;
      }
      if (!res.ok) throw new Error("Failed to generate audio");
      await setAudioSourceFromResponse(res);
      setReady(true);
      setLoading(false);
      await audio.play();
      setPlaying(true);
    } catch {
      setLoading(false);
      setAudioError(true);
    }
  };

  const handlePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!ready && !loading) {
      await loadAndPlay();
      return;
    }

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      if (!audio.src || audio.src === "") {
        await loadAndPlay();
        return;
      }
      await audio.play();
      setPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100);
      setDuration(audio.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="border border-border/60 rounded-lg p-4 space-y-3" data-testid="audio-player-emerald">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onEnded={() => setPlaying(false)}
        preload="none"
      />

      <div className="flex items-center gap-3">
        <Volume2 className="w-4 h-4 text-muted-foreground shrink-0" />
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Listen &mdash; AI Narration (Nova Voice)
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handlePlayPause}
          disabled={loading}
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors disabled:opacity-50"
          style={{ backgroundColor: "#FE299E", color: "white" }}
          data-testid="btn-play-narration"
          aria-label={playing ? "Pause narration" : "Play narration"}
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : playing ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </button>

        <div className="flex-1 space-y-1">
          <div
            className="h-1.5 bg-muted rounded-full cursor-pointer relative overflow-hidden"
            onClick={handleSeek}
            data-testid="progress-bar-narration"
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-all"
              style={{ width: `${progress}%`, backgroundColor: "#FE299E" }}
            />
          </div>
          <div className="flex justify-between">
            <span className="font-mono text-[10px] text-muted-foreground">
              {ready && audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              {duration > 0 ? formatTime(duration) : loading ? "Generating..." : "—:——"}
            </span>
          </div>
        </div>

        <a
          href={ready ? audioRef.current?.src || "/api/tts/emerald" : "/api/tts/emerald"}
          download="emerald-whitepaper-narration.mp3"
          className="w-8 h-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shrink-0"
          title="Download narration MP3"
          data-testid="btn-download-narration"
          onClick={(e) => {
            if (!ready) {
              e.preventDefault();
            }
          }}
        >
          <Download className="w-4 h-4" />
        </a>
      </div>

      {audioError && (
        <p className="text-xs text-red-500" data-testid="text-audio-error">
          Audio generation failed. Try again later.
        </p>
      )}

      <p className="text-[11px] text-muted-foreground leading-relaxed">
        Free to distribute. Generated with OpenAI Nova voice.
      </p>
    </div>
  );
}

function WhitepaperModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-3xl max-h-[85vh] overflow-y-auto p-0"
        data-testid="modal-whitepaper"
      >
        <div className="relative w-full h-48 md:h-64 bg-muted rounded-t-lg">
          <img
            src="/artwork/emerald.png"
            alt="Project Emerald"
            className="w-full h-full object-cover rounded-t-lg"
            data-testid="img-modal-whitepaper"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent rounded-t-lg" />
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-2" role="list" aria-label="Technology tags">
              {whitepaperTags.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="font-mono text-xs px-2 py-0.5 backdrop-blur-sm rounded-md border"
                  style={{ color: "#01a9f4", borderColor: "#01a9f4" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 md:px-8 pb-8 pt-2 space-y-8">
          <DialogHeader className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Project Emerald
            </p>
            <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tight">
              The Human Layer is the Single Point of Failure
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              Private &amp; Anonymous Support for High-Stakes Brands/Products
            </DialogDescription>
          </DialogHeader>

          <AudioPlayer />

          <div className="flex flex-wrap gap-3">
            <Button asChild size="sm" data-testid="cta-modal-download-whitepaper">
              <a href="/emerald-whitepaper.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Whitepaper
              </a>
            </Button>
            <Button variant="secondary" asChild size="sm" data-testid="cta-modal-view-repo">
              <a
                href="https://github.com/rorshockbtc/emerald-support-bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="w-4 h-4 mr-2" />
                View Repository
              </a>
            </Button>
            <Button variant="secondary" asChild size="sm" data-testid="cta-modal-try-demo">
              <a
                href="https://89caa569-87ea-4743-951d-eab6107b8df9-00-3oaxcznbew6b9.spock.replit.dev/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Try Demo
              </a>
            </Button>
          </div>

          <div className="space-y-6 text-[15px] leading-[1.7]">
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-2">
                The Thesis
              </h3>
              <p className="text-foreground/85">
                Bitcoin has no CEO, no marketing department, and no HR. This is its greatest security feature
                and market differentiator but it creates a massive communication debt. When protocol updates
                happen&mdash;like the recent Bitcoin Core 28.0 release&mdash;the friction doesn&apos;t occur in
                the code; it occurs between humans.
              </p>
              <p className="text-foreground/85 mt-3">
                Emerald was engineered as a high-fidelity, sovereign &ldquo;Protocol Interpreter&rdquo; designed
                to protect human capital by automating the friction of technical support without sacrificing
                user privacy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-2">
                Brief Context
              </h3>
              <p className="text-foreground/85">
                This was not built on commission. It represents synergies of AI-specific R&amp;D performed over
                18 months plus 20+ years of experience designing outcomes for users that reinforce brands rather
                than disrupting customer confidence. The concept is open-sourced under the name &ldquo;Emerald.&rdquo;
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-3">
                Escaping the &ldquo;Zendesk Trap&rdquo;
              </h3>
              <p className="text-foreground/85 mb-4">
                Most companies rely on legacy CX tools that are fundamentally incompatible with a
                &ldquo;Don&apos;t Trust, Verify&rdquo; ethos. They cost time, money, are difficult to implement,
                and chip away at brand trust.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border/60 rounded-lg" data-testid="table-cx-comparison">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="text-left p-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">Metric</th>
                      <th className="text-left p-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">Legacy CX</th>
                      <th className="text-left p-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">Emerald</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/85">
                    <tr className="border-b border-border/40">
                      <td className="p-3 font-medium">Base Seat Cost</td>
                      <td className="p-3">$115&ndash;$169/agent/mo</td>
                      <td className="p-3 font-medium" style={{ color: "#01a9f4" }}>$0 (Self-hosted)</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="p-3 font-medium">AI Add-on Tax</td>
                      <td className="p-3">$50/agent/mo</td>
                      <td className="p-3 font-medium" style={{ color: "#01a9f4" }}>$0 (Local-first)</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="p-3 font-medium">Resolution Fee</td>
                      <td className="p-3">$1.50&ndash;$2.00/resolution</td>
                      <td className="p-3 font-medium" style={{ color: "#01a9f4" }}>&lt;$0.02</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="p-3 font-medium">Privacy Model</td>
                      <td className="p-3">PII-heavy</td>
                      <td className="p-3 font-medium" style={{ color: "#01a9f4" }}>Zero-Knowledge</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Identity</td>
                      <td className="p-3">Centralized DB</td>
                      <td className="p-3 font-medium" style={{ color: "#01a9f4" }}>Sovereign Persistence</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-foreground/85 mt-4">
                For an enterprise team of 50 agents, Zendesk costs exceed $13k/month before solving a
                single ticket. Emerald provides deterministic, high-fidelity support at 1/1000th the
                operational cost.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-3">
                Self-Sovereign Architecture
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 shrink-0" style={{ color: "#FE299E" }} />
                  <div>
                    <p className="font-medium text-foreground/90 mb-1">Persistent Anonymity (Cryptographic Handshakes)</p>
                    <p className="text-foreground/75">
                      Identity decoupled from data using a PubKey-Signature handshake. Users interact
                      anonymously; by signing a session hash with a NOSTR or PGP key, they persist context
                      across devices without email login.
                    </p>
                    <code className="font-mono text-xs text-muted-foreground mt-2 block">
                      Session_ID = SHA-256(User_PubKey + Session_Salt)
                    </code>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 shrink-0" style={{ color: "#FE299E" }} />
                  <div>
                    <p className="font-medium text-foreground/90 mb-1">Deterministic Orchestration via dspy.ts</p>
                    <p className="text-foreground/75">
                      Instead of probabilistic RAG, Emerald uses Programmatic Prompt Optimization. User intent
                      maps to cryptographically verified documentation, delivering versioned technical specs
                      rather than hallucinations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ChevronRight className="w-4 h-4 mt-1 shrink-0" style={{ color: "#FE299E" }} />
                  <div>
                    <p className="font-medium text-foreground/90 mb-1">Local-First &amp; Browser-Cached Memory</p>
                    <p className="text-foreground/75">
                      The browser is treated as a secure vault. PII is scrubbed locally before inference.
                      A one-click &ldquo;Flush&rdquo; erases the user from system history entirely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-2">
                Designing for Safety
              </h3>
              <p className="text-foreground/85">
                In Bitcoin, &ldquo;ease of use&rdquo; can be a vulnerability. Emerald uses strategic friction&mdash;when
                high-risk intent is detected (account freeze, time-locked transactions), the UI breaks the
                chat paradigm and moves into a multi-step safety flow requiring manual acknowledgment of
                irreversible actions.
              </p>
              <blockquote className="border-l-2 pl-4 mt-3 text-foreground/70 italic" style={{ borderColor: "#FE299E" }}>
                Design-as-a-System means knowing when to stop the user from moving fast. Emerald is a
                guardrail, not just a guide.
              </blockquote>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-2">
                The Open Source Pivot
              </h3>
              <p className="text-foreground/85">
                Built for Blockstream as a targeted CX solution. When leadership didn&apos;t move on the
                hire, the IP was open-sourced. 250+ hours of preparation across four interview rounds,
                months of GitHub analysis, and full product line decomposition went into this work.
              </p>
              <p className="text-lg font-medium italic text-foreground/70 mt-4">
                It is far more important that Bitcoin remain &ldquo;hope&rdquo; for its users than me working
                for any specific company.
              </p>
              <div className="flex flex-col gap-2 mt-3">
                <a
                  href="https://github.com/rorshockbtc/emerald-support-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-sm transition-colors"
                  style={{ color: "#FE299E" }}
                  data-testid="link-modal-repo"
                >
                  View Repository <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://89caa569-87ea-4743-951d-eab6107b8df9-00-3oaxcznbew6b9.spock.replit.dev/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-sm transition-colors"
                  style={{ color: "#FE299E" }}
                  data-testid="link-modal-demo"
                >
                  Try Live Demo <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://hire.colonhyphenbracket.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-sm transition-colors"
                  style={{ color: "#FE299E" }}
                  data-testid="link-modal-hire"
                >
                  hire.colonhyphenbracket.com <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function WhitepaperSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-6xl mx-auto"
      data-testid="section-whitepaper"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Research
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight" data-testid="text-whitepaper-heading">
          Open Source Whitepaper
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="group cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border border-border/60 rounded-xl overflow-hidden"
          data-testid="card-whitepaper-emerald"
          onClick={() => setModalOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Read whitepaper: The Human Layer is the Single Point of Failure"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setModalOpen(true);
            }
          }}
        >
          <div className="relative w-full h-56 md:h-full min-h-[280px] bg-muted">
            <img
              src="/artwork/emerald.png"
              alt="Project Emerald — Sovereign CX Architecture"
              className="w-full h-full object-cover"
              data-testid="img-whitepaper-emerald"
            />
            <div className="absolute top-4 right-4 w-8 h-8 rounded-md bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-center space-y-5">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" style={{ color: "#FE299E" }} />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Project Emerald
              </span>
            </div>

            <h3
              className="text-xl md:text-2xl font-bold tracking-tight leading-snug"
              data-testid="text-whitepaper-title"
            >
              The Human Layer is the Single Point of Failure
            </h3>

            <p
              className="text-sm md:text-base text-muted-foreground leading-relaxed"
              data-testid="text-whitepaper-subtitle"
            >
              Project Emerald &mdash; Private &amp; Anonymous Support for High-Stakes Brands
            </p>

            <p
              className="text-sm text-foreground/80 leading-relaxed"
              data-testid="text-whitepaper-summary"
            >
              A sovereign &ldquo;Protocol Interpreter&rdquo; designed to protect human capital by
              automating the friction of technical support without sacrificing user privacy.
              Deterministic, high-fidelity support at 1/1000th the operational cost of any SaaS
              support system.
            </p>

            <div className="flex flex-wrap gap-2 pt-1" role="list" aria-label="Whitepaper tags">
              {whitepaperTags.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="font-mono text-[11px] px-2 py-0.5 rounded-md border"
                  style={{ color: "#01a9f4", borderColor: "#01a9f4" }}
                  data-testid={`tag-whitepaper-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
              <Button asChild size="sm" data-testid="cta-download-whitepaper">
                <a href="/emerald-whitepaper.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Whitepaper
                </a>
              </Button>
              <Button variant="secondary" asChild size="sm" data-testid="cta-view-repo">
                <a
                  href="https://github.com/rorshockbtc/emerald-support-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="w-4 h-4 mr-2" />
                  View Repository
                </a>
              </Button>
              <Button variant="secondary" asChild size="sm" data-testid="cta-try-demo">
                <a
                  href="https://89caa569-87ea-4743-951d-eab6107b8df9-00-3oaxcznbew6b9.spock.replit.dev/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Try Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <WhitepaperModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

function ShowcaseSection() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-6xl mx-auto"
      data-testid="section-showcase"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Public Showcase
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight" data-testid="text-showcase-heading">
          Live Products
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {caseStudies.map((study, idx) => {
          const Icon = study.icon;
          const isLarge = idx === 0;
          return (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={isLarge ? "md:col-span-2" : ""}
            >
              {isLarge ? (
                <div
                  className="group cursor-pointer"
                  onClick={() => setActiveStudy(study)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View case study: ${study.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveStudy(study);
                    }
                  }}
                  data-testid={`card-project-${study.id}`}
                >
                  <div className="relative w-full h-56 md:h-72 rounded-xl bg-muted">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover rounded-xl"
                      data-testid={`img-project-${study.id}`}
                    />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-md bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="pt-5 pb-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" style={{ color: "#FE299E" }} />
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {study.subtitle}
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-bold tracking-tight leading-snug"
                      data-testid={`text-project-title-${study.id}`}
                    >
                      {study.title}
                    </h3>
                    <p
                      className="text-base text-muted-foreground leading-relaxed max-w-3xl"
                      data-testid={`text-project-summary-${study.id}`}
                    >
                      {study.executiveSummary}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1" role="list" aria-label="Tags">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          role="listitem"
                          className="font-mono text-[11px] px-2 py-0.5 rounded-md border"
                          style={{ color: "#01a9f4", borderColor: "#01a9f4" }}
                          data-testid={`tag-${study.id}-${tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Card
                  className="group cursor-pointer hover-elevate active-elevate-2 h-full bg-transparent border-border/60"
                  onClick={() => setActiveStudy(study)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View case study: ${study.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveStudy(study);
                    }
                  }}
                  data-testid={`card-project-${study.id}`}
                >
                  <div className="relative w-full h-40 md:h-48 rounded-t-xl bg-muted">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover rounded-t-xl"
                      data-testid={`img-project-${study.id}`}
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-md bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" style={{ color: "#FE299E" }} />
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {study.subtitle}
                      </span>
                    </div>
                    <h3
                      className="text-lg md:text-xl font-bold tracking-tight leading-snug"
                      data-testid={`text-project-title-${study.id}`}
                    >
                      {study.title}
                    </h3>
                    <p
                      className="text-sm md:text-base text-muted-foreground line-clamp-3 leading-relaxed"
                      data-testid={`text-project-summary-${study.id}`}
                    >
                      {study.executiveSummary}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1" role="list" aria-label="Tags">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          role="listitem"
                          className="font-mono text-[11px] px-2 py-0.5 rounded-md border"
                          style={{ color: "#01a9f4", borderColor: "#01a9f4" }}
                          data-testid={`tag-${study.id}-${tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              )}
            </motion.div>
          );
        })}
      </div>

      {activeStudy && (
        <CaseStudyModal
          study={activeStudy}
          open={!!activeStudy}
          onClose={() => setActiveStudy(null)}
        />
      )}
    </section>
  );
}

function EnterpriseVaultSection() {
  const { toast } = useToast();

  const handleEnterpriseClick = () => {
    toast({
      title: "Secure Access Required",
      description:
        "Due to the sensitive nature of enterprise financial and healthcare architecture, full case studies are available upon request via secure access key.",
    });
  };

  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-6xl mx-auto"
      data-testid="section-vault"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-2 mb-2">
          <Lock className="w-3.5 h-3.5 text-muted-foreground" />
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Enterprise Vault
          </p>
        </div>
        <h2
          className="text-2xl md:text-3xl font-bold tracking-tight"
          data-testid="text-vault-heading"
        >
          Gated Case Studies
        </h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-lg">
          Enterprise-grade work spanning fintech, healthcare, and global investment operations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {enterpriseCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
          >
            <Card
              className="group cursor-pointer hover-elevate active-elevate-2 p-0"
              onClick={handleEnterpriseClick}
              role="button"
              tabIndex={0}
              aria-label={`${card.title} - Secure access required`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleEnterpriseClick();
                }
              }}
              data-testid={`card-enterprise-${card.id}`}
            >
              <div className="relative w-full h-40 md:h-48 rounded-t-xl bg-muted">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-t-xl"
                  data-testid={`img-enterprise-${card.id}`}
                />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-background/70 backdrop-blur-sm flex items-center justify-center">
                  <Lock className="w-3 h-3 text-muted-foreground" />
                </div>
              </div>
              <div className="p-5 space-y-2">
                <span
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  data-testid={`text-enterprise-label-${card.id}`}
                >
                  {card.label}
                </span>
                <h3
                  className="text-sm md:text-base font-semibold leading-snug"
                  data-testid={`text-enterprise-title-${card.id}`}
                >
                  {card.title}
                </h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="font-mono text-xs text-muted-foreground mt-6 text-center"
        data-testid="text-vault-contact"
      >
        Full case studies available upon request &mdash;{" "}
        <a
          href="mailto:rorshock@protonmail.com"
          className="underline underline-offset-2 transition-colors"
          style={{ color: "#FE299E" }}
          data-testid="link-vault-contact"
        >
          rorshock@protonmail.com
        </a>
      </motion.p>
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <WhitepaperSection />
      <ShowcaseSection />
      <EnterpriseVaultSection />
    </div>
  );
}
