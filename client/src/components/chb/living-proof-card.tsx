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
        "group cursor-pointer hover:border-[#E05A36]/60 transition-all duration-300 border-[#E5DDD0] bg-[#FAF6EE] rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md",
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
        <div className="relative w-full h-52 md:h-60 bg-[#EDE5D8] overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            width={1024}
            height={559}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FAF6EE]/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-[#E5DDD0]">
            <ArrowUpRight className="w-4 h-4 text-[#E05A36]" />
          </div>
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <NamespaceBadge
              namespace={data.namespace.replace(/^pipe\\/, "")}
              prefix="pipe\"
              size="sm"
              accent={false}
              className="bg-[#FAF6EE]/95 backdrop-blur-sm"
            />
            <Badge variant="secondary" className="font-sans text-[11px] uppercase tracking-wider bg-[#FAF6EE]/90 text-[#78645C] border border-[#E5DDD0]">
              {data.category}
            </Badge>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-[#E05A36]" />
            <span className="font-sans text-xs uppercase tracking-[0.18em] text-[#78645C] font-medium">
              {data.subtitle}
            </span>
          </div>

          <h3 className="text-2xl font-bold font-serif text-[#2B1E19] tracking-tight group-hover:text-[#E05A36] transition-colors leading-snug">
            {data.title}
          </h3>

          <p className="text-base text-[#78645C] leading-relaxed line-clamp-3 font-sans">
            {data.summary}
          </p>

          <div className="pt-3 border-t border-[#E5DDD0]">
            <MetricStrip metrics={data.metrics} columns={3} />
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-[11px] uppercase tracking-[0.12em] px-2.5 py-0.5 rounded-full border border-[#E5DDD0] bg-[#EDE5D8] text-[#2B1E19] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-[#E5DDD0] mt-3 flex items-center justify-between">
        <span className="font-sans text-xs text-[#E05A36] font-semibold flex items-center gap-1 group-hover:underline">
          Inspect Systems Breakdown <ChevronRight className="w-3.5 h-3.5" />
        </span>
        {data.liveUrl && (
          <span className="font-sans text-[11px] uppercase tracking-wider text-[#78645C]">Live App &rarr;</span>
        )}
      </div>
    </Card>
  );
}
