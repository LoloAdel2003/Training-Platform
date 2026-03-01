// components/calendar/event-item.tsx
// import { CalendarEvent } from "@/types/calendar";
import { CalendarEvent } from "@/api/type/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface EventItemProps {
  event: CalendarEvent;
  onClick: (event: CalendarEvent) => void;
}

export function EventItem({ event, onClick }: EventItemProps) {
  return (
    <div 
      onClick={() => onClick(event)}
      className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/50 cursor-pointer transition-all duration-200 group"
    >
      <div className="relative">
        <Avatar className="h-12 w-12 rounded-full border-2 border-background shadow-sm">
          <AvatarImage src={`/icons/${event.type}.png`} />
          <AvatarFallback className="bg-primary/10 text-primary">
            {event.title[0]}
          </AvatarFallback>
        </Avatar>
        {/* النقطة الملونة الصغيرة */}
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background" 
              style={{ backgroundColor: event.color || 'var(--primary)' }} />
      </div>
      
      <div className="flex flex-col gap-0.5">
        <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
          {event.title}
        </h4>
        <p className="text-xs text-muted-foreground">
          {event.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          {event.time && ` at ${event.time}`}
        </p>
        <span className="text-[10px] font-medium text-muted-foreground/70 uppercase tracking-wider">
          {event.location || "React Course"}
        </span>
      </div>
    </div>
  );
}