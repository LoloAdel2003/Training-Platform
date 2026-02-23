"use client";

import React, { ReactNode } from "react";
import { Card, CardContent } from "../../ui/card";

type ChooseCardProps = {
  name: string;
  description: string;
  children?: ReactNode; // لتصحيح الـ children
};

const ChooseCard: React.FC<ChooseCardProps> = ({ name, description, children }) => {
  return (
<Card className="w-[310px] md:w-[354px] h-[180px] md:h-[190px] rounded-[20px] bg-card border border-border/40 shadow-md text-center px-[40px] py-[15px] flex flex-col items-center justify-center gap-[10px] transition-all duration-300 border-primary/60 hover:shadow-primary/10
">

  <CardContent className="p-0 py-2 flex flex-col items-center justify-center gap-[10px]">
    {children}
    <span className="font-semibold text-[18px] md:text-[20px] text-primary">
      {name}
    </span>
    <p className="text-[15px] md:text-[16px] text-muted-foreground">
      {description}
    </p>
  </CardContent>
</Card>

  );
};

export default ChooseCard;
