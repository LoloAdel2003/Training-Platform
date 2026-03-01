"use client"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Online", value: 52.7, color: "var(--primary)" },
  { name: "Recorded", value: 33.5, color: "var(--chart-1)" },
  { name: "On-site", value: 13.8, color: "var(--chart-2)" },
];

export const CourseTypesChart = () => {
  return (
    <div className="h-[200px] w-full flex items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-2 ml-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <span className="font-bold">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};