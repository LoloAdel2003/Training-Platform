// app/quiz/page.tsx
import { QuizData } from "@/api/type/quiz";
import { QuizDetails } from "@/components/student/categories/courses/quizzes/QuizDetails";

const mockQuiz: QuizData = {
  id: "1",
  title: "React Mastery Quiz",
  type: "Course",
  description: "Test your knowledge of React.js with this interactive quiz designed to assess your understanding of both fundamental and advanced concepts.",
  opensAt: "Monday, 10 February 2025, 12:00 AM",
  closesAt: "Saturday, 15 February 2027, 12:00 AM", // متاح حالياً
  maxAttempts: 2,
  durationMinutes: 30,
  gradingMethod: "Highest grad",
  attempts: [
    {
      id: "a1",
      number: 1,
      status: "Finished",
      start: "Monday, 10 February 2025, 12:00 AM",
      end: "Monday, 10 February 2025, 12:00 AM",
      duration: "30m",
      grade: "Not Graded",
      revision: false,
    }
  ]
};

export default function Page({ params }: { params: { courseId: string; quizId: string } }) {
  return (
    <main className="">

      <QuizDetails data={mockQuiz} params={params} />
    </main>
  );
}