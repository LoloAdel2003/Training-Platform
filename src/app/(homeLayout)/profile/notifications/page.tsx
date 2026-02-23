import { Mail, Bell, ShieldCheck } from "lucide-react";
import { NotificationGroup } from "@/api/type/notifications";
import { NotificationCard } from "@/components/student/profile/notifications/NotificationCard";

const notificationData: NotificationGroup[] = [
  {
    id: "email",
    groupTitle: "Email Notifications",
    groupDescription: "Choose what email notifications you'd like to receive",
    icon: <Mail size={20} />,
    settings: [
      { id: "e1", title: "Marketing Emails", description: "Receive updates about new features and promotions", enabled: true },
      { id: "e2", title: "Security Alert", description: "Important security notifications and login alert", enabled: true },
      { id: "e3", title: "Courses Updates", description: "News about courses updates and improvements", enabled: true },
    ]
  },
  {
    id: "purchase",
    groupTitle: "Purchase Alert",
    groupDescription: "Control notifications related to purchases and transactions",
    icon: <ShieldCheck size={20} />,
    settings: [
      { id: "p1", title: "Order Confirmations", description: "Receive confirmations for successful purchases", enabled: true },
      { id: "p2", title: "Special Offers", description: "Get notified about discount and deals", enabled: true },
    ]
  },
  {
    id: "in-app",
    groupTitle: "In-app Alerts",
    groupDescription: "Manage notifications you see while using the app",
    icon: <Bell size={20} />,
    settings: [
      { id: "i1", title: "Direct Messages", description: "Notifications for new messages and mentions", enabled: true },
      { id: "i2", title: "System Alerts", description: "Important system notifications and updates", enabled: true },
      { id: "i3", title: "Courses Updates", description: "News about courses updates and improvements", enabled: true },
    ]
  }
];

export default function NotificationsPage() {
  return (
    <div className="  min-h-screen">
      <header className=" pb-4">
        <h1 className="text-lg font-semibold text-primary relative inline-block">
          Control notifications related to purchases and transactions
          {/* <span className="absolute bottom-[-9px] left-0 w-full h-0.5 bg-indigo-600"></span> */}
        </h1>
      </header>

      <div className="space-y-2">
        {notificationData.map((group) => (
          <NotificationCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}