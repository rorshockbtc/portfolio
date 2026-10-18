import { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { openContactModal } from "@/lib/contact-events";

const productLinks = [
  { name: "pipes.pink (Hash & SEMI)", href: "https://pipes.pink", external: true },
  { name: "bolt.pipes.pink (Marigold)", href: "https://bolt.pipes.pink", external: true },
  { name: "greater.pink (WebGPU)", href: "https://greater.pink", external: true },
  { name: "colonhyphenbracket.pink", href: "https://colonhyphenbracket.pink", external: true },
  { name: "Essay: Design is Risk", href: "/essays/design-is-risk", external: false },
  { name: "Essay: Albers & Vignelli", href: "/case-studies/colors-type-grids", external: false },
];

const furtherReading = [
  {
    pub: "Columbia Law Review",
    title: "Ghost Jobs",
    href: "https://www.columbialawreview.org/content/ghost-jobs/",
  },
  {
    pub: "WSJ",
    title: "Ghost Jobs",
    href: "https://www.wsj.com/lifestyle/careers/ghost-jobs-2c0dcd4e",
  },
  {
    pub: "Wired",
    title: "AI Hiring & Biometric Data",
    href: "https://www.wired.com/story/ai-hiring-biometric-data/",
  },
  {
    pub: "HBR",
    title: "Beware the Free-Work Job Interview Scam",
    href: "https://hbr.org/2023/04/beware-the-free-work-job-interview-scam",
  },
  {
    pub: "Google Cloud",
    title: "Distillation, Experimentation, Integration: AI's Adversarial Use",
    href: "https://cloud.google.com/blog/topics/threat-intelligence/distillation-experimentation-integration-ai-adversarial-use",
  },
  {
    pub: "Tech Monitor",
    title: "Fake LinkedIn Profiles, MI5 & FBI",
    href: "https://www.techmonitor.ai/technology/cybersecurity/fake-linkedin-profiles-mi5-fbi",
  },
  {
    pub: "Nature",
    title: "Step-by-Step Reasoning in Human Experts",
    href: "https://www.nature.com/articles/s41586-023-06647-8",
  },
  {
    pub: "arXiv",
    title: "Gemini 1.5: Long-Context Reasoning",
    href: "https://arxiv.org/abs/2403.05530",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kyle-cyree/",
    icon: SiLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/rorshockbtc",
    icon: SiGithub,
  },
];

export default function FooterSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rorshock@protonmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      className="border-t border-[#D3C7B5] bg-[#F2EAE0] relative z-50"
      role="contentinfo"
      aria-label="Site footer"
      data-testid="section-footer"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-20 pb-28 md:pb-20">
        {/* Pre-Footer Sovereign Ecosystem & Studio Conversion Strip */}
        <div className="mb-14 pb-10 border-b border-[#D3C7B5] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#FE299E] font-bold block">
              COLON HYPHEN BRACKET · SOVEREIGN ECOSYSTEM &amp; R&amp;D STUDIO
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#281B16] tracking-tight">
              Claim your Pipe, write in Hash + Semi, or scope a 1-week sprint.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://pipes.pink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-sans text-xs font-bold uppercase tracking-[0.14em] transition-colors no-underline shadow-xs"
            >
              | | | Claim Your Pipe ($9/yr)
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://pipes.pink/write"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-xs font-bold uppercase tracking-[0.14em] transition-colors no-underline"
            >
              Open # Hash + ;-] Semi Free
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FE299E]" />
            </a>
            <Button
              size="sm"
              onClick={() => openContactModal("1-week sprint ($7,500)")}
              className="cursor-pointer rounded-full bg-[#EAE0D0] hover:bg-[#281B16] text-[#281B16] hover:text-[#F2EAE0] border border-[#D3C7B5] font-sans text-xs font-bold uppercase tracking-[0.14em] px-5 py-2.5 h-auto"
            >
              Book $7,500 Sprint
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 space-y-4">
            <span
              className="font-sans font-bold text-4xl select-none block tracking-tighter"
              style={{ color: "#FE299E" }}
              aria-hidden="true"
            >
              :-]
            </span>
            <p className="text-base text-[#4A3A32] leading-relaxed max-w-xs font-sans">
              Architecture &amp; product design for products and companies that
              have something to say.
            </p>
            <p className="font-sans text-xs text-[#3D2C24] font-semibold tracking-wide uppercase">
              Colon Hyphen Bracket, LLC
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#281B16] font-bold">
              Ecosystem
            </h3>
            <ul className="space-y-2.5" role="list">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group inline-flex items-center gap-1.5 text-sm text-[#4A3A32] font-medium hover:text-[#281B16] transition-colors duration-300"
                    data-testid={`link-product-${link.name.split(".")[0].toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 text-[#FE299E] opacity-70 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#281B16] font-bold">
              Further Reading
            </h3>
            <ul className="space-y-2.5" role="list" data-testid="list-further-reading">
              {furtherReading.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-2 text-sm text-[#4A3A32] hover:text-[#281B16] transition-colors duration-300 leading-snug"
                    data-testid={`link-further-${item.pub.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#281B16] font-bold shrink-0">
                      {item.pub}
                    </span>
                    <span className="text-[#4A3A32] group-hover:text-[#281B16]">
                      {item.title}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[#FE299E] opacity-60 group-hover:opacity-100 transition-all duration-300 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#281B16] font-bold">
              Connect
            </h3>
            <ul className="space-y-2.5" role="list">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#4A3A32] font-medium hover:text-[#281B16] transition-colors duration-300"
                    aria-label={link.name}
                    data-testid={`link-social-${link.name.toLowerCase()}`}
                  >
                    <link.icon className="w-4 h-4 text-[#281B16]" />
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="space-y-1.5">
                <a
                  href="mailto:rorshock@protonmail.com"
                  className="inline-flex items-center gap-2 text-sm text-[#4A3A32] font-medium hover:text-[#281B16] transition-colors duration-300 break-all"
                  data-testid="link-footer-email"
                >
                  rorshock@protonmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider border border-[#D3C7B5] bg-[#EAE0D0] text-[#281B16] hover:border-[#FE299E] hover:text-[#FE299E] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-700" /> Copied email
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-[#FE299E]" /> Copy email
                    </>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[#D3C7B5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-sans text-xs text-[#4A3A32] font-medium tracking-wider"
            data-testid="text-copyright"
          >
            &copy; 2026 CHB (Colon Hyphen Bracket, LLC). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="font-sans text-xs text-[#4A3A32] tracking-wider">
              Designed &amp; built with intention
            </p>
            <Button
              size="sm"
              onClick={() => openContactModal("1-week sprint ($7,500)")}
              className="cursor-pointer rounded-full bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-xs font-bold px-4"
              data-testid="cta-footer-contact"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
