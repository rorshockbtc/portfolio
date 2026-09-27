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
        "grid gap-2 text-center font-mono",
        colClasses[columns],
        className
      )}
      data-testid="metric-strip"
    >
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="p-2 bg-muted/40 rounded-lg border border-border/40 flex flex-col justify-center"
        >
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider truncate">
            {m.label}
          </p>
          <p
            className={cn(
              "text-xs md:text-sm font-bold truncate mt-0.5",
              m.highlight ? "text-[#FE299E]" : "text-foreground"
            )}
          >
            {m.value}
          </p>
        </div>
      ))}
    </div>
  );
}
