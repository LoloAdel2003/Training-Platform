import { AnnouncementType } from "@/api/type/announcement";
import AnnouncementCard from "@/components/student/announcement/AnnouncementPage";
import AuthorInfo from "@/components/student/announcement/AuthorInfo";
import PageTitle from "@/components/custome/PageTitle";
// import AnnouncementCard from 
import React from "react";

const AnnouncementPage = () => {
  const courseData: AnnouncementType = {
    announcmentTitle: "React.js Comprehensive Course",
    name: "Admin",
    role: "Instructor",
    publishDate: "Oct 20, 2025",
    imageSrc: "/imges/course2.png",
    announcementType: "Education",

    description:
      "We are thrilled to announce the launch of our comprehensive React.js course designed for beginners and intermediate developers! This course will guide you through the essentials of modern frontend development, helping you build dynamic, interactive, and high-performance web applications.",

    relatedInformation: [
      { label: "Opens", value: "November 1, 2025 - 9:00 AM" },
      { label: "Closes", value: "November 30, 2025 - 5:00 PM" },
      { label: "Course Start Date", value: "December 1, 2025" },
      { label: "Type", value: "Online" },
      { label: "Duration", value: "8 weeks" },
    ],

    details: [
      {
        sectionTitle: "Course Overview",
        content:
          "React.js is one of the most popular frontend frameworks in the world, used by companies like Facebook, Airbnb, and Netflix. This course will take you from zero to hero, covering all aspects of React development.",
      },
      {
        sectionTitle: "Who Should Enroll",
        list: [
          "Beginners who want to start a career in frontend development",
          "Developers familiar with HTML, CSS, and JavaScript",
          "Students and professionals aiming to build real-world applications",
        ],
      },
      {
        sectionTitle: "Learning Outcomes",
        list: [
          "Understand the fundamentals of React",
          "Build reusable components",
          "Use hooks and state management",
          "Work with React Router",
          "Connect to RESTful APIs",
          "Deploy React applications",
        ],
      },
    ],
  };

  return(
<>
 <div className="flex flex-col md:flex-row gap-2  md:gap-4 items-left justify-between">
        <PageTitle /> {/* إذا ما في عنوان استخدم الافتراضي */}
        <AuthorInfo name="EduQuest Team" date="November 6, 2025" />
      </div>
        <AnnouncementCard data={courseData} />;

</>

  )
};

export default AnnouncementPage;
