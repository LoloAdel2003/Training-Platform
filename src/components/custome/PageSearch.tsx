"use client";

import React, { useState } from "react";
import { FiSearch, FiSliders } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const filters = [
  {
    id: "category",
    title: "Category",
    options: [
      { label: "Frontend", count: 350 },
      { label: "Backend", count: 120 },
    ],
  },
  {
    id: "level",
    title: "Level",
    options: [
      { label: "Beginner", count: 200 },
      { label: "Intermediate", count: 70 },
      { label: "Advanced", count: 50 },
    ],
  },
  {
    id: "price",
    title: "Price",
    options: [
      { label: "Free", count: 300 },
      { label: "Paid", count: 4000 },
    ],
  },
  {
    id: "duration",
      title: "Duration",
      options: [
        { label: "1 - 6 Hours", count: 30 },
        { label: "7 - 14 Hours", count: 70 },
        { label: "15 - 20 Hours", count: 50 },
        { label: "+20 Hours", count: 50 },
      ],
    },
    {
      id: "rating",
      title: "Rating",
      options: [
        { label: "5 Stars", count: 30 },
        { label: "4-5 Stars", count: 70 },
        { label: "3-4 Stars", count: 50 },
        { label: "2-3 Stars", count: 50 },
        { label: "1-2 Stars", count: 50 },
      ],
    },
];

const PageSearch = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <div className="flex items-center gap-3">
      {/* Search Input Enhanced */}
      <div className="relative group w-full max-w-sm">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          placeholder="Search roadmaps..."
          className="pl-10 bg-card border-soft focus-visible:ring-primary h-10 rounded-full"
        />
      </div>

      {/* Filter Trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full relative border-soft hover:bg-muted">
            <FiSliders className="h-4 h-4" />
            {selected.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                {selected.length}
              </span>
            )}
          </Button>
        </SheetTrigger>

        <SheetContent className="flex flex-col w-full sm:max-w-md bg-app border-l border-soft">
          <SheetHeader className="pb-4 border-b border-soft">
            <SheetTitle className="text-xl font-bold flex items-center gap-2">
              <FiSliders className="text-primary" />
              Filter Options
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto no-scrollbar px-2 space-y-2 mt-4">
            <Accordion type="multiple" defaultValue={["category", "level"]} className="w-full space-y-2">
              {filters.map((filter) => (
                <AccordionItem key={filter.id} value={filter.id} className="border-soft">
                  <AccordionTrigger className="text-sm text-card-background font-semibold hover:no-underline">
                    {filter.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-1 space-y-3">
                    {filter.options.map((option) => (
                      <div
                        key={option.label}
                        className="flex space-y-2  items-center text-muted-foreground  justify-between group"
                      >
                        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleToggle(option.label)}>
                          <Checkbox 
                            id={option.label} 
                            checked={selected.includes(option.label)}
                            className="border-soft data-[state=checked]:bg-primary"
                          />
                          <label
                            htmlFor={option.label}
                            className="text-sm font-medium leading-none cursor-pointer group-hover:text-primary transition-colors"
                          >
                            {option.label}
                          </label>
                        </div>
                        <Badge variant="secondary" className="bg-muted text-muted-foreground text-[10px] font-normal px-1.5 py-0">
                          {option.count}
                        </Badge>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <SheetFooter className="pt-6 border-t border-soft gap-3 sm:flex-row">
           
            <Button className="flex-1 bg-primary hover:opacity-90">
             Apply Filters
            </Button>
             <Button
              variant="outline"
              className="flex-1 hover:bg-destructive/10 hover:text-destructive"
              onClick={() => setSelected([])}
            >
              Reset
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default PageSearch;