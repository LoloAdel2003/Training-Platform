// src/components/molecules/RatingBar.tsx
import { Progress } from "@/components/ui/progress";
import { StarRating } from "./StarRating";
// src/components/atoms/StarRating.tsx

interface RatingBarProps {
  stars: number;
  percentage: number;
}

export const RatingBar = ({ stars, percentage }: RatingBarProps) => (
  <div className="flex items-center gap-4 w-full">
    <StarRating rating={stars} className="shrink-0" />
    <span className="text-xs text-muted-foreground w-12">{stars} Star</span>
    <Progress value={percentage} className="h-2 bg-secondary" />
    <span className="text-xs font-medium w-8 text-right">{percentage}%</span>
  </div>
);