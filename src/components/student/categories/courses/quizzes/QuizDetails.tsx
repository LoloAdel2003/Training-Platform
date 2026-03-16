"use client";
// components/quiz/QuizDetails.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AttemptTable } from "./AttemptTable";
import { useRouter } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { QuizData } from "@/api/type/quiz";

interface Props {
  data: QuizData;
  params: { courseId: string; quizId: string };
}

export const QuizDetails = ({ data ,params}: Props) => {
  const router = useRouter();
  const currentAttempts = data.attempts.length;
  const hasRemainingAttempts = currentAttempts < data.maxAttempts;
  const isAvailable = new Date() < new Date(data.closesAt);

  const courseId = params.courseId
  const quizId = params.quizId

  const handleStart = () => {
    // فتح الكويز في نافذة جديدة
    window.open(`/student/courses/${courseId}/quizzes/${quizId}/quiz-data`, "_blank", "width=1000,height=800");
  };

  return (
    <div className=" space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center gap-4 text-primary">
        <Button  size="icon" onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-2xl font-bold underline underline-offset-8">
           {data.title}
        </h1>
      </div>

      {/* Info Card */}
      <Card className="bg-card shadow-medium border-soft">
        <CardContent className="p-6 space-y-4">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Opens: <span className="font-normal">{data.opensAt}</span></p>
            <p className="font-bold">Closed: <span className="font-normal">{data.closesAt}</span></p>
          </div>
          <hr className="border-soft" />
          <p className="text-muted-soft leading-relaxed">{data.description}</p>
        </CardContent>
      </Card>

      {/* Meta Info */}
      <div className="space-y-2 px-2">
        <p className="font-semibold">Number Of Attempts: {data.maxAttempts}</p>
        <p className="font-semibold">Time Duration: {data.durationMinutes}m</p>
        {data.gradingMethod && <p className="font-semibold">Grad: {data.gradingMethod}</p>}
      </div>

      {/* Attempts List */}
      {currentAttempts > 0 && <AttemptTable attempts={data.attempts} />}

      {/* Action Area */}
      <div className="flex flex-col items-center justify-center gap-6 py-10">
        {!isAvailable ? (
          <h3 className="text-2xl font-bold text-foreground">This Quiz is currently unavailable</h3>
        ) : !hasRemainingAttempts ? (
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-destructive">No more attempts allowed</h3>
            <p className="text-muted-soft">You have reached the maximum number of attempts for this {data.type.toLowerCase()}.</p>
          </div>
        ) : (
          <div className="w-full text-center space-y-6">
            {currentAttempts === 0 ? (
              <p className="max-w-2xl mx-auto text-sm text-muted-soft">
                Your attempt will be timed for {data.durationMinutes} minutes. Once you start, the countdown will begin and cannot be paused.
              </p>
            ) : null}
            
            <Button 
              onClick={handleStart}
              className="bg-[#202d6f] hover:bg-[#1a255a] text-white px-10 py-6 text-lg rounded-md"
            >
              {currentAttempts === 0 ? "Start Attempt Now" : "Start Second Attempt Now"}
            </Button>
          </div>
        )}
        
        <Button variant="outline" className="border-[#202d6f] text-[#202d6f] hover:bg-muted">
          Return To Course
        </Button>
      </div>
    </div>
  );
};