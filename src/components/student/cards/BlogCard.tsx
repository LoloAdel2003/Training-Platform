"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "../../ui/card";
import { HeartIcon, MessageCircle } from "lucide-react";
import Link from "next/link";

type BlogsCardProps = {
  title: string;
  description: string;
  srcImg: string;
  likeNum: number;
  commentNum: number;
  onClick?: () => void;
};

const BlogsCard: React.FC<BlogsCardProps> = ({
  title,
  description,
  srcImg,
  likeNum,
  commentNum,
  onClick,
}) => {
  return (
    <Link href={`/student/blogs/${title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
    <Card
  onClick={onClick}
  className="group flex flex-col max-w-sm w-full overflow-hidden rounded-xl border bg-card text-card-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
>
  {/* Image */}
  <div className="relative w-full overflow-hidden">
    <img
      src={srcImg}
      alt={title}
      className="w-full h-40 sm:h-44 md:h-45 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 dark:bg-white/5 group-hover:bg-black/20 transition-opacity"></div>
  </div>

  {/* Content */}
  <CardHeader className="px-5 py-4 text-left space-y-1">
    <h3 className="text-base sm:text-lg font-semibold line-clamp-2">{title}</h3>
    <p className="text-sm text-muted-soft line-clamp-2">{description}</p>
  </CardHeader>

  {/* Footer */}
  <div className="mt-auto flex items-center justify-between px-5 py-3 border-t text-sm">
    <div className="flex items-center gap-1.5 text-muted-soft">
      <HeartIcon className="w-4 h-4 text-destructive" />
      <span className="font-medium">{likeNum}</span>
    </div>
    <div className="flex items-center gap-1.5 text-muted-soft">
      <MessageCircle className="w-4 h-4 text-primary" />
      <span className="font-medium">{commentNum}</span>
    </div>
  </div>
</Card>
</Link>

  );
};

export default BlogsCard;
