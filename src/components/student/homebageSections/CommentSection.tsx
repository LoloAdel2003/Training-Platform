
import React from "react";
import Title from "../../custome/Title";
import CommentCard, { CommentCardType } from "../cards/CommentCard";


const CommentSection = () => {
  const comments: CommentCardType[] = [
    {
      id: "1",
      name: "Alaa Adel",
      age: 22,
      avatar: "/imges/avatar-1.png",
      verified: true,
      rating: 5,
      review:
        "I loved how the UI/UX program focused on both creativity and usability. Working with Figma and real projects gave me the confidence to pursue a design career.",
    },
    {
      id: "2",
      name: "ahmed emad",
      age: 22,
      avatar: "/imges/avatar-2.png",
      verified: true,
      rating: 5,
      review:
        "Joining EduQuest was the best decision I made for my learning journey. The instructors were supportive, the courses were practical, and I gained the confidence to start my career in web development.",
    },
    {
      id: "3",
      name: "Asma Baker",
      age: 27,
      avatar: "/imges/avatar-2.png",
      verified: true,
      rating: 5,
      review:
        "The Data Science track opened my eyes to the power of data. The instructors made complex topics easy to understand, and now I'm applying these skills in my current job.",
    },
    {
      id: "4",
      name: "Murad Ahmed",
      age: 20,
      avatar: "/imges/avatar-1.png",
      verified: true,
      rating: 5,
      review:
        "Before EduQuest, coding felt overwhelming. Thanks to the step-by-step courses and hands-on projects, I can now build real websites and feel ready for freelance work.",
    },
  ];

  return (
    <section className="bg-background  pb-12  md:pb-16 px-4 md:px-10 lg:px-16">
              <Title title="What Our Learner Says" subTitle="Real stories from learners who transformed their future with EduQuest" />


      <div
        className="mt-10 grid gap-6  grid-cols-1  md:grid-cols-2  "
      >
        {comments.map((item) => (
          <CommentCard key={item.id} testimonial={item} />
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
