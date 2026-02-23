"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { User2 } from "lucide-react"
import { cn } from "@/lib/utils"

// بيانات كل roadmap
const roadmapData = {
  frontend: [
    { id: 1, module: "HTML Fundamentals", status: "Done", instructor: "George R.R Martin", start: "1 sep", end: "7 sep" },
    { id: 2, module: "CSS & Responsive Design", status: "Done", instructor: "Markus Suzak", start: "8 sep", end: "21 sep" },
    { id: 3, module: "JavaScript Basic", status: "In Progress", instructor: "Ankur Warikoo", start: "22 jan", end: "5 Oct" },
    { id: 4, module: "Advanced JavaScript", status: "Pending", instructor: "Unknown", start: "-", end: "-" },
    { id: 5, module: "React Fundamentals", status: "Pending", instructor: "Unknown", start: "-", end: "-" },
  ],
  backend: [
    { id: 1, module: "Node.js Basics", status: "Done", instructor: "Andrew Mead", start: "1 Jan", end: "10 Jan" },
    { id: 2, module: "Express & REST APIs", status: "In Progress", instructor: "Colt Steele", start: "11 Jan", end: "25 Jan" },
    { id: 3, module: "Databases (SQL & MongoDB)", status: "Pending", instructor: "Unknown", start: "-", end: "-" },
    { id: 4, module: "Authentication & Security", status: "Pending", instructor: "Unknown", start: "-", end: "-" },
  ],
  fullstack: [
    { id: 1, module: "Fullstack Kickoff", status: "Done", instructor: "Jane Doe", start: "1 Feb", end: "7 Feb" },
    { id: 2, module: "React + Node.js", status: "In Progress", instructor: "John Smith", start: "8 Feb", end: "21 Feb" },
    { id: 3, module: "Deployment & DevOps", status: "Pending", instructor: "Unknown", start: "-", end: "-" },
  ],
}

// دالة لتحديد لون الحالة مع دعم التيمات
type Status = "Done" | "In Progress" | "Pending"

const statusClasses: Record<Lowercase<Status>, string> = {
  done: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-700",
  "in progress": "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700",
  pending: "bg-slate-50 text-slate-500 border-slate-200 dark:bg-slate-800/30 dark:text-slate-400 dark:border-slate-600",
}

const RoadmapOverview = () => {
  const [selectedRoadmap, setSelectedRoadmap] = React.useState<keyof typeof roadmapData>("frontend")

  const data = roadmapData[selectedRoadmap]

  const renderDate = (date: string) => (
    <span
      className={cn(
        "inline-block px-2 py-1 rounded text-sm",
        date !== "-"
          ? "bg-slate-100 text-slate-700 font-medium dark:bg-slate-700/40 dark:text-slate-300"
          : "text-slate-300 dark:text-slate-500"
      )}
    >
      {date}
    </span>
  )

  return (
    <Card className="w-full border-none shadow-sm bg-white dark:bg-card py-4 my-6">
      <CardHeader className="flex flex-row items-center justify-between pb-7">
        <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">Roadmap Overview</CardTitle>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium whitespace-nowrap">
            Selected Roadmap:
          </span>
          <Select
            value={selectedRoadmap}
            onValueChange={(value) => setSelectedRoadmap(value as keyof typeof roadmapData)}
          >
            <SelectTrigger className="w-[140px] h-9 focus:ring-1">
              <SelectValue placeholder="Roadmap" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(roadmapData).map((key) => (
                <SelectItem key={key} value={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        <div className="rounded-xl border border-slate-400 dark:border-slate-700 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-800/50">
              <TableRow className="text-slate-700 dark:text-slate-300">
                <TableHead className="font-semibold h-12">Module / Step Name</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold flex items-center gap-2">
                  <User2 className="size-4 text-slate-500 dark:text-slate-400" /> Instructor
                </TableHead>
                <TableHead className="font-semibold text-center">Start Date</TableHead>
                <TableHead className="font-semibold text-center">End Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.id}
                  className="group hover:bg-slate-50/40 dark:hover:bg-slate-700/40 transition-colors h-14"
                >
                  <TableCell className="font-medium text-slate-900 dark:text-slate-100">{item.module}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn(
                        "font-medium px-2.5 py-0.5 rounded-full shadow-none",
                        statusClasses[item.status.toLowerCase() as Lowercase<Status>]
                      )}
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-600 dark:text-slate-400">{item.instructor}</TableCell>
                  <TableCell className="text-center">{renderDate(item.start)}</TableCell>
                  <TableCell className="text-center">{renderDate(item.end)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="hover:bg-slate-100 dark:hover:bg-slate-700 border-none" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive
                  className="rounded-md bg-indigo-600 text-white hover:bg-indigo-700 hover:text-white border-none shadow-sm"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="hover:bg-slate-100 dark:hover:bg-slate-700 border-none">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <span className="text-slate-300 dark:text-slate-500 px-1 font-light">...</span>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="hover:bg-slate-100 dark:hover:bg-slate-700 border-none">
                  10
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="hover:bg-slate-100 dark:hover:bg-slate-700 border-none" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  )
}

export default RoadmapOverview
