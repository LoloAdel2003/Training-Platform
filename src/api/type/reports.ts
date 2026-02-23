export type ReportStatus = 'All' | 'Pending' | 'In-Progress' | 'Closed' | 'Resolved';

export interface Report {
  id: string;
  reportId: string;
  status: ReportStatus;
  problemDescription: string;
  reply?: string; // الرد من الدعم الفني
  createdAt: string;
}

// مثال لبيانات لكل حالة
export const mockReports: Report[] = [
  {
    id: "1",
    reportId: "#1001",
    status: "Closed",
    problemDescription: "The video in 'React Basics' course doesn't load. It keeps showing a black screen.",
    reply: "The video link has been updated. Please try again now.",
    createdAt: "2024-05-01"
  },
  {
    id: "2",
    reportId: "#1002",
    status: "In-Progress",
    problemDescription: "I cannot download the exercise files for the Advanced Tailwind section.",
    createdAt: "2024-05-02"
  },
  {
    id: "3",
    reportId: "#1003",
    status: "Pending",
    problemDescription: "Payment went through but the course is not showing in my dashboard.",
    createdAt: "2024-05-03"
  }
];