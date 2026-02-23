// components/organisms/SocialProfile.tsx
import { SettingsSection } from "./SettingsSection";
import { SettingsField } from "./SettingsInput";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const SocialProfile = () => (
  <SettingsSection title="Social Profile">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SettingsField label="Facebook" icon={<Facebook size={16}/>} placeholder="Username" />
      <SettingsField label="Instagram" icon={<Instagram size={16}/>} placeholder="Username" />
      <SettingsField label="Linkedin" icon={<Linkedin size={16}/>} placeholder="Username" />
      <SettingsField label="Twitter" icon={<Twitter size={16}/>} placeholder="Username" />
    </div>
  </SettingsSection>
)