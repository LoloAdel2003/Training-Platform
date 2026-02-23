import CourseCard, { Course } from '@/components/student/cards/CourseCard';
import React from 'react';



export const RecentlyVisited = () => {
  const courses :Course[] = [
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
   
  ];
  
  return (
    <div className=" space-y-6 mb-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Recently Visited courses</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded bg-gray-50 text-gray-400 hover:bg-gray-100"><span className="text-lg">←</span></button>
          <button className="p-2 rounded bg-[#EBEBFF] text-blue-600 hover:bg-blue-100"><span className="text-lg">→</span></button>
        </div>
      </div>
      
      <div className="card-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} card={course} />
        ))}
      </div>
    </div>
  );
};