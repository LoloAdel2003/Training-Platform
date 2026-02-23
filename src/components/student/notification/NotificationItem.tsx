import { NotificationIcon } from "./NotificationIcon";
import { NotificationType } from "../../../api/type/notification";
interface Props {
  title: string;
  description: string;
  date: string;
  type: NotificationType;
  unread?: boolean;
}

const NotificationItem = ({
  title,
  description,
  date,
  type,
  unread,
}: Props) => {
  return (
    <div
      className={`flex  gap-4 p-4 rounded-lg border transition
      ${unread ? "bg-card/15 border-primary" : "bg-card border-gray-400 dark:border-gray-800"}`}
    >
      <div className="mt-1">
        <NotificationIcon type={type} />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-sm">{title}</h4>
          <span className="text-xs text-gray-400 dark:text-gray-300">{date}</span>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;
