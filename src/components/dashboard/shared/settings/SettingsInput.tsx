// components/ui/settings-input.tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SettingsFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
}

export const SettingsField = ({ label, placeholder, type = "text", icon }: SettingsFieldProps) => (
  <div className="space-y-2 w-full">
    <Label className="text-sm font-medium text-foreground/80">{label}</Label>
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>}
      <Input 
        type={type} 
        placeholder={placeholder} 
        className={`bg-input border-border focus:ring-ring ${icon ? 'pl-10' : ''}`} 
      />
    </div>
  </div>
)