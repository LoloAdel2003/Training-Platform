
import { Assignment, Submission } from "@/api/type/assignment";
import { Card } from "@/components/ui/card";
import { FileCard } from "./FileCard";
import { SubmissionModal } from "./SubmissionModal";
import { StatusRow } from "./StatusRow";

export const AssignmentView = ({ assignment, submission }: { assignment: Assignment, submission?: Submission }) => {
  return (
    <div className=" space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <section className="rounded-2xl bg-card shadow-medium rounded-radius-lg p-6 border border-border">
        <h2 className="text-primary font-bold text-xl mb-6 border-b pb-2 inline-block">
          {assignment.title}
        </h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-sm font-medium">
            <span className="font-bold">Opens:</span> {assignment.openDate.toLocaleString("en-US")}
          </p>
          <p className="text-sm font-medium border-b pb-4">
            <span className="font-bold">Closed:</span> {assignment.closeDate.toLocaleString("en-US")}
          </p>
          
          <div className="pt-2">
            <p className="mb-4 text-foreground">{assignment.description}</p>
            {assignment.attachmentName && (
              <FileCard name={assignment.attachmentName} url={assignment.attachmentUrl} />
            )}
          </div>
        </div>

        <SubmissionModal existingSubmission={submission} onUpdate={(data: any) => console.log(data)} />
      </section>

      {/* Submission Status Table */}
      <section>
        <h3 className="text-xl font-bold mb-4">Submission Status</h3>
        <Card className="shadow-small border-border overflow-hidden">
          <StatusRow 
            label="Submission Status" 
            value={submission ? (
               <div className="space-y-2">
                 <span className="text-green-600 font-bold">Submitted for grading</span>
                 {submission.textContent && <p className="text-xs italic bg-muted p-2 rounded italic">"{submission.textContent}"</p>}
               </div>
            ) : "No submissions have been made yet"} 
            />
          <StatusRow label="Grading Status" value={submission?.gradingStatus || "Not graded"} />
          <StatusRow label="Time remaining" value="6 days 12 hours remaining" />
          <StatusRow label="Last modified" value={submission?.submittedAt?.toLocaleString("en-US") || "-"} isLast />
        </Card>
      </section>
    </div>
  );
};