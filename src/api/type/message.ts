export interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  time: string;
}

export interface Conversation {
  id: string;

  /* User info */
  name: string;
  avatar: string;
  status?: "online" | "offline" | "away";

  /* Last message preview */
  lastMessage: string;
  lastMessageType?: "text" | "image" | "file" | "voice";
  lastMessageSender?: "me" | "other";
  time: string;

  /* State */
  unreadCount: number;
  isPinned?: boolean;
  isMuted?: boolean;

  /* Meta */
  updatedAt?: string;
}
