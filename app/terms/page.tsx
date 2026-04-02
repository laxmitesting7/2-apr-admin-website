import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";
import { marketingNavLinks } from "@/lib/site-content";

export default function TermsPage() {
  return (
    <main>
      <Header links={marketingNavLinks} />
      <section className="bg-slate-950 py-20 text-white">
        <Container>
          <Panel>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">Terms</p>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-slate-950">Terms of service</h1>
            <div className="mt-6 space-y-5 text-slate-600">
              <p>BrandName is sold as a subscription SaaS with Starter, Pro, and Team plans.</p>
              <p>Customers can manage upgrades, downgrades, cancellations, reactivation, invoices, and billing methods from the customer portal.</p>
              <p>Access continues according to the active billing state and current period end date shown in the subscription area.</p>
            </div>
          </Panel>
        </Container>
      </section>
      <Footer links={marketingNavLinks} />
    </main>
  );
}
