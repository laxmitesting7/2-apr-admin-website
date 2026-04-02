import { pricingPlans } from "@/lib/site-content";

export const portalNavigation = [
  { label: "Dashboard", href: "/portal" },
  { label: "My Account", href: "/portal/account" },
  { label: "Subscription", href: "/portal/subscription" },
  { label: "Transactions", href: "/portal/transactions" },
  { label: "Access", href: "/portal/access" },
  { label: "Notifications", href: "/portal/notifications" },
  { label: "Support", href: "/portal/support" }
] as const;

export const adminNavigation = [
  { label: "Overview", href: "/admin" },
  { label: "Users", href: "/admin/users" },
  { label: "Subscriptions", href: "/admin/subscriptions" },
  { label: "Transactions", href: "/admin/transactions" },
  { label: "Analytics", href: "/admin/analytics" },
  { label: "Links", href: "/admin/links" },
  { label: "Emails", href: "/admin/emails" },
  { label: "Settings", href: "/admin/settings" }
] as const;

export const demoCustomer = {
  id: "usr_1284",
  fullName: "Ava Morgan",
  email: "ava@northstar.ai",
  companyName: "Northstar AI",
  role: "Owner",
  planName: "Pro",
  planSlug: "pro",
  interval: "Yearly",
  status: "active",
  renewalDate: "May 02, 2026",
  billingStatus: "Paid",
  joinedAt: "February 18, 2026",
  lastLogin: "April 02, 2026 at 3:18 PM",
  billingContact: "finance@northstar.ai",
  downloadUrl: "https://brandname.example/download"
} as const;

export const customerMetrics = [
  { label: "Exports this month", value: "48", hint: "+12 vs last month" },
  { label: "Shareable links", value: "16", hint: "4 clicked today" },
  { label: "Seats in use", value: "4 / 5", hint: "1 available seat" },
  { label: "Saved presets", value: "12", hint: "3 brand themes" }
] as const;

export const recentActivity = [
  { title: "Exported launch walkthrough", time: "2 hours ago", type: "Export" },
  { title: "Shared onboarding video link", time: "Yesterday", type: "Share" },
  { title: "Updated yearly billing details", time: "March 28", type: "Billing" },
  { title: "Activated social caption preset", time: "March 24", type: "Preset" }
] as const;

export const notificationFeed = [
  {
    title: "Renewal scheduled",
    description: "Your Pro yearly plan renews on May 02, 2026. No action required.",
    category: "Billing",
    read: false
  },
  {
    title: "Upgrade confirmed",
    description: "Your team seat count was increased from 3 to 5 seats.",
    category: "Account",
    read: true
  },
  {
    title: "Failed payment retry reminder",
    description: "A backup reminder template is available if your default payment method ever fails.",
    category: "Product",
    read: true
  }
] as const;

export const transactionHistory = [
  { invoice: "INV-2039", date: "Apr 02, 2026", plan: "Pro Yearly", amount: "$490.00", status: "paid" },
  { invoice: "INV-1928", date: "Jan 02, 2026", plan: "Seat add-on", amount: "$98.00", status: "paid" },
  { invoice: "INV-1881", date: "Dec 02, 2025", plan: "Pro Yearly", amount: "$490.00", status: "paid" },
  { invoice: "INV-1772", date: "Sep 02, 2025", plan: "Pro Monthly", amount: "$49.00", status: "refunded" }
] as const;

export const subscriptionTimeline = [
  { label: "Current plan", value: "Pro yearly" },
  { label: "Billing status", value: "Active" },
  { label: "Seats", value: "5 included" },
  { label: "Next billing date", value: "May 02, 2026" },
  { label: "Payment method", value: "Visa ending in 4242" }
] as const;

export const accessModules = [
  {
    title: "Desktop app access",
    description: "Download the latest macOS and Windows build, sign in, and sync your presets."
  },
  {
    title: "Workspace handoff",
    description: "Share branded presets, camera layouts, and caption themes with teammates."
  },
  {
    title: "Feature entitlements",
    description: "Pro includes motion polish, styled captions, 4K exports, GIF exports, and shareable links."
  }
] as const;

export const supportChannels = [
  {
    title: "Priority support",
    description: "Reach the BrandName support team for purchase, billing, or account help within one business day."
  },
  {
    title: "Help center",
    description: "Browse setup guides, export recommendations, caption guidance, and account troubleshooting."
  },
  {
    title: "Request assistance",
    description: "Route issues about failed exports, access problems, billing, or team onboarding."
  }
] as const;

export const adminMetrics = [
  { label: "Total users", value: "12,480", hint: "+8.4% this month" },
  { label: "Paid users", value: "4,912", hint: "39.3% paid conversion" },
  { label: "MRR", value: "$186,400", hint: "+$14,200 MoM" },
  { label: "ARR", value: "$2.24M", hint: "Projected annualized revenue" },
  { label: "Failed payments", value: "42", hint: "0.8% retry queue" },
  { label: "Churn count", value: "91", hint: "2.1% logo churn" }
] as const;

