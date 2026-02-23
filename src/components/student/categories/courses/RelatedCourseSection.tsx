"use client";


import CourseCard, { Course } from "@/components/student/cards/CourseCard";
import React from "react";
// import CourseSlider from "../slider/CourseSlider";
// import { Course } from ""
const RelatedCourses: Course[] = [
  {
    id: "1",
    title: "Web Development ",
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
    level: "All Levels",
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
 
];

const RelatedCourse = () => {
  return (
    <section className="card-grid">
{RelatedCourses.map((course) => (
  <CourseCard key={course.id} card={course} />
))}
     {/* <CourseSlider courses={RelatedCourses} /> */}
       </section>
  );
};

export default RelatedCourse;
