"use client"
import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import { AppSidebar } from "@/components/dashboard/shared/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"
import { LayoutDashboard, BookOpen, Users, MessageSquare } from "lucide-react"

const instructorMenu = [
  {
    groupLabel: "Main Menu",
    items: [
      { title: "Dashboard", url: "/organizationAdmin", icon: LayoutDashboard },
       { title: "Courses", url: "/organizationAdmin/courses", icon: BookOpen },
      { title: "Roadmaps", url: "/organizationAdmin/roadmaps", icon: LayoutDashboard },
      { title: "Blogs ", url: "/organizationAdmin/blogs", icon: BookOpen },
      { title: "Announcements", url: "/organizationAdmin/announcement", icon: LayoutDashboard },
      { title: "Calender", url: "/organizationAdmin/calender", icon: BookOpen },
       { title: "To Do List", url: "/organizationAdmin/todo", icon: LayoutDashboard },
      { title: "Earning", url: "/organizationAdmin/earning", icon: BookOpen },
    ]
  },
  
  {
    groupLabel: "Collaboration",
    items: [
      { title: "Students", url: "/organizationAdmin/students", icon: Users },
      { title: "Messages", url: "/organizationAdmin/messages", icon: MessageSquare },
    ]
  },
   {
    groupLabel: "Actions",
    items: [
      { title: "New Course", url: "/organizationAdmin/newcourse", icon: Users },
      { title: "New Roadmap", url: "/organizationAdmin/newroadmap", icon: MessageSquare },
       { title: "New Blog", url: "/organizationAdmin/newblog", icon: Users },
      { title: "New Announcement", url: "/organizationAdmin/newannouncement", icon: MessageSquare },
    ]
  },
   {
    groupLabel: "Instructor",
    items: [
      { title: "Instructor Role", url: "/organizationAdmin/role", icon: Users },
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