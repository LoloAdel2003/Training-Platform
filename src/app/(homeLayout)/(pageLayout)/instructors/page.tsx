"use client";

import React from "react";
import Link from "next/link";
import InstructorCard from "@/components/student/cards/InstructorCard";
import PageTitle from "@/components/custome/PageTitle";
import PageSearch from "@/components/custome/PageSearch";
// import { instructorsData } from "./instructorsData";

const Instructors = () => {
    // instructorsData.ts (أو داخل نفس الملف)
const instructorsData = [
{
    id:1,
    srcImg:'/imges/i1.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,},
{
    id:2,
    srcImg:'/imges/i2.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,},
{
   id:3,
    srcImg:'/imges/i3.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,},
{
    id:44,
    srcImg:'/imges/i4.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,},
{
    id:4,
    srcImg:'/imges/i1.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,},
{
    id:5,
    srcImg:'/imges/i2.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,},
{
   id:6,
    srcImg:'/imges/i3.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,},
{
    id:7,
    srcImg:'/imges/i4.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,},
{
    id:11,
    srcImg:'/imges/i1.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,},
{
    id:8,
    srcImg:'/imges/i2.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,},
{
   id:9,
    srcImg:'/imges/i3.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,},
{
    id:10,
    srcImg:'/imges/i4.png',
name:"Ahmed",
deciplinary:"React Developer",
 coursesCount:10,
    roadmapsCount:5,

},


]

  return (
    <div className="min-h-screen">
         <div className="flex items-center justify-between mb-6 md:mb-8">
        <PageTitle /> {/* إذا ما في عنوان استخدم الافتراضي */}
        <PageSearch />
      </div>
      <div className="card-grid">
        {instructorsData.map(instructor=>(
        <InstructorCard key={instructor.id}  card={instructor} />
                       ))
        
                       } 
      </div>
    </div>
  );
};

export default Instructors;
