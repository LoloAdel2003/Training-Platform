
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import { InstructorTable } from "./InstructorTable";
import { InstructorOverviewChart } from "./InstructorOverviewChart";
import { StatCard } from "../../shared/StatCard";

export default function InstructorOverview() {
  return (
    <main className=" min-h-screen space-y-8">
     
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
       
        <div className="lg:col-span-3 space-y-4">
          <StatCard title="Total Instructor" value="11,040" percentage="14.4%" isUp={true} />
          <StatCard title="New Instructor" value="2,370" percentage="20%" isUp={true} />
          <StatCard title="Visitor" value="250k" percentage="12%" isUp={true} />
        </div>

        {/* الرسم البياني الكبير */}
        <div className="lg:col-span-9 bg-card p-6 rounded-2xl border-soft shadow-medium">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold">Instructor Overview</h2>
              <div className="flex gap-6 mt-2">
                <div><p className="text-2xl font-bold">25k</p><p className="text-[10px] text-muted-soft">Active Instructor</p></div>
                <div><p className="text-2xl font-bold">5.6k</p><p className="text-[10px] text-muted-soft">New Instructor</p></div>
              </div>
            </div>
            <div className="flex bg-muted p-1 rounded-lg gap-1">
              <button className="px-3 py-1 text-xs bg-background rounded shadow-sm">This week</button>
              <button className="px-3 py-1 text-xs text-muted-soft">Last week</button>
            </div>
          </div>
          <InstructorOverviewChart />
        </div>
      </div>

      {/* البحث والجدول */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input className="pl-10 h-11 bg-card" placeholder="Search for id, name instructor" />
        </div>
        <div className="max-w-full">
        <InstructorTable />

        </div>
      </div>
    </main>
  );
}