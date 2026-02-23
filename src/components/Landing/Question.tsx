"use client"

import React from "react"
import Title from "../custome/Title"
// import { Accordion } from "../ui/accordion"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion"
const questions = [
  // Students
  {
    id: 1,
    question: "Can I start learning without any experience?",
    answer:
      "Absolutely! Courses are designed for beginners and advanced learners alike. Step-by-step guidance, practical examples, and interactive exercises are included.",
  },
  {
    id: 2,
    question: "Can I learn at my own pace?",
    answer:
      "Yes! All courses are self-paced. You can watch recordings, attend live sessions, or revisit lessons anytime to fit your schedule.",
  },
  {
    id: 3,
    question: "Will I get certificates?",
    answer:
      "Definitely! You’ll receive verified certificates upon completing courses, which can help you showcase your skills professionally.",
  },

  // Instructors
  {
    id: 4,
    question: "How can I create a course on the platform?",
    answer:
      "Instructors can easily create courses using our intuitive dashboard, upload content, schedule live sessions, and manage students effortlessly.",
  },
  {
    id: 5,
    question: "How do I track my earnings?",
    answer:
      "Our platform provides real-time analytics for instructors, including revenue, student engagement, and course performance reports.",
  },

  // Organizations
  {
    id: 6,
    question: "Can my organization manage multiple instructors?",
    answer:
      "Yes! Organizations can add and manage multiple instructors, assign roles, create courses, and track performance analytics all in one dashboard.",
  },
  {
    id: 7,
    question: "Can I track organizational progress?",
    answer:
      "Absolutely. Detailed reports allow your organization to monitor course completions, instructor performance, and student engagement.",
  },
];


const QuestionSection = () => {
  return (
    <section id="faq" className="py-16 px-4 md:px-10 lg:px-16 w-full m-auto bg-background">
      <Title
        title="Frequently Asked Questions"
        subTitle="Find answers to the most common questions about EduQuest courses and platform"
      />

    <Accordion type="single" collapsible className="mt-8 space-y-4">
  {questions.map((q) => (
    <AccordionItem
      key={q.id}
      value={`item-${q.id}`}
      className="border-soft rounded-md bg-card text-card-foreground data-[state=open]:shadow-md transition-shadow"
    >
      <AccordionTrigger className="text-card-foreground hover:text-primary transition-colors">
        {q.question}
      </AccordionTrigger>
      <AccordionContent className="px-5 py-4 text-sm text-muted-soft">
        {q.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>

    </section>
  )
}

export default QuestionSection
