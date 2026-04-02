import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";

type Step = {
  title: string;
  description: string;
};

type HowItWorksProps = {
  steps: ReadonlyArray<Step>;
};

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <Section id="how-it-works" tone="light">
      <div className="max-w-3xl">
        <Badge tone="light">How it works</Badge>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Capture the take, refine the message, and export for every channel from one flow.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-[30px] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
              {`0${index + 1}`}
            </span>
            <h3 className="mt-6 text-2xl font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
