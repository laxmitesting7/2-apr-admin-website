import { cn } from "@/lib/utils";

type PanelProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "muted";
};

export function Panel({ children, className, tone = "light" }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border p-6",
        tone === "light" && "border-slate-200 bg-white shadow-[0_18px_46px_rgba(15,23,42,0.08)]",
        tone === "dark" && "border-white/10 bg-slate-950/80 text-white shadow-panel",
        tone === "muted" && "border-slate-200 bg-slate-50",
        className
      )}
    >
      {children}
    </div>
  );
}
