import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/Button";

type CreatePasswordPageProps = {
  params: Promise<{
    token: string;
  }>;
};

export default async function CreatePasswordPage({ params }: CreatePasswordPageProps) {
  const { token } = await params;

  return (
    <AuthShell
      eyebrow="First-time login"
      title="Create a password after purchase or invitation and land directly in onboarding."
      description="This screen supports the welcome-email handoff after purchase, plus invited teammates who need an account before accessing the workspace."
      asideTitle="First login flow"
      asideItems={[
        "Welcome email includes the setup link, account email, current plan, and next steps.",
        "Password creation should flow straight into dashboard onboarding.",
        "Billing context and support contact should remain easy to find."
      ]}
    >
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Set your password</h2>
        <p className="mt-3 text-sm text-slate-600">Setup token: {token}</p>
      </div>

      <form className="mt-8 space-y-5">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Account email</span>
          <input type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="ava@northstar.ai" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Create password</span>
          <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="new-strong-password" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Confirm password</span>
          <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="new-strong-password" />
        </label>

        <Button href="/portal" variant="secondary" className="justify-center sm:min-w-[220px]">
          Complete account setup
        </Button>
      </form>
    </AuthShell>
  );
}
