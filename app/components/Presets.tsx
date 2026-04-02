import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";

type Preset = {
  title: string;
  description: string;
};

type PresetsProps = {
  items: ReadonlyArray<Preset>;
};

export function Presets({ items }: PresetsProps) {
  return (
    <Section id="presets" tone="light" className="overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div>
          <Badge tone="light">Presets and branding</Badge>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Keep every recording aligned with your brand without rebuilding the look each time.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Save reusable presets for camera layouts, caption styling, motion treatment, export
            settings, and brand presentation so every team ships consistently.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="rounded-[30px] border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
