"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type StepsCardProps = {
  name: string;
  description: string;
  className?: string; // يسمح بتمرير كلاس خارجي
};

const StepsCard: React.FC<StepsCardProps> = ({ name, description, className }) => {
  return (
    <Card
      className={`w-auto shadow-md border border-primary rounded-[15px] text-center px-[10px] lg:px-[25px] py-[15px] ${className}`}
      style={{
        background: "var(--card)",           // يعتمد على ثيم Light/Dark
        color: "var(--card-foreground)",    // النصوص تعتمد المتغير المناسب
      }}
    >
      <CardContent className="p-0 flex flex-col gap-4 justify-center items-center">
        <span className="text-[16px] md:text-[18px] font-semibold w-full">
          {name}
        </span>
        <p className="text-[14px] md:text-[18px] w-[300px] lg:w-[400px] font-regular text-[var(--card-foreground)]/80 opacity-90">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default React.memo(StepsCard);
