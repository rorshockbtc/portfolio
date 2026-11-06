import { Link } from "wouter";
import { ArrowUpRight, Mail } from "lucide-react";
import { openContactModal } from "@/lib/contact-events";

export default function FooterSection() {
  return (
    <footer
      className="bg-[#140E0C] text-[#F2EAE0] border-t border-[#3D2C24]"
      role="contentinfo"
      data-testid="section-footer"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-24">
        {/* Top Monumental Display Callout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 mb-16 border-b border-[#F2EAE0]/12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#D3C7B5]/70 mb-4">
              :-] Colon Hyphen Bracket · Principal Portfolio &amp; R&amp;D Studio
            </div>
            <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-[#F2EAE0] tracking-[-0.025em] leading-[1.03]">
              Let&apos;s architect something{" "}
              <span className="italic font-normal text-[#FE299E]">durable.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => openContactModal("Full-time role (Product Architect / Staff)")}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#FE299E] hover:bg-[#D1007E] text-white font-mono text-[11px] uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer border-none"
              data-testid="button-footer-contact"
            >
              <Mail className="w-3.5 h-3.5" />
              Initiate a Conversation
            </button>
            <a
              href="/resumes/kyle-cyree-resume.pdf"
              download="Resume - Kyle Cyree.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#F2EAE0]/20 hover:border-[#F2EAE0] text-[#F2EAE0] font-mono text-[11px] uppercase tracking-[0.16em] no-underline transition-colors"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>

        {/* 4-Column Hairline Footer Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#F2EAE0]/12">
          {/* Col 1: Identity */}
          <div className="lg:col-span-4 lg:pr-8">
            <div className="font-serif text-2xl text-[#F2EAE0] tracking-tight mb-3">
              Kyle Cyree{" "}
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#FE299E] ml-1">
                :-]
              </span>
            </div>
            <p className="font-sans text-sm text-[#D3C7B5]/80 leading-[1.68] mb-5 max-w-sm">
              Product Architect, Principal Product Designer &amp; R&amp;D Lead. 15+ years across regulated banking (Custodia Bank), healthcare (UnitedHealth Group 35M+), retail logistics (Walmart 3M+), and sovereign AI protocols.
            </p>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#D3C7B5]/65">
              UNC Kenan-Flagler MBA · Emerson MFA · Texas Tech BA
            </div>
          </div>

          {/* Col 2: Portfolio Navigation */}
          <div className="lg:col-span-3 lg:border-l lg:border-[#F2EAE0]/12 lg:pl-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D3C7B5]/65 mb-4">
              01 // Portfolio Index
            </div>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <a
                  href="/#selected-work"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors"
                >
                  Four Defining Pillars
                </a>
              </li>
              <li>
                <a
                  href="/#case-studies"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors"
                >
                  Case Study Index (13)
                </a>
              </li>
              <li>
                <a
                  href="/#experience"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors"
                >
                  Career Timeline &amp; Education
                </a>
              </li>
              <li>
                <a
                  href="/#code"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors"
                >
                  Production Stack &amp; GitHub
                </a>
              </li>
              <li>
                <Link
                  href="/studio"
                  className="text-[#F2EAE0] hover:text-[#FE299E] font-medium no-underline transition-colors inline-flex items-center gap-1.5"
                  data-testid="footer-link-studio"
                >
                  CHB R&amp;D Studio (/studio)
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FE299E]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Live Ecosystem */}
          <div className="lg:col-span-3 lg:border-l lg:border-[#F2EAE0]/12 lg:pl-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D3C7B5]/65 mb-4">
              02 // Shipped Ecosystem
            </div>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <a
                  href="https://pipes.pink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors inline-flex items-center gap-1.5"
                  data-testid="footer-link-pipes"
                >
                  Pipes.Pink Protocol
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.chicuinaco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors inline-flex items-center gap-1.5"
                  data-testid="footer-link-chicuinaco"
                >
                  Hacienda Chicuinaco
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://marigold.colonhyphenbracket.pink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors inline-flex items-center gap-1.5"
                  data-testid="footer-link-marigold"
                >
                  Marigold Analytics
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://cassandra.colonhyphenbracket.pink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors inline-flex items-center gap-1.5"
                  data-testid="footer-link-cassandra"
                >
                  Cassandra Career AI
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://superstar.colonhyphenbracket.pink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors inline-flex items-center gap-1.5"
                  data-testid="footer-link-superstar"
                >
                  Superstar Dual-Portal
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://clubhouse1099.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors inline-flex items-center gap-1.5"
                  data-testid="footer-link-clubhouse1099"
                >
                  Clubhouse 1099
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Verification */}
          <div className="lg:col-span-2 lg:border-l lg:border-[#F2EAE0]/12 lg:pl-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D3C7B5]/65 mb-4">
              03 // Direct Links
            </div>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <a
                  href="https://github.com/rorshockbtc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors inline-flex items-center gap-1.5"
                  data-testid="footer-link-github"
                >
                  GitHub (@rorshockbtc)
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kyle-cyree/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors inline-flex items-center gap-1.5"
                  data-testid="footer-link-linkedin"
                >
                  LinkedIn Profile
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="/resumes/kyle-cyree-resume.pdf"
                  download="Resume - Kyle Cyree.pdf"
                  target="_blank"
                  rel="noopener"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors"
                  data-testid="footer-link-resume"
                >
                  Download Resume (PDF)
                </a>
              </li>
              <li>
                <a
                  href="mailto:rorshock@protonmail.com"
                  className="text-[#F2EAE0]/85 hover:text-[#FE299E] no-underline transition-colors"
                  data-testid="footer-link-email"
                >
                  rorshock@protonmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#D3C7B5]/60">
          <div>
            © {new Date().getFullYear()} Colon Hyphen Bracket, LLC · Kyle Cyree. All rights reserved.
          </div>
          <div>
            Set in Cormorant Garamond, Inter &amp; JetBrains Mono · Albers Sandstone (#EAE0D0)
          </div>
        </div>
      </div>
    </footer>
  );
}
