"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface MessageAvatarProps {
  src?: string
  name: string
  status?: "online" | "offline" | "away"
  size?: "sm" | "md" | "lg"
}

const sizeMap = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
}

export const MessageAvatar = ({
  src,
  name,
  status,
  size = "md",
}: MessageAvatarProps) => {
  return (
    <div className="relative">
      <Avatar className={cn(sizeMap[size])}>
        <AvatarImage src={src} alt={name} />
        <AvatarFallback>
          {name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white",
            status === "online" && "bg-green-500",
            status === "offline" && "bg-gray-400",
            status === "away" && "bg-yellow-400"
          )}
        />
      )}
    </div>
  )
}
export default MessageAvatar