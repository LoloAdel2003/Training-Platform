"use client";

import { Card } from "@/components/ui/card";
import { ContentItem } from "./ContentItem";
// import { LectureContentItem } from "./types";
import {
  FileText,
  PlayCircle,
  Paperclip,
  MessageSquare,
} from "lucide-react";
import { LectureContentItem } from "@/api/type/lecture";

interface Props {
  items: LectureContentItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const DynamicCourseSidebar = ({
  items,
  activeId,
  onSelect,
}: Props) => {
  const getIcon = (type: LectureContentItem["type"]) => {
    switch (type) {
      case "description":
        return <FileText size={18} />;
      case "video":
        return <PlayCircle size={18} />;
      case "file":
        return <Paperclip size={18} />;
      case "comments":
        return <MessageSquare size={18} />;
    }
  };

  return (
    <Card className="w-full max-w-[300px] py-6 px-4 flex flex-col gap-6 h-fit">
      <h2 className="text-primary font-bold text-center border-b pb-4">
        Lecture Content
      </h2>

      {items.map((item) => (
        <div key={item.id} onClick={() => onSelect(item.id)}>
          <ContentItem
            icon={getIcon(item.type)}
            label={item.label}
            meta={
              item.type === "video"
                ? item.duration
                : item.type === "file"
                ? item.size
                : item.type === "comments"
                ? String(item.count)
                : undefined
            }
            isActive={activeId === item.id}
          />
        </div>
      ))}
    </Card>
  );
};
