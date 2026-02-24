"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { StatusBadge } from "./StatusBadge";
import { BookOpen, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoadmapNode } from "@/api/type/roadmap";
import Link from "next/link";

export const RoadmapCard = ({ node }: { node: RoadmapNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="group relative flex items-center justify-between px-6 py-4 min-w-[240px] bg-card border border-soft rounded-xl shadow-medium cursor-pointer transition-all hover:scale-105 active:scale-95 hover:border-primary">

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition" />

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              {node.type === "project" ? (
                <Code2 className="w-5 h-5" />
              ) : (
                <BookOpen className="w-5 h-5" />
              )}
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-foreground">
                {node.title}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {node.type}
              </span>
            </div>
          </div>

          <StatusBadge status={node.status} />
        </div>
      </SheetTrigger>

      {/* Details Sheet */}
      <SheetContent
        side="right"
        className="bg-app px-6 border-l border-soft w-[400px] sm:w-[540px]"
      >
        <SheetHeader className="space-y-4">
          <div className="flex items-center gap-2">
            <StatusBadge status={node.status} />
            <span className="text-sm uppercase tracking-wider text-muted-foreground">
              {node.status}
            </span>
          </div>

          <SheetTitle className="text-2xl font-bold text-foreground">
            {node.title}
          </SheetTitle>

          <SheetDescription className="text-muted-soft leading-relaxed text-base">
            {node.description ||
              "No description provided for this step yet. Keep learning and building!"}
          </SheetDescription>
        </SheetHeader>

        <div className=" space-y-6">
          <div className="p-5 rounded-2xl bg-my-gradient border border-soft shadow-small">
            <h4 className="font-semibold mb-3">What you will learn:</h4>
            <ul className="list-disc list-inside text-sm text-muted-soft space-y-1">
              <li>Core concepts and best practices</li>
              <li>Practical implementation details</li>
              <li>Performance optimization</li>
            </ul>
          </div>

          
            <Button
              className="w-full bg-primary text-primary-foreground hover:opacity-90"
              asChild
            >
              <Link
                href={`/student/courses/${node.id}`}
                className="flex items-center justify-center gap-2"
              >
                Start Learning
              </Link>
            </Button>
          
        </div>
      </SheetContent>
    </Sheet>
  );
};