import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "brand";
};

export function Badge({ children, className, tone = "brand" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]",
        tone === "brand" &&
          "border-brand-400/30 bg-brand-500/10 text-brand-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        tone === "light" && "border-slate-200 bg-white text-slate-600",
        tone === "dark" && "border-white/10 bg-white/5 text-white/70",
        className
      )}
    >
      {children}
    </span>
  );
}
