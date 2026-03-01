"use client";
// components/calendar/main-calendar-view.tsx

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar"; // المكون اللي بعتته انت مع تعديل بسيط
// import { EventItem } from "./event-item";
// import { CalendarEvent } from "@/types/calendar";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription,
  SheetFooter
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Plus, ExternalLink, Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { CalendarEvent } from "@/api/type/calendar";
import { EventItem } from "./EventItem";

export function MainCalendarView({ initialEvents }: { initialEvents: CalendarEvent[] }) {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setIsSheetOpen(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8  bg-background min-h-screen">
      
      {/* القائمة الجانبية - Sidebar */}
      <aside className="w-full lg:w-80 flex flex-col gap-6 border border-border p-4 rounded-[2rem] bg-card shadow-sm">
        {/* <Button className="w-full justify-start gap-2 h-12 rounded-2xl shadow-md bg-primary hover:opacity-90" size="lg">
          <Plus className="h-5 w-5" />
          <span className="font-bold">Add New Event</span>
        </Button> */}

        <div className="space-y-4 border-border">
          <h2 className="text-xl font-bold px-2">You are going to</h2>
          <div className="space-y-1">
            {initialEvents.slice(0, 4).map((event) => (
              <EventItem key={event.id} event={event} onClick={handleEventClick} />
            ))}
          </div>
          {/* <Button  className="w-full text-muted-foreground hover:text-primary">
            See More
          </Button> */}
        </div>
      </aside>

      {/* التقويم الرئيسي */}
      <main className="flex-1 bg-card rounded-[2rem] border border-border/40 shadow-medium p-6">
        <Calendar
          mode="single"
          className="w-full"
          events={initialEvents}
          onEventClick={handleEventClick}
        />
      </main>

      {/* نافذة التفاصيل - Detail Sheet */}
     <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
  <SheetContent className="sm:max-w-md border-l-0 no-scrollbar rounded-l-[2.5rem] shadow-2xl p-0 overflow-hidden bg-background">
    {selectedEvent && (
      <div className="flex flex-col h-full">
        {/* Header Section with Background Gradient */}
        <div 
          className="relative h-32 w-full opacity-80 bg-primary/20" 
        //   style={{ 
        //     background: `` 
        //   }}
        >
          <div className="absolute -bottom-6 left-8 p-1 bg-background rounded-2xl shadow-lg">
             <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${selectedEvent.color}15`, color: selectedEvent.color }}
              >
                <CalendarIcon className="h-8 w-8" />
              </div>
          </div>
        </div>

        <div className="px-8 pt-10 pb-6 flex-1 overflow-y-auto no-scrollbar">
          {/* Badge Type */}
          <span 
            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3"
            style={{ backgroundColor: `${selectedEvent.color}15`, color: selectedEvent.color }}
          >
            {selectedEvent.type}
          </span>

          <SheetHeader className="text-left space-y-1">
            <SheetTitle className="text-2xl font-extrabold leading-tight text-foreground">
              {selectedEvent.title}
            </SheetTitle>
            
            <div className="flex flex-wrap gap-4 pt-4">
               <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/50 text-muted-foreground text-xs font-medium">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  {selectedEvent.time || "Not specified"}
               </div>
               <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/50 text-muted-foreground text-xs font-medium">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {selectedEvent.location || "Online"}
               </div>
            </div>
          </SheetHeader>

          <hr className="my-8 border-border/40" />

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <div className="flex items-center gap-2 text-foreground font-bold">
              <div className="w-1 h-4 bg-primary rounded-full" />
              <h4>About this {selectedEvent.type}</h4>
            </div>
            <p className="text-sm bg-accent/30 p-4 rounded-2xl border border-border/20">
              {selectedEvent.description}
            </p>
          </div>
        </div>

        {/* Footer with Blur Effect */}
        <SheetFooter className="p-6 bg-background/80 backdrop-blur-md border-t border-border/40">
          <Button 
            className="w-full h-14 rounded-2xl gap-3 text-base font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
            style={{ backgroundColor: selectedEvent.color }}
            asChild
          >
            <a href={selectedEvent.link} target="_blank" rel="noopener noreferrer">
              Go to {selectedEvent.type === 'session' ? 'Meeting' : 'Content'}
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </SheetFooter>
      </div>
    )}
  </SheetContent>
</Sheet>
    </div>
  );
}