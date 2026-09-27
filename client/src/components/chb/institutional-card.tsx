import { Card } from "@/components/ui/card";
import { Check, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InstitutionalRecord {
  client: string;
  role: string;
  scale: string;
  description: string;
  metrics: string[];
  icon: LucideIcon;
  featured?: boolean;
}

interface InstitutionalCardProps {
  record: InstitutionalRecord;
  className?: string;
}

export function InstitutionalCard({ record, className }: InstitutionalCardProps) {
  const Icon = record.icon;

  return (
    <Card
      className={cn(
        "p-6 md:p-8 border-border/80 bg-card/70 backdrop-blur-sm space-y-4 shadow-sm",
        record.featured && "border-[#FE299E]/40 shadow-md",
        className
      )}
      data-testid={`card-enterprise-${record.client.replace(/[^a-zA-Z0-9]/g, "-")}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-[#FE299E]" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {record.scale}
            </span>
          </div>
          <h3 className="text-xl font-bold font-editorial tracking-tight">{record.client}</h3>
        </div>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-muted/60 border border-border/60 text-foreground/80 self-start sm:self-auto">
          {record.role}
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed font-sans">
        {record.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {record.metrics.map((metric) => (
          <span
            key={metric}
            className="font-mono text-xs px-2.5 py-1 rounded-md bg-muted/40 border border-border/60 text-foreground font-medium flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5 text-[#FE299E]" />
            {metric}
          </span>
        ))}
      </div>
    </Card>
  );
}
