import React from "react";
import { cn } from "@/lib/utils";

type TitleProps = {
  title: string;
  subTitle?: string;
  className?: string;
  titleClassName?: string;
  subTitleClassName?: string;
};

const Title: React.FC<TitleProps> = ({
  title,
  subTitle,
  className,
  titleClassName,
  subTitleClassName,
}) => {
  return (
    <div className={cn("text-center space-y-3 mb-8 md:mb-12", className)}>
      
      {/* Main Title */}
      <h2
        className={cn(
          "font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
          "text-foreground leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subTitle && (
        <p
          className={cn(
            "text-muted-foreground text-sm sm:text-base md:text-lg",
            "max-w-2xl mx-auto leading-relaxed",
            subTitleClassName
          )}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default React.memo(Title);