"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export type AnnouncementType = {
  name: string;
  role: string;
  announcmentTitle: string;
  publishDate: string;
  description: string;
  imageSrc: string;
  announcementType:string
};

const AnnouncementCard: React.FC<{ data: AnnouncementType }> = ({ data }) => {
  const route=useRouter()
  const handleClick=()=>{
     const announcement = data.announcmentTitle
            .toLowerCase()
            .replace(/\s+/g, "-"); // استبدال المسافات بـ -

    route.push(`/announcement/${announcement}`)

  }
  return (
    <div className="flex flex-col relative  md:flex-row justify-between items-center gap-5 py-16 px-4 md:px-10 lg:px-16 bg-app">

  {/* الصورة */}
  <div className=" w-64 h-64 absolute top-1/2  right-0  opacity-20 md:opacity-100 transform -translate-y-1/2 md:translate-y-0 md:relative md:w-80 md:h-80 shrink-0">
    <Image
      src={data.imageSrc}
      alt={data.name}
      fill
      className="rounded-full object-cover shadow-large "
    />
  </div>

  {/* النصوص */}
  <div className="flex flex-col text-left">

    <div className="mb-2">
      <span className="text-primary font-semibold text-lg">
        {data.name} –
      </span>
      <span className="text-foreground/80 font-medium text-lg">
        {data.role}
      </span>
    </div>

    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
      {data.announcementType}:{" "}
      <span className="text-primary">“{data.announcmentTitle}”</span>
    </h2>

    <p className="text-muted-soft text-xs mb-6 uppercase tracking-wide">
      Published on: {data.publishDate}
    </p>

    <p className="text-foreground/80 text-lg leading-relaxed max-w-xl mb-6">
      {data.description}
    </p>

    <button
      onClick={handleClick}
      className="flex items-center cursor-pointer gap-2 text-primary font-bold text-sm hover:underline w-fit"
    >
      See Details <ArrowRight size={18} />
    </button>

  </div>
</div>

  );
};

export default AnnouncementCard;