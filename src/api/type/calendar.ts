// types/calendar.ts
export type EventType = 'course' | 'project' | 'quiz' | 'assignment' | 'session';

export interface CalendarEvent {
  id: string;
  title: string;
  type: EventType;
  date: Date;
  endDate?: Date; // للفترات مثل 20-22 أكتوبر
  time?: string;
  location?: string; // مثلاً 'Online' أو 'Gaza Strat 101'
  description: string;
  link?: string;
  color?: string; // لتمييز اللون في التقويم
}