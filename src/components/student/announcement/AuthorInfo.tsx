import React from 'react';
import { User, Calendar } from 'lucide-react';

interface AuthorInfoProps {
  name: string;
  date: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ name, date }) => {
  return (
    <div className="flex items-center gap-6 text-primary font-sans">
      {/* قسم الاسم */}
      <div className="flex items-center gap-2">
        <User size={18} className="fill-primary" />
        <span className="text-lg font-medium">{name}</span>
      </div>

      {/* قسم التاريخ */}
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Calendar size={18} />
        <span className="text-lg">{date}</span>
      </div>
    </div>
  );
};

export default AuthorInfo;