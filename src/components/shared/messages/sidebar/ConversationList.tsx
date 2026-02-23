"use client";

import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from 
// import { selectConversation } from "@/features/chat/chatSlice";
import { Conversation } from "@/api/type/message";
import MessageAvatar from "../shared/MessageAvatar";
import { RootState } from "@/store";
import { selectConversation } from "@/store/slices/chatSlice";

/* -------------------- Conversation Item -------------------- */

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}

const ConversationItem = memo(
  ({ conversation, isActive, onClick }: ConversationItemProps) => {
    return (
      <div
        onClick={onClick}
        className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition
          hover:bg-gray-100 dark:hover:bg-gray-800
          ${isActive ? "bg-gray-100 dark:bg-gray-800" : ""}
        `}
      >
        <MessageAvatar
          name={conversation.name}
          src={conversation.avatar}
          status={conversation.status}
          size="md"
        />

        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm truncate">
            {conversation.name}
          </p>

          <p className="text-xs text-gray-500 truncate">
            {conversation.lastMessageType === "image"
              ? "📷 Photo"
              : conversation.lastMessageType === "file"
              ? "📎 File"
              : conversation.lastMessageType === "voice"
              ? "🎧 Voice message"
              : conversation.lastMessage}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className="text-xs text-gray-400 whitespace-nowrap">
            {conversation.time}
          </span>

          {conversation.unreadCount > 0 && (
            <span className="min-w-[18px] h-[18px] px-1 text-[10px] bg-blue-600 text-white rounded-full flex items-center justify-center">
              {conversation.unreadCount}
            </span>
          )}
        </div>
      </div>
    );
  }
);

ConversationItem.displayName = "ConversationItem";

/* -------------------- Conversation List -------------------- */

const ConversationList = () => {
  const dispatch = useDispatch();

  const { conversations, selectedConversationId } = useSelector(
    (state: RootState) => state.chat
  );

  // ترتيب احترافي: pinned أولاً ثم حسب updatedAt
 const sortedConversations = [...conversations].sort((a, b) => {
  if (a.isPinned && !b.isPinned) return -1;
  if (!a.isPinned && b.isPinned) return 1;

  const dateA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
  const dateB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;

  return dateB - dateA;
});


  return (
    <div className="flex-1 overflow-y-auto">
      {sortedConversations.map((conv) => (
        <ConversationItem
          key={conv.id}
          conversation={conv}
          isActive={selectedConversationId === conv.id}
          onClick={() => dispatch(selectConversation(conv.id))}
        />
      ))}
    </div>
  );
};

export default ConversationList;
