import { ArrowUpRight } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";

const productLinks = [
  { name: "hash.pink", href: "https://hash.pink" },
  { name: "colonhyphenbracket.pink", href: "https://colonhyphenbracket.pink" },
  { name: "pipes.pink", href: "https://pipes.pink" },
  { name: "semi.pink", href: "https://semi.pink" },
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
  return (
    <footer
      className="border-t border-border/40 bg-background relative z-50"
      role="contentinfo"
      aria-label="Site footer"
      data-testid="section-footer"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20 pb-28 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 space-y-4">
            <span
              className="font-mono font-bold text-4xl select-none block"
              style={{ color: "#FE299E" }}
              aria-hidden="true"
            >
              :-]
            </span>
            <p className="text-sm text-foreground/80 leading-relaxed max-w-xs">
              Architecture &amp; product design for products and companies that
              have something to say.
            </p>
            <p className="font-mono text-[11px] text-muted-foreground tracking-wide">
              Colon Hyphen Bracket, LLC
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Ecosystem
            </h3>
            <ul className="space-y-2.5" role="list">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                    data-testid={`link-product-${link.name.split(".")[0]}`}
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-[-2px] group-hover:opacity-60 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Further Reading
            </h3>
            <ul className="space-y-2.5" role="list" data-testid="list-further-reading">
              {furtherReading.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 leading-snug"
                    data-testid={`link-further-${item.pub.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80 shrink-0">
                      {item.pub}
                    </span>
                    <span className="text-foreground/70 group-hover:text-foreground">
                      {item.title}
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-[-2px] group-hover:opacity-60 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Connect
            </h3>
            <ul className="space-y-2.5" role="list">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                    aria-label={link.name}
                    data-testid={`link-social-${link.name.toLowerCase()}`}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:rorshock@protonmail.com"
                  className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                  data-testid="link-footer-email"
                >
                  rorshock@protonmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-mono text-[10px] text-muted-foreground/60 tracking-wider"
            data-testid="text-copyright"
          >
            &copy; 2026 CHB (Colon Hyphen Bracket, LLC). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="font-mono text-[10px] text-muted-foreground/40 tracking-wider">
              Designed &amp; built with intention
            </p>
            <Button
              asChild
              size="sm"
              data-testid="cta-footer-contact"
            >
              <a href="mailto:rorshock@protonmail.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
