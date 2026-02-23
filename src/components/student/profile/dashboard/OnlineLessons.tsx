import React from 'react';

interface LessonCardProps {
  image: string;
  category: string;
  title: string;
  time: string;
  isNow?: boolean;
}

const LessonCard: React.FC<LessonCardProps> = ({ image, category, title, time, isNow }) => {
  return (
    <div className="bg-card rounded-xl border border-card shadow-sm overflow-hidden flex-1 max-w-sm w-full">
      {/* Image Section */}
      <div className="h-40 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        <p className="text-[10px] text-muted-soft uppercase font-semibold mb-1">{category}</p>
        <h4 className="text-sm font-bold text-card-foreground mb-4">{title}</h4>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <button className={`px-4 cursor-pointer py-2 rounded text-xs font-semibold transition
            ${isNow ? 'bg-primary text-white' : 'text-primary hover:bg-gray-50'}`}>
            Watch Lecture
          </button>
          <span className={`text-xs font-bold ${isNow ? 'text-green-500' : 'text-green-500'}`}>
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

export const OnlineLessons = () => {
  const lessons = [
    { image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b', category: 'React Development', title: '1. Introductions', time: 'Now', isNow: true },
    { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978', category: 'React Development', title: '1. Introductions', time: '6:00pm' },
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', category: 'React Development', title: '1. Introductions', time: '8:00pm' },
    { image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', category: 'React Development', title: '1. Introductions', time: '10:00pm' },
  ];

  return (
    <div className="space-y-6 mb-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Today Online lessons</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded bg-gray-50 text-gray-400 hover:bg-gray-100"><span className="text-lg">←</span></button>
          <button className="p-2 rounded bg-[#EBEBFF] text-blue-600 hover:bg-blue-100"><span className="text-lg">→</span></button>
        </div>
      </div>
      
      <div className="card-grid">
        {lessons.map((lesson, index) => (
          <LessonCard key={index} {...lesson} />
        ))}
      </div>
    </div>
  );
};