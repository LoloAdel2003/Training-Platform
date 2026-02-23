"use client";

import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import MessageSidebar from "@/components/shared/messages/sidebar/MessageSidebar";
import ChatSection from "@/components/shared/messages/chat/ChatSection";


const MessageSection = () => {
  const selectedConversationId = useSelector(
    (state: RootState) => state.chat.selectedConversationId
  );

  return (
    <div className="flex border border-border shadow-sm rounded-sm overflow-hidden h-[calc(100vh-57px)] md:h-[calc(100vh-60px)] bg-background">
      
      {/* Sidebar: يظهر دائماً على md وما فوق، وعلى mobile يظهر إذا ما في محادثة مختارة */}
      <div
        className={`${
          selectedConversationId ? "hidden" : "flex-1"
        } md:flex`}
      >
        <MessageSidebar />
      </div>

      {/* ChatSection: يظهر على md وما فوق، وعلى mobile يظهر فقط إذا في محادثة مختارة */}
      <div
        className={`flex-1 ${
          selectedConversationId ? "flex" : "hidden"
        }`}
      >
        <ChatSection />
      </div>

    </div>
  );
};

export default MessageSection;
