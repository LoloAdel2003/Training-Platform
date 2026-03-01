"use client"
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// بيانات تجريبية تحاكي التعرجات في الصورة
const data = [
  { name: '1 Aug', uv: 4000 },
  { name: '5 Aug', uv: 4500 },
  { name: '10 Aug', uv: 3800 },
  { name: '15 Aug', uv: 5100 }, // نقطة القمة
  { name: '20 Aug', uv: 4200 },
  { name: '25 Aug', uv: 4800 },
  { name: '30 Aug', uv: 4000 },
];

export const RevenueChart = () => {
  return (
    <div className="h-[250px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            {/* تدرج لوني تحت الخط ليطابق الستايل الخاص بك */}
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--popover)', 
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border)',
              color: 'var(--foreground)'
            }}
            cursor={{ stroke: 'var(--primary)', strokeWidth: 1, strokeDasharray: '5 5' }}
          />

          <Area 
            type="monotone" // لجعل الخط متعرجاً وانسيابياً
            dataKey="uv" 
            stroke="var(--primary)" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorUv)" 
            animationDuration={1500}
          />

          {/* محاور اختيارية إذا أردت إظهارها (مخفية في الصورة الأصلية) */}
          <XAxis dataKey="name" hide />
          <YAxis hide domain={['dataMin - 500', 'dataMax + 500']} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};