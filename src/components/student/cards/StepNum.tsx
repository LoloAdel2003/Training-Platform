"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type StepNumProps = {
  num?: number;
  isLeft?: boolean;
  isRight?: boolean;
};

const StepNum: React.FC<StepNumProps> = ({ num = 0, isLeft = false, isRight = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1.5,
        transition: { duration: 0.5 },
      });
    }
  }, [inView, controls]);

  return (
    <div className="flex items-center gap-4">
      {/* الخط الممتد على اليسار */}
      <motion.div
        className="h-1 flex-1 rounded-full"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        style={{ originX: 0, backgroundColor: "var(--primary)" }}
        transition={{ duration: 1 }}
      />

      {/* الدائرة */}
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: 1 }}
        className="rounded-full text-card-foreground bg-card border border-primary shadow-md w-9 h-9 flex justify-center items-center text-lg font-bold shadow-lg"
        
      >
        {isLeft ? <i className="icon-left" /> : isRight ? <i className="icon-right" /> : num}
      </motion.div>

      {/* الخط الممتد على اليمين */}
      <motion.div
        className="h-1 flex-1 rounded-full"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        style={{ originX: 0, backgroundColor: "var(--primary)" }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default StepNum;
