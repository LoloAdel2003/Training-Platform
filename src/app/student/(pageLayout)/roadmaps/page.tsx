"use client";

import React from "react";
import Link from "next/link";
import InstructorCard from "@/components/student/cards/InstructorCard";
import RoadmapCard, { RoadmapCardType } from "@/components/student/cards/RoadmapCard";
import PageTitle from "@/components/custome/PageTitle";
import PageSearch from "@/components/custome/PageSearch";
// import { instructorsData } from "./instructorsData";

const Roadmaps = () => {
    // instructorsData.ts (أو داخل نفس الملف)
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
     star:4,
      coursesCount: 10
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
     star:4,
      coursesCount: 10
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
     star:4,
      coursesCount: 10
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
     star:4,
       coursesCount: 10
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
     star:4,
       coursesCount: 10
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
     star:4,
       coursesCount: 10
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
     star:4,
       coursesCount: 10
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
     star:4,
       coursesCount: 10
    },
    
  ]; 
   return (
    <div className="min-h-screen">
         <div className="flex items-center justify-between">
        <PageTitle /> {/* إذا ما في عنوان استخدم الافتراضي */}
        <PageSearch />
      </div>
      <div className="card-grid  mb-6  mt-4 md:mt-6  ">
         {RoadmapsItem.map((roadmap)=>(
                 <RoadmapCard key={roadmap.id} card={roadmap} />

                )
                  
                )}
      </div>
    </div>
  );
};

export default Roadmaps;
