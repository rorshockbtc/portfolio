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
    <div className={cn("inline-flex items-center gap-2 flex-wrap", className)}>
      <span
        className={cn(
          "font-sans font-medium rounded-full backdrop-blur-sm transition-colors uppercase tracking-[0.15em] shrink-0 whitespace-nowrap",
          sizeClasses[size],
          accent
            ? "bg-[#FE299E]/10 border border-[#FE299E]/30 text-[#FE299E] font-semibold"
            : "bg-[#FAF5EC] border border-[#DBD3C4] text-[#2B1E19]"
        )}
        data-testid={`badge-namespace-${namespace.replace(/[^a-zA-Z0-9]/g, "-")}`}
      >
        <span className="opacity-60">{prefix}</span>
        <span className="font-semibold">{namespace}</span>
      </span>

      {category && (
        <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#735F57] bg-[#EFE8DC] px-2.5 py-0.5 rounded-full border border-[#DBD3C4] shrink-0 whitespace-nowrap font-medium">
          {category}
        </span>
      )}
    </div>
  );
}
