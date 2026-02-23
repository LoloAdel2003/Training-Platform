// components/attendance/attendance-table.tsx
import { AttendanceRecord } from "@/api/type/attendance";
import { cn } from "@/lib/utils";
// import { StatusBadge } from "../ui/status-badge";
// import { AttendanceRecord } from 
import { Edit2, Link as LinkIcon } from "lucide-react"; // npm i lucide-react
import StatusBadge from "./statusBadge";

export const AttendanceTable = ({ data }: { data: AttendanceRecord[] }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border-soft shadow-medium bg-card">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 text-muted-foreground font-semibold border-b border-soft">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4">Instructor</th>
              <th className="px-6 py-4">Topic</th>
              <th className="px-6 py-4">Attendance Status</th>
              <th className="px-6 py-4">Note (Student)</th>
              <th className="px-6 py-4">Excuse Status</th>
              <th className="px-6 py-4">Actions</th>
              <th className="px-6 py-4 text-right">Recorded URL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-soft">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-accent/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">{row.date}</td>
                <td className="px-6 py-4 text-muted-foreground">{row.time}</td>
                <td className="px-6 py-4 font-medium">{row.instructor}</td>
                                <td className="px-6 py-4 font-medium">{row.topic}</td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {row.status === 'Present' && <span className="text-green-500">✔</span>}
                    {row.status === 'Absent' && <span className="text-red-500">✖</span>}
                    <span className={cn(
                      row.status === 'Present' ? "text-green-600" : 
                      row.status === 'Absent' ? "text-red-600" : "text-foreground"
                    )}>
                      {row.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-muted-foreground italic">{row.note || "-"}</td>
                <td className="px-6 py-4">
                  {row.excuseStatus ? (
                    <span className={row.excuseStatus === 'Accepted' ? 'text-green-500' : 'text-red-500'}>
                      {row.excuseStatus}
                    </span>
                  ) : "-"}
                </td>
                <td className="px-6 py-4">
                  <button className="flex items-center gap-1 text-primary hover:underline font-medium">
                    <Edit2 size={14} /> Edit
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  {row.recordedUrl ? (
                    <a href={row.recordedUrl} className="text-primary hover:opacity-70 inline-flex items-center gap-1">
                       <LinkIcon size={14} /> {row.recordedUrl}
                    </a>
                  ) : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};