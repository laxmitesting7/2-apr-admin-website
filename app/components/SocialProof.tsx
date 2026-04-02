import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";

type SocialProofProps = {
  logos: ReadonlyArray<string>;
};

export function SocialProof({ logos }: SocialProofProps) {
  return (
    <Section className="border-y border-slate-200/80 py-10" containerClassName="space-y-6">
      <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
        <div>
          <Badge tone="light">Teams moving faster with polished video</Badge>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Used by product, support, sales enablement, onboarding, and marketing teams that need
            every screen recording to look intentional.
          </p>
        </div>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
          Trusted by fast-moving SaaS teams
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {logos.map((logo) => (
          <div
            key={logo}
            className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-center text-sm font-semibold tracking-[0.2em] text-slate-500"
          >
            {logo}
          </div>
        ))}
      </div>
    </Section>
  );
}
