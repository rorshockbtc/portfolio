import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";
import Navigation from "./navigation";
import FooterSection from "./footer-section";
import MobileNav from "./mobile-nav";
import ContactFormModal from "./contact-form-modal";
import { StudioSectionsProvider } from "@/hooks/use-studio-sections";

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("1-Week Production Sprint ($7,500)");

  useEffect(() => {
    const handler = (e: any) => {
      setContactSubject(e.detail?.subject || "1-Week Production Sprint ($7,500)");
      setIsContactOpen(true);
    };
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, []);

  return (
    <StudioSectionsProvider>
      <div className="min-h-screen flex flex-col bg-[#EAE0D0]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm"
          data-testid="skip-to-content"
        >
          Skip to main content
        </a>

        <Navigation />

        <main id="main-content" className="flex-1 pt-20 pb-16 md:pb-0">
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

        {/* Global Contact / Sprint Booking Modal */}
        <ContactFormModal
          open={isContactOpen}
          onOpenChange={setIsContactOpen}
          defaultSubject={contactSubject}
        />
      </div>
    </StudioSectionsProvider>
  );
}
