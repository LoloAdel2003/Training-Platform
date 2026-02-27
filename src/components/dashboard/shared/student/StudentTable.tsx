// components/dashboard/student-table.tsx
// import { StatusBadge } from "../ui/status-badge";
import { Eye, MessageSquare, Trash2 } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

const students = [
  { id: "#CUST001", name: "Jane Doe", phone: "+1234567890", courses: 24, activity: "2 days ago", status: "Active" },
  { id: "#CUST002", name: "John Smith", phone: "+1234567890", courses: 5, activity: "5 hours ago", status: "Inactive" },
  // ... تكرار البيانات
] as const;

export const StudentTable = () => {
  return (
    <div className="bg-card border-soft rounded-2xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/30 border-b border-border text-[11px] uppercase tracking-wider text-muted-soft">
            <tr>
              <th className="px-6 py-4">Student Id</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Course Count</th>
              <th className="px-6 py-4">Last Activity</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {students.map((student, idx) => (
              <tr key={idx} className="hover:bg-accent/5 transition-colors group">
                <td className="px-6 py-4 font-mono text-xs text-primary">{student.id}</td>
                <td className="px-6 py-4 font-semibold">{student.name}</td>
                <td className="px-6 py-4 text-muted-foreground">{student.phone}</td>
                <td className="px-6 py-4 font-bold">{student.courses}</td>
                <td className="px-6 py-4 text-muted-soft">{student.activity}</td>
                <td className="px-6 py-4"><StatusBadge status={student.status} /></td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 hover:bg-primary/10 rounded-md text-primary"><Eye size={16}/></button>
                    <button className="p-1.5 hover:bg-blue-500/10 rounded-md text-blue-500"><MessageSquare size={16}/></button>
                    <button className="p-1.5 hover:bg-destructive/10 rounded-md text-destructive"><Trash2 size={16}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};