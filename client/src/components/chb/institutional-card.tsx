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
        "p-6 md:p-8 border-[#DBD3C4] bg-[#FAF5EC] rounded-2xl space-y-4 shadow-sm transition-all hover:border-[#FE299E]/50",
        record.featured && "border-[#FE299E]/50 shadow-md",
        className
      )}
      data-testid={`card-enterprise-${record.client.replace(/[^a-zA-Z0-9]/g, "-")}`}
    >
      <div className="space-y-2 border-b border-[#DBD3C4] pb-4">
        <h3 className="text-2xl font-bold font-serif text-[#2B1E19] tracking-tight">{record.client}</h3>
        
        {/* Chips placed cleanly below the title */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="font-sans text-xs px-3 py-1 rounded-full bg-[#E5DCCE] text-[#2B1E19] font-medium whitespace-nowrap">
            {record.role}
          </span>
          <span className="font-sans text-xs uppercase tracking-[0.15em] text-[#735F57] font-semibold whitespace-nowrap flex items-center gap-1.5">
            <Icon className="w-3.5 h-3.5 text-[#FE299E]" />
            {record.scale}
          </span>
        </div>
      </div>

      <p className="text-base text-[#735F57] leading-relaxed font-sans">
        {record.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {record.metrics.map((metric) => (
          <span
            key={metric}
            className="font-sans text-xs px-3 py-1.5 rounded-full bg-[#EFE8DC] border border-[#DBD3C4] text-[#2B1E19] font-medium flex items-center gap-1.5 whitespace-nowrap"
          >
            <Check className="w-3.5 h-3.5 text-[#FE299E]" />
            {metric}
          </span>
        ))}
      </div>
    </Card>
  );
}
