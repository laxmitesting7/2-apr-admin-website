import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";

type DeepFeature = {
  title: string;
  description: string;
  bullets: ReadonlyArray<string>;
};

type DeepFeaturesProps = {
  items: ReadonlyArray<DeepFeature>;
};

export function DeepFeatures({ items }: DeepFeaturesProps) {
  return (
    <Section id="deep-features" tone="dark" className="bg-slate-900">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <Badge>Deep features</Badge>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Precision controls for teams that care how every demo, tutorial, and launch video
            feels.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-slate-300">
          These are the details that make the difference between a rough recording and a polished
          asset someone is willing to watch to the end.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-panel"
          >
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
            <ul className="mt-6 space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
