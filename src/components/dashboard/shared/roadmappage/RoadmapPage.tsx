
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { StatCard } from "../StatCard";
import Link from "next/link";
import { RoadmapFilters } from "./RoadmapFilter";
import { RoadmapTable } from "./RoadmapTable";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen space-y-6">
      {/* 1. Header Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Roadmaps" value="1,240" percentage="14.4%" isUp={true} />
        <StatCard title="New Roadmaps" value="240" percentage="20%" isUp={true} />
        <StatCard title="Completed Roadmaps" value="960" percentage="85%" isUp={true} />
        <StatCard title="Deleted Roadmaps" value="87" percentage="5%" isUp={false} />
      </div>

      {/* 2. Main Section */}
      <div className="bg-card p-6 rounded-2xl shadow-large border-soft">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold">Roadmaps Management</h2>
            <p className="text-sm text-muted-soft">Manage all your created roadmaps in one place.</p>
          </div>
          <Button variant="default">
            <Link href="newroadmap" className="flex" >
            <Plus className="w-5 h-5" /> New Roadmap
            </Link>
          </Button>
        </div>

        <RoadmapFilters />
        <RoadmapTable />
      </div>
    </div>
  );
}