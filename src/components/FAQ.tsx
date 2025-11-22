"use client";

"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer?: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqItems: FAQItem[] = [
    {
      question: "I just signed up—how long does it take to get matched with a sponsor?",
      answer: "Since we are currently in our MVP stage, matching time can vary.Most events start getting sponsor interest within 2–5 days, depending on the event type and the sponsor requirements. As we onboard more sponsors, matching will become faster."
    },
    {
      question: "Do I need to pay anything to find sponsors or list my event?",
      answer: "No! BarterNow is completely free for event organizers. We do not charge any fees or commissions for using our platform to find sponsors."
    },
    {
      question: "Can sponsors reach out to me directly or do I have to wait?",
      answer: "Sponsors can view your event profile and reach out to you directly through our messaging system as soon as your event is live on the platform. You don't have to wait for matches to be made."
    },
    {
      question: "What happens if a sponsor doesn't fulfill their promise?",
      answer: "We have a secure escrow system in place. Sponsors deposit funds upfront, which are only released to you once the sponsorship commitments are fulfilled. If there are any issues, our support team will assist in resolving them."
    },
    {
      question: "Is BarterNow safe for first-time users?",
      answer: "Absolutely! We prioritize trust and transparency. All organizers and sponsors go through a verification process to ensure authenticity. Plus, our escrow payment system protects both parties."
    },
    {
      question: "Can I use BarterNow for small or local events too?",
      answer: "Yes! BarterNow is designed to support events of all sizes, from small local meetups to large conferences. Our AI matching considers various event types and scales."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full max-w-6xl">
      <div className="inline-flex items-center gap-2.5 text-sm font-medium px-5 py-2 rounded-full bg-blue-50/50 border-2 border-blue-300 text-blue-700 mb-6 hover-scale">
        <span className="w-2 h-2 rounded-full bg-blue-700 animate-glow"></span>
        FAQS
      </div>
      
      <div className="border w-full overflow-hidden px-8 py-8 rounded-[13px] border-gray-300 max-md:px-5">
        <div className="flex items-start justify-between gap-8 max-md:flex-col">
          <div className="flex-1">
            <h2 className="text-foreground text-4xl md:text-5xl font-bold leading-tight mb-0">
              Got Questions?
              <br />
              We Have Answers
            </h2>
          </div>
          <div className="flex-shrink-0 max-md:w-full">
            {/* Needs to be /signup */}
            <Link href="https://forms.gle/9X955FXJe4sXeUkr9" target="_blank" className="inline-flex items-center gap-1.5 text-[17px] text-white font-medium bg-[#061C47] px-[30px] py-[15px] rounded-[65px] hover:bg-[#0a2555] transition-all duration-300 hover-lift hover-btn-primary whitespace-nowrap max-md:w-full max-md:justify-center group">
              <span>Start Your Free Trial</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/d1c671061c4c45fc8d4a48b8d20a31d50d2b92a3?placeholderIfAbsent=true"
                className="w-[21px] h-[21px] transition-transform duration-300 group-hover:translate-x-1"
                alt="Arrow"
              />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 mt-4">
        {faqItems.map((item, index) => (
          <div key={index} className={`${openIndex === index ? 'bg-blue-100/50' : 'bg-white'} border border-gray-300 rounded-[13px] overflow-hidden transition-all duration-300 hover-lift hover:shadow-lg`}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 max-md:px-5 group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 text-lg md:text-xl font-semibold text-foreground">
                  {item.question}
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#061C47] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <span className="text-white text-2xl font-light transition-transform duration-300">{openIndex === index ? '×' : '+'}</span>
                </div>
              </div>
            </button>
            {openIndex === index && item.answer && (
              <div className="px-6 pb-5 text-base text-muted-foreground leading-relaxed max-md:px-5">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
