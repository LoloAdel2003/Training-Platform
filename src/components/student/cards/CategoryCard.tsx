import React from 'react';
import { IconType } from 'react-icons';

interface CategoryCardProps {
  title: string;
  coursesCount: string;
  Icon: IconType;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, coursesCount, Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-2 border-border p-6 bg-card rounded-2xl shadow-sm  hover:shadow-md transition-shadow duration-300 cursor-pointer aspect-square w-full max-w-[220px]">
      <div className="text-primary/50 text-4xl mb-4">
        <Icon />
      </div>
      <h3 className="text-primary dark:text-primary font-bold text-center mb-2 text-sm md:text-base">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-200 text-xs md:text-sm">
        {coursesCount}
      </p>
    </div>
  );
};

export default CategoryCard;