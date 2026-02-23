"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

const profileNavItems = [
  { href: "/profile", label: "Dashboard" },
  { href: "/profile/learning", label: "My Learning" },
  { href: "/profile/problems", label: "Problem's Report" },
  { href: "/profile/saved", label: "Saved" },
  { href: "/profile/purchases", label: "Purchase History" },
  { href: "/profile/messages", label: "Message" },
  { href: "/profile/notifications", label: "Notification" },
];

const ProfileNavLink = ({ href, label, active }: { href: string; label: string; active: boolean }) => {
  return (
    <Link
      href={href}
      className={`relative px-2 py-4 text-[14px] font-medium transition-colors
        ${active ? "text-primary text-bold" : "text-card-foreground hover:text-primary"}`}
    >
      {label}
      {active && (
        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-primary" />
      )}
    </Link>
  );
};

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Background Header Section */}
      <div className="radial-primary-bg h-[100px] md:h-[150px] w-full" />

      {/* Profile Card Section */}
      <div className=" mx-auto px-4 md:px-8 lg:px-16 -mt-15 md:-mt-24 ">
        <div className="bg-background   rounded-lg shadow-md  dark:border-slate-200 overflow-hidden">
          
          {/* Top Info Section */}
          <div className="p-4 flex  md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative">
                <img
                  src="/imges/lolo.jpg" // تأكد من المسار الصحيح للصورة
                  alt="Ahmed Adel"
                  className=" w-18 h-18 md:w-22 md:h-22 rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-[18px] md:text-xl font-bold text-card-foreground">Ahmed Adel</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-soft">Student</span>
                  <Link href="/profile/edit" className="text-primary">
                    <Pencil size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </div>

          <div className="flex items-center gap-3">
  {/* Desktop Actions */}
 <div className="hidden md:flex items-center gap-3">
  {/* زر Become Instructor */}
  <Button
    variant="secondary"     // زر ثانوي
    size="sm"               // حجم صغير مناسب للـ navbar
    shadow="sm"
    className="px-5 py-2.5 font-semibold"
  >
    Become Instructor
  </Button>

  {/* زر Log Out */}
  <Button
    variant="destructive"   // زر إجراء مهم (تسجيل خروج)
    size="sm"
    shadow="sm"
    className="px-5 py-2.5 font-semibold flex items-center gap-2"
  >
    Log Out <span className="text-lg">→</span>
  </Button>
</div>


  {/* Mobile menu button */}
  <Button
    variant="ghost"
    size="icon"
    className="md:hidden"
    onClick={() => setOpen(!open)}
  >
    {open ? <X /> : <Menu size={22} />}
  </Button>
</div>

          </div>

          {/* Navigation Bar Section */}
          <div className="px-8 border-t border-[#E9EAF0]">
            <div className="hidden  md:flex items-center justify-center gap-8">
              {profileNavItems.map((item) => (
                <ProfileNavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={pathname === item.href}
                />
              ))}
            </div>

            {/* Mobile Navigation */}
           {open && (
  <div className="md:hidden py-4 flex flex-col gap-4  mt-4">
    
    {/* Nav Links */}
    {profileNavItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={`text-sm font-medium hover:text-primary
          ${pathname === item.href ? "text-primary" : "text-card-foreground"}`}
      >
        {item.label}
      </Link>
    ))}

    {/* Mobile Actions */}
    <div className="flex flex-col gap-3 pt-4 border-t">
      <Button
        variant="outline"
        className="w-full justify-center text-primary border border-primary"
      >
        Become Instructor
      </Button>

      <Button
        className="w-full justify-center
                   bg-primary/50 text-white flex items-center gap-2"
      >
        Log Out
        <span className="text-lg">→</span>
      </Button>
    </div>
  </div>
)}

          </div>
        </div>

        {/* Dynamic Content Area */}
        <main className="mt-8 pb-12">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ProfileLayout;