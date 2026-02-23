"use client";

import { motion, Variants, Easing } from "framer-motion";
import Title from "../custome/Title";
import {
  FaVideo,
  FaRegFileVideo,
  FaSchool,
  FaChartLine,
  FaCertificate,
  FaCreditCard,
  FaMobileAlt,
  FaClock,
} from "react-icons/fa";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } 
  },
};

const features = [
  {
    icon: <FaVideo className="w-8 h-8 text-primary" />,
    title: "Live Classes",
    description: "Attend interactive live sessions and connect with instructors in real-time.",
  },
  {
    icon: <FaRegFileVideo className="w-8 h-8 text-primary" />,
    title: "Recorded Courses",
    description: "Watch pre-recorded lessons anytime at your convenience.",
  },
  {
    icon: <FaSchool className="w-8 h-8 text-primary" />,
    title: "In-Person Training",
    description: "Join hands-on courses and workshops at physical locations.",
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-primary" />,
    title: "Progress Tracking",
    description: "Monitor your learning journey and stay on top of your goals.",
  },
  {
    icon: <FaCertificate className="w-8 h-8 text-primary" />,
    title: "Certificates",
    description: "Earn verified certificates upon course completion.",
  },
  {
    icon: <FaCreditCard className="w-8 h-8 text-primary" />,
    title: "Secure Payments",
    description: "Pay safely and securely using trusted payment gateways.",
  },
  {
    icon: <FaMobileAlt className="w-8 h-8 text-primary" />,
    title: "Fully Responsive",
    description: "Learn on any device, from desktop to mobile and tablet.",
  },
   {
    icon: <FaClock className="w-8 h-8 text-primary" />,
    title: "Flexible Schedule",
    description: "Learn at your own pace, anytime, anywhere.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-14 px-4 md:px-10 lg:px-16">
      <div className=" text-center  mb-16">
        <Title
          title="Our Features"
          subTitle="Everything you need to teach and learn effectively"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            // whileHover={{ scale: 1.05 }}
            className="bg-card text-card-foreground rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}