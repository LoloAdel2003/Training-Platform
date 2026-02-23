import {
  Mail,
  Sparkles,
  Clock,
  XCircle,
} from "lucide-react";
import { NotificationType } from "../../../api/type/notification";

export const NotificationIcon = ({ type }: { type: NotificationType }) => {
  const baseClass = "w-5 h-5";

  switch (type) {
    case "message":
      return <Mail className={`${baseClass} text-blue-500`} />;
    case "update":
      return <Sparkles className={`${baseClass} text-indigo-500`} />;
    case "reminder":
      return <Clock className={`${baseClass} text-amber-500`} />;
    case "payment_failed":
      return <XCircle className={`${baseClass} text-red-500`} />;
    default:
      return null;
  }
};
