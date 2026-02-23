"use client";

import { motion, Variants, Easing } from "framer-motion";
import Title from "../custome/Title";
import {
  FaCogs,
  FaUsersCog,
  FaHeadset,
  FaTachometerAlt,
  FaChartLine,
  FaBook,
} from "react-icons/fa";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } 
  },
};

const reasons = [
  {
    icon: <FaCogs className="w-10 h-10 text-primary" />,
    title: "Unified Platform",
    description: "A seamless system for both online and offline education. Experience all your learning needs in one place.",
  },
  {
    icon: <FaUsersCog className="w-10 h-10 text-primary" />,
    title: "Advanced Instructor Tools",
    description: "Manage instructors, courses, and students efficiently. Everything you need to grow your teaching business.",
  },
  {
    icon: <FaHeadset className="w-10 h-10 text-primary" />,
    title: "Fast Support",
    description: "Reliable technical assistance whenever you need it. Get your issues resolved quickly by our expert team.",
  },
  {
    icon: <FaTachometerAlt className="w-10 h-10 text-primary" />,
    title: "Seamless UX",
    description: "Smooth navigation and an intuitive learning experience. Focus on learning without distractions.",
  },
  {
    icon: <FaChartLine className="w-10 h-10 text-primary" />,
    title: "Professional Dashboard",
    description: "Advanced analytics to track performance and growth. Gain insights and make data-driven decisions.",
  },
  {
    icon: <FaBook className="w-10 h-10 text-primary" />,
    title: "Comprehensive Resources",
    description: "Access extensive study materials, guides, and templates. Everything you need to succeed, all in one place.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="pb-16 bg-background px-4 md:px-10 lg:px-16">
      <div className=" text-center mb-16">
        <Title
          title="Why Choose Our Platform?"
          subTitle="Empowering learners, instructors, and organizations with advanced tools and support"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={item}
            // whileHover={{ scale: 1.05 }}
            className="bg-card text-card-foreground rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="mb-4">{reason.icon}</div>
            <h4 className="text-lg font-semibold mb-2">{reason.title}</h4>
            <p className="text-sm text-muted-foreground">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}