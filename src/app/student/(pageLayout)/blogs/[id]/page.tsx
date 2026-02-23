import React from 'react';
import Link from 'next/link';
import ArticleSection from '@/components/student/blogs/Content';
import { InfoItem } from '@/components/student/blogs/InfoItem';
import { Calendar, User } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import PageTitle from '@/components/custome/PageTitle';
import CommentsSection from '@/components/student/blogs/CommentsSection';
const BlogPage = () => {
  // بيانات تجريبية للمدونة
  const blogData = {
    title: "Mastering React in 2026",
    author: "Ahmed Mohamed",
    date: "2026-01-15",
    commentsCount: 42,
    content: "In this comprehensive guide, we'll explore the latest techniques and best practices for mastering React in 2026. From component architecture to state management, we'll cover everything you need to know to become a React expert.In this comprehensive guide, we'll explore the latest techniques and best practices for mastering React in 2026. From component architecture to state management, we'll cover everything you need to know to become a React expert.In this comprehensive guide, we'll explore the latest techniques and best practices for mastering React in 2026. From component architecture to state management, we'll cover everything you need to know to become a React expert. we'll cover everything you need to know to become a React expert.In this comprehensive guide, we'll explore the latest techniques and best practices for mastering React in 2026. From component architecture to state management, we'll cover everything you need to know to become a React expert.",
    imageSrc: "/imges/course.png"
  };

  return (
    <div className="min-h-screen">
        <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-2 ">
            <PageTitle /> 
            <div className="flex flex-wrap items-center gap-6">
          <InfoItem icon={<User size={16} />} text={blogData.author} />
          <InfoItem icon={<Calendar size={16} />} text={blogData.date} />
          <InfoItem icon={<MessageSquare size={16} />} text={`${blogData.commentsCount} Comments`} />
        </div>
             
        </div>
      <ArticleSection {...blogData} />
      <CommentsSection />
     
    </div>
  );
};

export default BlogPage;