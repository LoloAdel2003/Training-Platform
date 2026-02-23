import { Course } from "@/api/type/purchase";
import { Star } from "lucide-react";

export const CourseItem = ({ course }: { course: Course }) => {
  return (
    <div className="flex items-center  justify-between py-4 border-b last:border-0">
      <div className="flex gap-4">
        <img src={course.thumbnail} alt={course.title} className="w-24 h-16 object-cover rounded" />
        <div>
          <div className="flex items-center gap-1 text-orange-500 dark:text-orange-400 text-sm">
            <Star size={14} fill="currentColor" />
            <span className="font-bold">{course.rating}</span>
            <span className="text-gray-400 dark:text-gray-200">({course.reviewsCount.toLocaleString()} Review)</span>
          </div>
          <h4 className="font-medium text-sm text-gray-900 dark:text-gray-400">{course.title}</h4>
          <p className="text-xs text-gray-500 dark:text-gray-300">Course by: <span className="text-gray-700 dark:text-gray-400 ">{course.instructor}</span></p>
        </div>
      </div>
      <span className="text-primary font-bold">${course.price.toFixed(2)}</span>
    </div>
  );
};