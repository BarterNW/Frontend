import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'full' | 'icon';
  color?: 'dark' | 'light';
  size?: 'small' | 'medium' | 'large';
  linkTo?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  color = 'dark', 
  size = 'medium',
  linkTo = '/'
}) => {
  const sizeClasses = {
    small: { container: 'w-6 h-6', text: 'text-sm' },
    medium: { container: 'w-8 h-8 md:w-10 md:h-10', text: 'text-base md:text-[21px]' },
    large: { container: 'w-12 h-12', text: 'text-2xl' },
  };

  const logoSrc = color === 'dark' ? '/logo-dark.png' : '/logo-light.png';
  const textColor = color === 'dark' ? 'text-[#212121]' : 'text-white';
  const sizes = sizeClasses[size];

  const LogoContent = () => (
    <>
      <div className={`${sizes.container} rounded-full overflow-hidden flex-shrink-0 bg-white`}>
        <Image
          src={logoSrc}
          alt="BarterNow"
          width={40}
          height={40}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      {variant === 'full' && (
        <span className={`${textColor} ${sizes.text} font-bold whitespace-nowrap`}>
          BarterNow
        </span>
      )}
    </>
  );

  if (linkTo) {
    return (
      <Link href={linkTo} className="flex items-center gap-2 md:gap-[9px] leading-[1.4]">
        <LogoContent />
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2 md:gap-[9px] leading-[1.4]">
      <LogoContent />
    </div>
  );
};

export default Logo;
