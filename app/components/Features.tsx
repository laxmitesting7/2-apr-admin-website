import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";

type Feature = {
  title: string;
  description: string;
  icon: "record" | "focus" | "edit" | "webcam" | "captions" | "export";
};

type FeaturesProps = {
  items: ReadonlyArray<Feature>;
};

const iconMap: Record<Feature["icon"], JSX.Element> = {
  record: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="14" height="14" rx="3" />
      <path d="M17 10l4-3v10l-4-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  focus: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.8 2.8M14.7 14.7l2.8 2.8M17.5 6.5l-2.8 2.8M9.3 14.7l-2.8 2.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  ),
  edit: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 7h10M4 12h16M4 17h8" strokeLinecap="round" />
      <path d="M17.5 4.5l2 2L13 13l-3 1 1-3 6.5-6.5z" strokeLinejoin="round" />
    </svg>
  ),
  webcam: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="4" width="18" height="14" rx="3" />
      <path d="M8 21h8M12 18v3" strokeLinecap="round" />
      <circle cx="12" cy="11" r="3.5" />
    </svg>
  ),
  captions: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M7 10h10M7 14h6" strokeLinecap="round" />
    </svg>
  ),
  export: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 4v11" strokeLinecap="round" />
      <path d="M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 19h14" strokeLinecap="round" />
    </svg>
  )
};

export function Features({ items }: FeaturesProps) {
  return (
    <Section id="features" tone="dark" className="bg-slate-950">
      <div className="max-w-3xl">
        <Badge>Core features</Badge>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Everything needed to go from raw screen capture to brand-safe publish asset.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Full capture control, fast editing, clear motion cues, consistent styling, and exports
          tailored for product, support, onboarding, and social distribution.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-panel"
          >
            <div className="inline-flex rounded-2xl border border-brand-400/20 bg-brand-500/10 p-3 text-brand-200">
              {iconMap[item.icon]}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
