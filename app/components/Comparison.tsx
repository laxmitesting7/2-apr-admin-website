import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";

type ComparisonRow = {
  label: string;
  brandname: string;
  alternatives: string;
};

type ComparisonProps = {
  rows: ReadonlyArray<ComparisonRow>;
};

export function Comparison({ rows }: ComparisonProps) {
  return (
    <Section id="comparison" tone="dark" className="bg-slate-950">
      <div className="max-w-3xl">
        <Badge>Comparison</Badge>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          BrandName replaces a stitched-together workflow with one capture-to-publish system.
        </h2>
      </div>

      <div className="mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-panel">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/10 bg-white/5 px-6 py-5 text-sm font-semibold text-white">
          <span>Capability</span>
          <span>BrandName</span>
          <span>Generic tool stack</span>
        </div>
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[1.2fr_1fr_1fr] gap-4 border-b border-white/10 px-6 py-5 text-sm last:border-b-0"
          >
            <span className="font-medium text-white">{row.label}</span>
            <span className="text-brand-200">{row.brandname}</span>
            <span className="text-slate-400">{row.alternatives}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
