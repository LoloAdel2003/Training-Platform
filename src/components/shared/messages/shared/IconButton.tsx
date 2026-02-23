"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface IconButtonProps {
  icon: ReactNode
  onClick?: () => void
  variant?: "ghost" | "outline"
  size?: "icon" | "sm"
}

const IconButton = ({
  icon,
  onClick,
  variant = "ghost",
  size = "icon",
}: IconButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      className={cn("rounded-full")}
    >
      {icon}
    </Button>
  )
}

export default IconButton
