// components/ui/GlassCard.tsx
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // خاصية اختيارية إذا كنت تريد تعطيل التدرج في بعض الحالات
  withGradient?: boolean; 
}

export function GlassCard({ 
  className, 
  withGradient = true, 
  children, 
  ...props 
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius)] border border-border p-6 transition-all duration-300",
        
        withGradient 
          ? "bg-card-gradient shadow-medium hover:shadow-large" 
          : "bg-card shadow-small",
          
        "dark:bg-card dark:border-border/50",
        
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}