"use client";

import CategoryCard from "@/components/student/cards/CategoryCard";
import React from "react";
import Link from "next/link";
import { 
  MdOutlineCode, 
  MdOutlinePalette, 
  MdOutlineGroups, 
  MdOutlineLaptopMac,
  MdOutlineBarChart,
  MdOutlineEditNote,
  MdOutlineAttachMoney,
  MdOutlineScience,
  MdOutlineSecurity,
  MdOutlineSettingsInputComponent,
  MdOutlineStorage
} from "react-icons/md";
import PageTitle from "@/components/custome/PageTitle";
import PageSearch from "@/components/custome/PageSearch";

const categoriesData = [
  { title: "Development", coursesCount: "38 Courses", icon: MdOutlineCode },
  { title: "Art & Design", coursesCount: "40 Courses", icon: MdOutlinePalette },
  { title: "Communication", coursesCount: "70 Course", icon: MdOutlineGroups },
  { title: "Frontend development", coursesCount: "38 Courses", icon: MdOutlineLaptopMac },
  { title: "Marketing", coursesCount: "50 Course", icon: MdOutlineBarChart },
  { title: "Content Writing", coursesCount: "38 Courses", icon: MdOutlineEditNote },
  { title: "Finance", coursesCount: "60 Course", icon: MdOutlineAttachMoney },
  { title: "Science", coursesCount: "20 Course", icon: MdOutlineScience },
  { title: "Cyber Security", coursesCount: "50 Course", icon: MdOutlineSecurity },
  { title: "Backend development", coursesCount: "50 Course", icon: MdOutlineSettingsInputComponent },
  { title: "Data Analysis", coursesCount: "38 Courses", icon: MdOutlineStorage },
  { title: "Development", coursesCount: "38 Courses", icon: MdOutlineCode },
];

const Categories = () => {
  return (
    <div className="min-h-screen">
         <div className="flex items-center justify-between mb-6 ">
        <PageTitle /> {/* إذا ما في عنوان استخدم الافتراضي */}
        <PageSearch />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {categoriesData.map((category, index) => {
          // نحول العنوان إلى URL-friendly
          const categorySlug = category.title
            .toLowerCase()
            .replace(/\s+/g, "-"); // استبدال المسافات بـ -

          return (
            <Link key={index} href={`/categories/${categorySlug}`} className="block w-full">
              <CategoryCard
                title={category.title}
                coursesCount={category.coursesCount}
                Icon={category.icon}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
