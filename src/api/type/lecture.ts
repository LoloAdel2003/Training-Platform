export type LectureContentItem =
  | {
      id: string;
      type: "description";
      label: string;
      content: string;
    }
  | {
      id: string;
      type: "video";
      label: string;
      url: string;
      duration: string;
    }
  | {
      id: string;
      type: "file";
      label: string;
      size: string;
      fileUrl: string;
    }
  | {
      id: string;
      type: "comments";
      label: string;
      count: number;
    };

export interface Lecture {
  id: string;
  title: string;
  content: LectureContentItem[];
}
