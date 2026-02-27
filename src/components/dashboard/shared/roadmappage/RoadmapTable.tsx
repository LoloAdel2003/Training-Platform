// components/dashboard/CourseTable.tsx
import { Badge } from "@/components/ui/badge";
import { Eye, Edit, Trash2 } from "lucide-react";

const courses = [
  { id: "#COU0001", name: "Bootstrap",levels:5,date: "01-01-2025", price: "49.99", students: 20, rate: 5, status: "In Progress" },
  { id: "#COU0001", name: "Bootstrap",levels:5, date: "01-01-2025", price: "49.99", students: 20, rate: 5, status: "In Progress" },
  { id: "#COU0001", name: "Bootstrap",levels:5, date: "01-01-2025", price: "49.99", students: 20, rate: 5, status: "In Progress" },
  { id: "#COU0001", name: "Bootstrap",levels:5, date: "01-01-2025", price: "49.99", students: 20, rate: 5, status: "In Progress" },
  { id: "#COU0001", name: "Bootstrap",levels:5, date: "01-01-2025", price: "49.99", students: 20, rate: 5, status: "In Progress" },
  { id: "#COU0001", name: "Bootstrap",levels:5, date: "01-01-2025", price: "49.99", students: 20, rate: 5, status: "In Progress" },
  { id: "#COU0001", name: "Bootstrap",levels:5, date: "01-01-2025", price: "49.99", students: 20, rate: 5, status: "In Progress" },
  { id: "#COU0001", name: "Bootstrap",levels:5, date: "01-01-2025", price: "49.99", students: 20, rate: 5, status: "In Progress" },
  { id: "#COU0001", name: "Bootstrap",levels:5, date: "01-01-2025", price: "49.99", students: 20, rate: 5, status: "In Progress" },

  // ... بقية البيانات
];

export const RoadmapTable = () => (
  <div className="w-full overflow-x-auto rounded-lg border border-soft mt-6">
    <table className="w-full text-sm text-left border-collapse">
      <thead className="bg-muted/50 text-muted-soft uppercase text-[10px] font-bold">
        <tr>
          <th className="p-4">Roadmap ID</th>
          <th className="p-4">Roadmap</th>
                    <th className="p-4">Levels</th>

          <th className="p-4">Date</th>
          <th className="p-4">Price</th>
          <th className="p-4">Status</th>
          <th className="p-4 text-center">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        {courses.map((course, i) => (
          <tr key={i} className="hover:bg-accent/5 transition-colors">
            <td className="p-4 font-mono text-xs">{course.id}</td>
            <td className="p-4 font-medium">{course.name}</td>
                        <td className="p-4 font-medium">{course.levels}</td>

            <td className="p-4 text-muted-soft">{course.date}</td>
            <td className="p-4 font-bold">${course.price}</td>
            <td className="p-4">
              <Badge variant={course.status === "Complete" ? "secondary" : "outline"} 
                className={course.status === "Complete" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-none" : "text-destructive border-destructive/20"}>
                {course.status}
              </Badge>
            </td>
            <td className="p-4">
              <div className="flex justify-center gap-3 text-muted-foreground">
                <Eye className="w-4 h-4 cursor-pointer hover:text-primary" />
                <Edit className="w-4 h-4 cursor-pointer hover:text-blue-500" />
                <Trash2 className="w-4 h-4 cursor-pointer hover:text-destructive" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);