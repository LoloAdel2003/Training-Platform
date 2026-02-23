// components/ui/custom-form-elements.tsx
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// مكون Textarea يدعم الثيم
export const CustomTextarea = ({ label, ...props }: any) => (
  <div className="space-y-2 w-full">
    <Label className="text-sm font-medium text-foreground/70">{label}</Label>
    <textarea
      {...props}
      className={cn(
        "flex min-h-[120px] w-full rounded-md border border-border bg-input px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        props.className
      )}
    />
  </div>
);

// مكون الحقول الديناميكية (التي تظهر في أسفل الصورة الثانية مثل "What you will teach")
export const DynamicInputField = ({ label, index, placeholder }: any) => (
  <div className="flex gap-2 items-center w-full mb-3">
    <span className="text-muted-foreground text-sm font-mono">{index}.</span>
    <input 
      placeholder={placeholder}
      className="flex-1 bg-transparent border-b border-border py-2 focus:border-primary outline-none text-sm transition-all"
    />
  </div>
);