export const adminUsers = [
  {
    id: "usr_1284",
    name: "Ava Morgan",
    email: "ava@northstar.ai",
    plan: "Pro",
    status: "active",
    createdAt: "Feb 18, 2026",
    lastLogin: "Apr 02, 2026"
  },
  {
    id: "usr_1291",
    name: "Noah Chen",
    email: "noah@vectorlabs.com",
    plan: "Starter",
    status: "trial",
    createdAt: "Mar 12, 2026",
    lastLogin: "Apr 01, 2026"
  },
  {
    id: "usr_1303",
    name: "Priya Raman",
    email: "priya@meridianhq.com",
    plan: "Team",
    status: "past_due",
    createdAt: "Jan 09, 2026",
    lastLogin: "Mar 30, 2026"
  },
  {
    id: "usr_1319",
    name: "Leo Foster",
    email: "leo@cascade.io",
    plan: "Pro",
    status: "canceled",
    createdAt: "Nov 28, 2025",
    lastLogin: "Mar 25, 2026"
  }
] as const;

export const adminTransactions = [
  {
    id: "txn_9002",
    invoice: "INV-2039",
    customer: "Northstar AI",
    amount: "$490.00",
    method: "Visa 4242",
    status: "paid",
    date: "Apr 02, 2026"
  },
  {
    id: "txn_9003",
    invoice: "INV-2040",
    customer: "Meridian HQ",
    amount: "$990.00",
    method: "Amex 0042",
    status: "past_due",
    date: "Apr 02, 2026"
  },
  {
    id: "txn_9004",
    invoice: "INV-2041",
    customer: "Vector Labs",
    amount: "$24.00",
    method: "Mastercard 4444",
    status: "paid",
    date: "Apr 01, 2026"
  }
] as const;

export const linkClickStats = [
  {
    title: "Product tour CTA",
    totalClicks: "4,182",
    uniqueClicks: "2,991",
    conversionRate: "19.4%",
    source: "Landing page hero"
  },
  {
    title: "Welcome email login link",
    totalClicks: "1,284",
    uniqueClicks: "1,102",
    conversionRate: "82.7%",
    source: "Transactional email"
  },
  {
    title: "Pricing upgrade CTA",
    totalClicks: "931",
    uniqueClicks: "742",
    conversionRate: "28.6%",
    source: "Customer portal"
  }
] as const;

export const emailLog = [
  {
    template: "Welcome email",
    recipient: "ava@northstar.ai",
    status: "delivered",
    sentAt: "Apr 02, 2026 09:04",
    trigger: "Successful purchase"
  },
  {
    template: "Purchase confirmation",
    recipient: "ava@northstar.ai",
    status: "delivered",
    sentAt: "Apr 02, 2026 09:05",
    trigger: "Invoice paid"
  },
  {
    template: "Failed payment",
    recipient: "billing@meridianhq.com",
    status: "queued",
    sentAt: "Apr 02, 2026 10:12",
    trigger: "Card declined"
  }
] as const;

export const emailTemplates = [
  {
    slug: "welcome-email",
    title: "Welcome email after purchase",
    subject: "Welcome to BrandName",
    preview:
      "Thank you for choosing BrandName. Your account has been created and your Pro plan is now active."
  },
  {
    slug: "purchase-confirmation",
    title: "Purchase confirmation",
    subject: "Your BrandName purchase is confirmed",
    preview:
      "Your purchase was successful and your subscription is now active. Review your invoice and billing history in the portal."
  },
  {
    slug: "cancellation-confirmation",
    title: "Cancellation confirmation",
    subject: "Your BrandName subscription has been canceled",
    preview:
      "This confirms that your BrandName subscription has been canceled. You can continue using your plan until the end of the current period."
  }
] as const;

export const adminChartSeries = [
  { label: "Jan", signups: 420, revenue: 112000, cancellations: 18 },
  { label: "Feb", signups: 510, revenue: 138000, cancellations: 21 },
  { label: "Mar", signups: 632, revenue: 171000, cancellations: 26 },
  { label: "Apr", signups: 688, revenue: 186400, cancellations: 25 }
] as const;

export const appFeatureMatrix = [
  {
    feature: "Motion polish",
    starter: "Basic",
    pro: "Advanced",
    team: "Advanced + shared standards"
  },
  {
    feature: "Caption styling",
    starter: "Limited",
    pro: "Full styling",
    team: "Shared brand themes"
  },
  {
    feature: "Admin controls",
    starter: "No",
    pro: "Limited",
    team: "Yes"
  }
] as const;

export function getPlanBySlug(planSlug: string) {
  return pricingPlans.find((plan) => plan.slug === planSlug) ?? pricingPlans[1];
}
