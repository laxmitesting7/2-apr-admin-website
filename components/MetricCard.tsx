import { Panel } from "@/components/Panel";

type MetricCardProps = {
  label: string;
  value: string;
  hint: string;
  tone?: "light" | "dark";
};

export function MetricCard({ label, value, hint, tone = "light" }: MetricCardProps) {
  return (
    <Panel tone={tone === "dark" ? "dark" : "light"} className="h-full">
      <p className={tone === "dark" ? "text-sm text-slate-400" : "text-sm text-slate-500"}>{label}</p>
      <p className="mt-4 font-display text-4xl font-bold tracking-tight">{value}</p>
      <p className={tone === "dark" ? "mt-3 text-sm text-slate-300" : "mt-3 text-sm text-slate-600"}>
        {hint}
      </p>
    </Panel>
  );
}
