// components/ui/hint-tooltip.tsx
import { Info } from "lucide-react";

interface HintTooltipProps {
  text: string;
}

export const HintTooltip = ({ text }: HintTooltipProps) => {
  return (
    <div className="relative flex items-center group">
      <Info className="w-4 h-4 text-muted-foreground cursor-help transition-colors group-hover:text-primary" />
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2 text-xs text-white bg-slate-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-large">
        {text}
      </div>
    </div>
  );
};