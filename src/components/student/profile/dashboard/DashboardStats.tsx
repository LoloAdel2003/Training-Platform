import React from 'react';
import { PlayCircle, Monitor, Trophy, Award } from 'lucide-react';

interface StatCardProps {
  count: string | number;
  label: string;
  icon: React.ReactNode;
  bgColor: string;
  iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ count, label, icon, bgColor, iconBgColor }) => {
  return (
    <div className={`flex items-center gap-4 p-6 rounded-lg ${bgColor} max-w-sm w-full border-primary shadow-medium flex-1`}>
      <div className={`w-14 h-14 rounded flex items-center justify-center bg-white`}>
        <div className={`text-2xl `}>
            {icon}
        </div>
      </div>
      <div>
       <h3 className="text-2xl font-bold text-foreground">{count}</h3>
<p className="text-sm text-muted-foreground whitespace-nowrap">{label}</p>
  </div>
    </div>
  );
};

export const DashboardStats = () => {
  const stats = [
    { count: '957', label: 'Enrolled Courses', icon: <PlayCircle className="text-orange-500" />, bgColor: 'bg-card', iconBgColor: 'bg-card-foreground' },
    { count: '6', label: 'Active Courses', icon: <Monitor className="text-blue-600" />, bgColor: 'bg-card', iconBgColor: 'bg-white' },
    { count: '951', label: 'Completed Courses', icon: <Trophy className="text-green-500" />, bgColor: 'bg-card', iconBgColor: 'bg-white' },
    { count: '5', label: 'Completed Roadmap', icon: <Award className="text-green-600" />, bgColor: 'bg-card', iconBgColor: 'bg-white' },
  ];

  return (
    <div className="card-grid mb-10">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};