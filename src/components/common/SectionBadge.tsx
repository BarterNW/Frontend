import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 text-sm font-medium px-5 py-2 rounded-full bg-blue-50/50 border-2 border-blue-300 text-blue-700 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-blue-700"></span>
      {children}
    </div>
  );
};

export default SectionBadge;
