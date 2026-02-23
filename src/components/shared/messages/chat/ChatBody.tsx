"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import MessageBubble from "./MessageBubble";

const ChatBody = () => {
  const { selectedConversationId, messages } = useSelector(
    (state: RootState) => state.chat
  );

  if (!selectedConversationId) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Select a conversation to start chatting
      </div>
    );
  }

  const conversationMessages = messages[selectedConversationId] || [];

  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-4">
      {conversationMessages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default ChatBody;
