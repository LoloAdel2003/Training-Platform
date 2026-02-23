"use client";
// src/components/organisms/CoursesHeader.tsx

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react"; // نستخدم lucide للأيقونات
import { FilterField } from "./FilterField";
import { ReactEventHandler, useState } from "react";
import ContentPage from "./ContentPage";

export const ProfileCourse = () => {
const [learning, setLearning] = useState<"courses" | "roadmaps">("courses");

  return (
    <div className="w-full space-y-6">
      {/* القسم العلوي: العنوان والنوع */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-foreground">
          {learning === "courses" ? "Courses" : "Roadmaps"} <span className="text-muted-foreground font-normal">(957)</span>
        </h1>
        
        <Select value={learning} onValueChange={(value) =>
    setLearning(value as "courses" | "roadmaps")
  }>
          <SelectTrigger className="w-[120px] bg-card border-soft shadow-small h-9">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="courses" >Courses</SelectItem>
            <SelectItem value="webinars">Roadmaps</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* قسم الفلترة: البحث والترتيب والحالة */}
      <div className="flex justify-between items-center w-full">

  {/* Search */}
  <FilterField label="Search:" className="md:col-span-7">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search courses..."
        className="pl-10 bg-card border-soft shadow-small h-11 w-35"
      />
    </div>
  </FilterField>

  {/* Filters group */}
  <div className="md:col-span-5 flex gap-3">

    <FilterField label="Sort by:" className="flex-1">
      <Select defaultValue="latest">
        <SelectTrigger className="bg-card border-soft shadow-small h-11">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="latest">Latest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
        </SelectContent>
      </Select>
    </FilterField>

    <FilterField label="Status:" className="flex-1">
      <Select defaultValue="all">
        <SelectTrigger className="bg-card border-soft shadow-small h-11">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
    </FilterField>

  </div>

</div>


      <ContentPage type={learning} />
    </div>
  );
};