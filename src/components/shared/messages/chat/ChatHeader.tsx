"use client";

import { MoreVertical, ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { selectConversation } from "@/store/slices/chatSlice";
import IconButton from "../shared/IconButton";
import MessageAvatar from "../shared/MessageAvatar";

const ChatHeader = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { selectedConversationId, conversations } = useSelector(
    (state: RootState) => state.chat
  );

  // لو ما في محادثة مختارة → لا تعرض شيء
  if (!selectedConversationId) return null;

  const conversation = conversations.find(
    (c) => c.id === selectedConversationId
  );

  if (!conversation) return null;

  const handleBack = () => {
    dispatch(selectConversation("")); // نرجع null
  };

  return (
    <div className="h-16 bg-card border-b border-border px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        
        {/* زر الرجوع */}
        <IconButton
          icon={<ArrowLeft className="h-5 w-5" />}
          onClick={handleBack}
        />

        <MessageAvatar
          name={conversation.name}
          src={conversation.avatar}
          status={conversation.status}
          size="lg"
        />

        <div>
          <p className="font-medium">{conversation.name}</p>
          <span
            className={`text-xs ${
              conversation.status === "online"
                ? "text-green-500"
                : "text-muted-foreground"
            }`}
          >
            {conversation.status === "online"
              ? "Active Now"
              : conversation.status}
          </span>
        </div>
      </div>

      <IconButton icon={<MoreVertical className="h-5 w-5" />} />
    </div>
  );
};

export default ChatHeader;
