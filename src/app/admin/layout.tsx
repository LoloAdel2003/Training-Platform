"use client"
import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import { AppSidebar } from "@/components/dashboard/shared/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"
import { LayoutDashboard, BookOpen, Users, MessageSquare, ShieldCheck, Map, Newspaper, Megaphone, Calendar, CheckSquare, DollarSign, UserSquare2, Building2, FolderPlus, FilePlus2, MegaphoneIcon, AlertCircle } from "lucide-react"

const adminMenu = [
  {
    groupLabel: "Main Menu",
    items: [
      { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
       { title: "Courses", url: "/admin/courses", icon: BookOpen },
      { title: "Roadmaps", url: "/admin/roadmaps", icon: Map },
      { title: "Blogs ", url: "/admin/blogs", icon: Newspaper },
      { title: "Announcements", url: "/admin/announcement", icon: Megaphone },
      { title: "Calender", url: "/admin/calender", icon: Calendar },
       { title: "To Do List", url: "/admin/todolist", icon: CheckSquare },
      { title: "Earning", url: "/admin/earning", icon: DollarSign },
    ]
  },
  
  {
    groupLabel: "Collaboration",
    items: [
      { title: "Students", url: "/admin/students", icon: Users },
            { title: "Instructors", url: "/admin/instructors", icon: UserSquare2 },
      { title: "Organizations", url: "/admin/organizations", icon: Building2 },


      { title: "Messages", url: "/admin/messages", icon: MessageSquare },
          { title: "Problem Reports", url: "/admin/reports", icon: AlertCircle },

    ]
  },
   {
    groupLabel: "Actions",
    items: [
      // { title: "New Course", url: "/admin/newcourse", icon: Users },
            { title: "New Category", url: "/admin/newcategory", icon: FolderPlus },

      // { title: "New Roadmap", url: "/admin/newroadmap", icon: MessageSquare },
       { title: "New Blog", url: "/admin/newblog", icon: FilePlus2 },
      { title: "New Announcement", url: "/admin/newannouncement", icon: MegaphoneIcon },
    ]
  },
   {
    groupLabel: "Admin",
    items: [
      { title: "Admin Role", url: "/admin/role", icon: ShieldCheck },
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