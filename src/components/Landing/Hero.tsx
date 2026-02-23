"use client";

import React from "react";
// import { Button } from "../../ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; // ← صححتها هنا
import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className="w-full h-[calc(100vh-64px)] md:h-[calc(100vh-54px)] bg-my-gradient">
      <div className="flex flex-col gap-2 lg:gap-4 items-center justify-center h-full px-8 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl px-4 lg:text-6xl font-bold mb-4"
        >
          Advance Your Future <br className="md:hidden" /> With Modern <br />
          <span className="text-primary block md:pt-4">
            EduQuest Platform
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-muted-foreground dark:text-gray-400 text-sm md:text-lg max-w-2xl mb-6"
        >
         Learn online, attend in-person classes, or build your own academy — all in one powerful educational platform.  </motion.p>

      <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="flex flex-col sm:flex-row justify-center items-center gap-4"
>
  {/* زر استكشاف الكورسات */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Button
      type="button"
      variant="default"
      size="lg"
      shadow="md"   // تضيف الظل المناسب
    //   onClick={() => router.push("/courses")}
      className="flex items-center gap-2 transition-all"
    >
      <Link href="/student" >
      Join As a Student
</Link>
 <ArrowRight size={20} />
    </Button>
  </motion.div>

  {/* زر How it Works */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Button
      type="button"
      variant="outline"
      size="lg"
      shadow="md"
      className="transition-all"
      asChild
    >
      <Link href="/becomeInstructor">Become Instructor</Link>
    </Button>
  </motion.div>
</motion.div>


      </div>
    </section>
  );
};

export default HeroSection;
