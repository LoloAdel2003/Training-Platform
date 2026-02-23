// week state  how much lecture, video ....
import { PlayCircle, HelpCircle, ClipboardList } from "lucide-react";

export const ContentStats = ({ type, count }: { type: 'lecture' | 'quiz' | 'assignment', count: number }) => {
  const configs = {
    lecture: { icon: PlayCircle, color: "text-blue-500", label: "Lectures" },
    quiz: { icon: HelpCircle, color: "text-orange-500", label: "Quiz" },
    assignment: { icon: ClipboardList, color: "text-purple-500", label: "Assignments" },
  };
  const { icon: Icon, color, label } = configs[type];
  
  return (
    <div className="flex items-center gap-1">
      <Icon className={`w-4 h-4 ${color}`} />
      <span className="text-[11px] font-medium text-muted-foreground">{count} {label}</span>
    </div>
  );
};