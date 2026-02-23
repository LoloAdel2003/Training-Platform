// src/components/molecules/FilterField.tsx
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

interface FilterFieldProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export const FilterField = ({ label, children, className }: FilterFieldProps) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <Label className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
        {label}
      </Label>
      {children}
    </div>
  );
};