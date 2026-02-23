"use client";

import React from "react";
import Link from "next/link";
import InstructorCard from "@/components/student/cards/InstructorCard";
import RoadmapCard, { RoadmapCardType } from "@/components/student/cards/RoadmapCard";
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
    
  ];  return (
    <div className="min-h-screen">
      <div className="card-grid">
        {RoadmapsItem.map((roadmap) => {
       
          return (
           
              <RoadmapCard card={roadmap} key={roadmap.id} />
            
          );
        })}
      </div>
    </div>
  );
};

export default Roadmaps;
