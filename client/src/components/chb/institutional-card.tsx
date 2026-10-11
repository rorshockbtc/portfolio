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
        "p-6 md:p-8 border-[#E5DDD0] bg-[#FAF6EE] rounded-2xl space-y-5 shadow-sm transition-all hover:border-[#E05A36]/40",
        record.featured && "border-[#E05A36]/40 shadow-md",
        className
      )}
      data-testid={`card-enterprise-${record.client.replace(/[^a-zA-Z0-9]/g, "-")}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5DDD0] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-[#E05A36]" />
            <span className="font-sans text-xs uppercase tracking-[0.18em] text-[#78645C] font-medium">
              {record.scale}
            </span>
          </div>
          <h3 className="text-2xl font-bold font-serif text-[#2B1E19] tracking-tight">{record.client}</h3>
        </div>
        <span className="font-sans text-xs px-3 py-1 rounded-full bg-[#EDE5D8] border border-[#E5DDD0] text-[#2B1E19] font-medium self-start sm:self-auto">
          {record.role}
        </span>
      </div>

      <p className="text-base text-[#78645C] leading-relaxed font-sans">
        {record.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {record.metrics.map((metric) => (
          <span
            key={metric}
            className="font-sans text-xs px-3 py-1.5 rounded-full bg-[#FAF6EE] border border-[#E5DDD0] text-[#2B1E19] font-medium flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5 text-[#E05A36]" />
            {metric}
          </span>
        ))}
      </div>
    </Card>
  );
}
