# BrandName SaaS Platform Blueprint

## 1. Full product architecture

- Marketing layer: public landing page, feature storytelling, pricing teaser, FAQ, conversion CTAs, SEO metadata, trust proof, and email capture.
- Identity layer: sign up, login, forgot password, reset password, email verification, invitation acceptance, first-time password creation, session management, and role-based access.
- Customer layer: dashboard, account settings, subscription and billing, invoices, usage and access area, notification center, and support hub.
- Billing layer: Stripe-style checkout, subscriptions, plan changes, renewals, payment failures, retries, cancellations, reactivation, invoices, and tax-friendly transaction records.
- Communication layer: transactional emails, onboarding email sequence, billing reminders, payment failure notices, upgrade and downgrade confirmations, and support notifications.
- Admin operations layer: internal dashboard, user management, subscription management, transaction management, email logs, analytics, link click tracking, and exports.
- Analytics layer: signups, trials, paid conversion, funnel drop-off, revenue by plan, churn trends, click attribution, and cohort-friendly event tracking.
- Data layer: users, organizations, subscriptions, plans, transactions, invoices, payment methods, events, notifications, email logs, links, clicks, sessions, and audit logs.

## 2. Sitemap / route structure

```text
/
/pricing
/privacy
/terms
/contact

/auth/sign-up
/auth/login
/auth/forgot-password
/auth/reset-password/[token]
/auth/verify-email/[token]
/auth/invite/[token]
/auth/create-password/[token]

/portal
/portal/account
/portal/subscription
/portal/transactions
/portal/access
/portal/notifications
/portal/support

/billing/checkout/[plan]
/billing/success
/billing/failed
/billing/retry

/admin
/admin/users
/admin/users/[userId]
/admin/subscriptions
/admin/transactions
/admin/transactions/[transactionId]
/admin/analytics
/admin/links
/admin/emails
/admin/settings

/api/auth/*
/api/billing/*
/api/portal/*
/api/admin/*
/api/webhooks/stripe
/api/webhooks/email
/api/tracking/click
```

## 3. User flow

1. Visitor lands on the marketing site and evaluates the promise, features, use cases, pricing, and FAQ.
2. Visitor chooses a plan and enters checkout.
3. Successful payment creates the customer record, subscription record, and portal entitlement.
4. Welcome email and purchase confirmation email are sent immediately.
5. User clicks the login or password setup link from email.
6. User verifies email, creates a password if needed, and lands in the onboarding state of the portal dashboard.
7. User sees current plan, billing status, download or access instructions, recent activity, and quick actions.
8. User can later upgrade, downgrade, cancel, reactivate, update payment method, or download invoices from the portal.

## 4. Admin flow

1. Admin signs in with elevated role access.
2. Admin dashboard loads KPI cards, revenue snapshots, subscriptions, failed payments, and recent activity.
3. Admin drills into users, subscriptions, transactions, emails, or analytics modules from the primary sidebar.
4. Admin reviews a user record, plan status, last login, transaction history, click activity, and support signals.
5. Admin exports transactions, resends emails, inspects failed payments, and monitors top converting links and campaigns.

## 5. User portal page list

- Dashboard
- My Account
- Subscription and Billing
- Transaction History
- Usage and Access
- Notifications and Emails
- Support

## 6. Admin panel page list

- Admin Dashboard
- User Management
- User Detail
- Subscription Management
- Transaction Management
- Analytics and Tracking
- Link Click Tracking
- Email and Notification Logs
- Admin Settings

## 7. Email flow list

- Welcome email after purchase
- Purchase confirmation email
- Account access or login email
- Password reset email
- Email verification email
- Upgrade confirmation email
- Downgrade confirmation email
- Cancellation confirmation email
- Renewal success email
- Failed payment email

## 8. Landing page sections

- Sticky header
- Hero with product preview
- Social proof strip
- Problem section
- Core features
- How it works
- Deep features
- Use cases
- Comparison
- Presets and branding
- Captions and accessibility
- Pricing teaser
- FAQ
- Final CTA
- Footer

## 9. Dashboard module breakdown

### Customer dashboard

