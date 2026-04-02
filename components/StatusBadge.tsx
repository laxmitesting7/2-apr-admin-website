import { cn } from "@/lib/utils";

type Status =
  | "active"
  | "trial"
  | "paid"
  | "past_due"
  | "canceled"
  | "expired"
  | "refunded"
  | "queued"
  | "delivered";

type StatusBadgeProps = {
  status: Status;
  className?: string;
};

const labels: Record<Status, string> = {
  active: "Active",
  trial: "Trial",
  paid: "Paid",
  past_due: "Past due",
  canceled: "Canceled",
  expired: "Expired",
  refunded: "Refunded",
  queued: "Queued",
  delivered: "Delivered"
};

const styles: Record<Status, string> = {
  active: "border-emerald-200 bg-emerald-50 text-emerald-700",
  trial: "border-sky-200 bg-sky-50 text-sky-700",
  paid: "border-emerald-200 bg-emerald-50 text-emerald-700",
  past_due: "border-amber-200 bg-amber-50 text-amber-700",
  canceled: "border-rose-200 bg-rose-50 text-rose-700",
  expired: "border-slate-200 bg-slate-100 text-slate-600",
  refunded: "border-violet-200 bg-violet-50 text-violet-700",
  queued: "border-slate-200 bg-slate-100 text-slate-700",
  delivered: "border-brand-200 bg-brand-50 text-brand-700"
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
        styles[status],
        className
      )}
    >
      {labels[status]}
    </span>
  );
}
