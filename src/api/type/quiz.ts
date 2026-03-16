// types/quiz.ts
export type QuizStatus = 'available' | 'unavailable' | 'completed' | 'no_attempts';

export interface Attempt {
  id: string;
  number: number;
  status: 'Finished' | 'In Progress';
  start: string;
  end: string;
  duration: string;
  grade: string | number;
  revision: boolean;
}

export interface QuizData {
  id: string;
  title: string;
  type: 'Course' | 'Project'; // نوع الكويز
  description: string;
  opensAt: string;
  closesAt: string;
  maxAttempts: number;
  durationMinutes: number;
  gradingMethod: string;
  attempts: Attempt[];
}