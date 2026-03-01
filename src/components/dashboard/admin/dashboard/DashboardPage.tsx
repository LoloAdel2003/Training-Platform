// app/dashboard/page.tsx
// import { StatsCard } from "@/components/dashboard/stats-card"
import { Users, BookOpen, GraduationCap, Building2, Megaphone, Layout, DollarSign, Route } from "lucide-react"
import { DashboardState } from "../../shared/DasboardState"
import DashCard from "../../shared/DasCard"
import { CourseTypesChart } from "./CourseTypesChart"
import { OverallRating } from "./OverallRating"
import { RevenueChart } from "./RevenueChart"

export default function DashboardPage() {
    const statsData = [
  // المجموعة الأولى
  { id: 1, title: "Total Courses", value: "10,789", trend: "8.5%", icon: BookOpen, color: "#6366f1" },
  { id: 2, title: "Total Students", value: "40,689", trend: "5.3%", icon: Users, color: "#8b5cf6" },
  { id: 3, title: "Total Instructors", value: "80,400", trend: "9%", icon: GraduationCap, color: "#f59e0b" },
  { id: 4, title: "Total Organization", value: "40,689", trend: "42%", icon: Building2, color: "#10b981" },
  // المجموعة الثانية
  { id: 5, title: "Total Announcement", value: "10,789", trend: "8.5%", icon: Megaphone, color: "#6366f1" },
  { id: 6, title: "Total Blogs", value: "40,689", trend: "5.3%", icon: Layout, color: "#8b5cf6" },
  { id: 7, title: "Total Earning", value: "$80,400", trend: "9%", icon: DollarSign, color: "#f59e0b" },
  { id: 8, title: "Total Roadmaps", value: "40,689", trend: "42%", icon: Route, color: "#10b981" },
];
  return (
    <div className=" space-y-8  min-h-screen">
      
      {/* 1. قسم الإحصائيات العلوية - 4 أعمدة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat) => (
            <DashboardState
            key={stat.id}
              title={stat.title}
              value={stat.value}
              trend={stat.trend}
              icon={stat.icon}
              color={stat.color}
            />
        ))}
              </div>

      

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Course Types */}
        <DashCard title="Course & Roadmap Types" className="lg:col-span-5">
          <CourseTypesChart />
        </DashCard>

        {/* Revenue */}
        <DashCard title="Revenue" className="lg:col-span-7">
             <RevenueChart/>

          
        </DashCard>

        {/* Top Ratings */}
        <DashCard title="Top Rating Course" className="lg:col-span-4">
          <div className="space-y-6">
            {["Frontend Dev", "React Dev", "Design Systems"].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent" />
                <div>
                  <p className="font-semibold text-sm">{item}</p>
                  <p className="text-xs text-muted-soft">4.8 stars</p>
                </div>
              </div>
            ))}
          </div>
        </DashCard>

        {/* Overall Rating */}
        <DashCard title="Overall Rating" className="lg:col-span-8">
          <OverallRating />
        </DashCard>

      </div>

    </div>
  )
}