"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, BadgeCheck } from "lucide-react";

export type CommentCardType = {
  id: string;
  name: string;
  age: number;
  avatar: string;
  verified: boolean;
  rating: number; // from 1 to 5
  review: string;
};

type CommentCardProps = {
  testimonial: CommentCardType;
};

const CommentCard: React.FC<CommentCardProps> = ({ testimonial }) => {
  const { name, age, avatar, verified, rating, review } = testimonial;

  return (
    <Card className="rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-5 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex flex-col">
              <span className="text-sm font-semibold">{name}</span>
              <span className="text-xs text-muted-foreground">
                {age} Jul
              </span>
            </div>

            {verified && (
              <span className="ml-2 inline-flex items-center gap-1 text-xs border border-primary px-2 py-[2px] rounded-md">
                <BadgeCheck size={14} className="text-primary" />
                Verified
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex gap-[2px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>

        {/* Review */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          “{review}”
        </p>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
