// ReportStatusBadge
// components/ui/StatusBadge.tsx
import { cn } from "@/lib/utils";

type StatusType = 'Pending' | 'Resolved' | 'Closed' | 'In Progress';

export function ReportStatusBadge({ status }: { status: StatusType }) {
  const styles = {
    'Pending': "bg-secondary text-secondary-foreground shadow-sm",
    'Resolved': "bg-[oklch(0.85_0.12_160)] text-[oklch(0.35_0.12_160)]",
    'Closed': "bg-destructive/10 text-destructive border border-destructive/20",
    'In Progress': "bg-accent text-accent-foreground",
  };

  return (
    <span className={cn("px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 w-fit", styles[status])}>
      {status === 'Closed' && <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />}
      {status}
    </span>
  );
}