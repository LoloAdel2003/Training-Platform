// components/comments/CommentItem.tsx
import { Reply } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface CommentItemProps {
  author: string;
  date: string;
  content: string;
  avatarSrc: string;
  isReply?: boolean;
}

export const CommentItem = ({ author, date, content, avatarSrc, isReply }: CommentItemProps) => (
  <div className={`flex gap-4 py-4 ${isReply ? "ms-12 md:ms-20 border-t border-border/50" : "border-t border-border"}`}>
    <Avatar className="h-12 w-12 border-soft">
      <AvatarImage src={avatarSrc} alt={author} />
      <AvatarFallback>{author[0]}</AvatarFallback>
    </Avatar>
    
    <div className="flex-1 space-y-1">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-foreground font-sans">{author}</h4>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        "{content}"
      </p>
      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto gap-1">
        <Reply size={14} className="rotate-180" />
        Reply
      </Button>
    </div>
  </div>
);