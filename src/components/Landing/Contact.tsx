"use client";

import { motion, Variants, Easing } from "framer-motion";
import Title from "../custome/Title";
import ContactForm from "../student/contact/ContactForm";





export default function Contact() {
  return (
    <section id="contact" className="pb-16 bg-background px-4 md:px-10 lg:px-16">
      <div className=" text-center mb-16">
        <Title
          title="Why Choose Our Platform?"
          subTitle="Empowering learners, instructors, and organizations with advanced tools and support"
        />
      </div>
<div className="">
    <ContactForm /> 
</div>

    
    </section>
  );
}