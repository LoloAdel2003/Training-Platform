import { Message } from "@/api/type/message";

interface Props {
  message: Message;
}

const MessageBubble = ({ message }: Props) => {
  const isMe = message.sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[60%] px-4 py-2 rounded-xl text-sm
        ${isMe ? "bg-primary/50 text-white" : "bg-gray-200 text-gray-800"}`}
      >
        {message.text}
      </div>
    </div>
  );
};
export default MessageBubble;