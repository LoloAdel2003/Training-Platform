
import SidebarFilters from "@/components/student/categories/SidebarFilters";
import type { Metadata } from "next";
 


export const metadata: Metadata = {
  title: "EduQuest Courses- Your Gateway to Knowledge",
  description: "Discover a world of learning with EduQuest. Explore courses, track your progress, and earn certifications all in one place.",
 
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="mt-4 md:mt-8">
      
              
              
        {children}

    </div>
  );
}
