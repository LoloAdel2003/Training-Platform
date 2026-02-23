"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const profileNavItems = [
  { href: "/student/profile", label: "Dashboard" },
  { href: "/student/profile/learning", label: "My Learning" },
  { href: "/student/profile/problems", label: "Problem's Report" },
  { href: "/student/profile/saved", label: "Saved" },
  { href: "/student/profile/purchases", label: "Purchase History" },
  { href: "/student/profile/messages", label: "Message" },
  { href: "/student/profile/notifications", label: "Notification" },
];

const ProfileNavLink = ({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`relative px-2 py-4 text-[14px] font-medium transition-colors
      ${active ? "text-primary font-bold" : "text-card-foreground hover:text-primary"}`}
    >
      {label}
      {active && (
        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-primary" />
      )}
    </Link>
  );
};

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header Background */}
      <div className="radial-primary-bg h-[100px] md:h-[150px] w-full" />

      <div className="mx-auto px-4 md:px-8 lg:px-16 -mt-16 md:-mt-24">
        <div className="bg-background rounded-xl shadow-md overflow-hidden">

          {/* Top Section */}
          <div className="p-4 flex items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative">
                <img
                  src="/imges/lolo.jpg"
                  alt="Ahmed Adel"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg md:text-xl font-bold text-card-foreground">
                  Ahmed Adel
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Student
                  </span>
                  <Link href="/profile/edit" className="text-primary">
                    <Pencil size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button size="sm" className="px-5 font-semibold">
                Become Instructor
              </Button>
              <Button
                variant="destructive"
                size="sm"
                className="px-5 font-semibold flex items-center gap-2"
              >
                Log Out →
              </Button>
            </div>

            {/* Mobile Sheet Trigger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu size={22} />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[280px]">
                  <SheetHeader>
                    <SheetTitle>Profile Menu</SheetTitle>
                  </SheetHeader>

                  <div className="mt-6 flex flex-col gap-4">
                    {profileNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-sm font-medium transition-colors
                        ${pathname === item.href
                            ? "text-primary"
                            : "text-card-foreground hover:text-primary"
                          }`}
                      >
                        {item.label}
                      </Link>
                    ))}

                    <div className="pt-6 border-t flex flex-col gap-3">
                      <Button className="w-full">
                        Become Instructor
                      </Button>

                      <Button
                        variant="destructive"
                        className="w-full"
                      >
                        Log Out
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="px-8 border-t border-border hidden md:flex items-center justify-center gap-8">
            {profileNavItems.map((item) => (
              <ProfileNavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={pathname === item.href}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Content */}
        <main className="mt-8 pb-12">{children}</main>
      </div>
    </div>
  );
};

export default ProfileLayout;