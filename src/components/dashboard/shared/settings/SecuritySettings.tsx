// components/organisms/SecuritySettings.tsx
import { Checkbox } from "@/components/ui/checkbox";
import { SettingsField } from "./SettingsInput";
import { SettingsSection } from "./SettingsSection";

export const SecuritySettings = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Notifications */}
    <SettingsSection title="Notifications">
      <div className="space-y-4">
        {[
          "I want to know who buys my course",
          "I want to know who wrote a review",
          "I want to know daily how many people visited"
        ].map((text, i) => (
          <div key={i} className="flex items-center space-x-3">
            <Checkbox id={`check-${i}`} className="border-primary" />
            <label htmlFor={`check-${i}`} className="text-sm text-muted-foreground cursor-pointer">
              {text}
            </label>
          </div>
        ))}
      </div>
    </SettingsSection>

    {/* Change Password */}
    <SettingsSection title="Change Password">
      <div className="space-y-4">
        <SettingsField label="Current Password" type="password" />
        <SettingsField label="New Password" type="password" />
        <SettingsField label="Confirm Password" type="password" />
      </div>
    </SettingsSection>
  </div>
)