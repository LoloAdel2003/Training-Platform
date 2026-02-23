import CategoryCard from "@/components/student/cards/CategoryCard";
import CourseCard, { Course } from "@/components/student/cards/CourseCard";
import RoadmapCard, { RoadmapCardType } from "@/components/student/cards/RoadmapCard";
import React from "react";
type ContentPageProps = {
  type: "courses" | "roadmaps"
};

const ContentPage: React.FC<ContentPageProps> = ({ type }) => {
    const RoadmapsItem: RoadmapCardType[] = [
        {
          id: "1r",
           image: "/imges/course.png",
    
          title: "Web Development Bootcamp",
          description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
          InstuctorName: "John Doe",
    level: "Beginner",
          type: "Recorded",
          
          price: "$49",
         time:"15",
         star:4
        },
         {
          id: "2r",
           image: "/imges/course2.png",
    
          title: "Web Development Bootcamp",
          description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
          InstuctorName: "John Doe",
    level: "Beginner",
          type: "Recorded",
          
          price: "$49",
         time:"15",
         star:4
        },
         {
          id: "3r",
           image: "/imges/course3.png",
    
          title: "Web Development Bootcamp",
          description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
          InstuctorName: "John Doe",
    level: "Beginner",
          type: "Recorded",
          
          price: "$49",
         time:"15",
         star:4
        },
         {
          id: "4r",
           image: "/imges/course.png",
    
          title: "Web Development Bootcamp",
          description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
          InstuctorName: "John Doe",
    level: "Beginner",
          type: "Recorded",
          
          price: "$49",
         time:"15",
         star:4
        },
         {
          id: "5r",
           image: "/imges/course.png",
    
          title: "Web Development Bootcamp",
          description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
          InstuctorName: "John Doe",
    level: "Beginner",
          type: "Recorded",
          
          price: "$49",
         time:"15",
         star:4
        },
         {
          id: "6r",
           image: "/imges/course2.png",
    
          title: "Web Development Bootcamp",
          description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
          InstuctorName: "John Doe",
    level: "Beginner",
          type: "Recorded",
          
          price: "$49",
         time:"15",
         star:4
        },
         {
          id: "7r",
           image: "/imges/course3.png",
    
          title: "Web Development Bootcamp",
          description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
          InstuctorName: "John Doe",
    level: "Beginner",
          type: "Recorded",
          
          price: "$49",
         time:"15",
         star:4
        },
         {
          id: "8r",
           image: "/imges/course.png",
    
          title: "Web Development Bootcamp",
          description: "Learn everything you need to become a professional frontend developer, from the basics of HTML, CSS, and JavaScript to advanced frameworks",
          InstuctorName: "John Doe",
    level: "Beginner",
          type: "Recorded",
          
          price: "$49",
         time:"15",
         star:4
        },
        
      ]; 
      const recordedCourses: Course[] = [
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
      ];

  return (
    <div className="card-grid mb-6 mt-6 md:mt-8">
      {type === "courses"
        ? RoadmapsItem.map((roadmap) => (
            <RoadmapCard key={roadmap.id} card={roadmap} showAddToCart={false}/>
          ))
        : recordedCourses.map((course) => (
            <CourseCard key={course.id} card={course} showAddToCart={false}/>
          ))}
    </div>
  );
};

export default ContentPage;
