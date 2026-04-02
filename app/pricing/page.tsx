import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";
import { marketingNavLinks, pricingPlans } from "@/lib/site-content";

export default function PricingPage() {
  return (
    <main>
      <Header links={marketingNavLinks} />
      <section className="bg-slate-950 py-20 text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Pricing</p>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl">
              Paid plans for solo creators, product teams, and multi-seat orgs.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Starter, Pro, and Team plans support monthly or yearly billing, subscription management,
              plan changes, invoices, and full customer portal access.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => {
              const isHighlighted = "highlight" in plan && Boolean(plan.highlight);

              return (
              <Panel key={plan.slug} tone={isHighlighted ? "dark" : "light"} className="h-full">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">{plan.name}</p>
                <p className="mt-5 font-display text-5xl font-bold tracking-tight">{plan.price}</p>
                <p className={`mt-2 text-sm ${isHighlighted ? "text-slate-400" : "text-slate-500"}`}>
                  or {plan.yearlyPrice}/month billed annually
                </p>
                <p className={`mt-5 leading-7 ${isHighlighted ? "text-slate-300" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className={`flex gap-3 text-sm ${isHighlighted ? "text-slate-200" : "text-slate-700"}`}>
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button href={`/billing/checkout/${plan.slug}`} variant={isHighlighted ? "primary" : "secondary"} className="mt-8 w-full justify-center">
                  Choose {plan.name}
                </Button>
              </Panel>
              );
            })}
          </div>
        </Container>
      </section>
      <Footer links={marketingNavLinks} />
    </main>
  );
}
