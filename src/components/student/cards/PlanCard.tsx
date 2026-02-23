"use client";

import React from "react";
import { Check } from "lucide-react"; // استخدمت lucide-react للأيقونات
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // ميثود دمج الكلاسات الموجودة بـ Shadcn

type Plan = {
  type: string;
  price: number;
  description: string;
  isCurrent?: boolean;
  isFeatured?: boolean; // عشان كرت الـ Plus الملون
  items: string[];
  buttonText: string;
};

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const { type, price, description, items, isCurrent, isFeatured, buttonText } = plan;

  return (
    <Card
  className={cn(
    "w-[350px] h-[500px] shadow-2xl rounded-[20px] p-[35px] flex flex-col transition-all ",
    isFeatured 
      ? "bg-primary dark:bg-primary/40 text-primary-foreground"
      : "bg-card text-card-foreground border border-primary"
  )}
>
  <CardContent className="p-0 flex flex-col h-full ">
    {/* Header */}
    <h3 className="text-[26px] font-bold mb-2">{type}</h3>
    
    {/* Price */}
    <div className="mb-2">
      <span className="text-[45px] font-bold">${price}</span>
      <span className={cn(
        "text-[18px] ml-1",
        isFeatured ? "text-primary-foreground/70" : "text-muted-soft"
      )}>
        /month
      </span>
    </div>

    {/* Description */}
    <p className={cn(
      "text-[15px] leading-relaxed mb-6",
      isFeatured ? "text-primary-foreground/80" : "text-muted-soft"
    )}>
      {description}
    </p>

    {/* Button */}
    <div className="mb-6">
      <Button
        className={cn(
          "w-full h-[55px] text-[16px] font-semibold rounded-[8px] transition-all",
          isCurrent
            ? "bg-primary/30 hover:bg-muted cursor-default"
            : isFeatured
              ? "bg-card text-primary hover:bg-card/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        {isCurrent ? "Your Current Plan" : buttonText}
      </Button>
    </div>

    {/* Features */}
    <div className="flex flex-col gap-[15px]">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className={cn(
            "flex items-center justify-center w-5 h-5 rounded-md border",
            isFeatured ? "border-primary-foreground" : "border-primary"
          )}>
            <Check className={cn(
              "w-3 h-3 text-primary",
              isFeatured ? "text-primary-foreground" : "text-primary"
            )} strokeWidth={3} />
          </div>
          <span className={cn(
            "text-[15px]",
            isFeatured ? "text-primary-foreground" : "text-card-foreground"
          )}>
            {item}
          </span>
        </div>
      ))}
    </div>
  </CardContent>
</Card>

  );
};

export default PlanCard;