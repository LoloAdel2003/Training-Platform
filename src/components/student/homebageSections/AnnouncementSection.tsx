"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import AnnouncementCard, { AnnouncementType } from "../cards/AnnouncementCard";
import { Card, CardContent } from "../../ui/card";

const announcements: AnnouncementType[] = [
  {
    name: "Dr. Lina Khalil",
    role: "Frontend Instructor",
    announcementType:"New Course Launch",
    announcmentTitle: "React.js from Zero to Hero",
    publishDate: "November 6, 2025 – 10:30 AM",
    description:
      "We’re excited to announce the launch of our brand-new React.js course! This course is designed for anyone who wants to master frontend development and build real-world web applications.",
    imageSrc: "/imges/mann.png",
  },
   {
    name: "Al-Nahda",
    role: "Traning Center",
    announcementType:"We're Hiring",
    announcmentTitle: "Instructors Wanted for New Programs",
    publishDate: "November 6, 2025 – 10:30 AM",
    description:
      "Al-Nahda Training Center is excited to announce the opening of recruitment for qualified and passionate instructors to join our growing team for the upcoming semester.",
    imageSrc: "/imges/trainingCenter.png",
  },
   {
    name: "Dr. Lina Khalil",
    role: "Frontend Instructor",
    announcementType:"New Course Launch",
    announcmentTitle: "React.js from Zero to Hero",
    publishDate: "November 6, 2025 – 10:30 AM",
    description:
      "We’re excited to announce the launch of our brand-new React.js course! This course is designed for anyone who wants to master frontend development and build real-world web applications.",
    imageSrc: "/imges/mann.png",
  },
   {
    name: "Al-Nahda",
    role: "Traning Center",
    announcementType:"We're Hiring",
    announcmentTitle: "Instructors Wanted for New Programs",
    publishDate: "November 6, 2025 – 10:30 AM",
    description:
      "Al-Nahda Training Center is excited to announce the opening of recruitment for qualified and passionate instructors to join our growing team for the upcoming semester.",
    imageSrc: "/imges/trainingCenter.png",
  },
   

];

const AnnouncementSection = () => {
  // const [mounted, setMounted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselApiRef = useRef<CarouselApi | null>(null);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;

  return (
    <section className="w-full bg-my-gradient relative py-8">
     
       <Carousel className="w-full" opts={{ loop: false }} setApi={(api) => {
      carouselApiRef.current = api;
    }}>
      <CarouselContent>
        {announcements.map((_, index) => (
          <CarouselItem key={index}>
           
              <AnnouncementCard data={announcements[index]} />
             
           
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-4">
        {announcements.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${
              selectedIndex === idx ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => {
              if (!carouselApiRef.current) return;
              carouselApiRef.current.scrollTo(idx);
              setSelectedIndex(idx);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AnnouncementSection;
