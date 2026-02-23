

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
}

export const FormField = ({ label, placeholder, type = "text", className }: FormFieldProps) => (
  <div className={`space-y-1.5 ${className}`}>
    <Label className="text-xs font-medium text-gray-700 dark:text-gray-400">{label}</Label>
    <Input 
      type={type} 
      placeholder={placeholder} 
      className="h-10 text-sm border-gray-200 focus:ring-1 focus:ring-indigo-500" 
    />
  </div>
);