// types/assignment.ts
export type SubmissionStatus = 'submitted' | 'not_submitted' | 'graded' | 'pending';
export type GradingStatus = 'not_graded' | 'graded';
export interface Assignment {
  id: string;
  title: string;
  openDate: Date;
  closeDate: Date;
  description: string;
  attachmentUrl?: string;
  attachmentName?: string;
}

export interface Submission {
  assignmentId: string;
  status: SubmissionStatus;
  gradingStatus: GradingStatus;
  submittedAt?: Date;
  lastModify?:Date;
  textContent?: string;
  fileUrl?: string;
  fileName?: string;
}