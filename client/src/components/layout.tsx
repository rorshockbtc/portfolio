import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";
import Navigation from "./navigation";
import FooterSection from "./footer-section";
import MobileNav from "./mobile-nav";
import { StudioSectionsProvider } from "@/hooks/use-studio-sections";

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <StudioSectionsProvider>
      <div className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm"
          data-testid="skip-to-content"
        >
          Skip to main content
        </a>

        <Navigation />

        <main id="main-content" className="flex-1 pb-16 md:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={location}
              {...pageTransition}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        <FooterSection />
        <MobileNav />
      </div>
    </StudioSectionsProvider>
  );
}
