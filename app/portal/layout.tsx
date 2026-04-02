import { AppShell } from "@/components/AppShell";
import { portalNavigation } from "@/lib/mock-data";

export default function PortalLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      title="Customer Portal"
      subtitle="Manage subscription, billing, access, notifications, and support."
      items={[...portalNavigation]}
      accent="portal"
    >
      {children}
    </AppShell>
  );
}
