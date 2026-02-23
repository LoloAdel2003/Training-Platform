// components/organisms/CourseDetailsForm.tsx
// import { SettingsField } from "../ui/settings-input";
// import { CustomTextarea, DynamicInputField } from "../ui/custom-form-elements";
// import { SettingsSection } from "../molecules/SettingsSection";

import { SettingsField } from "../settings/SettingsInput";
import { SettingsSection } from "../settings/SettingsSection";
import { DynamicInputField } from "./FormElements";

export const CourseBasicDetails = () => (
  <SettingsSection title="Basic Details">
    <div className="space-y-6">
      <SettingsField label="Course Name" placeholder="Ex: Frontend Development" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SettingsField label="Category" placeholder="Select..." />
        <SettingsField label="Type" placeholder="Select..." />
        <SettingsField label="Level" placeholder="Select..." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SettingsField label="Duration" placeholder="30 Hours" />
        <SettingsField label="Lessons" placeholder="15 Lessons" />
      </div>
    </div>
  </SettingsSection>
);

export const DynamicCurriculumSection = ({ title, placeholder }: any) => (
  <SettingsSection title={title}>
    <div className="space-y-2">
       {[1, 2, 3, 4].map((i) => (
         <DynamicInputField key={i} index={i < 10 ? `0${i}` : i} placeholder={placeholder} />
       ))}
       <button className="text-primary text-sm font-bold mt-2 hover:underline">+ Add New</button>
    </div>
  </SettingsSection>
);