export type RelatedInformationItem = {
  label: string;
  value: string;
};

// api/type/announcement.ts
export type AnnouncementType = {
  announcmentTitle: string;
  name: string;
  role: string;
  publishDate: string;
  imageSrc: string;
  announcementType: string;

  description: string;

  relatedInformation: {
    label: string;
    value: string;
  }[];

  details?: {
    sectionTitle: string;
    content?: string;
    list?: string[];
  }[];
};
