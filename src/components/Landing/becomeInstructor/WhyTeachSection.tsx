"use client";

import { Card,CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
// import { Card, CardContent } from "../ui/card";
import { TrendingUp, Users, ShieldCheck, BarChart3, Globe, Award, Layers, Headphones } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Grow Your Revenue",
    desc: "Turn your expertise into consistent income with a transparent commission model and scalable earning potential."
  },
  {
    icon: Users,
    title: "Expand Your Reach",
    desc: "Connect with a growing community of motivated learners actively seeking high-quality, career-focused courses."
  },
  {
    icon: BarChart3,
    title: "Track Your Performance",
    desc: "Monitor enrollments, student engagement, and revenue insights through pwerful real-time analytics tools."
  },
  {
    icon: ShieldCheck,
    title: "Teach with Confidence",
    desc: "Rely on secure payments, protected content, fully controllable course settings, and a stable infrastructure designed to support your growth."
  },
  {
  icon: Globe,
  title: "Build Your Brand",
  desc: "Establish your professional identity with a customizable instructor profile and a dedicated space to showcase your expertise."
},
{
  icon: Layers,
  title: "Scale Your Academy",
  desc: "Create multiple courses, manage structured programs, and grow your educational business without technical limitations."
},
{
  icon: Award ,
  title: "Increase Credibility",
  desc: "Gain trust through verified profiles, structured course delivery,structured course delivery and a professional learning environment."
},
{
  icon: Headphones,
  title: "Get Dedicated Support",
  desc: "Access responsive technical assistance and onboarding guidance to ensure a smooth and successful teaching experience."
}
];


const WhyTeachSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Teach With <span className="text-primary">EduQuest?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to build, scale, and manage your
            educational business — whether you're an individual instructor or a full institution.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-2xl border border-border bg-card hover:shadow-md hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-start gap-4">
                    {/* <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon size={28} />
                    </div> */}

                    <h3 className="text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyTeachSection;