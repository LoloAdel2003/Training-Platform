"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "@/store/slices/chatSlice";
import type { AppDispatch, RootState } from "@/store";
import type { Message } from "@/api/type/message";

const ChatInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const selectedConversationId = useSelector(
    (state: RootState) => state.chat.selectedConversationId
  );

  // لو ما في محادثة مختارة → ما تعرض شيء
  if (!selectedConversationId) return null;

  const handleSend = () => {
    if (!text.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    dispatch(
      sendMessage({
        conversationId: selectedConversationId,
        message,
      })
    );

    setText("");
  };

  return (
    <div className="border-t border-border bg-card p-4 flex gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message"
        className="flex-1 border border-border rounded-lg px-4 py-2 text-sm"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />
      <button
        onClick={handleSend}
        className="bg-primary text-primary-foreground px-4 rounded-lg"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
