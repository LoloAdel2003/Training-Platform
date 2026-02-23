import Calendar01 from "@/components/calendar-01";
import Calendar from "@/components/student/profile/dashboard/Calender";
import CoursesOverview from "@/components/student/profile/dashboard/CoursesTable";
import { DashboardStats } from "@/components/student/profile/dashboard/DashboardStats";
import { OnlineLessons } from "@/components/student/profile/dashboard/OnlineLessons";
import { RecentlyVisited } from "@/components/student/profile/dashboard/RecentlyVisited";
import RoadmapOverview from "@/components/student/profile/dashboard/RoadmapTable";
import React from "react";
const ProfilePage = () => {
  return (
    <div className="">
        <DashboardStats />
        <OnlineLessons />
        <RecentlyVisited />
        <CoursesOverview />
        <RoadmapOverview />
        {/* <Calendar /> */}
        </div>
  );
}
export default ProfilePage;