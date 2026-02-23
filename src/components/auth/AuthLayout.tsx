import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  imageSrc: string; // رابط الصورة التوضيحية
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, imageSrc }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="bg-card rounded-[2rem] shadow-xl flex flex-col md:flex-row max-w-5xl w-full overflow-hidden p-8 md:p-12 gap-12">
        
        {/* القسم الأيسر: النموذج (Form Side) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-card-foreground mb-2">{title}</h1>
            <p className="text-gray-500 dark:text-gray-200 text-sm">{subtitle}</p>
          </div>

          {children}

         
        
        </div>

        {/* القسم الأيمن: الصورة (Image Side) */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img src={imageSrc} alt="Auth Illustration" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};


export default AuthLayout;