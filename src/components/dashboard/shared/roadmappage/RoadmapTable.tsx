import { Badge } from "@/components/ui/badge";
import { Eye, Trash2, Star, Users, Layers, UserCircle } from "lucide-react";
const roadmaps = [
  { id: "#RD-2024-01", name: "Fullstack Next.js Mastery", instructor: "John Doe", levels: 12, date: "15-01-2025", price: "199.99", students: 1240, rate: 4.9, status: "In Progress" },
  { id: "#RD-2024-02", name: "DevOps Engineering Path", instructor: "Jane Smith", levels: 8, date: "01-02-2025", price: "149.50", students: 850, rate: 4.7, status: "In Progress" },
  { id: "#RD-2024-03", name: "Mobile App Dev (Flutter)", instructor: "Bob Johnson", levels: 10, date: "10-02-2025", price: "129.99", students: 620, rate: 4.5, status: "Complete" },
  { id: "#RD-2024-04", name: "Data Science Roadmap", instructor: "Alice Williams", levels: 15, date: "20-02-2025", price: "249.00", students: 2100, rate: 5.0, status: "In Progress" },
  { id: "#RD-2024-05", name: "Frontend Specialist", instructor: "Charlie Brown", levels: 7, date: "31-12-2024", price: "89.99", students: 3400, rate: 4.8, status: "Complete" },
  { id: "#RD-2024-06", name: "Cyber Security Fundamentals", instructor: "David Wilson", levels: 9, date: "05-03-2025", price: "175.00", students: 430, rate: 4.6, status: "In Progress" },
];
export const RoadmapTable = () => (
  <div className="w-full overflow-hidden rounded-xl border border-soft mt-6 bg-card shadow-medium">
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-muted/40 text-muted-soft uppercase text-[11px] font-bold tracking-wider border-b border-border">
          <tr>
            <th className="p-4">ID</th>
            <th className="p-4">Roadmap</th>
            <th className="p-4">Instructor</th>
            <th className="p-4 text-center">Levels</th>
            <th className="p-4 text-center">Students</th>
            <th className="p-4 text-center">Rating</th>
            <th className="p-4">Price</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60">
          {roadmaps.map((roadmap) => (
            <tr key={roadmap.id} className="hover:bg-accent/5 transition-colors group">
              {/* Roadmap ID */}
              <td className="p-4 font-mono text-[10px] text-muted-foreground">{roadmap.id}</td>
              
              {/* Roadmap Name */}
              <td className="p-4">
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground">{roadmap.name}</span>
                  <span className="text-[10px] text-muted-soft">Starts: {roadmap.date}</span>
                </div>
              </td>

              {/* Instructor */}
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <UserCircle size={16} className="text-muted-foreground" />
                  <span className="font-medium">{roadmap.instructor}</span>
                </div>
              </td>

              {/* Levels */}
              <td className="p-4 text-center">
                <div className="flex items-center justify-center gap-1 text-primary">
                  <Layers size={14} />
                  <span className="font-bold">{roadmap.levels}</span>
                </div>
              </td>

              {/* Students */}
              <td className="p-4 text-center">
                <div className="flex items-center justify-center gap-1.5 font-medium">
                  <Users size={14} className="text-muted-foreground" />
                  {roadmap.students.toLocaleString()}
                </div>
              </td>

              {/* Rating */}
              <td className="p-4 text-center">
                <div className="flex items-center justify-center gap-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 px-2 py-1 rounded-full w-fit mx-auto">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs font-bold">{roadmap.rate}</span>
                </div>
              </td>

              {/* Price */}
              <td className="p-4 font-bold text-foreground">${roadmap.price}</td>

              {/* Status */}
              <td className="p-4">
                <Badge 
                  variant={roadmap.status === "Complete" ? "secondary" : "outline"} 
                  className={`
                    px-3 py-0.5 rounded-full text-[10px] font-bold border-none
                    ${roadmap.status === "Complete" 
                      ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" 
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"}
                  `}
                >
                  {roadmap.status}
                </Badge>
              </td>

              {/* Actions */}
              <td className="p-4">
                <div className="flex justify-center gap-2">
                  <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-md transition-all">
                    <Eye size={16} />
                  </button>
                  <button className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-md transition-all">
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