"use client";
"use client"; // هذا السطر مهم جداً

import React from "react";
import { motion } from "framer-motion";
import Title from '../../custome/Title';
import StepNum from '../cards/StepNum';
import StepsCard from '../cards/StepCard';

const JourneySection = () => {
 const steps = [
  {
    name: "Explore Categories",
    description:
      "Use the “Explore” feature to find the field you want to learn. Selecting a category will display relevant subcategories, helping you quickly navigate and locate the specific content or courses that match your interests ",
  },
  {
    name: "Select Course Type",
    description:
      "After choosing a category, pick the course type that suits you best: recorded courses, ready-to-start programs, or live interactive sessions. Use the tabs to switch between types and find the format that fits your learning style and schedule.",
  },
  {
    name: "Apply Filters",
    description:
      "Refine your search by applying filters such as level, price, or course type. This helps you narrow down the options, focus on the most relevant courses, and save time by quickly identifying the courses that match your preferences and goals.",
  },
  {
    name: "Track Progress",
    description:
      "Once enrolled in a course, you can monitor your learning progress, attend lessons, complete tasks and quizzes, and get a clear overview of your performance. This ensures you stay on track and achieve your learning objectives efficiently.",
  },
  {
    name: "Payment & Certification",
    description:
      "After finishing a course, proceed with payment if required. Once completed, you will receive a verified certificate that can be printed or shared on LinkedIn, showcasing your newly acquired skills to employers and your professional network.",
  },
  {
    name: "Join the Instructor Community",
    description:
      "Connect with instructors and other learners in the community. Share your experiences, offer courses if you’re teaching, interact with peers, and gain valuable insights to enhance your skills and contribute to the learning ecosystem.",
  },
];


  return (
<section
  id="how-it-works"
  className="w-full overflow-hidden relative px-6 md:px-12 py-10 md:py-16 bg-app text-[var(--foreground)]"
>
      {/* Title */}
      <Title
        title="How to Start Your Learning Journey with EduQuest"
        subTitle="Follow these simple steps to explore the right courses, track your progress, and earn certified certificates"
      />

      {/* الخط العمودي للأرقام */}
<span className="h-[1550px] hidden md:block w-2.5 top-[300px] absolute left-1/2  -translate-x-1/2 rounded-3xl bg-[var(--primary)]"></span>

      {/* الأرقام على الخط */}
      <div className=" absolute left-1/2 hidden top-[400px] lg:flex flex-col gap-[230px] -translate-x-1/2">
        {steps.map((_, idx) => (
          <StepNum key={idx} num={idx + 1} />
        ))}
      </div>

      {/* الكروت */}
      <div className="w-full flex flex-col gap-[60px] pt-10 md:pt-[60px]">
        {steps.map((step, idx) => {
          const isRight = idx % 2 === 1;
          return (
            <motion.div
              key={idx}
              className={`w-full flex ${isRight ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, x: isRight ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <StepsCard
                name={step.name}
                description={step.description}
                className={isRight ? "ml-auto" : ""}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default JourneySection;
