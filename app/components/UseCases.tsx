import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";

type UseCase = {
  title: string;
  description: string;
};

type UseCasesProps = {
  items: ReadonlyArray<UseCase>;
};

export function UseCases({ items }: UseCasesProps) {
  return (
    <Section id="use-cases" tone="light">
      <div className="max-w-3xl">
        <Badge tone="light">Use cases</Badge>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          One product for the teams creating demos, walkthroughs, support answers, and launch
          assets every week.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item.title} className="rounded-[30px] border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
