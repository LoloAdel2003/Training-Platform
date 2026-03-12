// components/assignment/file-card.tsx
import { FileText, Download } from "lucide-react";

export const FileCard = ({ name, url }: { name: string; url?: string }) => (
  <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-card/50 w-full max-w-sm">
    <div className="flex items-center gap-3">
      <FileText className="text-primary w-5 h-5" />
      <span className="text-sm font-medium truncate max-w-[200px]">{name}</span>
    </div>
    {url && (
      <a href={url} download className="text-muted-foreground hover:text-primary transition-colors">
        <Download size={18} />
      </a>
    )}
  </div>
);