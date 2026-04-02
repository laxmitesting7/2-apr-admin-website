import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";

type CaptionsProps = {
  items: ReadonlyArray<string>;
};

export function Captions({ items }: CaptionsProps) {
  return (
    <Section id="captions" tone="dark" className="bg-slate-900">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Badge>Captions and accessibility</Badge>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Generate and style captions that improve clarity, retention, and accessibility.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            BrandName makes captions part of the production workflow instead of a late-stage task,
            so your videos stay inclusive and social-ready by default.
          </p>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-panel">
          <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/5 px-5 py-4"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-500/15 text-sm font-semibold text-brand-200">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-white">{item}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Clearer playback for product explainers, onboarding, support, and social clips.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
