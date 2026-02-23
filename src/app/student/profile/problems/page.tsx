"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, PlusCircle } from "lucide-react";
import { ReportCard } from "@/components/student/profile/reports/ReportCard";
import { mockReports } from "@/api/type/reports";
 import { useState } from "react";
import Link from "next/link";

export default function ReportsPage() {
  const statuses = ["All", "Pending", "In-Progress", "Closed"];
  const [activeStatus, setActiveStatus] = useState("All");

  const filteredReports =
    activeStatus === "All"
      ? mockReports
      : mockReports.filter(
          (report) => report.status === activeStatus
        );

  return (
    <div className=" min-h-screen">
      {/* Search and Action Header */}
    

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
  
  {/* Status Tabs Filter */}
  <Tabs
    value={activeStatus}
    onValueChange={setActiveStatus}
    className="w-full md:w-auto "
  >
<TabsList className="bg-gray-200 dark:bg-gray-800 p-1 rounded-xl flex flex-wrap gap-1">
  {statuses.map((status) => (
 <TabsTrigger
  key={status}
  value={status}
  className="relative px-6 py-2 text-sm font-medium rounded-lg text-gray-600 dark:text-muted-foreground transition-all duration-200 hover:bg-gray-100 dark:hover:bg-card  hover:text-gray-900 dark:hover:text-primary-foreground  cursor-pointer  data-[state=active]:bg-white dark:data-[state=active]:bg-primary data-[state=active]:text-primary dark:data-[state=active]:text-primary-foreground data-[state=active]:shadow-small dark:data-[state=active]:shadow-small data-[state=active]:scale-[1.03]"
>
  {status}
</TabsTrigger>

     
  ))}
</TabsList>

  </Tabs>

  {/* Write New Button */}
  <Link href="/report">
   <Button className="bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground hover:bg-primaryHover dark:hover:bg-primaryHover h-11 px-8 gap-2">
  Write New
</Button>

  </Link>

</div>


  

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))
        ) : (
         <p className="text-sm text-gray-500 dark:text-muted-foreground text-center">
  No reports found for this status.
</p>

        )}
      </div>
    </div>
  );
}
