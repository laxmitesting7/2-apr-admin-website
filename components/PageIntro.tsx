import { Badge } from "@/components/Badge";
import { cn } from "@/lib/utils";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
  className,
  tone = "light"
}: PageIntroProps) {
  return (
    <div className={cn("flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className="max-w-3xl">
        {eyebrow ? <Badge tone={tone === "dark" ? "dark" : "light"}>{eyebrow}</Badge> : null}
        <h1
          className={cn(
            "mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl",
            tone === "dark" ? "text-white" : "text-slate-950"
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-8",
            tone === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
