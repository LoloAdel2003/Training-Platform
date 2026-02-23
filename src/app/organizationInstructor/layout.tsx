"use client"
import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import { AppSidebar } from "@/components/dashboard/shared/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"
import { LayoutDashboard, BookOpen, Users, MessageSquare } from "lucide-react"

const instructorMenu = [
  {
    groupLabel: "Main Menu",
    items: [
      { title: "Dashboard", url: "/organizationInstructor", icon: LayoutDashboard },
       { title: "Courses", url: "/organizationInstructor/courses", icon: BookOpen },
      { title: "Roadmaps", url: "/organizationInstructor/roadmaps", icon: LayoutDashboard },
      { title: "Blogs ", url: "/organizationInstructor/blogs", icon: BookOpen },
      { title: "Announcements", url: "/organizationInstructor/announcement", icon: LayoutDashboard },
      { title: "Calender", url: "/organizationInstructor/calender", icon: BookOpen },
       { title: "To Do List", url: "/organizationInstructor/todo", icon: LayoutDashboard },
      { title: "Earning", url: "/organizationInstructor/earning", icon: BookOpen },
    ]
  },
  
  {
    groupLabel: "Collaboration",
    items: [
      { title: "Students", url: "/organizationInstructor/students", icon: Users },
      { title: "Messages", url: "/organizationInstructor/messages", icon: MessageSquare },
    ]
  },
   {
    groupLabel: "Actions",
    items: [
      { title: "New Course", url: "/organizationInstructor/newcourse", icon: Users },
      { title: "New Roadmap", url: "/organizationInstructor/newroadmap", icon: MessageSquare },
       { title: "New Blog", url: "/organizationInstructor/newblog", icon: Users },
      { title: "New Announcement", url: "/organizationInstructor/newannouncement", icon: MessageSquare },
    ]
  },
   {
    groupLabel: "Instructor",
    items: [
      { title: "Instructor Role", url: "/organizationInstructor/role", icon: Users },
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