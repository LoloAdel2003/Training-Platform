"use client";
// src/components/organisms/CourseSyllabus.tsx

import { useState } from "react";
import { useParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContentStats } from "./ContentStats";
import { SyllabusItem } from "./SyllabusItem";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SyllabusContent = {
  id: string; // 👈 أضفنا id
  title: string;
  type: "lecture" | "quiz" | "assignment";
  timeRange?: string;
};

type WeekType = {
  id: string;
  dateRange: string;
  isCurrentWeek?: boolean;
  stats?: {
    quiz?: number;
    lecture?: number;
    assignment?: number;
  };
  content?: SyllabusContent[];
};

export const CourseSyllabus = () => {
  const [activeItem, setActiveItem] = useState<string | null>("week-1");

  // 👇 نجيب category + courseId من المسار
  const params = useParams<{
    // category: string;
    courseId: string;
  }>();

  const {  courseId } = params;

  const weeks: WeekType[] = [
    {
      id: "week-1",
      dateRange: "1 January - 8 January",
      stats: {
        quiz: 1,
        lecture: 2,
        assignment: 2,
      },
      content: [
        { id: "1", title: "Introduction Lecture", type: "lecture" },
        {
          id: "2",
          title: "Quiz 1",
          type: "quiz",
          timeRange: "Opened: Wed 25/10, 10am - Closed: 12am",
        },
        {
          id: "3",
          title: "Assignment 2",
          type: "assignment",
          timeRange: "Due: Wed 25/10, 10am",
        },
        { id: "4", title: "Setup Lecture", type: "lecture" },
      ],
    },
    {
      id: "week-2",
      dateRange: "9 January - 16 January",
      isCurrentWeek: true,
    },
  ];

  // 👇 نبني الرابط حسب النوع
  const getHref = (type: SyllabusContent["type"], id: string) => {
    switch (type) {
      case "lecture":
        return `/courses/${courseId}/lectures/${id}`;
      case "quiz":
        return `/courses/${courseId}/quizzes/${id}`;
      case "assignment":
        return `/courses/${courseId}/assignments/${id}`;
      default:
        return "#";
    }
  };

  return (
    <div className="space-y-4">
      <Accordion
        type="single"
        collapsible
        value={activeItem ?? undefined}
        onValueChange={(val) => setActiveItem(val)}
        className="w-full rounded-[var(--radius)] overflow-hidden shadow-small"
      >
        {weeks.map((week) => {
          const isActive = activeItem === week.id;

          return (
            <AccordionItem
              key={week.id}
              value={week.id}
              className="border-b border-soft last:border-0"
            >
              <AccordionTrigger
                className={cn(
                  "px-6 transition-all hover:no-underline text-card-foreground/70",
                  "hover:text-primary",
                  isActive && "text-primary"
                )}
              >
                <div className="flex flex-1 items-center justify-between pr-4">
                  <div className="flex items-center gap-3">
                    <span className="font-bold">
                      {week.dateRange}
                    </span>

                    {week.isCurrentWeek && (
                      <Badge className="bg-primary/10 text-primary border-none text-[10px] py-0">
                        This Week
                      </Badge>
                    )}
                  </div>

                  {week.stats && (
                    <div className="hidden md:flex items-center gap-4">
                      {week.stats.quiz && (
                        <ContentStats type="quiz" count={week.stats.quiz} />
                      )}
                      {week.stats.lecture && (
                        <ContentStats type="lecture" count={week.stats.lecture} />
                      )}
                      {week.stats.assignment && (
                        <ContentStats
                          type="assignment"
                          count={week.stats.assignment}
                        />
                      )}
                    </div>
                  )}
                </div>
              </AccordionTrigger>

              <AccordionContent className="bg-card/50 px-2 pb-2">
                {week.content ? (
                  <div className="space-y-1 pt-2">
                    {week.content.map((item) => (
                      <SyllabusItem
                        key={item.id}
                        title={item.title}
                        type={item.type}
                        timeRange={item.timeRange}
                        href={getHref(item.type, item.id)} // 
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground py-4 px-4">
                    Content will be available soon...
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
