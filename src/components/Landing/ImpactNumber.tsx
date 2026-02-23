"use client";

import React from "react";
// import Title from "../../custome/Title";
// import ImpactCard from "../cards/ImpactCard";
import { BookOpen, UserStar, Clock, Users, Award, Map, MapIcon } from "lucide-react";
import ImpactCard from "../student/cards/ImpactCard";

const ImpactSection = () => {
  const impactData = [
    {
      icon: <BookOpen size={24} />,
      num: "+1,250",
      label: "Courses Completed",
    },
    {
      icon: <UserStar size={24} />,
      num: "+50",
      label: "Expert Instructors",
    },
    {
      icon: <MapIcon size={24} />,
      num: "+25,000",
      label: "Organization",
    },
    {
      icon: <Users size={24} />,
      num: "+4,800",
      label: "Active Students",
    },
    {
      icon: <Award size={24} />,
      num: "+3,400",
      label: "Certified Learners",
    },
    {
      icon: <Map size={24} />,
      num: "+30",
      label: "Completed Path",
    },
  ];

  return (
    <section className="radial-primary-bg py-10 px-4 md:px-10 lg:px-16">
     

      <div className=" grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 place-items-center">
        {impactData.map((item, index) => (
          <ImpactCard
            key={index}
            icon={item.icon}
            num={item.num}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
