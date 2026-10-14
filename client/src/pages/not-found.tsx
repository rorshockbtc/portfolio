import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/chb";
import { openContactModal } from "@/lib/contact-events";

const FEATURED_PILLARS = [
  {
    slug: "custodia",
    label: "01 / Regulated Fintech",
    title: "Custodia Bank",
    desc: "First designer at a chartered Wyoming SPDI bank. 4-day rebrand & 30-day core banking platform.",
  },
  {
    slug: "unitedhealth",
    label: "02 / Healthcare at Scale",
    title: "UnitedHealth Group & Optum",
    desc: "Flagship native iOS & Android patient applications serving 35M+ patients.",
  },
  {
    slug: "walmart",
    label: "03 / Enterprise Search",
    title: "Walmart Global Tech",
    desc: "Graph-powered enterprise search and training platform for 3M associates.",
  },
  {
    slug: "pipes",
    label: "04 / Solo Product Architecture",
    title: "Pipes Protocol",
    desc: "Private, local-first knowledge app across macOS, iOS, and Web.",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-[82vh] w-full bg-[#EAE0D0] text-[#281B16] flex items-center py-16 px-5 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        <div className="space-y-5 border-b border-[#D3C7B5] pb-10">
          <p className="flex items-center gap-3 font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#FE299E]">
            <BrandMark size="md" />
            <span>Error 404 · Route Not Found</span>
          </p>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#281B16] tracking-tight leading-[1.06]">
            That page isn&apos;t in the archive.
          </h1>
          <p className="text-lg sm:text-xl text-[#5C4840] font-sans max-w-2xl leading-relaxed">
            The link you followed may have moved during the latest portfolio consolidation. Jump directly to one of the four flagship case studies below or return to the main index.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="/">
              <Button className="bg-[#281B16] hover:bg-[#3D2C24] text-[#F2EAE0] font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-6 h-12 cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-2 text-[#FE299E]" /> Return to Portfolio Index
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => openContactModal("1-week sprint ($7,500)")}
              className="border-[#281B16]/25 bg-transparent hover:bg-[#281B16] hover:text-[#F2EAE0] text-[#281B16] font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold rounded-full px-6 h-12 cursor-pointer"
            >
              <Calendar className="w-4 h-4 mr-2 text-[#FE299E]" /> Book 1-Week Sprint · $7,500
            </Button>
            <a
              href="/resumes/kyle-cyree-resume.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-4 h-12 font-sans text-xs sm:text-sm font-bold text-[#281B16] underline decoration-[#D3C7B5] underline-offset-4 hover:decoration-[#FE299E]"
            >
              <Download className="w-4 h-4 text-[#FE299E]" /> Resume (PDF)
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#6B554D]">
            Flagship Case Studies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURED_PILLARS.map((item) => (
              <Link key={item.slug} href={`/case-studies/${item.slug}`}>
                <div className="group p-6 rounded-2xl bg-[#F2EAE0] border border-[#D3C7B5] hover:border-[#FE299E] transition-all cursor-pointer h-full flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <span className="font-sans text-[11px] uppercase tracking-[0.18em] font-bold text-[#FE299E] block">
                      {item.label}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#281B16] group-hover:text-[#FE299E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#6B554D] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#281B16] group-hover:text-[#FE299E]">
                    Read Case Study <ArrowRight className="w-3.5 h-3.5 text-[#FE299E]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
