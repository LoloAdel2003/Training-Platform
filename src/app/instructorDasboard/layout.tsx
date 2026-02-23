"use client"
import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import { AppSidebar } from "@/components/dashboard/shared/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"
import { LayoutDashboard, BookOpen, Users, MessageSquare } from "lucide-react"

const instructorMenu = [
  {
    groupLabel: "Main Menu",
    items: [
      { title: "Dashboard", url: "/instructorDasboard", icon: LayoutDashboard },
       { title: "Courses", url: "/instructorDasboard/courses", icon: BookOpen },
      { title: "Roadmaps", url: "/instructorDasboard/roadmaps", icon: LayoutDashboard },
      { title: "Blogs ", url: "/instructorDasboard/blogs", icon: BookOpen },
      { title: "Announcements", url: "/instructorDasboard/announcement", icon: LayoutDashboard },
      { title: "Calender", url: "/instructorDasboard/calender", icon: BookOpen },
       { title: "To Do List", url: "/instructorDasboard/todo", icon: LayoutDashboard },
      { title: "Earning", url: "/instructorDasboard/earning", icon: BookOpen },
    ]
  },
  
  {
    groupLabel: "Collaboration",
    items: [
      { title: "Students", url: "/instructorDasboard/students", icon: Users },
      { title: "Messages", url: "/instructorDasboard/messages", icon: MessageSquare },
    ]
  },
   {
    groupLabel: "Actions",
    items: [
      { title: "New Course", url: "/instructorDasboard/newcourse", icon: Users },
      { title: "New Roadmap", url: "/instructorDasboard/newroadmap", icon: MessageSquare },
       { title: "New Blog", url: "/instructorDasboard/newblog", icon: Users },
      { title: "New Announcement", url: "/instructorDasboard/newannouncement", icon: MessageSquare },
    ]
  },
   {
    groupLabel: "Instructor",
    items: [
      { title: "Instructor Role", url: "/instructorDasboard/role", icon: Users },
          ]
  }
];

export default function InstructorLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar 
        groups={instructorMenu} 
        userProfile={{ name: "Ahmad Kanaan", email: "ahmad@example.com", avatar: "/avatar.png" }} 
      />
      <main className="w-full">
        <DashboardHeader />
        <div className="p-4 bg-background min-h-[calc(100vh-64px)] md:p-6 ">
            {children}
        </div>
      </main>
    </SidebarProvider>
  )
}