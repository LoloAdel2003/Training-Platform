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

// تعريف البيانات
const courses = [
  { id: 1, name: "Web Development", type: "Online", lessons: 12, absent: 2, rate: "80%", status: "Active" },
  { id: 2, name: "AI Fundamentals", type: "Recorded", lessons: 8, absent: 1, rate: "90%", status: "Finished" },
  { id: 3, name: "UX Design Basics", type: "On site", lessons: 20, absent: 3, rate: "70%", status: "Active" },
]

export default function CoursesOverview() {
  return (
    <Card className="w-full border-none shadow-sm bg-white dark:bg-card py-4 my-6">
      <CardHeader className="flex flex-row items-center justify-between pb-7">
        <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Courses Overview
        </CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">
            Sort by:
          </span>
          <Select defaultValue="latest">
            <SelectTrigger className="w-[120px] h-9">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        <div className="rounded-md border border-slate-400 dark:border-slate-700 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-800/50">
              <TableRow>
                <TableHead className="font-bold text-slate-700 dark:text-slate-300">Course</TableHead>
                <TableHead className="text-slate-700 dark:text-slate-300">Type</TableHead>
                <TableHead className="text-center text-slate-700 dark:text-slate-300">Lessons Num</TableHead>
                <TableHead className="text-center text-slate-700 dark:text-slate-300">Absent</TableHead>
                <TableHead className="text-center text-slate-700 dark:text-slate-300">Attendance Rate</TableHead>
                <TableHead className="text-right text-slate-700 dark:text-slate-300">Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {courses.map((course) => (
                <TableRow
                  key={course.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-700/40 transition-colors"
                >
                  <TableCell className="font-medium text-slate-900 dark:text-slate-100">
                    {course.name}
                  </TableCell>
                  <TableCell className="text-slate-600 dark:text-slate-400">{course.type}</TableCell>
                  <TableCell className="text-center text-slate-700 dark:text-slate-300">{course.lessons}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant="outline"
                      className={cn(
                        "rounded-md px-2 font-normal",
                        course.absent > 2
                          ? "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                          : "bg-slate-100 text-slate-700 dark:bg-slate-700/40 dark:text-slate-300"
                      )}
                    >
                      {course.absent}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center font-semibold text-slate-700 dark:text-slate-300">
                    {course.rate}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span
                        className={cn(
                          "w-2 h-2 rounded-full",
                          course.status === "Active"
                            ? "bg-green-500 dark:bg-green-400"
                            : "bg-orange-500 dark:bg-orange-400"
                        )}
                      />
                      <span className="font-medium text-slate-900 dark:text-slate-100">{course.status}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="h-9" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive
                  className="h-9 w-9 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 hover:text-white border-none shadow-sm"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="h-9 w-9 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border-none"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <span className="px-2 text-slate-400 dark:text-slate-500">...</span>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="h-9 w-9 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border-none"
                >
                  10
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="h-9" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  )
}

// دالة مساعدة لتسهيل التعامل مع الـ Classes
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
