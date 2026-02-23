"use client";

import React from "react";
import BlogsCard from "@/components/student/cards/BlogCard";
import PageSearch from "@/components/custome/PageSearch";
// import { instructorsData } from "./instructorsData";

const BlogTabs = () => {
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

export default BlogTabs;
