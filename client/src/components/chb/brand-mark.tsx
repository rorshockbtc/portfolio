import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function BrandMark({ className, size = "md" }: BrandMarkProps) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-5xl md:text-6xl",
    xl: "text-6xl md:text-7xl",
  };

  return (
    <span
      className={cn("font-mono font-bold select-none text-[#FE299E] inline-block", sizeClasses[size], className)}
      aria-label="Colon Hyphen Bracket"
      data-testid="brand-mark"
    >
      :-]
    </span>
  );
}
