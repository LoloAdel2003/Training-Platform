import React, { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface Props {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}

const FilterDropdownComponent: React.FC<Props> = ({
  label,
  value,
  options,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-[140px]">
      <DropdownMenu onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="flex justify-between items-center px-2 w-full"
          >
            {label}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40">
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
            {options.map((item) => (
              <DropdownMenuRadioItem key={item} value={item}>
                {item}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Input
        readOnly
        value={value}
        className="border-none focus-visible:ring-0 text-sm cursor-default"
      />
    </div>
  );
};

export const FilterDropdown = memo(FilterDropdownComponent);
