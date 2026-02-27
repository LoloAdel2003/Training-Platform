// components/sections/article-editor/image-upload.tsx
import { ImagePlus } from "lucide-react";

export const ImageUpload = () => {
  return (
    <div className="mt-8 border-t border-border pt-6">
      <label className="text-sm font-medium text-foreground mb-3 block">Image Cover</label>
      <div className="w-full h-48 border-2 border-dashed border-input rounded-xl bg-background hover:bg-muted cursor-pointer transition flex flex-col items-center justify-center gap-2 group">
        <ImagePlus className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
        <p className="text-sm text-muted-soft">Click to upload or drag image</p>
      </div>
    </div>
  );
};