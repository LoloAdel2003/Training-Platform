import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  headerAction?: ReactNode;
}

 const DashCard = ({ title, children, className, headerAction }: StatCardProps) => {
  return (
    <div className={`bg-card p-6 rounded-md border border-border shadow-sm hover:shadow-md transition-all  ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-foreground font-bold text-lg">{title}</h3>
        {headerAction}
      </div>
      {children}
    </div>
  );
};
export default DashCard