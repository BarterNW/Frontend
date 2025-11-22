import React from 'react';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className = '',
  icon,
  type = 'button',
  disabled = false
}) => {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 hover-lift group';
  
  const variantStyles = {
    primary: `bg-[${COLORS.primary}] text-white hover:bg-[${COLORS.primaryHover}] hover-btn-primary`,
    secondary: 'bg-white/50 backdrop-blur-sm text-[#212121] hover:bg-white/70 border border-gray-300 hover:shadow-lg',
    outline: 'bg-transparent border-2 border-[#061C47] text-[#061C47] hover:bg-[#061C47] hover:text-white hover:shadow-lg'
  };

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-base md:text-lg'
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const content = (
    <>
      {children}
      {icon && icon}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
