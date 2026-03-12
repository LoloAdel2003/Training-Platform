// app/assignment/page.tsx
// import { AssignmentView } from "@/components/assignment/assignment-view";
"use client"
import { Assignment, Submission } from "@/api/type/assignment";
import { AssignmentView } from "@/components/student/categories/courses/assignment/AssignmentView";

const mockAssignment: Assignment = {
  id: "a1",
  title: "UX Research Assignment",
  openDate: new Date("2026-03-10T09:00:00"),
  closeDate: new Date("2026-03-20T23:59:00"),
  description: "Write a short UX research report about a mobile application.",
  attachmentUrl: "/files/ux-research-guidelines.pdf",
  attachmentName: "UXResearchGuidelines.pdf"
};
const mockSubmission: Submission = {
  assignmentId: "a1",
  status: "submitted",
  gradingStatus: "not_graded",
  submittedAt: new Date("2026-03-15T18:20:00"),
  lastModify: new Date("2026-03-15T18:20:00"),
  textContent: "This is my UX research about the Airbnb mobile application...",
};

export default function Page() {
  return (
    <main className="">
      <AssignmentView assignment={mockAssignment} submission={mockSubmission} />
    </main>
  );
}