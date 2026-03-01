

import { CalendarEvent } from "@/api/type/calendar";
import { MainCalendarView } from "@/components/dashboard/shared/calender/MainCalendarView";

const MOCK_EVENTS: CalendarEvent[] = [
  {
    id: "1",
    title: "Online Session: React Hooks",
    type: "session",
    date: new Date(2026, 9, 1), // October (0-indexed)
    time: "07:19 AM",
    location: "Zoom Meeting",
    description:
      "In this session, we will explore advanced hooks such as useMemo and useCallback and learn how to optimize the performance of React applications.",
    link: "https://zoom.us/j/123456",
    // color: "#3b82f6", // Blue
  },
  {
    id: "2",
    title: "On-Site Session: UI Design",
    type: "course",
    date: new Date(2026, 9, 16),
    time: "05:00 PM",
    location: "Gaza Street 101 - Room 4",
    description:
      "A hands-on workshop on designing user interfaces using Figma and converting them into Tailwind CSS code.",
    link: "https://maps.google.com",
    // color: "#f97316", // Orange
  },
  {
    id: "3",
    title: "React Quiz: Fundamentals",
    type: "quiz",
    date: new Date(2026, 9, 3), // Quiz start date
    time: "08:00 PM",
    description:
      "A short comprehensive quiz covering the fundamentals of React. It consists of 20 multiple-choice questions.",
    link: "https://quiz-platform.com",
    // color: "#a855f7", // Purple
  },
  {
    id: "4",
    title: "Assignment Deadline: Final Project",
    type: "assignment",
    date: new Date(2026, 9, 25),
    time: "10:00 PM",
    location: "React Course Portal",
    description:
      "Final deadline for submitting the course project. Please make sure to upload your code to GitHub.",
    link: "https://github.com/submit",
    // color: "#ef4444", // Red
  }
];

export default function CalendarPage() {
  return (
    <div className="">
      

      <MainCalendarView initialEvents={MOCK_EVENTS} />
      
     
    </div>
  );
}