// src/components/molecules/SyllabusItem.tsx
// حسب النوع (lecture, quiz, assignment) رح نعرض أيقونة مختلفة
import { cn } from "@/lib/utils";
import { FileText, Play } from "lucide-react";
import Link from "next/link";



interface SyllabusItemProps {
  href: string;
  title: string;
  timeRange?: string;
  type: 'lecture' | 'quiz' | 'assignment';
}

export const SyllabusItem = ({ href, title, timeRange, type }: SyllabusItemProps) => (
  <Link href={href} className="flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-accent/30 transition-colors rounded-md group">
    <div className="flex items-center gap-3">
      {type === 'lecture' ? <Play className="w-4 h-4 text-muted-foreground" /> : <FileText className="w-4 h-4 text-muted-foreground" />}
      <span className="text-sm font-medium text-foreground/80 group-hover:text-primary">{title}</span>
    </div>
    {timeRange && (
      <span className="text-[10px] text-muted-foreground bg-muted/50 px-2 py-1 rounded">
        {timeRange}
      </span>
    )}
  </Link>
);