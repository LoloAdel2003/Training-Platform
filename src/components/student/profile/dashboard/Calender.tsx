"use client"

import EventCalendar from "@/components/custome/EventCalendar"
import { CalendarEvent } from "@/components/ui/calendar"
import React from "react"
// import CalendarEvent from "@/components/ui/calendar"

export default function CalendarPage() {
  // ملاحظة: شهور الجافاسكريبت تبدأ من 0 (يناير = 0, فبراير = 1)
 const events: CalendarEvent[] = [
  {
    // Event in February 2026
    date: new Date(2026, 2, 12),
    title: "React Session",
    description:
      "Advanced React Hooks workshop covering an in-depth review of useMemo and useCallback, with practical performance optimization examples.",
    color: "#3b82f6", // Blue
  },
  {
    date: new Date(2026, 2, 15),
    title: "JavaScript Quiz",
    description:
      "Short quiz on ES6 and asynchronous JavaScript concepts, including Promises, async/await, and Generators.",
    color: "#ef4444", // Red
  },
  {
    date: new Date(2026, 1, 20),
    title: "Project Submission",
    description:
      "Final web project submission deadline. All files must be submitted before 12:00 AM. Late submissions may not be accepted.",
    color: "#22c55e", // Green
  },
]


  return (
    <div className="flex justify-center items-center ">
     
        <EventCalendar events={events} />
     
    </div>
  )
}