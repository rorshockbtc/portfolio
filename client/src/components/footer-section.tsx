export default function FooterSection() {
  const link =
    "inline-flex items-center min-h-[44px] text-[#F2EAE0]/75 hover:text-[#FE299E] no-underline transition-colors";
  return (
    <footer className="bg-[#140E0C] text-[#F2EAE0]" role="contentinfo" data-testid="section-footer">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-0 py-12 pb-24 sm:pb-12 flex flex-col gap-6 text-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-baseline gap-2.5">
            <span className="font-bold text-[#FE299E] tracking-[0.06em]">: - ]</span>
            <span className="font-serif text-xl">Kyle Cyree</span>
            <span className="text-[#F2EAE0]/50 ml-2">© {new Date().getFullYear()}</span>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-1" aria-label="Footer">
            <a href="https://www.linkedin.com/in/kyle-cyree/" target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
            <a href="https://github.com/rorshockbtc" target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
            <a href="/resumes/kyle-cyree-resume.pdf" download="Resume - Kyle Cyree.pdf" className={link}>Résumé</a>
            <a href="https://colonhyphenbracket.pink" target="_blank" rel="noopener noreferrer" className={link}>Colon Hyphen Bracket ↗</a>
          </nav>
        </div>
        <div className="pt-5 border-t border-[#F2EAE0]/10 flex flex-wrap items-center justify-between gap-3 text-[13px] text-[#F2EAE0]/60">
          <span>
            Built on{" "}
            <a
              href="https://design.pipes.pink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2EAE0]/80 hover:text-[#FE299E] underline underline-offset-4 transition-colors"
            >
              Accént 3.0
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/rorshockbtc/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2EAE0]/80 hover:text-[#FE299E] underline underline-offset-4 transition-colors"
            >
              Source on GitHub (MIT) ↗
            </a>
          </span>
          <a
            href="https://colonhyphenbracket.pink/studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F2EAE0]/75 hover:text-[#FE299E] no-underline transition-colors"
          >
            Sprints &amp; advisory via Colon Hyphen Bracket Studio ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
