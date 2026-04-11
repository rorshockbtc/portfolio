import { createContext, useContext, useState, useCallback } from "react";

interface StudioSection {
  id: string;
  number: string;
  shortLabel: string;
}

interface StudioSectionsContextValue {
  sections: StudioSection[];
  activeSection: string;
  setSections: (sections: StudioSection[]) => void;
  setActiveSection: (id: string) => void;
  scrollToSection: (id: string) => void;
}

const StudioSectionsContext = createContext<StudioSectionsContextValue>({
  sections: [],
  activeSection: "",
  setSections: () => {},
  setActiveSection: () => {},
  scrollToSection: () => {},
});

export function StudioSectionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sections, setSections] = useState<StudioSection[]>([]);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <StudioSectionsContext.Provider
      value={{
        sections,
        activeSection,
        setSections,
        setActiveSection,
        scrollToSection,
      }}
    >
      {children}
    </StudioSectionsContext.Provider>
  );
}

export function useStudioSections() {
  return useContext(StudioSectionsContext);
}
