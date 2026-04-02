import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/Button";

type ResetPasswordPageProps = {
  params: Promise<{
    token: string;
  }>;
};

export default async function ResetPasswordPage({ params }: ResetPasswordPageProps) {
  const { token } = await params;

  return (
    <AuthShell
      eyebrow="Recovery"
      title="Set a new password and return directly to the portal."
      description="The reset password page confirms token validity, communicates expiry clearly, and routes the user back into the product with minimal friction."
      asideTitle="Reset flow expectations"
      asideItems={[
        "Show token expiry and resend options when links are stale.",
        "Require strong passwords and confirm the reset succeeded.",
        "Direct the user back to the customer dashboard after completion."
      ]}
    >
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Create a new password</h2>
        <p className="mt-3 text-sm text-slate-600">Reset token: {token}</p>
      </div>

      <form className="mt-8 space-y-5">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">New password</span>
          <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="new-strong-password" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Confirm password</span>
          <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="new-strong-password" />
        </label>

        <Button href="/portal" variant="secondary" className="justify-center sm:min-w-[220px]">
          Save and continue
        </Button>
      </form>
    </AuthShell>
  );
}
