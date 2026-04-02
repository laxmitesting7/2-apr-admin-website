import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";

type ProblemProps = {
  items: ReadonlyArray<string>;
};

export function Problem({ items }: ProblemProps) {
  return (
    <Section id="problem" tone="light" className="overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <Badge tone="light">The old workflow leaks time</Badge>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Good recordings fall apart when capture, editing, captions, and branding live in
            separate tools.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Teams end up re-recording takes, stitching together apps, fixing inconsistent styling,
            and delaying publish-ready assets. BrandName removes the handoff tax between capture and
            polish.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item}
              className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="mt-5 text-base font-semibold text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