- Welcome banner with name, plan, status, renewal date, and one-click upgrade action.
- Quick actions for download app, create shareable link, manage billing, and contact support.
- Usage summary cards for exports, storage, workspace seats, or recording minutes if tracked.
- Recent activity feed showing purchase, export, password change, plan change, and invoice events.
- Notification rail for billing reminders, product updates, and failed payment warnings.

### Admin dashboard

- KPI cards for total users, paid users, active subscriptions, canceled subscriptions, MRR, ARR, failed payments, and churn count.
- Trend charts for signups, revenue, cancellations, and plan distribution.
- Recent signups and recent transactions tables.
- Alert panels for failed payments, expiring cards, and email delivery failures.
- Top clicked links and conversion by source widgets.

## 10. Data fields required for users, subscriptions, transactions, and link clicks

### Users

- `id`
- `email`
- `emailVerifiedAt`
- `passwordHash`
- `fullName`
- `companyName`
- `role`
- `status`
- `billingContactName`
- `billingContactEmail`
- `avatarUrl`
- `createdAt`
- `updatedAt`
- `lastLoginAt`
- `timezone`
- `marketingSource`

### Subscriptions

- `id`
- `userId`
- `planId`
- `billingInterval`
- `status`
- `trialEndsAt`
- `currentPeriodStart`
- `currentPeriodEnd`
- `cancelAtPeriodEnd`
- `canceledAt`
- `reactivatedAt`
- `seatCount`
- `stripeCustomerId`
- `stripeSubscriptionId`
- `defaultPaymentMethodId`
- `createdAt`
- `updatedAt`

### Transactions

- `id`
- `userId`
- `subscriptionId`
- `invoiceId`
- `amount`
- `currency`
- `status`
- `paymentMethodBrand`
- `paymentMethodLast4`
- `transactionType`
- `description`
- `processorReference`
- `processedAt`
- `createdAt`

### Link clicks

- `id`
- `userId`
- `linkId`
- `campaignId`
- `source`
- `medium`
- `referrer`
- `destinationUrl`
- `clickedAt`
- `ipHash`
- `userAgent`
- `sessionId`
- `isUnique`
- `converted`
- `convertedAt`

## 11. UX/content suggestions for each important page

### Landing page

- Lead with the promise and the preview UI before deeper product detail.
- Keep sections short, contrast-rich, and easy to scan with bold headlines and clear proof points.
- Use one primary CTA repeatedly: start free trial.

### Sign up

- Offer email and SSO if available.
- Reinforce that account access is unlocked after purchase or trial start.
- Show billing reassurance and privacy copy near the submit button.

### Login

- Keep the form minimal.
- Add links for forgot password, email verification resend, and support contact.

### Forgot password and reset password

- Show a quiet-success state even if the email does not exist.
- Explain token expiry clearly and give a resend route.

### Email verification

- State why verification matters: secure billing, account recovery, and team access.
- Include a resend action with cooldown messaging.

### Customer dashboard

- Put current plan, status badge, next billing date, and primary actions above the fold.
- Use cards for clarity, not dense tables, on the first screen.

### My Account

- Separate profile, password, and billing contact into distinct form cards.
- Show save confirmation inline, not only with a toast.

### Subscription and Billing

- Use status badges: Active, Trial, Past Due, Canceled, Expired.
- Make plan upgrade primary, downgrade secondary, and cancellation destructive but reversible until confirmation.
- Show immediate effects and next invoice impact before the user confirms.

### Transaction History

- Use a dense but readable table with invoice number, date, amount, status, and download action.
- Allow date filtering and CSV export on admin side.

### Usage and Access

- Explain how to access software, download builds, activate seats, and what plan features are enabled.
- Show clear empty states for users who have not activated their app access yet.

### Notifications

- Group by billing, account, and product updates.
- Let users mark items as read and review sent emails.

### Support

- Offer FAQ, help center, contact form, and a route for purchase-related issues.

### Admin users list

- Use fast filters for plan, status, and recent signup windows.
- Make row detail reveal key metadata without leaving the list when possible.

### Admin analytics

- Default to the last 30 days.
- Keep date filters global across charts and tables.
- Pair trend charts with precise metric cards and export actions.

## 12. Full copy suggestions

### Welcome email

