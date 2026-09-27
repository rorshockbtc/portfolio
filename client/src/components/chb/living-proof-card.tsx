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
        "group cursor-pointer hover:border-[#FE299E]/60 transition-all duration-300 border-border/80 bg-card/70 backdrop-blur-sm overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md",
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
        <div className="relative w-full h-52 md:h-60 bg-muted overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            width={1024}
            height={559}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 w-8 h-8 rounded-md bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-4 h-4 text-[#FE299E]" />
          </div>
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <NamespaceBadge
              namespace={data.namespace.replace(/^pipe\\/, "")}
              prefix="pipe\"
              size="sm"
              accent={false}
              className="bg-background/95 backdrop-blur-sm"
            />
            <Badge variant="secondary" className="font-mono text-[10px] bg-background/90">
              {data.category}
            </Badge>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-[#FE299E]" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {data.subtitle}
            </span>
          </div>

          <h3 className="text-xl font-bold font-editorial tracking-tight group-hover:text-[#FE299E] transition-colors">
            {data.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {data.summary}
          </p>

          <div className="pt-3 border-t border-border/50">
            <MetricStrip metrics={data.metrics} columns={3} />
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2 py-0.5 rounded border border-border/70 text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-border/40 mt-3 flex items-center justify-between">
        <span className="font-mono text-xs text-[#FE299E] flex items-center gap-1 group-hover:underline">
          Inspect Systems Breakdown <ChevronRight className="w-3.5 h-3.5" />
        </span>
        {data.liveUrl && (
          <span className="font-mono text-[11px] text-muted-foreground">Live App →</span>
        )}
      </div>
    </Card>
  );
}
