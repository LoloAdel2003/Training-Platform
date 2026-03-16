// components/quiz/AttemptTable.tsx
import { Attempt } from "@/api/type/quiz";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const AttemptTable = ({ attempts }: { attempts: Attempt[] }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-foreground">Attempts</h3>
      {attempts.map((attempt) => (
        <div key={attempt.id} className="border-soft rounded-lg overflow-hidden shadow-small">
          <div className="bg-muted p-2 font-semibold px-4 border-b border-soft">
            Attempt: {attempt.number}
          </div>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium bg-muted/30 w-1/3">Status</TableCell>
                <TableCell>{attempt.status}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/30">Start</TableCell>
                <TableCell>{attempt.start}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/30">End</TableCell>
                <TableCell>{attempt.end}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/30">Duration</TableCell>
                <TableCell>{attempt.duration}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/30">Grad</TableCell>
                <TableCell>{attempt.grade}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/30">Revision</TableCell>
                <TableCell>{attempt.revision ? "Allowed" : "Not allowed"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
};