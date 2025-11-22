import React, { useState } from 'react';
import SectionBadge from '../common/SectionBadge';
import Button from '../common/Button';
import { FAQItem } from '@/data/faq';

interface FAQSectionProps {
  faqs: FAQItem[];
  ctaText?: string;
  ctaHref?: string;
  title?: string;
  subtitle?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  ctaText = 'Start Your Free Trial',
  ctaHref = '/signup',
  title = 'Got Questions?',
  subtitle = 'We Have Answers'
}) => {
  const [openFAQ, setOpenFAQ] = useState<number>(0);

  return (
    <div className="w-full flex justify-center px-4 mt-16 md:mt-24 mb-16 md:mb-24">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <SectionBadge className="mb-6">FAQS</SectionBadge>
        </div>
        
        <div className="border w-full overflow-hidden px-8 py-8 rounded-[13px] border-gray-300 bg-white/40 backdrop-blur-sm max-md:px-5 mb-4">
          <div className="flex items-start justify-between gap-8 max-md:flex-col">
            <div className="flex-1">
              <h2 className="text-foreground text-4xl md:text-5xl font-bold leading-tight mb-0">
                {title}
                <br />
                {subtitle}
              </h2>
            </div>
            <div className="flex-shrink-0 max-md:w-full">
              <Button variant="primary" size="medium" href={ctaHref}>
                {ctaText}
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`${
                openFAQ === index ? 'bg-blue-100/50' : 'bg-white/40 backdrop-blur-sm'
              } border border-gray-300 rounded-[13px] overflow-hidden transition-colors`}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full text-left px-6 py-5 max-md:px-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 text-lg md:text-xl font-semibold text-foreground">
                    {item.question}
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#061C47] flex items-center justify-center">
                    <span className="text-white text-2xl font-light">
                      {openFAQ === index ? '×' : '+'}
                    </span>
                  </div>
                </div>
              </button>
              {openFAQ === index && item.answer && (
                <div className="px-6 pb-5 text-base text-muted-foreground leading-relaxed max-md:px-5">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
