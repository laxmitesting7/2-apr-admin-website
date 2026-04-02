import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export function CTA() {
  return (
    <Section id="cta" tone="dark" className="bg-slate-950">
      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-brand-500/20 via-slate-900 to-emerald-400/10 px-8 py-12 shadow-glow sm:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Final CTA</Badge>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Replace the messy recording stack with one polished workflow for capture, editing, and publishing.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Start with your next demo, tutorial, onboarding flow, or launch announcement. Keep the
            recording sharp, the styling consistent, and the publish step fast.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/auth/sign-up" variant="secondary">
              Start free trial
            </Button>
            <Button href="/contact" variant="ghost">
              Talk to sales
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
