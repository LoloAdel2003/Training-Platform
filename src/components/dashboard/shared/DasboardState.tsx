// components/dashboard/stats-card.tsx
import { cn } from "@/lib/utils"
import { ArrowUpRight, LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  trend: string
  icon: LucideIcon
  color: string
}

export function DashboardState({ title, value, trend, icon: Icon, color }: StatsCardProps) {
  return (
    <div className="bg-card p-6 rounded-md  border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-black mt-1">{value}</h3>
        </div>
        <div 
          className="p-3 rounded-2xl" 
          style={{ backgroundColor: `${color}15`, color: color }}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs font-bold text-emerald-500 bg-emerald-500/10 w-fit px-2 py-1 rounded-lg">
        <ArrowUpRight className="h-3 w-3" />
        {trend}
        <span className="text-muted-foreground font-normal ml-1">Up last month</span>
      </div>
    </div>
  )
}