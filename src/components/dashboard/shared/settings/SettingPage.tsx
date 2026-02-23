// app/settings/page.tsx
import { SocialProfile } from "./SocialProfile";
import { SecuritySettings } from "./SecuritySettings";
import { SettingsField } from "./SettingsInput";
import { SettingsSection } from "./SettingsSection";

export default function SettingsPage() {
  return (
    <div className=" bg-app">
      <div className="w-full">
        
        {/* Account Settings Section */}
        <SettingsSection title="Account Settings">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              <SettingsField label="First Name" placeholder="First name" />
              <SettingsField label="Last Name" placeholder="Last name" />
              <div className="md:col-span-2">
                <SettingsField label="Username" placeholder="Enter your username" />
              </div>
              <div className="md:col-span-2">
                <SettingsField label="Biography" placeholder="Your bio..." />
              </div>
            </div>
            
            {/* Image Upload Area */}
            <div className="w-full  md:w-64 flex flex-col items-center gap-4">
              <div className="w-48 h-48 bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-border shadow-small bg-my-gradient">
                <span className="text-muted-foreground text-xs text-center p-4">
                  Image size should be under 2MB and ratio 1:1
                </span>
              </div>
              <button className="w-full py-2 bg-secondary text-secondary-foreground rounded-md text-sm">
                Upload Photo
              </button>
            </div>
          </div>
        </SettingsSection>

        <SocialProfile />
        <SecuritySettings />
        
      </div>
    </div>
  )
}