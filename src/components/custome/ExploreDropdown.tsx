"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
// import { cn } from "src/lib/utils";
import { cn } from "@/lib/utils"

const exploreCategories = [
  { name: "Frontend Development", link: "student/categories/frontend" },
  { name: "Data Science", link: "student/categories/datascience" },
  { name: "Data Analysis", link: "student/categories/dataanalysis" },
  { name: "Cyber Security", link: "student/categories/cybersecurity" },
  { name: "Fullstack Developer", link: "student/categories/fullstack" },
  { name: "React Development", link: "student/categories/react" },
  { name: "Marketing", link: "student/categories/marketing" },
];

const availableRoadmap = [
  { name: "Frontend Developer", link: "student/roadmaps/frontend" },
  { name: "Cyber Security", link: "student/roadmaps/cybersecurity" },
  { name: "Backend", link: "student/roadmaps/backend" },
  { name: "Fullstack", link: "student/roadmaps/fullstack" },
  { name: "Mobile Development", link: "student/roadmaps/mobile" },
  { name: "Data Engineering", link: "student/roadmaps/data-engineering" },
  { name: "DevOps", link: "student/roadmaps/devops" },
];

const ourInstructor = [
  { name: "Alaa Adel", link: "student/instructors/alaa" },
  { name: "Ahmed Emad", link: "student/instructors/ahmed" },
  { name: "Noor Najar", link: "student/instructors/noor" },
];

const Blogs = [
  { name: "The Future of Online Learning", link: "student/blogs/future-learning" },
  { name: "How to Stay Motivated", link: "student/blogs/stay-motivated" },
];

const Helps = [
  { name: "FAQ", link: "student/helps/faq" },
  { name: "Contact Support", link: "student/helps/contact" },
  { name: "Report a Problem", link: "student/helps/report" },
];

export function ExploreDropdown() {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-1 text-base font-semibold cursor-pointer text-foreground hover:text-primary focus:outline-none transition-colors",
  open && "text-primary"
          )}
        >
          Explore
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              open ? "rotate-180" : "rotate-0"
            )}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={cn(
          "p-4 ",
          "grid grid-cols-1 bg-card text-card-foreground  sm:grid-cols-2 lg:grid-cols-4 gap-6",
          "max-w-full overflow-x-auto lg:mx-[100px]"
        )}
      >
        {/* العمود الأول - Categories */}
        <div>
          <DropdownMenuLabel>Explore Categories</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1" />
          <DropdownMenuGroup>
            {exploreCategories.map((item) => (
              <DropdownMenuItem key={`cat-${item.name}`}>
                <Link href={item.link}>{item.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="student/categories" className="text-blue-600 hover:underline">
              See More
            </Link>
          </DropdownMenuItem>
        </div>

        {/* العمود الثاني - Roadmaps */}
        <div>
          <DropdownMenuLabel>Available Roadmaps</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1" />
          <DropdownMenuGroup>
            {availableRoadmap.map((item) => (
              <DropdownMenuItem key={`road-${item.name}`}>
                <Link href={item.link}>{item.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="student/roadmaps" className="text-blue-600 hover:underline">
              See More
            </Link>
          </DropdownMenuItem>
        </div>

        {/* العمود الثالث - Instructors + Blogs */}
        <div>
          <DropdownMenuLabel>Our Instructors</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1" />
          <DropdownMenuGroup>
            {ourInstructor.map((item) => (
              <DropdownMenuItem key={`instr-${item.name}`}>
                <Link href={item.link}>{item.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="student/instructors" className="text-blue-600 hover:underline">
              See More
            </Link>
          </DropdownMenuItem>

          <DropdownMenuLabel>Blogs & Articles</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1" />
          <DropdownMenuGroup>
            {Blogs.map((item) => (
              <DropdownMenuItem key={`blog-${item.name}`}>
                <Link href={item.link}>{item.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="student/blogs" className="text-blue-600 hover:underline">
              See More
            </Link>
          </DropdownMenuItem>
        </div>

        {/* العمود الرابع - Plans + Help */}
        <div>
          <DropdownMenuLabel>Plan&apos;s Offer</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1" />
          <DropdownMenuItem>
            <Link href="student/Plans" className="text-blue-600 hover:underline">
              See Details
            </Link>
          </DropdownMenuItem>

          <DropdownMenuLabel>Help & Support</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1" />
          <DropdownMenuGroup>
            {Helps.map((item) => (
              <DropdownMenuItem key={`help-${item.name}`}>
                <Link href={item.link}>{item.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="student/help" className="text-blue-600 hover:underline">
              See More
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
