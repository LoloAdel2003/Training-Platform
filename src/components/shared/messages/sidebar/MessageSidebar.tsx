import ConversationList from "./ConversationList";
import MessageSearch from "./MessageSearch";
import SidebarHeader from "./SidebarHeader";

const MessageSidebar = () => {
  return (
    <aside className= "w-full  lg:w-[300px] h-full bg-card border-r border-border flex flex-col">
      <SidebarHeader />
      <MessageSearch />
      <ConversationList />
    </aside>
  );
};
export default MessageSidebar;