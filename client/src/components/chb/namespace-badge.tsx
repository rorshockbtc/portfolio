import { cn } from "@/lib/utils";

interface NamespaceBadgeProps {
  namespace: string;
  prefix?: string;
  category?: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  accent?: boolean;
}

export function NamespaceBadge({
  namespace,
  prefix = "pipe\\",
  category,
  className,
  size = "default",
  accent = true,
}: NamespaceBadgeProps) {
  const sizeClasses = {
    sm: "text-[11px] px-2 py-0.5",
    default: "text-xs px-2.5 py-1",
    lg: "text-sm px-3 py-1.5",
  };

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "font-mono font-medium rounded backdrop-blur-sm transition-colors",
          sizeClasses[size],
          accent
            ? "bg-[#FE299E]/10 border border-[#FE299E]/30 text-[#FE299E]"
            : "bg-background/90 border border-border text-foreground"
        )}
        data-testid={`badge-namespace-${namespace.replace(/[^a-zA-Z0-9]/g, "-")}`}
      >
        <span className="opacity-60">{prefix}</span>
        <span className="font-semibold">{namespace}</span>
      </span>

      {category && (
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground bg-muted/60 px-2 py-0.5 rounded border border-border/50">
          {category}
        </span>
      )}
    </div>
  );
}
