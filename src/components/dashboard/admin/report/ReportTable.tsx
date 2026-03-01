import { Eye, Edit3, Trash2 } from "lucide-react";
import { ReportStatusBadge } from "./ReportStatusBadge";
import { Button } from "@/components/ui/button";

interface Report {
  id: string;
  reportId: string;
  entity: { name: string; type: 'Student' | 'Teacher' | 'Org'; avatar?: string };
  submitted: string;
  replied: string | null; // السماح بكون القيمة فارغة
  status: 'Pending' | 'Resolved' | 'Closed' | 'In Progress';
}

const reports: Report[] = [
  { id: '1', reportId: 'art12', entity: { name: 'Ahmed Ali', type: 'Student' }, submitted: '01-01-2025', replied: null, status: 'Pending' },
  { id: '2', reportId: 'art44', entity: { name: 'Dr. Sarah Mahmoud', type: 'Teacher' }, submitted: '01-01-2025', replied: '05-01-2025', status: 'Closed' },
  { id: '3', reportId: 'art55', entity: { name: 'Tech University', type: 'Org' }, submitted: '01-01-2025', replied: '03-01-2025', status: 'Resolved' },
  { id: '4', reportId: 'art66', entity: { name: 'Lina Hassan', type: 'Student' }, submitted: '01-01-2025', replied: null, status: 'In Progress' },
];

export function ReportTable() {
  return (
    <div className="bg-card rounded-[var(--radius)] border border-border overflow-hidden shadow-medium">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead className="bg-muted/30 border-b border-border">
            <tr>
              <th className="py-5 px-6 text-right font-bold text-sm text-muted-foreground w-[80px]">No.</th>
              <th className="py-5 px-6 text-right font-bold text-sm text-muted-foreground">Report ID</th>
              <th className="py-5 px-6 text-center font-bold text-sm text-muted-foreground">Sender</th>
              <th className="py-5 px-6 text-right font-bold text-sm text-muted-foreground">Submission Date</th>
              <th className="py-5 px-6 text-right font-bold text-sm text-muted-foreground">Date Replied</th>
              <th className="py-5 px-6 text-center font-bold text-sm text-muted-foreground">Status</th>
              <th className="py-5 px-6 text-center font-bold text-sm text-muted-foreground">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-border/50">
            {reports.map((report, idx) => (
              <tr 
                key={report.id} 
                className="hover:bg-primary/[0.02] transition-colors group"
              >
                {/* No. */}
                <td className="py-6 px-6 text-sm font-medium text-foreground/70">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </td>

                {/* ID */}
                <td className="py-6 px-6 text-sm font-mono font-semibold text-primary/80">
                  #{report.reportId}
                </td>

                {/* Sender */}
                <td className="py-6 px-6">
                  <div className="flex flex-col items-center gap-1 min-w-[140px]">
                    <span className="font-bold text-sm text-foreground">{report.entity.name}</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-bold uppercase tracking-widest border border-border/20">
                      {report.entity.type}
                    </span>
                  </div>
                </td>

                {/* Submitted Date */}
                <td className="py-6 px-6 text-sm text-muted-foreground whitespace-nowrap">
                  {report.submitted}
                </td>

                {/* Date Replied (العمود الجديد) */}
                <td className="py-6 px-6 text-sm text-muted-foreground whitespace-nowrap">
                  {report.replied ? report.replied : "—"} 
                  {/* استخدمت شرطة — بدلاً من الفراغ التام ليعرف المستخدم أن القيمة غير موجودة وليست خطأ في التحميل */}
                </td>

                {/* Status */}
                <td className="py-6 px-6">
                  <div className="flex justify-center">
                    <ReportStatusBadge status={report.status} />
                  </div>
                </td>

                {/* Actions */}
                <td className="py-6 px-6">
                  <div className="flex justify-center gap-1">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-9 w-9 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all"
                    >
                      <Eye size={18}/>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-9 w-9 text-muted-foreground hover:text-accent-foreground hover:bg-accent rounded-full transition-all"
                    >
                      <Edit3 size={17}/>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-all"
                    >
                      <Trash2 size={18}/>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}