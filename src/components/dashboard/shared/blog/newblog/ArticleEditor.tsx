// components/sections/article-editor/article-editor.tsx
// import { HintTooltip } from "@/components/ui/hint-tooltip";
// import { ImageUpload } from "./image-upload";

import { ImageUpload } from "./ImageUpload";
import { HintTooltip } from "./HinTooltip";

export const ArticleEditor = () => {
  return (
    <section className="bg-card-gradient border border-soft rounded-lg shadow-medium overflow-hidden transition-shadow hover:shadow-large">
      <div className="p-6 md:p-8">
        
        {/* Title and Body inputs */}
        <div className="space-y-6">
          <input 
            type="text" 
            placeholder="Post Title" 
            className="w-full border border-border text-2xl font-extrabold text-foreground bg-transparent rounded-lg p-2 px-4 focus:ring-0 placeholder:text-muted-foreground"
          />
          <div className="flex gap-2 items-start text-muted-soft">
            <textarea 
              placeholder="Post Body" 
              className="flex-grow border border-border w-full h-64 text-base bg-transparent rounded-lg p-2 px-4 focus:ring-0 placeholder:text-muted-foreground resize-none"
            />
            {/* <HintTooltip text="You can use Markdown for formatting (bold, italics, lists, etc.)" /> */}
          </div>
        </div>

        {/* Image upload */}
        <ImageUpload />
        
      </div>
    </section>
  );
};