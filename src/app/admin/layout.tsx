"use client"
import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import { AppSidebar } from "@/components/dashboard/shared/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"
import { LayoutDashboard, BookOpen, Users, MessageSquare } from "lucide-react"

const adminMenu = [
  {
    groupLabel: "Main Menu",
    items: [
      { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
       { title: "Courses", url: "/admin/courses", icon: BookOpen },
      { title: "Roadmaps", url: "/admin/roadmaps", icon: LayoutDashboard },
      { title: "Blogs ", url: "/admin/blogs", icon: BookOpen },
      { title: "Announcements", url: "/admin/announcement", icon: LayoutDashboard },
      { title: "Calender", url: "/admin/calender", icon: BookOpen },
       { title: "To Do List", url: "/admin/todolist", icon: LayoutDashboard },
      { title: "Earning", url: "/admin/earning", icon: BookOpen },
    ]
  },
  
  {
    groupLabel: "Collaboration",
    items: [
      { title: "Students", url: "/admin/students", icon: Users },
      { title: "Messages", url: "/admin/messages", icon: MessageSquare },
    ]
  },
   {
    groupLabel: "Actions",
    items: [
      { title: "New Course", url: "/admin/newcourse", icon: Users },
            { title: "New Category", url: "/admin/newcategory", icon: Users },

      { title: "New Roadmap", url: "/admin/newroadmap", icon: MessageSquare },
       { title: "New Blog", url: "/admin/newblog", icon: Users },
      { title: "New Announcement", url: "/admin/newannouncement", icon: MessageSquare },
    ]
  },
   {
    groupLabel: "Admin",
    items: [
      { title: "Admin Role", url: "/admin/role", icon: Users },
          ]
  }
];

export default function adminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar 
        groups={adminMenu} 
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