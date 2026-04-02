import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";
import { marketingNavLinks } from "@/lib/site-content";

export default function PrivacyPage() {
  return (
    <main>
      <Header links={marketingNavLinks} />
      <section className="bg-slate-950 py-20 text-white">
        <Container>
          <Panel>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">Privacy</p>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-slate-950">Privacy policy</h1>
            <div className="mt-6 space-y-5 text-slate-600">
              <p>BrandName stores customer profile, billing, subscription, and usage data needed to operate the SaaS platform.</p>
              <p>Transactional email events, invoice records, and link click attribution are retained to support billing, product analytics, and customer support workflows.</p>
              <p>Admin access is role-restricted and audit-friendly to protect customer and billing operations.</p>
            </div>
          </Panel>
        </Container>
      </section>
      <Footer links={marketingNavLinks} />
    </main>
  );
}
