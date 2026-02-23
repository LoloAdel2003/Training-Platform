"use client";

import { useState } from "react";
// import { mockLecture } from "@/data/mockLecture";
// import { DynamicCourseSidebar } from 
// import { DynamicLectureContent } from "@/components/course/DynamicLectureContent";
import { Card } from "@/components/ui/card";
// import { Lecture } from "@/types/lecture";
import { DynamicLectureContent } from "@/components/student/categories/courses/lecture/ContentArea";
import { DynamicCourseSidebar } from "@/components/student/categories/courses/lecture/CourseSidebar";
import { Lecture } from "@/api/type/lecture";

export const mockLecture: Lecture = {
  id: "1",
  title: "Introduction to React",
  content: [
    {
      id: "desc",
      type: "description",
      label: "Lecture Description",
      content:
        "This React course is designed to take you from the fundamentals to advanced concepts in modern web development. You will start by learning the core building blocks of React, such as components, props, and state, before moving on to more complex topics like hooks, context API, and routing. Through hands-on projects, you’ll gain practical experience in building dynamic and responsive web applications. By the end of the course, you will be confident in creating scalable React apps, connecting them to APIs, and deploying them online with best practices.",
    },
    {
      id: "video1",
      type: "video",
      label: "What is React?",
      url: "https://www.youtube.com/embed/dGcsHMXbSOA",
      duration: "07:31",
    },
    {
      id: "video2",
      type: "video",
      label: "React Setup",
      url: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      duration: "09:12",
    },
    {
      id: "file1",
      type: "file",
      label: "React Cheatsheet",
      size: "2.4 MB",
      fileUrl: "#",
    },
    {
      id: "comments",
      type: "comments",
      label: "Lecture Comments",
      count: 120,
    },
  ],
};

export default function LecturePage() {
  const [activeId, setActiveId] = useState(mockLecture.content[0].id);

  const activeItem = mockLecture.content.find(
    (item) => item.id === activeId
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <DynamicCourseSidebar
        items={mockLecture.content}
        activeId={activeId}
        onSelect={setActiveId}
      />

      <Card className="flex-1 min-h-[500px] p-8">
        <DynamicLectureContent item={activeItem} />
      </Card>
    </div>
  );
}
