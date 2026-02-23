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
  { name: "Frontend Development", link: "/categories/frontend" },
  { name: "Data Science", link: "/categories/datascience" },
  { name: "Data Analysis", link: "/categories/dataanalysis" },
  { name: "Cyber Security", link: "/categories/cybersecurity" },
  { name: "Fullstack Developer", link: "/categories/fullstack" },
  { name: "React Development", link: "/categories/react" },
  { name: "Marketing", link: "/categories/marketing" },
];

const availableRoadmap = [
  { name: "Frontend Developer", link: "/roadmaps/frontend" },
  { name: "Cyber Security", link: "/roadmaps/cybersecurity" },
  { name: "Backend", link: "/roadmaps/backend" },
  { name: "Fullstack", link: "/roadmaps/fullstack" },
  { name: "Mobile Development", link: "/roadmaps/mobile" },
  { name: "Data Engineering", link: "/roadmaps/data-engineering" },
  { name: "DevOps", link: "/roadmaps/devops" },
];

const ourInstructor = [
  { name: "Alaa Adel", link: "/instructors/alaa" },
  { name: "Ahmed Emad", link: "/instructors/ahmed" },
  { name: "Noor Najar", link: "/instructors/noor" },
];

const Blogs = [
  { name: "The Future of Online Learning", link: "/blogs/future-learning" },
  { name: "How to Stay Motivated", link: "/blogs/stay-motivated" },
];

const Helps = [
  { name: "FAQ", link: "/FAQ" },
  { name: "Contact Support", link: "/contact" },
  { name: "Report a Problem", link: "/report" },
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
            <Link href="/categories" className="text-blue-600 hover:underline">
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
            <Link href="/roadmaps" className="text-blue-600 hover:underline">
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
            <Link href="/instructors" className="text-blue-600 hover:underline">
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
            <Link href="/blogs" className="text-blue-600 hover:underline">
              See More
            </Link>
          </DropdownMenuItem>
        </div>

        {/* العمود الرابع - Plans + Help */}
        <div>
          <DropdownMenuLabel>Plan&apos;s Offer</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1" />
          <DropdownMenuItem>
            <Link href="/Plans" className="text-blue-600 hover:underline">
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
            <Link href="/help" className="text-blue-600 hover:underline">
              See More
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
