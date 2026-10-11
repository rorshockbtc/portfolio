import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ChevronRight, type LucideIcon } from "lucide-react";
import { MetricStrip, type MetricItem } from "./metric-strip";
import { NamespaceBadge } from "./namespace-badge";
import { cn } from "@/lib/utils";

export interface LivingProofData {
  id: string;
  namespace: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  metrics: MetricItem[];
  image: string;
  icon: LucideIcon;
  tags: string[];
  liveUrl?: string;
  liveUrlText?: string;
  repoUrl?: string;
  passcode?: string;
  humanProblem?: string;
  systemsSolution?: string;
  uiUxBreakdown?: string;
  architectureBreakdown?: string;
  developmentBreakdown?: string;
  technicalOutcomes?: string[];
}

interface LivingProofCardProps {
  data: LivingProofData;
  onClick: (data: LivingProofData) => void;
  className?: string;
}

export function LivingProofCard({ data, onClick, className }: LivingProofCardProps) {
  const Icon = data.icon;

  return (
    <Card
      className={cn(
        "group cursor-pointer hover:border-[#FE299E] transition-all duration-300 border-[#DBD3C4] bg-[#FAF5EC] rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md",
        className
      )}
      onClick={() => onClick(data)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(data);
        }
      }}
      data-testid={`card-work-${data.id}`}
    >
      <div>
        <div className="relative w-full h-52 md:h-64 bg-[#EFE8DC] overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            width={1024}
            height={559}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FAF5EC]/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-[#DBD3C4] shadow-sm">
            <ArrowUpRight className="w-4 h-4 text-[#FE299E]" />
          </div>
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <NamespaceBadge
              namespace={data.namespace.replace(/^pipe\\/, "")}
              prefix="pipe\"
              size="sm"
              accent={false}
              className="bg-[#FAF5EC]/95 backdrop-blur-sm"
            />
            <Badge variant="secondary" className="font-sans text-[11px] uppercase tracking-wider bg-[#FAF5EC]/90 text-[#735F57] border border-[#DBD3C4]">
              {data.category}
            </Badge>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-4">
          <h3 className="text-2xl font-bold font-serif text-[#2B1E19] tracking-tight group-hover:text-[#FE299E] transition-colors leading-snug">
            {data.title}
          </h3>

          {/* Chips placed cleanly below the title */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-xs uppercase tracking-[0.15em] text-[#735F57] font-semibold whitespace-nowrap flex items-center gap-1.5">
              <Icon className="w-3.5 h-3.5 text-[#FE299E]" />
              {data.subtitle}
            </span>
            <span className="font-sans text-[11px] uppercase tracking-wider bg-[#E5DCCE] text-[#2B1E19] px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap">
              {data.category}
            </span>
          </div>

          <p className="text-sm md:text-base text-[#735F57] leading-relaxed line-clamp-3 font-sans">
            {data.summary}
          </p>

          <div className="pt-3 border-t border-[#DBD3C4]">
            <MetricStrip metrics={data.metrics} columns={3} />
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-[11px] uppercase tracking-[0.12em] px-2.5 py-0.5 rounded-full border border-[#DBD3C4] bg-[#EFE8DC] text-[#2B1E19] font-medium whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-[#DBD3C4] mt-3 flex items-center justify-between">
        <span className="font-sans text-xs text-[#FE299E] font-bold flex items-center gap-1 group-hover:underline">
          Open Case Study &amp; Architecture Plate <ChevronRight className="w-3.5 h-3.5" />
        </span>
        {data.liveUrl && (
          <span className="font-sans text-[11px] uppercase tracking-wider text-[#735F57] font-medium">Live App &rarr;</span>
        )}
      </div>
    </Card>
  );
}
