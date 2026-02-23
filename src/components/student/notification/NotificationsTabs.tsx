import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import NotificationItem from "./NotificationItem";

const NotificationsTabs = () => {
  return (
    <Tabs defaultValue="all" className="">
      <div >
     <TabsList className="mb-2 flex justify-start bg-muted/60 rounded-xl border border-border p-1">
  <TabsTrigger value="all" className="min-w-[100px]">
    All (4)
  </TabsTrigger>

  <TabsTrigger value="unread" className="min-w-[100px]">
    New (2)
  </TabsTrigger>
</TabsList>

</div> 
      <TabsContent value="all" className="space-y-4">
        <NotificationItem
          title="New message received"
          description="You’ve received a new message from your course instructor."
          date="Oct 28, 2025"
          type="message"
          unread
        />
         <NotificationItem
          title="Payment Failed"
          description="You’ve received a new message from your course instructor."
          date="Oct 28, 2025"
          type="payment_failed"
          unread
        />

        <NotificationItem
          title="Platform Update Available"
          description="New features have been added to your dashboard."
          date="Oct 28, 2025"
          type="update"
        />
        

        <NotificationItem
          title="Platform Update Available"
          description="New features have been added to your dashboard."
          date="Oct 28, 2025"
          type="update"
        />
      </TabsContent>

      <TabsContent value="unread" className="space-y-4">
        {/* unread only */}
         
         <NotificationItem
          title="Payment Failed"
          description="You’ve received a new message from your course instructor."
          date="Oct 28, 2025"
          type="payment_failed"
          unread
        />
         <NotificationItem
          title="New message received"
          description="You’ve received a new message from your course instructor."
          date="Oct 28, 2025"
          type="message"
          unread
        />
      </TabsContent>

      <TabsContent value="read" className="space-y-4">
        {/* read only */}
         <NotificationItem
          title="New message received"
          description="You’ve received a new message from your course instructor."
          date="Oct 28, 2025"
          type="message"
          
        />
         <NotificationItem
          title="New message received"
          description="You’ve received a new message from your course instructor."
          date="Oct 28, 2025"
          type="payment_failed"
          
        />
      </TabsContent>
    </Tabs>
  );
};

export default NotificationsTabs;
