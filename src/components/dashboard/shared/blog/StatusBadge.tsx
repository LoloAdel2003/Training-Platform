// components/dashboard/status-badge.tsx
import { cn } from "@/lib/utils"

export function StatusBadge({ status }: { status: 'Published' | 'Drafted' }) {
  const isPublished = status === 'Published';
  return (
    <div className={cn(
      "px-3 py-1 rounded-full text-[10px] font-bold w-fit flex items-center gap-1.5",
      isPublished ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20" : "bg-red-50 text-red-600 dark:bg-red-900/20"
    )}>
      <span className={cn("w-1.5 h-1.5 rounded-full", isPublished ? "bg-blue-600" : "bg-red-600")} />
      {status}
    </div>
  )
}