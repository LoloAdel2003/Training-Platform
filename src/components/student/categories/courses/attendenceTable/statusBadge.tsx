// components/ui/status-badge.tsx
import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'default';
  className?: string;
}

 const StatusBadge = ({ label, variant = 'default', className }: BadgeProps) => {
  const variants = {
    success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    danger: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    warning: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    info: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    default: "bg-secondary text-secondary-foreground"
  };

  return (
    <span className={cn("px-3 py-1 rounded-full text-xs font-medium shadow-sm", variants[variant], className)}>
      {label}
    </span>
  );
};

export default StatusBadge