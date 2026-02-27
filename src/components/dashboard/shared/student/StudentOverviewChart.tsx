"use client";
// components/dashboard/overview-chart.tsx
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { day: "Sun", value: 12000 },
  { day: "Mon", value: 18000 },
  { day: "Tue", value: 15000 },
  { day: "Wed", value: 25000 }, // الذروة كما في الصورة
  { day: "Thu", value: 19000 },
  { day: "Fri", value: 21000 },
  { day: "Sat", value: 17000 },
];

export const StudentOverviewChart = () => {
  return (
    <div className="h-[250px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: 'var(--muted-foreground)'}} />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ borderRadius: 'var(--radius)', border: 'none', boxShadow: 'var(--shadow-lg)' }}
            cursor={{ stroke: 'var(--primary)', strokeWidth: 1, strokeDasharray: '4 4' }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="var(--primary)" 
            strokeWidth={3} 
            fillOpacity={1} 
            fill="url(#chartGradient)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};