"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants, Button } from "@/components/ui/button"
import { CalendarEvent } from "@/api/type/calendar"

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
  events?: CalendarEvent[]
  onEventClick?: (event: CalendarEvent) => void
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  events = [],
  onEventClick,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background text-foreground p-4 rounded-[var(--radius)] shadow-medium border border-border/60",
        "group/calendar [--cell-size:3.5rem]",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("flex gap-8 flex-col relative", defaultClassNames.months),
        month: cn("flex flex-col w-full gap-6", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between z-10 px-1",
          defaultClassNames.nav
        ),
        // تحسين أزرار التنقل (Previous/Next) لتكون واضحة جداً
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "size-9 bg-background border-input hover:bg-accent hover:text-accent-foreground rounded-xl transition-all shadow-sm active:scale-95",
          "dark:bg-muted/20 dark:border-border dark:hover:bg-primary/20", // لمسة إضافية للثيم الغامق
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "size-9 bg-background border-input hover:bg-accent hover:text-accent-foreground rounded-xl transition-all shadow-sm active:scale-95",
          "dark:bg-muted/20 dark:border-border dark:hover:bg-primary/20",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-10 w-full mb-2",
          defaultClassNames.month_caption
        ),
        caption_label: cn(
          "text-lg font-bold tracking-tight text-foreground select-none capitalize",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse space-y-1",
        weekdays: cn("flex mb-2", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground w-full font-bold text-[0.8rem] uppercase tracking-widest select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2 gap-1", defaultClassNames.week),
        day: cn(
          "relative p-0 text-center flex-1 aspect-square select-none group/day",
          defaultClassNames.day
        ),
        today: cn(
          "after:content-[''] after:absolute after:top-2 after:right-2 after:size-1.5 after:bg-primary after:rounded-full",
          "font-bold text-primary bg-primary/5 rounded-2xl"
        ),
        outside: cn(
          "text-muted-foreground/20 opacity-40",
          defaultClassNames.outside
        ),
        disabled: cn("text-muted-foreground opacity-20", defaultClassNames.disabled),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => (
          <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />
        ),
        Chevron: ({ className, orientation, ...props }) => {
          const Icon = orientation === "left" ? ChevronLeftIcon : orientation === "right" ? ChevronRightIcon : ChevronDownIcon;
          return <Icon className={cn("size-4 stroke-[2.5px]", className)} {...props} /> // جعل الأيقونة أسمك قليلاً للوضوح
        },
        DayButton: (dayProps) => (
          <CalendarDayButton 
            {...dayProps} 
            events={events} 
            onEventClick={onEventClick} 
          />
        ),
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  events,
  onEventClick,
  ...props
}: React.ComponentProps<typeof DayButton> & { 
  events?: CalendarEvent[], 
  onEventClick?: (event: CalendarEvent) => void 
}) {
  const dayEvent = events?.find(
    (e) => e.date.toDateString() === day.date.toDateString()
  )

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (dayEvent && onEventClick) {
      onEventClick(dayEvent)
    }
    props.onClick?.(e)
  }

  return (
    <Button
      variant="ghost"
      data-selected={modifiers.selected}
      className={cn(
        "relative w-full h-full p-0 flex flex-col items-center justify-center gap-1 rounded-2xl transition-all duration-200",
        // تحسين حالة الـ Hover لتكون واضحة في كلا الثيمين
        "hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20",
        // تنسيق اليوم المحدد - استخدام لون الـ Primary بوضوح
        "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[selected=true]:font-bold data-[selected=true]:shadow-lg data-[selected=true]:shadow-primary/30",
        "data-[selected=true]:hover:bg-primary/90", 
        className
      )}
      {...props}
      onClick={handleClick}
    >
      <span className="z-10 text-sm font-medium leading-none">{props.children}</span>
      
      {dayEvent && (
        <div 
          className={cn(
            "absolute bottom-2 size-1.5 rounded-full ring-2 ring-background transition-colors shadow-sm",
            modifiers.selected ? "bg-primary-foreground ring-primary" : ""
          )}
          style={{ 
            backgroundColor: !modifiers.selected ? (dayEvent.color || "var(--primary)") : undefined 
          }}
        />
      )}
    </Button>
  )
}

export { Calendar }