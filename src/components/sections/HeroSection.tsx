import React from 'react';
import Button from '../common/Button';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA
}) => {
  return (
    <div className="w-full flex justify-center px-4 mt-12 md:mt-20">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#212121] mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-[#212121] mb-6">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA && (
            <Button variant="primary" size="large" href={primaryCTA.href}>
              {primaryCTA.text}
            </Button>
          )}
          {secondaryCTA && (
            <Button variant="secondary" size="large" href={secondaryCTA.href}>
              {secondaryCTA.text}
            </Button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
