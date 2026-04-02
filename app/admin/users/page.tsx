import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { PageIntro } from "@/components/PageIntro";
import { StatusBadge } from "@/components/StatusBadge";
import { adminUsers } from "@/lib/mock-data";

export default function AdminUsersPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="User management"
        title="Search users, filter by plan and status, and open a complete customer record."
        description="The list view is optimized for operations teams that need plan, status, creation date, and last login in a single scan."
      />

      <div className="flex flex-wrap gap-3">
        {["All plans", "Starter", "Pro", "Team", "Active", "Trial", "Past due"].map((filter) => (
          <span
            key={filter}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
          >
            {filter}
          </span>
        ))}
      </div>

      <DataTable
        headings={["Name", "Email", "Plan", "Status", "Created", "Last login", "Profile"]}
        rows={adminUsers.map((user) => [
          <span key={`${user.id}-name`} className="font-semibold text-slate-950">
            {user.name}
          </span>,
          user.email,
          user.plan,
          <StatusBadge key={`${user.id}-status`} status={user.status} />,
          user.createdAt,
          user.lastLogin,
          <Link key={`${user.id}-link`} href={`/admin/users/${user.id}`} className="font-medium text-brand-700">
            View user
          </Link>
        ])}
      />
    </div>
  );
}
