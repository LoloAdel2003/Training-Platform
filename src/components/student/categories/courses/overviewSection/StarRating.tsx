import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export const StarRating = ({ rating, className }: { rating: number, className?: string }) => {
  return (
    <div className={cn("flex gap-0.5", className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "w-4 h-4",
            star <= rating ? "fill-orange-400 text-orange-400" : "fill-muted text-muted"
          )}
        />
      ))}
    </div>
  );
};