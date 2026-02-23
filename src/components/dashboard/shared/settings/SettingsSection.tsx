// components/molecules/SettingsSection.tsx
// import { CustomCard } from 

import { CustomCard } from "./CustomCard";

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
  onSave?: () => void;
}

export const SettingsSection = ({ title, children, onSave }: SettingsSectionProps) => (
  <CustomCard className="p-6 mb-8 bg-card shadow-medium border-soft">
    <h2 className="text-xl font-bold mb-6 text-foreground border-b pb-4">{title}</h2>
    <div className="grid gap-6">
      {children}
    </div>
    <div className="mt-8">
      <button 
        onClick={onSave}
        className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all font-medium"
      >
        Save Changes
      </button>
    </div>
  </CustomCard>
)