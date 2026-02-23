export interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export interface NotificationGroup {
  id: string;
  groupTitle: string;
  groupDescription: string;
  icon: React.ReactNode;
  settings: NotificationSetting[];
}