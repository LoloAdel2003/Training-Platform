import { NotificationGroup } from "@/api/type/notifications";
import { NotificationRow } from "./NotificationRow";

export const NotificationCard = ({ group }: { group: NotificationGroup }) => {
  return (
    <div className="bg-card border border-border rounded-xl shadow-sm mb-6 overflow-hidden">
      {/* Header */}
      <div className="p-5 flex items-start gap-4 border-b border-border bg-gray-50/30 dark:bg-gray-800/30">
        <div className="p-2 bg-primary rounded-lg text-primary-foreground">
          {group.icon}
        </div>
        <div>
          <h3 className="text-md font-bold text-gray-900 dark:text-gray-100">{group.groupTitle}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{group.groupDescription}</p>
        </div>
      </div>
      
      {/* Rows */}
      <div className="px-5">
        {group.settings.map((setting) => (
          <NotificationRow key={setting.id} setting={setting} />
        ))}
      </div>
    </div>
  );
};