// components/ui/status-badge.tsx
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: 'Active' | 'Inactive' | 'Pending';
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const styles = {
    Active: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Inactive: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  };

  return (
    <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium flex items-center gap-1.5 w-fit", styles[status])}>
      <span className={cn("w-1.5 h-1.5 rounded-full", status === 'Active' ? 'bg-green-500' : status === 'Inactive' ? 'bg-red-500' : 'bg-amber-500')} />
      {status}
    </span>
  );
};