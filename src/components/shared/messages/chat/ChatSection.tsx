import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const ChatSection = () => {
  return (
    <section className="flex-1 flex flex-col">
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </section>
  );
};
export default ChatSection;