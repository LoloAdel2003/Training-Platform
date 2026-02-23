"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export type OrganizationCardType = {
  id: string;
  name: string;
  logo: string;
  location: string;
  description: string;
  coursesCount: number;
  roadmapCount: number;
  partnerSince: string;
  joinedDate: string;
  members: string[]; // صور الأشخاص
};

type OrganizationCardProps = {
  organization: OrganizationCardType;
};

const OrganizationCard: React.FC<OrganizationCardProps> = ({
  organization,
}) => {
  const {
    name,
    logo,
    location,
    description,
    coursesCount,
    roadmapCount,
    partnerSince,
    joinedDate,
    members,
  } = organization;
const route=useRouter()
// const handleCardClick=()=>{
//   route.push(`/organizations/${organization.id}`)
// }
  return (
   <Card className="w-[280px] rounded-2xl border bg-card text-card-foreground 
shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

  <CardContent className="p-4 flex flex-col gap-4">

    {/* Header */}
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt={name}
        className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
      />

      <div className="flex flex-col">
        <span className="font-semibold text-sm">{name}</span>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin size={12} />
          <span>{location}</span>
        </div>
      </div>
    </div>

    {/* Description */}
    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
      {description}
    </p>

    {/* Stats */}
    <div className="flex gap-4 text-sm">
      <span className="text-primary font-medium">Courses: {coursesCount}</span>
      <span className="text-muted-foreground">Roadmap: {roadmapCount}</span>
    </div>

    {/* Meta */}
    <div className="text-xs text-muted-foreground space-y-1">
      <p>Partner since {partnerSince}</p>
      <p>Joined: {joinedDate}</p>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between pt-2 border-t border-border">

      {/* Members */}
      <div className="flex -space-x-2">
        {members.slice(0, 3).map((img, index) => (
          <img
            key={index}
            src={img}
            alt="member"
            className="w-7 h-7 rounded-full border-2 border-background object-cover"
          />
        ))}

        {members.length > 3 && (
          <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center border-2 border-background">
            +{members.length - 3}
          </div>
        )}
      </div>

      {/* Action */}
      <Link
        href={`student/organizations/${organization.id}`}
        className="text-sm font-medium text-primary hover:underline"
      >
        More Details
      </Link>

    </div>
  </CardContent>
</Card>

  );
};

export default OrganizationCard;
