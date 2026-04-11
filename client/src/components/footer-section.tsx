import { ArrowUpRight } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const productLinks = [
  { name: "hash.pink", href: "https://hash.pink" },
  { name: "colonhyphenbracket.pink", href: "https://colonhyphenbracket.pink" },
  { name: "pipes.pink", href: "https://pipes.pink" },
  { name: "semi.pink", href: "https://semi.pink" },
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
      className="border-t border-border/40 bg-background"
      role="contentinfo"
      aria-label="Site footer"
      data-testid="section-footer"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5 space-y-4">
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

          <div className="md:col-span-4 space-y-4">
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

          <div className="md:col-span-3 space-y-4">
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
          <p className="font-mono text-[10px] text-muted-foreground/40 tracking-wider">
            Designed &amp; built with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
