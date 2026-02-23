"use client"

import * as React from "react"
// تأكد من استيراد النوع والمكون من الملف الذي عدلناه سابقاً
import { Calendar, type CalendarEvent } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface EventCalendarProps {
  events: CalendarEvent[]
}

export default function EventCalendar({ events }: EventCalendarProps) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const [activeEvent, setActiveEvent] = React.useState<CalendarEvent | null>(null)

  // هذه الدالة سيتم استدعاؤها من داخل مكون الـ Calendar المعدل عند الضغط على يوم فيه حدث
  const handleEventClick = (event: CalendarEvent) => {
    setActiveEvent(event)
    setIsDialogOpen(true)
  }

  return (
    <>
      <Calendar
        mode="single"
        events={events} // نمرر مصفوفة الأحداث
        onEventClick={handleEventClick} // نمرر دالة المعالجة التي تفتح الـ Dialog
        className="rounded-lg border border-primary shadow-sm"
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] border border-primary">
          <DialogHeader>
            <DialogTitle className="text-left">
              {activeEvent?.title}
            </DialogTitle>
            <DialogDescription className="text-left">
               event date: {activeEvent?.date.toLocaleDateString('ar-EG', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4 text-left">
            <div className="text-sm leading-relaxed text-muted-foreground">
              {activeEvent?.description || "no more event details available"}
            </div>
            
            {/* عرض اللون كعلامة تمييز داخل الـ Dialog (اختياري) */}
            {activeEvent?.color && (
              <div className="flex items-center gap-2 justify-start">
                <span className="text-xs text-muted-foreground"> event type</span>
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: activeEvent.color }}
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}