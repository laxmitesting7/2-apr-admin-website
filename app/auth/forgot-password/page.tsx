import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/Button";

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      eyebrow="Recovery"
      title="Reset access without exposing whether the email exists."
      description="The flow keeps account recovery secure while showing a quiet-success state for every request."
      asideTitle="Recovery details"
      asideItems={[
        "Token-based reset links should expire after a short window.",
        "The UI gives a consistent confirmation message to prevent account enumeration.",
        "Support contact stays visible for purchase-related access issues."
      ]}
    >
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Forgot password</h2>
        <p className="mt-3 text-sm text-slate-600">Enter the email associated with your BrandName account.</p>
      </div>

      <form className="mt-8 space-y-5">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Email</span>
          <input type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" placeholder="you@company.com" />
        </label>

        <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          If an account exists for this address, a password reset email will be sent with a secure setup link.
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/auth/reset-password/demo-token" variant="secondary" className="justify-center sm:min-w-[220px]">
            Send reset link
          </Button>
          <Button href="/auth/login" variant="ghost" className="justify-center bg-slate-950 text-white hover:bg-slate-800">
            Back to login
          </Button>
        </div>
      </form>
    </AuthShell>
  );
}
