"use client";

import React from "react";
import Title from "../../custome/Title";
import BlogsCard from "../cards/BlogCard";

import LinkButton from "../../ui/LinkButton";
// import BlogsCard from "../cards/BlogsCard";

// مثال بيانات مدونة
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
];

const BlogSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-10 text-center lg:px-16 bg-background">
      <Title
        title="Our Latest Blogs & News"
        subTitle="Stay updated with the latest insights, tips, and stories from EduQuest"
       
      />

      {/* Cards Grid */}
      <div className="my-10 card-grid">
        {blogsData.map((blog, index) => (
          <BlogsCard
            key={index}
            title={blog.title}
            description={blog.description}
            srcImg={blog.srcImg}
            likeNum={blog.likeNum}
            commentNum={blog.commentNum}
          />
        ))}
      </div>
              <LinkButton label="See More" href='/student/blogs' />
       
    </section>
  );
};

export default BlogSection;
