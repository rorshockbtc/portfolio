import { useLocation } from "wouter";

export default function MobileNav() {
  const [location, setLocation] = useLocation();

  const go = (id: string) => {
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const item = "flex-1 py-3 text-[13px] font-medium text-[#3A2A22] bg-transparent border-none cursor-pointer no-underline text-center";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden" role="navigation" aria-label="Page navigation" data-testid="nav-mobile-bottom">
      <div className="bg-[#EAE0D0]/95 backdrop-blur-xl border-t border-[#D3C7B5] flex safe-area-bottom">
        <button onClick={() => go("work")} className={item}>Work</button>
        <button onClick={() => go("about")} className={item}>About</button>
        <a href="/resumes/kyle-cyree-resume.pdf" download="Resume - Kyle Cyree.pdf" className={item}>Résumé</a>
      </div>
    </div>
  );
}
