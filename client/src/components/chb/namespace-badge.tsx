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
          "font-sans font-medium rounded-full backdrop-blur-sm transition-colors uppercase tracking-[0.15em]",
          sizeClasses[size],
          accent
            ? "bg-[#E05A36]/10 border border-[#E05A36]/30 text-[#E05A36]"
            : "bg-[#FAF6EE] border border-[#E5DDD0] text-[#2B1E19]"
        )}
        data-testid={`badge-namespace-${namespace.replace(/[^a-zA-Z0-9]/g, "-")}`}
      >
        <span className="opacity-60">{prefix}</span>
        <span className="font-semibold">{namespace}</span>
      </span>

      {category && (
        <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#78645C] bg-[#EDE5D8] px-2.5 py-0.5 rounded-full border border-[#E5DDD0]">
          {category}
        </span>
      )}
    </div>
  );
}
