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
  Users,
  BookOpen,
  Award,
} from "lucide-react";

const AboutSection = () => {
  const centerData = {
    name: "Al Mahda Training Center",
    image: "/imges/org.png",
    tagline: "Empowering Future Professionals",
    description:
      "Al Mahda Training Center is a leading educational institute dedicated to providing high-quality training programs in Web Development, Graphic Design, Data Analysis, and more. We prepare students with practical, job-ready skills.",
    established: "Established 2015",
    stats: {
      students: "3500+ Students",
      courses: "40+ Courses",
      instructors: "25+ Instructors",
    },
    contact: {
      address: "Gaza City, Palestine",
      email: "info@almahda-center.ps",
      phone: "+970 123 456 789",
    },
    vision:
      "To be a leading educational and training institute in Palestine, empowering students and professionals with practical skills that meet modern market demands.",
    mission: [
      "Provide high-quality and accessible training programs.",
      "Create a creative and collaborative learning environment.",
      "Equip students with real-world skills.",
    ],
    coreValues: [
      { title: "Excellence", desc: "Delivering the highest quality education." },
      { title: "Innovation", desc: "Encouraging creativity and new ideas." },
      { title: "Integrity", desc: "Honesty and transparency in all programs." },
      { title: "Collaboration", desc: "Working together for success." },
      { title: "Empowerment", desc: "Supporting students to achieve goals." },
    ],
    objectives: [
      "Expand course offerings to meet market needs.",
      "Develop instructors professionally.",
      "Build strong partnerships with institutions.",
      "Continuously improve learning experience.",
    ],
  };

  return (
    <div className=" mx-auto  py-6 font-sans text-foreground">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center mb-12">

        <div className="relative md:w-1/3 w-full">
          <img
            src={centerData.image}
            alt="Center"
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
            {centerData.established}
          </div>
        </div>

        <div className="md:w-2/3 w-full space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {centerData.name}
          </h1>

          <p className="text-primary font-medium mb-4">
            {centerData.tagline}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {centerData.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users size={16} /> {centerData.stats.students}
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={16} /> {centerData.stats.courses}
            </div>
            <div className="flex items-center gap-2">
              <Award size={16} /> {centerData.stats.instructors}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Instagram, Youtube, MessageCircle].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">

        <div className="bg-muted p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold mb-3">Vision</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {centerData.vision}
          </p>
        </div>

        <div className="bg-muted p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold mb-3">Mission</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
            {centerData.mission.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-6">Core Values</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {centerData.coreValues.map((val, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl hover:shadow-md transition"
            >
              <h4 className="font-semibold mb-2">{val.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Objectives */}
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-6">Objectives</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {centerData.objectives.map((obj, i) => (
            <div
              key={i}
              className="p-4 bg-muted rounded-lg text-sm text-gray-600 dark:text-gray-300"
            >
              • {obj}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="border rounded-2xl p-8 shadow-sm">
        <h3 className="text-xl font-bold mb-6">Contact Information</h3>

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <MapPin size={16} /> {centerData.contact.address}
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} />
            <span className="text-blue-600 underline">
              {centerData.contact.email}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} /> {centerData.contact.phone}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutSection;
