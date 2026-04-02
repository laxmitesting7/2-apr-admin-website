import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { demoCustomer } from "@/lib/mock-data";

export default function PortalAccountPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="My account"
        title="Profile, security, and billing contact settings."
        description="Separate profile, password, and billing contact into clear cards so users can update the right part of their account without confusion."
      />

      <div className="grid gap-5 xl:grid-cols-3">
        <Panel className="xl:col-span-2">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">
            Profile details
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Full name</span>
              <input
                className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                defaultValue={demoCustomer.fullName}
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                defaultValue={demoCustomer.email}
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Company</span>
              <input
                className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                defaultValue={demoCustomer.companyName}
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Role</span>
              <input
                className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                defaultValue={demoCustomer.role}
              />
            </label>
          </div>
          <div className="mt-6">
            <Button href="/portal" variant="secondary">
              Save profile changes
            </Button>
          </div>
        </Panel>

        <Panel>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">
            Password and security
          </h2>
          <div className="mt-6 space-y-5">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Current password</span>
              <input
                type="password"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                defaultValue="current-password"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">New password</span>
              <input
                type="password"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                defaultValue="new-password"
              />
            </label>
            <Button
              href="/portal"
              variant="ghost"
              className="w-full justify-center bg-slate-950 text-white hover:bg-slate-800"
            >
              Update password
            </Button>
          </div>
        </Panel>
      </div>

      <Panel>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">
          Billing contact
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Billing contact name</span>
            <input
              className="w-full rounded-2xl border border-slate-200 px-4 py-3"
              defaultValue="Northstar Finance"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Billing contact email</span>
            <input
              className="w-full rounded-2xl border border-slate-200 px-4 py-3"
              defaultValue={demoCustomer.billingContact}
            />
          </label>
        </div>
      </Panel>
    </div>
  );
}
