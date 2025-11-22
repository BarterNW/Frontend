import React from 'react';
import { PricingPlan } from '@/data/pricing';
import PricingCard from '../common/PricingCard';
import SectionBadge from '../common/SectionBadge';

interface PricingSectionProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ title, subtitle, plans }) => {
  return (
    <div className="w-full flex justify-center px-4 mt-16 md:mt-24">
      <div className="w-full max-w-6xl">
      <div className="text-center mb-12">
        <SectionBadge className="mb-6">PRICING</SectionBadge>
        <h2 className="text-2xl md:text-4xl font-bold text-[#212121] mb-4">
          {title}
        </h2>
        <p className="text-2xl md:text-4xl font-bold text-[#212121] mb-8">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default PricingSection;
