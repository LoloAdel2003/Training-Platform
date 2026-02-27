// components/dashboard/stat-card.tsx
// import { CustomCard } from "@/components/ui/custom-card"
import { TrendingUp } from "lucide-react"
import { CustomCard } from "../settings/CustomCard";

interface StatCardProps {
  title: string;
  value: string | number;
  subtext: string;
  trend?: string;
}

export function StatCard({ title, value, subtext, trend }: StatCardProps) {
  return (
    <CustomCard className="p-6 flex flex-col justify-between min-h-[140px]">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-foreground">{value}
          {trend && (
            <span className="ml-2 text-sm text-green-500 font-normal inline-flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> {trend}
            </span>
          )}
        </h3>
      </div>
      <p className="text-xs text-muted-foreground mt-4 italic">{subtext}</p>
    </CustomCard>
  )
}