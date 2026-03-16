"use client";
// app/quiz/exam/[id]/page.tsx
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function ExamPage({ params }: { params: { id: string } }) {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 دقيقة افتراضية

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Time is up! Submitting your quiz...");
      window.close(); // إغلاق الصفحة عند انتهاء الوقت
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-app p-8">
      <div className="fixed top-4 right-4 bg-primary text-white p-4 rounded-lg shadow-lg flex items-center gap-2">
        <Clock className="w-5 h-5" />
        <span className="text-xl font-mono">{formatTime(timeLeft)}</span>
      </div>
      
      <div className="max-w-3xl mx-auto mt-20">
        <h1 className="text-3xl font-bold mb-8">Exam in Progress...</h1>
        {/* هنا تضع مكونات الأسئلة */}
        <div className="p-10 border-2 border-dashed border-soft rounded-xl text-center">
            Quiz Questions Content Goes Here
        </div>
      </div>
    </div>
  );
}