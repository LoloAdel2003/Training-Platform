// src/components/molecules/FeedbackCard.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarRating } from "./StarRating";

interface FeedbackProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
  image?: string;
}

export const FeedbackCard = ({ name, date, rating, comment, image }: FeedbackProps) => (
  <div className="py-4 border-b border-b-soft last:border-0 space-y-4 animate-in fade-in slide-in-from-bottom-2">
    <div className="flex items-center gap-2">
      <Avatar className="h-10 w-10 border-soft">
        <AvatarImage src={image} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <h5 className="text-sm font-bold leading-none">{name}</h5>
        <p className="text-xs text-muted-foreground mt-1">{date}</p>
      </div>
    </div>
    <StarRating rating={rating} />
    <p className="text-sm text-foreground/80 leading-relaxed max-w-3xl">
      {comment}
    </p>
  </div>
);