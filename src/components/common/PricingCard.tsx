import React from 'react';
import { PricingPlan } from '@/data/pricing';
import Button from './Button';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const isHighlighted = plan.highlighted;

  return (
    <div
      className={`rounded-3xl p-8 transition-smooth hover-card ${
        isHighlighted
          ? 'bg-[#061C47] text-white hover-glow'
          : 'bg-white/40 backdrop-blur-sm border border-gray-300/50 text-[#212121]'
      }`}
    >
      <div className="mb-8">
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-5xl font-bold">{plan.price}</span>
          <span className={`text-xl ${isHighlighted ? 'text-white/80' : 'text-gray-600'}`}>
            {plan.period}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                isHighlighted ? 'text-white' : 'text-[#061C47]'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className={isHighlighted ? 'text-white/90' : 'text-gray-700'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-full font-semibold transition-all duration-300 hover-lift ${
          isHighlighted
            ? 'bg-white text-[#061C47] hover:bg-gray-100 hover:shadow-lg'
            : 'bg-[#061C47] text-white hover:bg-[#0a2555] hover-btn-primary'
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
