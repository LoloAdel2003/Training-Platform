"use client"
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis, Tooltip } from "recharts"
import { GlassCard } from "./GlassCard";
import { TrendingUp, Users, UserCheck, Building2 } from "lucide-react";

const data = [
  { name: "Students", count: 400, fill: "var(--primary)" },
  { name: "Instructors", count: 120, fill: "oklch(0.6907 0.1554 160.3454)" }, // Chart-2 color
  { name: "Organizations", count: 80, fill: "oklch(0.8214 0.1600 82.5337)" }, // Chart-3 color
];

export function StatsOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-3 mb-10">
      
      {/* بطاقة الرسم البياني الدائري - تأخذ مساحة 2/3 */}
      <GlassCard className="md:col-span-2 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        {/* لمسة فنية: دائرة ضوئية في الخلفية */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground">Sender Distribution</h3>
          <p className="text-muted-foreground text-sm mb-6">Visual breakdown of user categories</p>
          
          <div className="space-y-4">
            {data.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <div className="w-1 h-8 rounded-full" style={{ backgroundColor: item.fill }} />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.name}</p>
                  <p className="text-lg font-bold">{item.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* الـ Radial Chart */}
        <div className="h-[250px] w-full md:w-[250px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              innerRadius="30%" 
              outerRadius="100%" 
              data={data} 
              startAngle={180} 
              endAngle={-180}
            >
              <PolarAngleAxis type="number" domain={[0, 500]} angleAxisId={0} tick={false} />
              <RadialBar
                background
                dataKey="count"
                cornerRadius={15}
                label={{ fill: '#fff', position: 'insideStart', fontSize: '10px' }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
          {/* أيقونة في منتصف الرسم */}
          <div className="absolute inset-0 flex items-center justify-center">
             <Users className="text-primary/20 w-10 h-10" />
          </div>
        </div>
      </GlassCard>

      {/* بطاقة إحصائية عمودية "Floating Style" */}
      <div className="relative group">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-[var(--radius)] transition-all group-hover:bg-primary/30" />
        <GlassCard className="relative h-full border-none bg-app shadow-large flex flex-col justify-between p-8 overflow-hidden">
          {/* النقش الخلفي (Pattern) */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <TrendingUp size={120} />
          </div>

          <div>
            <div className="w-12 h-12 rounded-2xl radial-primary-bg flex items-center justify-center text-white mb-6 shadow-lg">
              <UserCheck size={24} />
            </div>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Total Reports</p>
            <h2 className="text-6xl font-black text-foreground mt-2 tracking-tighter">1,004</h2>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 text-chart-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-chart-2/10">
                <TrendingUp size={12} />
              </span>
              <span className="text-sm font-bold">+12.5%</span>
              <span className="text-muted-foreground text-xs font-normal">than last month</span>
            </div>
          </div>
        </GlassCard>
      </div>

    </div>
  )
}