"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        `
        inline-flex w-fit items-center justify-center
        rounded-xl
        bg-muted/60
        border border-border
        p-1
        gap-1
        shadow-small
        `,
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        `
relative inline-flex items-center justify-center
        px-3 py-2
        cursor-pointer
        text-sm 
        font-medium
        rounded-lg
        transition-all duration-300
        whitespace-nowrap

        text-muted-foreground
        hover:text-primary

        data-[state=active]:bg-background
        data-[state=active]:text-primary
        data-[state=active]:shadow-medium
        data-[state=active]:font-semibold
       

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-ring
        focus-visible:ring-offset-2
        ring-offset-background

        disabled:pointer-events-none
        disabled:opacity-50
        `,
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        `
        mt-4
        outline-none
        animate-in fade-in duration-300
        `,
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
