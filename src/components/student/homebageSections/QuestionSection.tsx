"use client"

import React from "react"
import Title from "../../custome/Title"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion"
const questions = [
  {
    id: 1,
    question: "What if I don't have any professional background?",
    answer:
      "No problem at all! Our courses are designed with beginners in mind. We'll walk you through everything step by step, starting from the basics and gradually building your skills. You'll have access to clear explanations, practical examples, and interactive projects to help you learn by doing.",
  },
  {
    id: 2,
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely! All courses are fully self-paced, allowing you to learn whenever it suits your schedule. You can pause, rewind, and revisit lessons as many times as you need, so you never feel rushed.",
  },
  {
    id: 3,
    question: "Will I get hands-on experience, or is it only theoretical?",
    answer:
      "You’ll get plenty of hands-on experience. Each course includes practical exercises, real-world projects, and challenges designed to help you apply what you’ve learned and build a strong portfolio.",
  },
  {
    id: 4,
    question: "What kind of support will I receive during the course?",
    answer:
      "We provide continuous support through discussion boards, Q&A sessions, and instructor guidance. You’ll never feel stuck, as help is always available when you need it.",
  },
  {
    id: 5,
    question: "Can these courses help me start a new career?",
    answer:
      "Yes! Our courses are designed to equip you with job-ready skills. Many learners use what they’ve learned to switch careers, land freelance projects, or advance in their current roles.",
  },
]


const QuestionSection = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-16 w-full m-auto bg-background">
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
