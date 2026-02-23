"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, Download, Lock } from "lucide-react";

type Props = {
  isCompleted: boolean;
  certificateUrl?: string;
};

export const CourseCertificate = ({
  isCompleted=false,
  certificateUrl = "/certificate.pdf",
}: Props) => {
  return (
    <Card className="shadow-small border-soft overflow-hidden bg-card">
      <CardContent className="p-8 text-center space-y-6">
        
        {/* صورة الشهادة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative w-[300px] md:w-[400px]">
            <Image
              src="/imges/Certification.png" // حطي الصورة هون
              alt="Course Certificate"
              width={400}
              height={250}
              className={`rounded-lg transition-all duration-300 ${
                !isCompleted && "opacity-60 blur-[1px]"
              }`}
            />

            {!isCompleted && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 p-4 rounded-full">
                  <Lock className="text-white w-8 h-8" />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* النص */}
        {!isCompleted ? (
          <>
            <h3 className="text-xl font-bold">
              Earn Your Course Certificate
            </h3>

            <p className="text-muted-foreground">
              Complete all lessons to receive your official certificate of
              completion
            </p>

            {/* <Button className="mt-2">
              Continue learning →
            </Button> */}
          </>
        ) : (
          <>
            <div className="flex items-center justify-center gap-2 text-primary font-semibold">
              <CheckCircle className="w-5 h-5" />
              You completed the course!
            </div>

            <p className="text-muted-foreground">
              Congratulations! Your certificate is ready.
            </p>

            <a href={certificateUrl} download>
              <Button className="mt-2 gap-2">
                <Download className="w-4 h-4" />
                Download Certificate
              </Button>
            </a>
          </>
        )}
      </CardContent>
    </Card>
  );
};
