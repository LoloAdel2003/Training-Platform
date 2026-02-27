
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { StatCard } from "../StatCard";
import { CourseFilters } from "./CourseFilters";
import { CourseTable } from "./CourseTable";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="min-h-screen space-y-6">
      {/* 1. Header Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Courses" value="1,240" percentage="14.4%" isUp={true} />
        <StatCard title="New Courses" value="240" percentage="20%" isUp={true} />
        <StatCard title="Completed Courses" value="960" percentage="85%" isUp={true} />
        <StatCard title="Deleted Courses" value="87" percentage="5%" isUp={false} />
      </div>

      {/* 2. Main Section */}
      <div className="bg-card p-6 rounded-2xl shadow-large border-soft">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold">Courses Management</h2>
            <p className="text-sm text-muted-soft">Manage all your created courses in one place.</p>
          </div>
          <Button variant="default">
            <Link href="newcourse" className="flex" >
            <Plus className="w-5 h-5" /> New Course
            </Link>
          </Button>
        </div>

        <CourseFilters />
        <CourseTable />
      </div>
    </div>
  );
}