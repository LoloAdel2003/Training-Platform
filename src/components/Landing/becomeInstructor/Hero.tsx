"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Button } from "../ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-[calc(100vh-57px)] md:h-[calc(100vh-54px)] bg-my-gradient relative overflow-hidden">
      <div className="flex flex-col gap-4 items-center justify-center h-full px-6 text-center">

        {/* Main Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Turn Your Expertise Into
          <br />
          <span className="text-primary block mt-2">
            Impact, Income & Influence
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-muted-foreground dark:text-gray-400 text-sm md:text-lg max-w-3xl"
        >
          Whether you're an independent instructor or a growing institution,
          EduQuest gives you the tools to publish courses, manage students,
          scale your academy, and generate sustainable revenue — all in one powerful platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6"
        >
          {/* Independent CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              size="lg"
              className="flex items-center gap-2 px-8 rounded-2xl"
            >
              <Link href="/becomeInstructor?type=independent">
                Join as Independent Instructor
              </Link>
              <ArrowRight size={20} />
            </Button>
          </motion.div>

          {/* Institution CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="px-8 rounded-2xl"
              asChild
            >
              <Link href="/becomeInstructor?type=institution">
                Register Your Institution
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Small Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xs md:text-sm text-muted-foreground mt-6"
        >
          ✔ Trusted by educators • ✔ Secure payments • ✔ Scalable infrastructure
        </motion.p>

      </div>
    </section>
  );
};

export default HeroSection;