// src/components/organisms/CourseInformation.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LearningPoint } from "./LearningPoint";
import { StepIcon } from "./LearningPoint";
import { CourseReviews } from "./CourseReviews";

 const CourseOverview = () => {
  const learningPoints = [
    "Understand React fundamentals (components, props, state)",
    "Build Interactive UIs with JSX and event handling",
    "Manage data using Hooks and Context API",
    "Create scalable apps with React Router",
  ];

  const targetAudience = [
    "Students who want to start their journey in modern frontend development",
    "Anyone who already knows JavaScript basics",
    "People aiming to build a career in frontend"
  ];


  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full bg-background rounded-xl ">
     <section >
            <h3 className="text-xl font-bold mb-4">Description</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
This React course is designed to take you from the fundamentals to advanced concepts in modern web development. You will start by learning the core building blocks of React, such as components, props, and state, before moving on to more complex topics like hooks, context API, and routing. Through hands-on projects, you’ll gain practical experience in building dynamic and responsive web applications. By the end of the course, you will be confident in creating scalable React apps, connecting them to APIs, and deploying them online with best practices.
              
            </p>
    </section>
 <section className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Who this course is for:</h4>
            <div className="space-y-3">
              {targetAudience.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
                  <StepIcon />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-card  border border-primary-50 dark:border-green-900/30 rounded-xl p-6">
            <h4 className="font-bold mb-4">What you will learn in this course</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {learningPoints.map((point, i) => (
                <LearningPoint key={i} text={point} />
              ))}
            </div>
          </section>

         
          <section>
            <CourseReviews />
          </section>
    </div>
  );
};

export default CourseOverview