Subject: Welcome to BrandName

Hi {{first_name}},

Thank you for choosing BrandName. Your account has been created and your {{plan_name}} plan is now active.

Account email: {{email}}
Set your password: {{password_setup_link}}
Login link: {{login_link}}

With BrandName, you can record product demos, tutorials, onboarding videos, support walkthroughs, and social-ready clips from one polished workflow.

Recommended next steps:
- Sign in and complete your account setup
- Download the app or open your workspace
- Create your first recording preset
- Review your billing details and invoice history

If you need help getting started, contact us at {{support_email}}.

BrandName Support

### Purchase confirmation email

Subject: Your BrandName purchase is confirmed

Hi {{first_name}},

Your purchase was successful and your subscription is now active.

Plan: {{plan_name}}
Billing interval: {{billing_interval}}
Amount paid: {{amount}}
Invoice: {{invoice_number}}
Billing date: {{billing_date}}

You can review your billing history, manage your subscription, and access your account from the customer portal:
{{portal_link}}

Thank you for choosing BrandName.

### Cancellation email

Subject: Your BrandName subscription has been canceled

Hi {{first_name}},

This confirms that your BrandName subscription has been canceled.

Plan: {{plan_name}}
Access until: {{access_end_date}}
Cancellation effective: {{cancellation_date}}

You can continue using your subscription features until the end of the current billing period unless stated otherwise in your account.

If you change your mind before access ends, you can reactivate your subscription from the billing section of your portal:
{{portal_billing_link}}

If there is anything we could have done better, reply to this email. We read every response.

## 13. Suggested database entities / models

- `User`
- `Organization`
- `Membership`
- `Plan`
- `Subscription`
- `SubscriptionChange`
- `PaymentMethod`
- `Invoice`
- `Transaction`
- `Notification`
- `EmailLog`
- `PasswordResetToken`
- `EmailVerificationToken`
- `InviteToken`
- `Session`
- `AuditLog`
- `Link`
- `LinkClick`
- `Campaign`
- `Event`
- `SupportTicket`

## 14. Recommended navigation structure

### Public

- Top nav: Product, Features, Use Cases, Pricing, FAQ, Sign in
- Header CTA: Start free trial
- Footer: Product, Company, Legal, Support

### Customer portal

- Sidebar: Dashboard, Subscription, Transactions, Access, Notifications, Support
- Utility nav: Account, Billing status badge, Help, Logout

### Admin

- Sidebar: Overview, Users, Subscriptions, Transactions, Analytics, Links, Emails, Settings
- Top bar: Global search, date range, export, admin profile

## 15. Best modern UI layout recommendations

- Use a high-contrast dark marketing header with light content sections for rhythm.
- Use a persistent left sidebar for portal and admin experiences.
- Keep KPI cards short and visually strong with clear trend deltas.
- Use rounded 2xl to 3xl cards, clean border treatments, and restrained shadow depth.
- Use chart cards with adjacent summary stats, not charts floating without numbers.
- Favor compact tables with sticky headers and filter bars.
- Use badges consistently for plan and billing states.
- Reserve destructive color only for cancellation or failed payment states.
- Use empty states that explain the next action, not just absence of data.

## 16. Copy-paste-ready prompt for generating the actual UI screens in Next.js

```text
Create a premium SaaS UI in Next.js App Router with TypeScript and Tailwind CSS for a product called BrandName. Build the following screens with reusable components, clean architecture, responsive layouts, and accessible forms: sign up, login, forgot password, reset password, verify email, customer dashboard, my account, subscription and billing, transaction history, usage and access, notifications, support center, admin dashboard, admin users list, user detail, subscriptions management, transactions management, analytics, link click tracking, and email logs. Use a polished startup-grade visual style with rounded 2xl and 3xl cards, sticky sidebars for app areas, premium data tables, KPI cards, chart placeholders, clear status badges, empty states, and Stripe-style billing UX. Product promise: Record once. Polish quickly. Publish everywhere. Include support for Starter, Pro, and Team plans; active, trial, canceled, past due, and expired states; invoice downloads; upgrade, downgrade, cancellation, renewal, and reactivation flows. Keep copy concise, conversion-focused, and professional.
```
