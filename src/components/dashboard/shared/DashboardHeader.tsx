// components/layout/DashboardHeader.tsx
"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Search, Moon, Sun } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoMdNotificationsOutline } from "react-icons/io"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface DashboardHeaderProps {
  showSearch?: boolean
}

export function DashboardHeader({ showSearch = true }: DashboardHeaderProps) {

  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // منع Hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // استخراج آخر جزء من المسار
  const segments = pathname.split("/").filter(Boolean)
  const lastSegment = segments[segments.length - 1] || "dashboard"

  const formattedTitle = lastSegment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())

  return (
    <header
      className={`sticky top-0 z-20
      flex h-16 w-full items-center justify-between
      border-b border-sidebar-border
      bg-sidebar backdrop-blur-md
      px-4 md:px-6
      shadow-medium`}
    >
      <div className="flex items-center gap-4">
        <SidebarTrigger className="hover:bg-accent" />
        <h1 className="text-lg font-bold text-foreground">
          {formattedTitle}
        </h1>
      </div>

      <div className="flex items-center gap-6">

        {showSearch && (
          <div className="relative hidden md:block w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search data, users, or reports..."
              className={` pl-10
                bg-muted/40
                dark:bg-muted/20
                border border-sidebar-border
                focus-visible:ring-primary
                rounded-full`}
               
              
            />
          </div>
        )}

        <div className="flex items-center gap-2 text-foreground">

          <Link
            href="#"
            className={`not-[]:relative rounded-full
            hover:bg-sidebar-accent
            hover:text-sidebar-accent-foreground
            transition-all duration-200 relative`}
          >
            <IoMdNotificationsOutline className="text-foreground hover:text-primary text-[20px] cursor-pointer transition-colors duration-200" />
            <span className="absolute -top-2 -right-2 w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[11px] flex items-center justify-center font-bold">
              2
            </span>
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className={`p-2 rounded-full
            hover:bg-sidebar-accent
            hover:text-sidebar-accent-foreground
            transition-all duration-200 cursor-pointer`}
          >
            {mounted && (
              resolvedTheme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )
            )}
          </button>

          <Avatar className="w-6 h-6">
            <AvatarImage src="/imges/avatar.png" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

        </div>
      </div>
    </header>
  )
}
