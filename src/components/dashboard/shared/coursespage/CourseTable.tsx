// components/dashboard/CourseTable.tsx
import { Badge } from "@/components/ui/badge";
import { Eye, Edit, Trash2, Star, Users } from "lucide-react";
import Link from "next/link";
const courses = [
  { id: "COU-7821", name: "Advanced React Patterns", instructor: "Jane Smith", date: "12-02-2024", duration: "8 weeks", price: "89.99", students: 156, rate: 4.9, status: "Complete" },
  { id: "COU-1022", name: "UI/UX Fundamentals", instructor: "Alex Rivera", date: "15-02-2024", duration: "6 weeks", price: "59.00", students: 89, rate: 4.7, status: "In Progress" },
  { id: "COU-0043", name: "Node.js Backend Masterclass", instructor: "Robert Fox", date: "01-03-2024", duration: "10 weeks", price: "120.50", students: 230, rate: 5.0, status: "Complete" },
  { id: "COU-9910", name: "Python for Data Science", instructor: "Emily Chen", date: "10-03-2024", duration: "12 weeks", price: "95.00", students: 412, rate: 4.8, status: "In Progress" },
  { id: "COU-5521", name: "Tailwind CSS Mastery", instructor: "John Doe", date: "20-03-2024", duration: "4 weeks", price: "34.99", students: 120, rate: 4.6, status: "Complete" },
  { id: "COU-3342", name: "Next.js 14 Fullstack", instructor: "Sarah Wilson", date: "25-03-2024", duration: "9 weeks", price: "149.99", students: 302, rate: 4.9, status: "In Progress" },
];

export const CourseTable = () => (
  <div className="w-full overflow-hidden rounded-xl border border-soft shadow-medium bg-card mt-6">
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-muted/40 text-muted-foreground uppercase text-[11px] font-bold tracking-wider">
          <tr>
            <th className="p-4 whitespace-nowrap">ID</th>
            <th className="p-4">Course Name</th>
            <th className="p-4">Instructor</th>
            <th className="p-4">Students</th>
            <th className="p-4">Rating</th>
            <th className="p-4">Price</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {courses.map((course) => (
            <tr key={course.id} className="hover:bg-accent/5 transition-colors group">
              {/* ID */}
              <td className="p-4 font-mono text-[11px] text-muted-soft">{course.id}</td>
              
              {/* Course Name */}
              <td className="p-4">
                <div className="font-semibold text-foreground whitespace-nowrap">
                  {course.name}
                  <p className="text-[10px] text-muted-soft font-normal md:hidden">{course.date}</p>
                </div>
              </td>

              {/* Instructor */}
              <td className="p-4 text-muted-foreground whitespace-nowrap">{course.instructor}</td>

              {/* Students */}
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-primary/60" />
                  <span className="font-medium">{course.students}</span>
                </div>
              </td>

              {/* Rating */}
              <td className="p-4">
                <div className="flex items-center gap-1.5 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 px-2 py-1 rounded-md w-fit">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs font-bold">{course.rate}</span>
                </div>
              </td>

              {/* Price */}
              <td className="p-4 font-bold text-foreground">${course.price}</td>

              {/* Status */}
              <td className="p-4">
                <Badge 
                  className={`
                    shadow-none border-none px-3 py-1 text-[10px] font-bold
                    ${course.status === "Complete" 
                      ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400" 
                      : "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"}
                  `}
                >
                  {course.status}
                </Badge>
              </td>

              {/* Actions */}
              <td className="p-4">
                <div className="flex justify-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Link href={`courses/${course.id}`} title="View" className="cursor-pointer p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">
                    <Eye size={16} />
                  </Link>
                  {/* <button title="Edit" className="p-2 hover:bg-blue-500/10 hover:text-blue-500 rounded-lg transition-colors">
                    <Edit size={16} />
                  </button> */}
                  <button title="Delete" className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);