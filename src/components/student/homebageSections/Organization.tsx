
import React from "react";
import Title from "../../custome/Title";
import OrganizationCard from "../cards/OrganizationCard";

import LinkButton from "../../ui/LinkButton";

const OrganizationSection = () => {

  const organizations = [
    {
      id: "1",
      name: "Global Education Hub",
      logo: "/imges/avatar-1.png",
      location: "Amman, Jordan",
      description:
        "Non-profit organization supporting inclusive education and online learning",
      coursesCount: 18,
      roadmapCount: 4,
      partnerSince: "2022",
      joinedDate: "April 2024",
      members: [
        "/imges/Ellipse 2.png",
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
      ],
    },
    {
      id: "2",
      name: "Tech Learning Academy",
      logo: "/imges/avatar-2.png",
      location: "Dubai, UAE",
      description:
        "Professional training academy focused on modern web and AI technologies",
      coursesCount: 25,
      roadmapCount: 6,
      partnerSince: "2021",
      joinedDate: "January 2023",
      members: [
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",

         "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
      ],
    },
    {
      id: "3",
      name: "Future Skills Center",
      logo: "/imges/avatar-1.png",
      location: "Cairo, Egypt",
      description:
        "Empowering youth with future-ready digital and professional skills",
      coursesCount: 12,
      roadmapCount: 3,
      partnerSince: "2023",
      joinedDate: "March 2024",
      members: [
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
      ],
    },
     {
      id: "4",
      name: "Future Skills Center",
      logo: "/imges/avatar-1.png",
      location: "Cairo, Egypt",
      description:
        "Empowering youth with future-ready digital and professional skills",
      coursesCount: 12,
      roadmapCount: 3,
      partnerSince: "2023",
      joinedDate: "March 2024",
      members: [
        "/imges/Ellipse 4.png",
        "/imges/Ellipse 2.png",
        "/imges/Ellipse 3.png",
        "/imges/Ellipse 4.png",
      ],
    },
  ];

  return (
    <section className="bg-background  pb-12  md:pb-16  text-leftpx-4 md:px-10 lg:px-16">
      <Title
        title="Learn with Trusted Organizations"
        subTitle="Explore top educational and training partners shaping the future of learning"
      />

      {/* Cards */}
      <div className="my-10 card-grid">
        {organizations.map((org) => (
          <OrganizationCard key={org.id} organization={org} />
        ))}
      </div>
              <LinkButton label="See More" href='/organizations' />
      
    </section>
  );
};

export default OrganizationSection;
