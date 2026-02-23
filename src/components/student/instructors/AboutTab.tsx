import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  Award,
  BookOpen,
  Users,
  Briefcase,
} from "lucide-react";

const InstructorProfile = () => {
  const instructorData = {
    name: "Ahmed Adel",
    image: "/imges/i1.png",
    jobTitle: "Senior Web Development Instructor",
    specialization: "Full Stack Web Development",
    experience: "8+ Years Experience",
    students: "1200+ Students",
    courses: "15 Courses",
    bio: "Ahmed Adel is a passionate web development instructor with over 8 years of experience in teaching and building real-world applications. He specializes in modern JavaScript technologies including React, Next.js, and Node.js. His mission is to help students master practical skills and become job-ready developers.",
    contact: {
      address: "Gaza City, Palestine",
      email: "ahmed.adel@email.com",
      phone: "+970 123 456 789",
    },
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
  };

  return (
    <div className=" mx-auto py-6 font-sans text-foreground">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
        
        {/* Image */}
        <div className="md:w-1/3 w-full">
          <img
            src={instructorData.image}
            alt="Instructor"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Info */}
        <div className="md:w-2/3 w-full space-y-4">
          <h1 className="text-3xl font-bold">{instructorData.name}</h1>
          <p className="text-primary font-medium">
            {instructorData.jobTitle}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              {instructorData.experience}
            </div>

            <div className="flex items-center gap-2">
              <BookOpen size={16} />
              {instructorData.courses}
            </div>

            <div className="flex items-center gap-2">
              <Users size={16} />
              {instructorData.students}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            {instructorData.bio}
          </p>

          {/* Skills */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {instructorData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <div className="p-2 bg-card rounded-lg cursor-pointer hover:bg-card/50">
              <Facebook size={18} />
            </div>
            <div className="p-2 bg-card rounded-lg cursor-pointer hover:bg-card/50">
              <Twitter size={18} />
            </div>
            <div className="p-2 bg-card rounded-lg cursor-pointer hover:bg-card/50">
              <Instagram size={18} />
            </div>
            <div className="p-2 bg-card rounded-lg cursor-pointer hover:bg-card/50">
              <Youtube size={18} />
            </div>
            <div className="p-2 bg-card rounded-lg cursor-pointer hover:bg-card/50">
              <MessageCircle size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="border border-gray-100 rounded-2xl p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>

        <div className="flex items-center gap-3 text-sm">
          <MapPin size={16} />
          {instructorData.contact.address}
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Mail size={16} />
          <span className="text-blue-600 underline">
            {instructorData.contact.email}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Phone size={16} />
          {instructorData.contact.phone}
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
