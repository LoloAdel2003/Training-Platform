// components/ui/CustomButton.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    
    // تعريف الستايلات بناءً على التيمات اللي أرسلتها
    const variants = {
      primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-small",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground shadow-xs",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      // التدرج اللوني الخاص بك
      gradient: "bg-my-gradient shadow-medium text-foreground hover:scale-[1.02] active:scale-[0.98] border border-border/50",
    }
    
    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-8 text-base",
      icon: "h-9 w-9", // مخصص للأيقونات مثل العين والحذف
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 select-none",
          // استخدام الـ Radius الذي حددته في الـ CSS
          "rounded-[var(--radius)]", 
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
CustomButton.displayName = "CustomButton"

export { CustomButton }