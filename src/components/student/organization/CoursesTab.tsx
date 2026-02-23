"use client";

import React from "react";
import CourseCard, { Course } from  "@/components/student/cards/CourseCard";
import { useParams } from "next/navigation";

const CoursesPage: React.FC = () => {
  const params = useParams<{ category: string }>();
const category = params.category as string;
  // بيانات مثال لكورسات
  const courses: Course[] = [
  {
    id: "1",
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript and build modern websites.",
    coverImg: "/imges/course.png",
    category: "Web",
    type: "Recorded",
    level: "Beginner",
    time: "12h",
    name: "John Doe",
    star: 4.8,
    newPrice: "$49",
    oldPrice: "$99",
  },
  {
    id: "2",
    title: "React For Beginners",
    description: "Start building interactive UIs with React.js.",
    coverImg: "/imges/course2.png",
    category: "Frontend",
    type: "Recorded",
    level: "Intermediate",
    time: "10h",
    name: "Sarah Lee",
    star: 4.9,
    newPrice: "$39",
    oldPrice: "$79",
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass",
    description: "Master UI/UX design with Figma and real projects.",
    coverImg: "/imges/course3.png",
    category: "Design",
    type: "Recorded",
    level: "All",
    time: "8h",
    name: "Mark Smith",
    star: 5.0,
    newPrice: "$59",
    oldPrice: "$119",
  },
  {
    id: "4",
    title: "Python Programming",
    description: "From basics to OOP, data structures, and automation.",
    coverImg: "/imges/hh.png",
    category: "Programming",
    type: "Recorded",
    level: "Beginner",
    time: "14h",
    name: "Emily Clark",
    star: 4.7,
    newPrice: "$29",
    oldPrice: "$69",
  },
  {
    id: "5",
    title: "Digital Marketing Essentials",
    description: "SEO, SEM, ads, analytics & social media strategies.",
    coverImg: "/imges/course.png",
    category: "Marketing",
    type: "Recorded",
    level: "All",
    time: "6h",
    name: "David Brown",
    star: 4.6,
    newPrice: "$19",
    oldPrice: "$49",
  },
  {
    id: "6",
    title: "Machine Learning Basics",
    description: "Understand ML, AI models, datasets, and algorithms.",
    coverImg: "/imges/course2.png",
    category: "AI",
    type: "Recorded",
    level: "Intermediate",
    time: "9h",
    name: "Dr. Alan",
    star: 4.9,
    newPrice: "$69",
    oldPrice: "$129",
  },
   {
    id: "10",
    title: "Python Programming",
    description: "From basics to OOP, data structures, and automation.",
    coverImg: "/imges/hh.png",
    category: "Programming",
    type: "Recorded",
    level: "Beginner",
    time: "14h",
    name: "Emily Clark",
    star: 4.7,
    newPrice: "$29",
    oldPrice: "$69",
  },
  {
    id: "11",
    title: "Digital Marketing Essentials",
    description: "SEO, SEM, ads, analytics & social media strategies.",
    coverImg: "/imges/course.png",
    category: "Marketing",
    type: "Recorded",
    level: "All",
    time: "6h",
    name: "David Brown",
    star: 4.6,
    newPrice: "$19",
    oldPrice: "$49",
  },
  {
    id: "12",
    title: "Machine Learning Basics",
    description: "Understand ML, AI models, datasets, and algorithms.",
    coverImg: "/imges/course2.png",
    category: "AI",
    type: "Recorded",
    level: "Intermediate",
    time: "9h",
    name: "Dr. Alan",
    star: 4.9,
    newPrice: "$69",
    oldPrice: "$129",
  },
];

  return (
    <div className="card-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} card={course} />
      ))}
    </div>
  );
};

export default CoursesPage;
