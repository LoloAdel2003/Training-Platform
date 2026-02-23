"use client";

import React from "react";
import { Card, CardContent } from "../../ui/card";
import { MessageCircle, BookOpen, Map } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export type InstructorCardType = {
  id: string | number;
  srcImg: string;
  name: string;
  deciplinary?: string;
  coursesCount: number;
  roadmapsCount: number;
};

type InstructorCardProps = {
  card: InstructorCardType;
};

const InstructorCard: React.FC<InstructorCardProps> = ({ card }) => {
  const {
    id,
    srcImg,
    name,
    deciplinary,
    coursesCount,
    roadmapsCount,
  } = card;
const route=useRouter()
  const handleClick=()=>{
    route.push(`/profile/messages`)
  }

  return (
    // <Link href={`instructors/${id}`} className="max-w-sm w-full">
    <Card
      className="group cursor-pointer relative  w-full rounded-xl overflow-hidden bg-card border border-border/60  shadow-sm hover:shadow-lg   transition-all duration-300 hover:-translate-y-1"
    >
      {/* 🖼️ Image */}
      <div className="relative w-full h-[200px] overflow-hidden ">
        <img
          src={srcImg}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500  rounded-tr-2xl"
        />

        {/* 💬 Message Icon */}
        <button
          className="absolute transition-all cursor-pointer duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center top-3 right-3 w-9 h-9 rounded-full bg-card backdrop-blur-md border border-border hover:scale-110"
          title="Message Instructor"
          onClick={handleClick}
        >
          <MessageCircle size={18} className="text-card-foreground" />
        </button>
      </div>

      {/* 📄 Content */}
      <CardContent className="p-4 flex flex-col gap-3 text-start">
        {/* Name & Discipline */}
        <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-foreground leading-tight">
            {name}
          </h3>

          {deciplinary && (
            <p className="text-sm text-muted-foreground">
              {deciplinary}
            </p>
          )}
        </div>
          <Link
                href={`instructors/${id}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                More Details
              </Link>
        </div>

        {/* Courses & Roadmaps */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <BookOpen size={16} className="text-primary" />
            <span className="font-medium text-foreground">
              {coursesCount}
            </span>
            <span>Courses</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Map size={16} className="text-primary" />
            <span className="font-medium text-foreground">
              {roadmapsCount}
            </span>
            <span>Roadmaps</span>
          </div>
        </div>
      </CardContent>
    </Card>
    // </Link>
  );
};

export default InstructorCard;
