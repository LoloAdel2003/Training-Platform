"use client";
// لتوحيد شكل الايقونات في كل مكان في التطبيق، قمنا بإنشاء مكون TodoIconButton الذي يستقبل نوع الايقونة (نجمة، حذف، تعديل) ويطبق الأنماط المناسبة بناءً على ذلك. هذا يسهل علينا الحفاظ على تناسق التصميم ويجعل الكود أكثر نظافة وقابلية لإعادة الاستخدام.
import { Star, Trash2, X, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick?: () => void;
  active?: boolean;
  variant: "star" | "delete" | "close" | "edit";
  disabled?: boolean;
  className?: string;
  
}

export const TodoIconButton = ({
  onClick,
  active,
  variant,
  disabled,
  className
}: IconButtonProps) => {
  const baseClasses =
    "p-1.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:cursor-not-allowed";

  
  if (variant === "star") {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-label="Star task"
        className={cn(baseClasses, "hover:scale-110")}
      >
        <Star
          className={cn(
            "w-5 h-5 transition-colors",
            active
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground hover:text-yellow-400"
          )}
        />
      </button>
    );
  }

  // ✏️ EDIT BUTTON
  if (variant === "edit") {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-label="Edit task"
        className={cn(
          baseClasses,
          "border border-border bg-background text-muted-foreground hover:bg-primary hover:text-primary-foreground shadow-sm"
        )}
      >
        <Pencil size={15} />
      </button>
    );
  }

  // 🗑 DELETE / CLOSE BUTTON
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={variant === "delete" ? "Delete task" : "Remove task"}
      className={cn(
        baseClasses,
        className,
        "border border-border bg-background text-muted-foreground hover:bg-destructive hover:text-destructive-foreground shadow-sm"
      )}
    >
      <Trash2 size={16} />
     
    </button>
  );
};
