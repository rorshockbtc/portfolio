import { cn } from "@/lib/utils";

export interface MetricItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface MetricStripProps {
  metrics: MetricItem[];
  className?: string;
  columns?: 2 | 3 | 4;
}

export function MetricStrip({ metrics, className, columns = 3 }: MetricStripProps) {
  const colClasses = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid gap-3 text-center",
        colClasses[columns],
        className
      )}
      data-testid="metric-strip"
    >
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="p-4 bg-[#FAF5EC] rounded-xl border border-[#DBD3C4] flex flex-col justify-center space-y-1 shadow-sm"
        >
          <p className="text-xs font-sans text-[#735F57] uppercase tracking-[0.18em] font-medium truncate">
            {m.label}
          </p>
          <p
            className={cn(
              "text-2xl md:text-3xl font-serif font-bold tracking-tight truncate",
              m.highlight ? "text-[#FE299E]" : "text-[#2B1E19]"
            )}
          >
            {m.value}
          </p>
        </div>
      ))}
    </div>
  );
}
