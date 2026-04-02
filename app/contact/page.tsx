import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";
import { marketingNavLinks } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <main>
      <Header links={marketingNavLinks} />
      <section className="bg-slate-950 py-20 text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Contact</p>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl">
              Sales, support, and billing assistance.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Use this page for purchase questions, billing issues, onboarding support, and team rollout planning.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              ["Sales", "Talk through plan selection, rollout, and procurement."],
              ["Support", "Get help with login, access, exports, and setup."],
              ["Billing", "Resolve failed payments, invoice questions, and plan changes."]
            ].map(([title, description]) => (
              <Panel key={title}>
                <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">{title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{description}</p>
              </Panel>
            ))}
          </div>

          <div className="mt-8">
            <Button href="mailto:support@brandname.example" variant="secondary">
              Email support
            </Button>
          </div>
        </Container>
      </section>
      <Footer links={marketingNavLinks} />
    </main>
  );
}
