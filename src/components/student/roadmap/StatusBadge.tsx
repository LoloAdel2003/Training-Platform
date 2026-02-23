// components/roadmap/StatusBadge.tsx
import { Status } from "@/api/type/roadmap";
import { CheckCircle2, CircleDashed, Circle } from "lucide-react";

export const StatusBadge = ({ status }: { status: Status }) => {
  const statusConfig = {
    completed: { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, label: "Completed" },
    "in-progress": { icon: <CircleDashed className="w-4 h-4 text-orange-500 animate-spin-slow" />, label: "In Progress" },
    "not-started": { icon: <Circle className="w-4 h-4 text-muted-foreground" />, label: "Not Started" },
  };

  return (
    <div className="flex items-center gap-1.5">
      {statusConfig[status].icon}
    </div>
  );
};