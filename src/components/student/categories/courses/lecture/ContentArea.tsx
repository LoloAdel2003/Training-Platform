// import { LectureContentItem } from "@/types/lecture";

import { LectureContentItem } from "@/api/type/lecture";

interface Props {
  item?: LectureContentItem;
}

export const DynamicLectureContent = ({ item }: Props) => {
  if (!item) return null;

  switch (item.type) {
    case "description":
      return (
        <div>
          <h1 className="text-2xl font-bold mb-6">{item.label}</h1>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {item.content}
          </p>
        </div>
      );

    case "video":
      return (
        <div>
          <h1 className="text-2xl font-bold mb-6">{item.label}</h1>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src={item.url}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      );

    case "file":
      return (
        <div>
          <h1 className="text-2xl font-bold mb-6">{item.label}</h1>
          <a
            href={item.fileUrl}
            className="text-primary underline"
            target="_blank"
          >
            Download File ({item.size})
          </a>
        </div>
      );

    case "comments":
      return (
        <div>
          <h1 className="text-2xl font-bold mb-6">Comments</h1>
          <p className="text-muted-foreground">
            Total comments: {item.count}
          </p>
        </div>
      );
  }
};
