// components/sections/ArticleSection.tsx
import Image from 'next/image';
import { Calendar, User, MessageSquare } from 'lucide-react'; // تأكد من تثبيت lucide-react
import { InfoItem } from './InfoItem';

interface ArticleSectionProps {
  title: string;
  author: string;
  date: string;
  commentsCount: number;
  content: string;
  imageSrc: string;
}

export default function ArticleSection({
  title,
  author,
  date,
  commentsCount,
  content,
  imageSrc
}: ArticleSectionProps) {
  return (
    <section className="pb-6 pt-6 md:pt-8  max-w-7xl mx-auto bg-app">
      {/* Header Area */}
    

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Image Wrapper */}
        <div className="relative pr-10 overflow-hidden rounded-lg group">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-auto  object-cover transition-transform duration-500 shadow-sm"
            style={{ borderRadius: 'var(--radius)' }} // استخدام المتغير الخاص بك
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4">
          <p className="text-foreground leading-relaxed text-md font-sans opacity-90">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}