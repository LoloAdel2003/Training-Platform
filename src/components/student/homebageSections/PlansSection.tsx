// import React from 'react'
import PlanCard from '../cards/PlanCard';
import Title from '../../custome/Title'

const PlansSection = () => {
  const plans = [
    {
      type: "Free",
      price: 0,
      description: "Perfect for beginners to explore courses and get started",
      isCurrent: true,
      buttonText: "Your Current Plan",
      items: ["Access to selected free courses", "Limited community support", "Basic progress tracking"],
    },
    {
      type: "Plus",
      price: 100,
      description: "A great choice for active learners who want more access and flexibility",
      isFeatured: true, // اللون الغامق
      buttonText: "Get Plus",
      items: ["Unlimited access to all courses", "Downloadable resources", "Progress tracking & certificates", "Basic progress tracking"],
    },
    {
      type: "Premium",
      price: 150,
      description: "Best for professionals seeking advanced features and direct instructor support.",
      buttonText: "Get Premium",
      items: ["All Standard features included", "1-on-1 mentorship with instructors", "Exclusive webinars & workshops", "Priority support"],
    },
  ];

  return (
    <section className=" pb-12  md:pb-16 bg-background px-4 md:px-10 lg:px-16 w-full m-auto">
              <Title title="Choose Your Perfect Plans" subTitle="Flexible pricing plans designed to fit every learner’s needs and goals" />
<div className="py-10  flex justify-center items-center gap-8 flex-wrap">
      {plans.map((plan, index) => (
        <PlanCard key={index} plan={plan} />
      ))}
      </div>
    </section>
  );
};

export default PlansSection;