"use client";

import React from "react";

import OrganizationCard, { OrganizationCardType } from "@/components/student/cards/OrganizationCard";
import PageTitle from "@/components/custome/PageTitle";
import PageSearch from "@/components/custome/PageSearch";
// import { instructorsData } from "./instructorsData";

const organizations = () => {
    // instructorsData.ts (أو داخل نفس الملف)

  const organizationItem = [
    {
      id: "1",
      name: "Global Education Hub",
      logo: "/imges/avatar-1.png",
      location: "Amman, Jordan",
      description:
        "Non-profit organization supporting inclusive education and online learning",
      coursesCount: 18,
      roadmapCount: 4,
      partnerSince: "2022",
      joinedDate: "April 2024",
      members: [
        "/imges/Ellipse 2.png",
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
      ],
    },
    {
      id: "2",
      name: "Tech Learning Academy",
      logo: "/imges/avatar-2.png",
      location: "Dubai, UAE",
      description:
        "Professional training academy focused on modern web and AI technologies",
      coursesCount: 25,
      roadmapCount: 6,
      partnerSince: "2021",
      joinedDate: "January 2023",
      members: [
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",

         "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
      ],
    },
    {
      id: "3",
      name: "Future Skills Center",
      logo: "/imges/avatar-1.png",
      location: "Cairo, Egypt",
      description:
        "Empowering youth with future-ready digital and professional skills",
      coursesCount: 12,
      roadmapCount: 3,
      partnerSince: "2023",
      joinedDate: "March 2024",
      members: [
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
      ],
    },
      {
      id: "4",
      name: "Global Education Hub",
      logo: "/imges/avatar-1.png",
      location: "Amman, Jordan",
      description:
        "Non-profit organization supporting inclusive education and online learning",
      coursesCount: 18,
      roadmapCount: 4,
      partnerSince: "2022",
      joinedDate: "April 2024",
      members: [
        "/imges/Ellipse 2.png",
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
      ],
    },
    {
      id: "5",
      name: "Tech Learning Academy",
      logo: "/imges/avatar-2.png",
      location: "Dubai, UAE",
      description:
        "Professional training academy focused on modern web and AI technologies",
      coursesCount: 25,
      roadmapCount: 6,
      partnerSince: "2021",
      joinedDate: "January 2023",
      members: [
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",

         "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
      ],
    },
    {
      id: "6",
      name: "Future Skills Center",
      logo: "/imges/avatar-1.png",
      location: "Cairo, Egypt",
      description:
        "Empowering youth with future-ready digital and professional skills",
      coursesCount: 12,
      roadmapCount: 3,
      partnerSince: "2023",
      joinedDate: "March 2024",
      members: [
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
      ],
    },
     {
      id: "7",
      name: "Tech Learning Academy",
      logo: "/imges/avatar-2.png",
      location: "Dubai, UAE",
      description:
        "Professional training academy focused on modern web and AI technologies",
      coursesCount: 25,
      roadmapCount: 6,
      partnerSince: "2021",
      joinedDate: "January 2023",
      members: [
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",

         "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
      ],
    },
    {
      id: "8",
      name: "Future Skills Center",
      logo: "/imges/avatar-1.png",
      location: "Cairo, Egypt",
      description:
        "Empowering youth with future-ready digital and professional skills",
      coursesCount: 12,
      roadmapCount: 3,
      partnerSince: "2023",
      joinedDate: "March 2024",
      members: [
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
      ],
    },
  ];
  return (
    <div className="min-h-screen  ">
       <div className="flex items-center justify-between mb-6 md:mb-8 ">
              <PageTitle /> {/* إذا ما في عنوان استخدم الافتراضي */}
              <PageSearch />
            </div>
      <div className="card-grid">
        {organizationItem.map((org:OrganizationCardType) => {
          
          return (
          
               <OrganizationCard key={org.id} organization={org} />
           
          );
        })}
      </div>
    </div>
  );
};

export default organizations;
