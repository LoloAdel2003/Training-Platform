// components/molecules/CourseImageUpload.tsx
// import { CustomCard } from "./CustomCard";
import { ImageIcon, UploadCloud } from "lucide-react";
import { CustomCard } from "../settings/CustomCard";

export const CourseImageUpload = () => (
  <CustomCard className="p-4 border-soft bg-card">
    <h3 className="text-sm font-bold mb-4">Course Image</h3>
    <div className="aspect-video relative rounded-lg overflow-hidden border-2 border-dashed border-border flex flex-col items-center justify-center bg-my-gradient group hover:border-primary transition-all cursor-pointer">
      {/* هنا نضع الصورة الافتراضية كما في الصورة */}
      <img src="/course-placeholder.jpg" alt="Preview" className="absolute inset-0 object-cover opacity-50" />
      <div className="z-10 flex flex-col items-center gap-2">
        <UploadCloud className="text-primary" size={32} />
        <p className="text-xs text-muted-foreground">Browse or drag and drop</p>
      </div>
    </div>
  </CustomCard>
);