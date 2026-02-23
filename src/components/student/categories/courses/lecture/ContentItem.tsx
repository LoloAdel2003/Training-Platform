// components/course/ContentItem.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentItemProps {
  icon: ReactNode;
  label: string;
  meta?: string;
  isActive?: boolean;
}

export const ContentItem = ({ icon, label, meta, isActive }: ContentItemProps) => (
  <div className={cn(
    "flex items-center justify-between p-2 rounded-md transition-all cursor-pointer group",
    isActive ? "bg-accent text-accent-foreground" : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
  )}>
    <div className="flex items-center gap-3">
      <span className="text-lg opacity-70 group-hover:opacity-100">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
    {meta && <span className="text-xs opacity-60 font-mono">{meta}</span>}
  </div>
);