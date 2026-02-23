import { Switch } from "@/components/ui/switch";
import { NotificationSetting } from "@/api/type/notifications";

export const NotificationRow = ({ setting }: { setting: NotificationSetting }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b last:border-0 border-border">
      <div className="space-y-0.5">
        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{setting.title}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">{setting.description}</p>
      </div>
      <Switch 
        defaultChecked={setting.enabled} 
        className="data-[state=checked]:bg-primary"
      />
    </div>
  );
};