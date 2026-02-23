"use client";

import React from "react";
import { Card, CardContent } from "../../ui/card";

type ImpactCardProps = {
  icon: React.ReactNode; // الآن أيقونة React
  num: number | string;
  label: string;
};

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, num, label }) => {
  return (
    <Card className="w-[160px] h-[100px] rounded-[18px] shadow-md flex items-center justify-center bg-card">
      <CardContent className="p-0 flex flex-col items-center gap-1 text-center">
        <div className="text-primary/50">{icon}</div>
        <span className="text-[22px] font-bold text-primary">{num}</span>
        <span className="text-[13px] text-card-foreground">{label}</span>
      </CardContent>
    </Card>
  );
};

export default ImpactCard;
