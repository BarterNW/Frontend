import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default',
  hover = false,
  className = '' 
}) => {
  const baseClasses = 'rounded-3xl p-8 border transition-smooth';
  
  const variantClasses = {
    default: 'bg-white border-gray-200',
    glass: 'bg-white/60 backdrop-blur-sm border-gray-200',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border-gray-200'
  };
  
  const hoverClasses = hover ? 'hover-card' : '';

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
