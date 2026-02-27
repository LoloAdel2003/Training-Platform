// components/dashboard/StatCard.tsx
import { Card } from "@/components/ui/card";
import { MoreVertical, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  isUp?: boolean;
}

export const StatCard = ({ title, value, percentage, isUp }: StatCardProps) => (
  <Card className="p-5 bg-card-gradient border-soft shadow-medium flex flex-col gap-2">
    <div className="flex justify-between items-start">
      <span className="text-sm font-medium text-muted-soft">{title}</span>
      <MoreVertical className="w-4 h-4 text-muted-foreground cursor-pointer" />
    </div>
    <div className="flex items-end gap-3">
      <h3 className="text-2xl font-bold text-foreground">{value}</h3>
      <span className={`text-xs flex items-center gap-1 mb-1 ${isUp ? 'text-green-500' : 'text-destructive'}`}>
        {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {percentage}
      </span>
    </div>
    <p className="text-[10px] text-muted-foreground">Last 7 days</p>
  </Card>
);