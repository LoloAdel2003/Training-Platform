"use client";
import * as React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavSearch() {
  return (
    <div className="relative w-full max-w-[450px] mx-auto sm:mx-0">
      {/* أيقونة البحث */}
      <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
        <Search className="w-4 h-4 sm:w-4 sm:h-4" />
      </span>

      {/* حقل البحث */}
      <Input
        type="text"
        placeholder="Discover your next skill in just one step"
        className={cn(
          "pl-10",                      
          "h-10  md:h-9",         
          "rounded-lg",                  
          "border border-gray-300",     
          "shadow-sm focus:shadow-md",    
          "transition-all duration-300", 
          "focus:border-blue-500 focus:ring-1 focus:ring-blue-500", 
          "bg-white placeholder-gray-400", 
          "text-sm sm:text-sm ", 
          "w-full"                        
        )}
      />
    </div>
  );
}
