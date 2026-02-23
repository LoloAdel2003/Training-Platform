"use client";

import { motion, Variants, Easing } from "framer-motion";
import Title from "../custome/Title";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Corrected easing type
const easeOut: Easing = [0.33, 1, 0.68, 1]; // cubic-bezier for easeOut

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const cards = [
  {
    title: "For Students",
    description:
      "Start learning in minutes and achieve your goals with a flexible, guided experience.",
    steps: [
      "Explore live, recorded, or in-person courses.",
      "Enroll instantly with secure payment.",
      "Attend live sessions or watch anytime.",
      "Track progress and earn certificates.",
    ],
  },
  {
    title: "For Instructors",
    description:
      "Turn your expertise into impact and income with powerful teaching tools.",
    steps: [
      "Create structured courses easily.",
      "Host interactive live sessions.",
      "Manage students and discussions.",
      "Track revenue and performance analytics.",
    ],
  },
  {
    title: "For Organizations",
    description:
      "Manage multiple instructors and programs from one unified dashboard.",
    steps: [
      "Invite and manage instructors.",
      "Organize multiple training programs.",
      "Assign roles and permissions.",
      "Access performance reports and insights.",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-background px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <Title
            title="How It Works"
            subTitle="A seamless journey designed for students, instructors, and organizations."
          />
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 md:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
            //   whileHover={{ scale: 1.05 }}
              className="relative bg-card text-card-foreground rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Background Step Number */}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-7xl font-bold text-muted-foreground/10 group-hover:text-primary/10 transition-all duration-300">
                0{index + 1}
              </span>

              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>

              <p className="text-muted-foreground text-sm mb-6">{card.description}</p>

              <ul className="space-y-4 text-sm">
                {card.steps.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}