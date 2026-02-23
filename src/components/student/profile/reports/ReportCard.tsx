import { Report } from "@/api/type/reports";
import { Badge } from "@/components/ui/badge";
// import { Badge } from "@/components/ui/badge";
// import { Report } from "@/types/report";

const statusStyles: Record<string, string> = {
  Closed: "bg-red-100 text-red-600 hover:bg-red-100",
  "In-Progress": "bg-blue-100 text-blue-600 hover:bg-blue-100",
  Pending: "bg-yellow-100 text-yellow-600 hover:bg-yellow-100",
  Resolved: "bg-green-100 text-green-600 hover:bg-green-100",
};

export const ReportCard = ({ report }: { report: Report }) => {
  return (
    <div className="bg-card border border-gray-400 rounded-xl shadow-sm mb-6 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-400 flex justify-between items-center bg-gray-50/30 dark:bg-gray-800">
        <span className="text-muted-forground font-medium">Report ID: {report.reportId}</span>
        <Badge className={`${statusStyles[report.status]} border-none px-4 py-1 rounded-full`}>
          {report.status}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <section>
          <h3 className="font-bold text-primary mb-2">Problem Description</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {report.problemDescription}
          </p>
        </section>

        {report.reply && (
          <section>
            <h3 className="font-bold text-primary mb-2">Reply</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {report.reply}
            </p>
          </section>
        )}
      </div>
    </div>
  );
};