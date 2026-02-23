// src/components/organisms/CourseReviews.tsx
import { RatingBar } from "./RatingBar";
import { FeedbackCard } from "./FeedbackCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StarRating } from "./StarRating";

export const CourseReviews = () => {
  return (
    <div className="space-y-4 mt-4">
      {/* <h3 className="text-xl font-bold">Course Rating</h3> */}
      
      {/* الجزء العلوي: ملخص التقييمات */}
      <div className="flex flex-col  md:flex-row gap-8 items-center">
        <div className="bg-card border-soft p-8 rounded-xl shadow-small flex flex-col items-center justify-center min-w-[180px]">
          <span className="text-5xl font-black text-foreground">4.8</span>
          <div className="my-2">
             <StarRating rating={5} />
          </div>
          <span className="text-xs text-muted-foreground font-medium">Course Rating</span>
        </div>

        <div className="flex-1 space-y-2 w-full">
          <RatingBar stars={5} percentage={75} />
          <RatingBar stars={4} percentage={21} />
          <RatingBar stars={3} percentage={3} />
          <RatingBar stars={2} percentage={1} />
          <RatingBar stars={1} percentage={0} />
        </div>
      </div>

      {/* الجزء السفلي: التعليقات مع الفلترة */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-b-soft pb-4">
          <h4 className="font-bold text-xl">Students Feedback</h4>
          <Select defaultValue="5star">
            <SelectTrigger className="w-[140px] bg-card">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5star">5 Star Rating</SelectItem>
              <SelectItem value="latest">Latest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          <FeedbackCard 
            name="Guy Hawkins"
            date="1 week ago"
            rating={5}
            comment="I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable..."
          />
          <FeedbackCard 
            name="Dianne Russell"
            date="11 mins ago"
            rating={5}
            comment="This course is just amazing! has great course content, the best practices, and a lot of real-world knowledge..."
          />
        </div>
      </div>
    </div>
  );
};