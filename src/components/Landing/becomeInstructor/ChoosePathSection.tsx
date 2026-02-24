"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, User, Building2 } from "lucide-react";
import Link from "next/link";

const paths = [
  {
    type: "independent",
    title: "Independent Instructor",
    description:
      "Perfect for professionals and experts who want to publish courses under their own name and build a strong personal brand.",
    icon: User,
    features: [
      "Full control over courses and pricing",
      "Personal instructor profile & custom branding",
      "Real-time performance and revenue analytics",
      "Flexible content management and updates anytime",
      "Built-in marketing tools to boost enrollments",
      "Secure global payments with transparent commissions",
    ],
    highlighted: false,
    cta: "Start as Independent Instructor",
  },
  {
    type: "institution",
    title: "Institution / Organization",
    description:
      "Designed for academies and training centers that require multi-instructor management and advanced reporting tools.",
    icon: Building2,
    features: [
      "Multi-instructor account and role management",
      "Advanced financial and performance dashboards",
      "Dedicated institution profile with verification badge",
      "Centralized student management system",
      "Bulk course publishing and structured programs",
      "Priority technical support and onboarding assistance",
    ],
    highlighted: true,
    cta: "Register Your Institution",
  },
];

const ChoosePathSection = () => {
  return (
    <section className="w-full pb-16 px-4 md:px-10 lg:px-16 bg-background relative overflow-hidden">
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
            Choose Your <span className="text-primary">Teaching Path</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Select the path that matches your goals and unlock the tools you need
            to grow, manage, and scale your educational journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {paths.map((path, index) => {
            const Icon = path.icon;

            return (
              <motion.div
                key={path.type}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`relative rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                  ${
                    path.highlighted
                      ? " border-primary "
                      : "border border-primary"
                  }`}
                >
                  {/* Badge للمؤسسة */}
                  {path.highlighted && (
                    <div className="absolute -top-4 right-6 bg-primary text-primary-foreground text-xs px-4 py-1 rounded-full shadow-md">
                      Recommended
                    </div>
                  )}

                  <CardContent className="p-8 flex flex-col gap-6">

                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-4 rounded-xl ${
                          path.highlighted
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-semibold">
                        {path.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">
                      {path.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {path.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle
                            size={18}
                            className="text-primary mt-0.5"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      asChild
                      size="lg"
                      variant={path.highlighted ? "default" : "outline"}
                      className="rounded-2xl mt-4"
                    >
                      <Link href={`/becomeInstructor?type=${path.type}`}>
                        {path.cta}
                      </Link>
                    </Button>

                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* subtle decorative blur effect */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ChoosePathSection;