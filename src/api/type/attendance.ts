// types/attendance.ts
export type AttendanceStatus = 'Present' | 'Absent' | 'Upcoming' | 'Transferred';

export interface AttendanceRecord {
  id: string;
  date: string;
  time: string;
  instructor: string;
  topic: string;
  status: AttendanceStatus;
  note?: string;
  excuseStatus?: string;
  recordedUrl?: string;
}