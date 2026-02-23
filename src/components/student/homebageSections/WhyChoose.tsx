"use client";

import React from "react";
import Image from "next/image";
import ChooseCard from "../cards/ChooseCard";
import {
  FaCertificate,
  FaChalkboardTeacher,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { motion,Variants } from "framer-motion";
const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
};

const cardsData = [
  {
    name: "Trusted Certificates",
    description:
      "Earn a certificate after completing each course to showcase your skills and enhance your resume.",
    icon: FaCertificate,
  },
  {
    name: "Learn Interactively",
    description:
      "Short videos, quick quizzes, and hands-on projects help you apply skills immediately.",
    icon: FaChalkboardTeacher,
  },
  {
    name: "Track Your Progress",
    description:
      "Monitor your course completion, progress percentage, and skills gained to stay motivated.",
    icon: FaChartLine,
  },
  {
    name: "Supportive Community",
    description:
      "Connect with other learners, join study groups, and attend live sessions with instructors.",
    icon: FaUsers,
  },
];


const WhyChoose: React.FC = () => {
  return (
<section className="w-full px-6 md:px-12 py-10 bg-background text-foreground">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        {/* الصورة */}
        <div className="hidden lg:block flex-shrink-0 ">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/imges/choose.png"
              alt="Why choose EduQuest"
              width={400}
              height={520}
              className="w-full h-auto rounded-lg"
              priority
            />
          </motion.div>
        </div>

        {/* المحتوى */}
        <div className="flex-1 flex flex-col gap-10 text-center ">
          {/* العنوان */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
className="text-foreground text-3xl md:text-[40px] font-bold"
          >
            Why Choose <span className="text-primary">EduQuest</span>
          </motion.h2>

          {/* الكروت */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            {cardsData.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.name}
                  custom={index}
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <ChooseCard
                    name={card.name}
                    description={card.description}
                  >
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <Icon className="text-4xl text-primary" />
                    </motion.div>
                  </ChooseCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
