import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Conversation, Message } from "@/api/type/message";

 const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/avatars/john_doe.jpg",
    status: "online",
    lastMessage: "Hey, how are you?",
    lastMessageType: "text",
    lastMessageSender: "other",
    time: "2:30 PM",
    unreadCount: 2,
    isPinned: true,
    updatedAt: "2026-01-18T14:30:00Z",
  },
  {
    id: "2",
    name: "Sarah Connor",
    avatar: "/avatars/sarah.jpg",
    status: "offline",
    lastMessage: "I've sent the files",
    lastMessageType: "file",
    lastMessageSender: "other",
    time: "1:10 PM",
    unreadCount: 0,
    updatedAt: "2026-01-18T13:10:00Z",
  },
  {
    id: "3",
    name: "Mike Ross",
    avatar: "/avatars/mike.jpg",
    status: "away",
    lastMessage: "Voice message",
    lastMessageType: "voice",
    lastMessageSender: "me",
    time: "Yesterday",
    unreadCount: 1,
    isMuted: true,
    updatedAt: "2026-01-17T20:00:00Z",
  },
  {
    id: "4",
    name: "Emma Stone",
    avatar: "/avatars/emma.jpg",
    status: "online",
    lastMessage: "See you tomorrow",
    lastMessageType: "text",
    lastMessageSender: "other",
    time: "Mon",
    unreadCount: 0,
    updatedAt: "2026-01-15T09:00:00Z",
  },
  {
    id: "5",
    name: "Alex Brown",
    avatar: "/avatars/alex.jpg",
    status: "online",
    lastMessage: "Photo",
    lastMessageType: "image",
    lastMessageSender: "other",
    time: "Sun",
    unreadCount: 5,
    updatedAt: "2026-01-14T18:20:00Z",
  },
];

 const mockMessagesByConversation: Record<string, Message[]> = {
  "1": [
    {
      id: "m1",
      text: "Hello! How are you?",
      sender: "other",
      time: "10:00 AM",
    },
    {
      id: "m2",
      text: "I'm good, thanks!",
      sender: "me",
      time: "10:01 AM",
    },
  ],

  "2": [
    {
      id: "m3",
      text: "I've sent the files",
      sender: "other",
      time: "1:10 PM",
    },
  ],
   "3": [
    {
      id: "m1",
      text: "Hello! How are you?",
      sender: "other",
      time: "10:00 AM",
    },
    {
      id: "m2",
      text: "I'm good, thanks!",
      sender: "me",
      time: "10:01 AM",
    },
  ],

  "4": [
    {
      id: "m3",
      text: "I've sent the files",
      sender: "other",
      time: "1:10 PM",
    },
  ],
   "5": [
    {
      id: "m1",
      text: "Hello! How are you?",
      sender: "other",
      time: "10:00 AM",
    },
    {
      id: "m2",
      text: "I'm good, thanks!",
      sender: "me",
      time: "10:01 AM",
    },
  ],

  "6": [
    {
      id: "m3",
      text: "I've sent the files",
      sender: "other",
      time: "1:10 PM",
    },
  ],
};


interface ChatState {
  conversations: Conversation[];
  messages: Record<string, Message[]>;
  selectedConversationId: string | null;
}

const initialState: ChatState = {
  conversations: mockConversations,
  messages: mockMessagesByConversation,
  selectedConversationId: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    selectConversation(state, action: PayloadAction<string>) {
      state.selectedConversationId = action.payload;

      const conversation = state.conversations.find(
        (c) => c.id === action.payload
      );

      if (conversation) {
        conversation.unreadCount = 0;
      }
    },

    sendMessage(
      state,
      action: PayloadAction<{ conversationId: string; message: Message }>
    ) {
      const { conversationId, message } = action.payload;

      if (!state.messages[conversationId]) {
        state.messages[conversationId] = [];
      }

      state.messages[conversationId].push(message);

      const conversation = state.conversations.find(
        (c) => c.id === conversationId
      );

      if (conversation) {
        conversation.lastMessage = message.text;
        conversation.lastMessageType = "text";
        conversation.lastMessageSender = message.sender;
        conversation.time = message.time;
      }
    },

    receiveMessage(
      state,
      action: PayloadAction<{ conversationId: string; message: Message }>
    ) {
      const { conversationId, message } = action.payload;

      if (!state.messages[conversationId]) {
        state.messages[conversationId] = [];
      }

      state.messages[conversationId].push(message);

      const conversation = state.conversations.find(
        (c) => c.id === conversationId
      );

      if (conversation) {
        conversation.lastMessage = message.text;
        conversation.unreadCount += 1;
        conversation.time = message.time;
      }
    },
  },
});

export const {
  selectConversation,
  sendMessage,
  receiveMessage,
} = chatSlice.actions;

export default chatSlice.reducer;
