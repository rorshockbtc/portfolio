/**
 * Short, scannable framing for every case study.
 * Used by the homepage cards and the case study hero so the copy stays in one place.
 * Long-form narrative still lives in ./case-studies.ts.
 */
export interface CaseStudyMeta {
  name: string;
  headline: string;
  myRole: string;
  domain: string;
}

export const CASE_STUDY_META: Record<string, CaseStudyMeta> = {
  custodia: {
    name: "Custodia Bank",
    headline: "A Federal Reserve–grade bank, designed from zero.",
    myRole: "Lead Product Designer · first design hire",
    domain: "Regulated banking & bitcoin custody",
  },
  unitedhealth: {
    name: "UnitedHealth Group",
    headline: "Transformed fragmented patient mobile experiences and enterprise cybersecurity operations into unified, scalable systems.",
    myRole: "Senior Product Experience Designer (Fusion)",
    domain: "Healthcare at scale & cybersecurity",
  },
  walmart: {
    name: "Walmart",
    headline: "Search and content tools for 3 million associates.",
    myRole: "Fractional / Consulting Lead Architect",
    domain: "Enterprise retail & LMS",
  },
  pipes: {
    name: "Pipes",
    headline: "A knowledge marketplace where people get paid when AI reads their work.",
    myRole: "Founder, architect & lead designer",
    domain: "AI protocol",
  },
  "colors-type-grids": {
    name: "Accént",
    headline: "An open-source design system built for humans and 7B local AI models.",
    myRole: "Creator & principal architect",
    domain: "Design systems · MIT licensed · rules.json",
  },
  "chb-corporate": {
    name: "Colon Hyphen Bracket",
    headline: "From consumer clipart & persona switching to an enterprise-ready principal architecture studio.",
    myRole: "Founder, principal architect & designer",
    domain: "Enterprise brand · 18→4 routes · 7 live products",
  },
  marigold: {
    name: "Marigold",
    headline: "Analyzing two million civic records without the data leaving the browser.",
    myRole: "Architect & lead designer",
    domain: "Zero-knowledge data",
  },
  chicuinaco: {
    name: "Chicuinaco",
    headline: "A four-language site for a mountain estate on a 3G budget.",
    myRole: "Design, brand & engineering",
    domain: "Hospitality · performance",
  },
  cassandra: {
    name: "Cassandra",
    headline: "An AI career agent that shows you one decision at a time.",
    myRole: "Architect, designer & builder",
    domain: "Applied AI",
  },
  superstar: {
    name: "Superstar",
    headline: "A private mobile AI companion with memory that carries over.",
    myRole: "Architect, designer & builder",
    domain: "Applied AI · mobile",
  },
  clubhouse1099: {
    name: "Clubhouse 1099",
    headline: "A voice-first network for venture scouts.",
    myRole: "Product design & architecture",
    domain: "Venture · voice AI",
  },
  highdraw: {
    name: "High Draw Golf",
    headline: "Editorial commerce for a golf apparel brand.",
    myRole: "Brand, design & build",
    domain: "Commerce",
  },
  ultralinq: {
    name: "UltraLinq",
    headline: "Faster sign-off for cloud medical imaging.",
    myRole: "Lead Product Designer & Design Director",
    domain: "Clinical software & DICOM",
  },
  foodler: {
    name: "Foodler → Grubhub",
    headline: "Checkout and live delivery tracking for a marketplace Grubhub acquired.",
    myRole: "Director of Business Operations",
    domain: "Consumer marketplace & fraud defense",
  },
};
