// components/layout/AppSidebar.tsx
"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
// import { SidebarGroup as SidebarGroupType } from "@/types/sidebar"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { RootState } from "@/store";

 // types/sidebar.ts
import { LucideIcon } from "lucide-react";
import Image from "next/image"
import { useAppSelector } from "@/store/hooks/hooks"

export interface SidebarItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
}

export interface SidebarGroup {
  groupLabel: string;
  items: SidebarItem[];
}
interface AppSidebarProps {
  groups: SidebarGroup[];
  logo?: React.ReactNode;
  userProfile?: { name: string; email: string; avatar: string };
}

export function AppSidebar({ groups, logo, userProfile }: AppSidebarProps) {
  const pathname = usePathname();
   const conversations = useAppSelector((state: RootState) => state.chat.conversations);

  // مجموع الرسائل غير المقروءة
  const unreadMessagesCount = conversations.reduce(
    (total, conv) => total + (conv.unreadCount || 0),
    0
  );

  return (
    <Sidebar className="border-sidebar-border bg-sidebar shadow-md">
      <SidebarHeader className="p-4">
          <Link href="#">
                  <Image
                    src="/imges/logo 22.png"
                    alt="logo"
                    width={130}
                    height={50}
                    className="object-contain dark:hidden"
                    priority
                  />
                  <Image
              src="/imges/logodark.png"
              alt="logo"
              width={130}
              height={50}
              className="object-contain hidden dark:block"
              priority
            />
                </Link>
        {/* {logo || <div className="font-bold text-xl text-primary">EduQuest</div>} */}
      </SidebarHeader>
      
      <SidebarContent>
        {groups.map((group, idx) => (
          <SidebarGroup key={idx}>
            <SidebarGroupLabel className="text-muted-foreground/80 px-4 py-2 uppercase text-[11px] tracking-wider">
              {group.groupLabel}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const active = pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={active}
                        className={cn(
                          "transition-all duration-200 mx-2 w-[calc(100%-16px)] rounded-md",
                          active 
                            ? "radial-primary-bg text-white shadow-medium hover:text-white" 
                            : "hover:bg-sidebar-accent text-card-foreground hover:text-sidebar-accent-foreground"
                        )}
                      >
                        <Link href={item.url} className="flex items-center gap-3 p-2 relative">
                          <item.icon className={cn("w-5 h-5 text-card-foreground", active ? "" : "")} />
                          <span className={ cn("font-medium text-card-foreground",active ? " font-semiBold" : "")}>{item.title}

                          </span>
                           {item.title === "Messages" && unreadMessagesCount > 0 && (
                            <span className="absolute top-1 right-2 w-5 h-5 flex items-center justify-center text-[10px] font-bold text-white bg-red-500 rounded-full">
                              {unreadMessagesCount}
                            </span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
         {/* قسم البروفايل تحت كما في الصورة */}
         <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/50">
            <img src={userProfile?.avatar} className="w-9 h-9 rounded-full object-cover shadow-sm" alt="user" />
            <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-semibold truncate">{userProfile?.name}</span>
                <span className="text-[10px] text-muted-foreground truncate">{userProfile?.email}</span>
            </div>
         </div>
      </SidebarFooter>
    </Sidebar>
  )
}