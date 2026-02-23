"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FilterDropdown } from "@/components/student/cards/FilterDropdown";
import { useRouter } from "next/navigation";

/* ---------------- Static options (stable reference) ---------------- */
const FILTER_OPTIONS = {
  category: ["UXUI", "Frontend Developer", "Backend"] as const,
  course: ["UXUI Design", "Frontend Developer", "Backend Developer"] as const,
  type: ["Online", "Offline", "Hybrid"] as const,
  level: ["Beginner", "Intermediate", "Advanced"] as const,
  price: ["Free", "Paid"] as const,
};

type FiltersState = {
  category: string;
  course: string;
  type: string;
  level: string;
  price: string;
};

const SearchSection: React.FC = () => {
  const route=useRouter();
  const [filters, setFilters] = useState<FiltersState>({
    category: "UXUI",
    course: "UXUI Design",
    type: "Online",
    level: "Intermediate",
    price: "Free",
  });

  /* -------- stable callback -------- */
  const updateFilter = useCallback(
    (key: keyof FiltersState, value: string) => {
      setFilters((prev) =>
        prev[key] === value ? prev : { ...prev, [key]: value }
      );
    },
    []
  );

  const handleSearch = useCallback(() => {
    console.log("Search with:", filters);
    route.push(`categories/${filters.category.toLowerCase()}`);
  }, [filters]);

  return (
    <section
      className="w-full radial-primary-bg relative overflow-hidden pb-8 px-4"
      // style={{
      //   background:
      //     "radial-gradient(circle, rgba(32,45,111,1) 0%, rgba(32,45,111,0.8) 100%)",
      // }}
    >
      {/* <h2 className="text-xl md:text-3xl font-bold text-center pt-8 text-white">
        Explore Thousands of Courses and Build Your Career
      </h2> */}
      <h2 className="text-xl md:text-3xl font-bold text-center pt-8 text-white">
  Explore Thousands of Courses and Build Your Career
</h2>


      <Image
        src="/imges/book 1.png"
        alt="decor"
        width={307}
        height={307}
        className="absolute hidden lg:block -right-10 -top-10"
      />
      <Image
        src="/imges/m 1.png"
        alt="decor"
        width={238}
        height={238}
        className="absolute hidden lg:block left-3 top-14"
      />

<div className="flex flex-wrap justify-between gap-3 px-4 sm:px-10 mt-11 mx-auto rounded-lg bg-card border border-border/40 shadow-md w-full max-w-[965px] py-4"
     style={{ background: "var(--card)", color: "var(--card-foreground)" }}>    
         <FilterDropdown
          label="Category"
          value={filters.category}
          options={FILTER_OPTIONS.category}
          onChange={(v) => updateFilter("category", v)}
        />

        <FilterDropdown
          label="Course"
          value={filters.course}
          options={FILTER_OPTIONS.course}
          onChange={(v) => updateFilter("course", v)}
        />

        <FilterDropdown
          label="Type"
          value={filters.type}
          options={FILTER_OPTIONS.type}
          onChange={(v) => updateFilter("type", v)}
        />

        <FilterDropdown
          label="Level"
          value={filters.level}
          options={FILTER_OPTIONS.level}
          onChange={(v) => updateFilter("level", v)}
        />

        <FilterDropdown
          label="Price"
          value={filters.price}
          options={FILTER_OPTIONS.price}
          onChange={(v) => updateFilter("price", v)}
        />

        <Button
          onClick={handleSearch}
          className="bg-primary text-white  px-6 py-2 rounded-md"
        >
          Search
        </Button>
      </div>
    </section>
  );
};

export default React.memo(SearchSection);
