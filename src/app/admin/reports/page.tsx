// app/dashboard/reports/page.tsx
// import { StatsOverview } from "@/components/dashboard/StatsCharts";
// import { ReportTable } from "@/components/dashboard/ReportTable";
import { ReportTable } from "@/components/dashboard/admin/report/ReportTable";
import { StatsOverview } from "@/components/dashboard/admin/report/StatsCharts";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

export default function ReportsPage() {
  return (
    <main className="">
      {/* Header مع البحث */}
       {/* الإحصائيات */}
      <StatsOverview />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="relative w-full max-w-sm">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search Report..." className="pr-10 rounded-xl bg-card border-none shadow-small" />
        </div>
        
        <Tabs defaultValue="all" className="bg-card p-1 rounded-xl shadow-small">
          <TabsList className="bg-transparent gap-2">
            <TabsTrigger value="all" className="rounded-lg px-6">All <span className="mr-2 opacity-50">(1004)</span></TabsTrigger>
            <TabsTrigger value="pending" className="rounded-lg">Pending</TabsTrigger>
            <TabsTrigger value="resolved" className="rounded-lg">Resolved</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

     

      {/* الجدول */}
      <ReportTable />
    </main>
  );
}