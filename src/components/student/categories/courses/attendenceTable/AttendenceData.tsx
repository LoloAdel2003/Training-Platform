// app/attendance/page.tsx
import { AttendanceTable } from "./AttendanceTable";
// import { PageWrapper } from "@/components/layout/page-wrapper";

const mockData = [
  {
    id: "1",
    date: "22/12/22",
    time: "10:00 AM",
    instructor: "George R.R Martin",
    topic: "Introduction to HTML",
    status: "Present",
    recordedUrl: "https://abc.in"
  },
  {
    id: "2",
    date: "23/10/2022",
    time: "12:00 PM",
    instructor: "Markus Zusak",
    topic: "CSS Basics",
    status: "Absent",
    note: "Medical Excuse",
    excuseStatus: "Accepted",
    recordedUrl: "https://abc.in"
  },
   {
    id: "3",
    date: "22/12/22",
    time: "10:00 AM",
    instructor: "George R.R Martin",
    topic: "Introduction to HTML",
    status: "Present",
    recordedUrl: "https://abc.in"
  },
  {
    id: "4",
    date: "23/10/2022",
    time: "12:00 PM",
    instructor: "Markus Zusak",
    topic: "CSS Basics",
    status: "Absent",
    note: "Medical Excuse",
    excuseStatus: "Accepted",
    recordedUrl: "https://abc.in"
  },
   {
    id: "5",
    date: "22/12/22",
    time: "10:00 AM",
    instructor: "George R.R Martin",
    topic: "Introduction to HTML",
    status: "Present",
    recordedUrl: "https://abc.in"
  },
  {
    id: "6",
    date: "23/10/2022",
    time: "12:00 PM",
    instructor: "Markus Zusak",
    topic: "CSS Basics",
    status: "Upcoming",
   
  },
];

export default function AttendanceSection() {
  return (
    <section className="">
      {/* <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-foreground">Attendance Records</h2>
        <div className="flex gap-4">
        </div>
      </div> */}
      
      <AttendanceTable data={mockData as any} />
    </section>
  );
}