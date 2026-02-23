"use client";

import React from "react";
import Link from "next/link";
import InstructorCard from "@/components/student/cards/InstructorCard";
import BlogsCard from "@/components/student/cards/BlogCard";
import PageTitle from "@/components/custome/PageTitle";
import PageSearch from "@/components/custome/PageSearch";
// import { instructorsData } from "./instructorsData";

const Blogs = () => {
    // instructorsData.ts (أو داخل نفس الملف)
const blogsData = [
  {
    title: "Mastering React in 2026",
    description: "A complete guide to becoming a React expert with modern tools.",
    srcImg: "/imges/course.png",
    likeNum: 120,
    commentNum: 35,
  },
  {
    title: "10 Tips for Online Learning",
    description: "Boost your learning efficiency with these practical tips.",
    srcImg: "/imges/course2.png",
    likeNum: 98,
    commentNum: 20,
  },
  {
    title: "Designing Engaging ",
    description: "Learn how to create courses that captivate students.",
    srcImg: "/imges/course3.png",
    likeNum: 75,
    commentNum: 18,
  },
   {
    title: "Designing Engaging ",
    description: "Learn how to create courses that captivate students.",
    srcImg: "/imges/course3.png",
    likeNum: 75,
    commentNum: 18,
  },
    {
    title: "Mastering React in 2026",
    description: "A complete guide to becoming a React expert with modern tools.",
    srcImg: "/imges/course.png",
    likeNum: 120,
    commentNum: 35,
  },
  {
    title: "10 Tips for Online Learning",
    description: "Boost your learning efficiency with these practical tips.",
    srcImg: "/imges/course2.png",
    likeNum: 98,
    commentNum: 20,
  },
  {
    title: "Designing Engaging ",
    description: "Learn how to create courses that captivate students.",
    srcImg: "/imges/course3.png",
    likeNum: 75,
    commentNum: 18,
  },
   {
    title: "Designing Engaging ",
    description: "Learn how to create courses that captivate students.",
    srcImg: "/imges/course3.png",
    likeNum: 75,
    commentNum: 18,
  },
];

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between mb-6 md:mb-8 ">
        <PageTitle /> {/* إذا ما في عنوان استخدم الافتراضي */}
        <PageSearch />
      </div>
      <div className="card-grid">
        {blogsData.map((blog, index) => {

          return (
           
              <BlogsCard
            key={index}
            title={blog.title}
            description={blog.description}
            srcImg={blog.srcImg}
            likeNum={blog.likeNum}
            commentNum={blog.commentNum}
          />
           
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
