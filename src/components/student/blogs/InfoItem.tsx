// components/ui/MetaItem.tsx
import React from 'react';

interface InfoItemProps {
  icon: React.ReactNode;
  text: string;
}

export const InfoItem = ({ icon, text }: InfoItemProps) => (
  <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-sans">
    <span className="text-primary w-4 h-4">{icon}</span>
    <span>{text}</span>
  </div>
);