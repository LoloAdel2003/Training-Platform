import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Award,
  Clock,
  TrendingUp,
  User,
} from "lucide-react";

const StudentProfile = () => {
  const studentData = {
    name: "Sara Mohammed",
    image: "/imges/i3.png",
    studentId: "ST-2025-104",
    specialization: "Full Stack Web Development",
    level: "Intermediate",
    bio: "Passionate learner focused on mastering modern web technologies. Currently building real-world projects using React and Node.js.",
    stats: {
      enrolledCourses: 8,
      completedCourses: 5,
      certificates: 4,
      trainingHours: 120,
    },
    performance: {
      progress: "75%",
      averageGrade: "88%",
      lastActivity: "2 days ago",
    },
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
    ],
    contact: {
      email: "sara.student@email.com",
      phone: "+970 123 456 000",
      address: "Gaza City, Palestine",
    },
  };

  return (
    <div className=" mx-auto  py-6 font-sans text-foreground">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center mb-12">

        <div className="md:w-1/3 w-full">
          <img
            src={studentData.image}
            alt="Student"
            className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div className="md:w-2/3 w-full space-y-4">
          <h1 className="text-3xl font-bold mb-2">
            {studentData.name}
          </h1>

          <p className="text-primary font-medium mb-2">
            {studentData.specialization}
          </p>

          <p className="text-sm text-muted-foreground mb-4">
            Student ID: {studentData.studentId}
          </p>

          <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full mb-4">
            {studentData.level}
          </span>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {studentData.bio}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <BookOpen size={16} />
              {studentData.stats.enrolledCourses} Enrolled Courses
            </div>
            <div className="flex items-center gap-2">
              <Award size={16} />
              {studentData.stats.completedCourses} Completed Courses
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {studentData.stats.trainingHours} Training Hours
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} />
              {studentData.performance.averageGrade} Average Grade
            </div>
          </div>
        </div>
      </div>

      {/* Performance Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">

        <div className="bg-muted p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold mb-4">Learning Progress</h3>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div
              className="bg-primary h-3 rounded-full"
              style={{ width: studentData.performance.progress }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {studentData.performance.progress} Overall Completion
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Last Activity: {studentData.performance.lastActivity}
          </p>
        </div>

        <div className="bg-muted p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold mb-4">Certificates Earned</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {studentData.stats.certificates} Certificates achieved successfully.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-6">Skills Acquired</h3>
        <div className="flex flex-wrap gap-3">
          {studentData.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="border rounded-2xl p-8 shadow-sm">
        <h3 className="text-xl font-bold mb-6">Contact Information</h3>

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <Mail size={16} /> {studentData.contact.email}
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} /> {studentData.contact.phone}
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} /> {studentData.contact.address}
          </div>
        </div>
      </div>

    </div>
  );
};

export default StudentProfile;
