import * as React from "react"
import { cn } from "@/lib/utils" // تأكد أن لديك هذا الملف المساعد من shadcn

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // أضفنا هذه الخصائص للتحكم بالثيمات التي أرسلتها في الـ CSS
  gradient?: boolean;
  shadowSize?: 'small' | 'medium' | 'large';
}

const CustomCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, gradient, shadowSize = 'medium', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        // الخصائص الأساسية
        "rounded-lg border text-card-foreground transition-all duration-200",
        
        // استخدام متغيرات الـ CSS الخاصة بك
        "bg-card border-soft", 
        
        // تفعيل الجرادينت بناءً على الـ Props
        gradient && "bg-card-gradient",
        
        // تفعيل الظلال بناءً على الكلاسات التي عرفتها أنت
        shadowSize === 'small' && "shadow-small",
        shadowSize === 'medium' && "shadow-medium",
        shadowSize === 'large' && "shadow-large",
        
        className
      )}
      {...props}
    />
  )
)
CustomCard.displayName = "CustomCard"

export { CustomCard }