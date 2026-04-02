import { AppShell } from "@/components/AppShell";
import { adminNavigation } from "@/lib/mock-data";

export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      title="Admin Panel"
      subtitle="Overview, users, subscriptions, transactions, analytics, links, and email logs."
      items={[...adminNavigation]}
      accent="admin"
    >
      {children}
    </AppShell>
  );
}
