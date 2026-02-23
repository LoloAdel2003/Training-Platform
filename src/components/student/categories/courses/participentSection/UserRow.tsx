"use client";
// src/components/molecules/UserRow.tsx

import { TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

interface UserRowProps {
  id: number;
  name: string;
  role: string;
  lastVisited: string;
  image?: string;
}

export const UserRow = ({
  id,
  name,
  role,
  lastVisited,
  image,
}: UserRowProps) => {
  const router = useRouter();
  const pathname = usePathname(); 
  // مثال: /categories/frontend/2

  const handleView = () => {
    if (role === "Student") {
      router.push(`/students/${id}`);
    } else if (role === "Instructor") {
      router.push(`/instructors/${id}`);
    }
  };

  return (
    <TableRow className="hover:bg-muted/50 transition-colors border-soft">
      <TableCell className="font-medium">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 border">
            <AvatarImage src={image} />
            <AvatarFallback className="bg-primary/10 text-primary text-xs">
              {name[0]}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold">{name}</span>
        </div>
      </TableCell>

      <TableCell className="text-muted-foreground text-sm">
        {role}
      </TableCell>

      <TableCell className="text-muted-foreground text-sm">
        {lastVisited}
      </TableCell>

      <TableCell className="text-right">
        <div className="flex justify-end gap-2">

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/70"
          >
            <MessageSquare className="h-4 w-4" />
          </Button>

          {/* 👁️ View Button */}
          <Button
            onClick={handleView}
            variant="ghost"
            size="icon"
            className="cursor-pointer h-8 w-8 text-primary hover:text-primary hover:bg-primary/30"
          >
            <Eye className="h-4 w-4" />
          </Button>

        </div>
      </TableCell>
    </TableRow>
  );
};
