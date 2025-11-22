import React from 'react';
// Use public asset paths instead of importing files
const aiMatchingImg = '/assets/ai-matching.png';
const zeroCommissionImg = '/assets/zero-commission.png';
const verifiedEvents1Img = '/assets/verified-events-1.jpg';
const verifiedEvents2Img = '/assets/verified-events-2.jpg';
const verifiedEvents3Img = '/assets/verified-events-3.jpg';
import Link from "next/link";

const Features: React.FC = () => {
  const features = [
    {
      title: "AI Matching",
      description: "Lore Instantly connect sponsors with the most relevant events using intelligent algo.",
      size: "large"
    },
    {
      title: "Zero Commissions",
      description: "Lore Instantly connect sponsors with the most relevant events using intelligent algo.",
      size: "medium"
    },
    {
      title: "Verified Events",
      description: "Work only with authenticated organizers and sponsors to ensure trust and Transparency",
      size: "small"
    },
    {
      title: "Verified Events",
      description: "Work only with authenticated organizers and sponsors to ensure trust and Transparency",
      size: "small"
    },
    {
      title: "Verified Events",
      description: "Work only with authenticated organizers and sponsors to ensure trust and Transparency",
      size: "small"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2.5 text-sm font-medium px-5 py-2 rounded-full bg-blue-50/50 border-2 border-blue-300 text-blue-700 mb-6 hover-scale">
          <span className="w-2 h-2 rounded-full bg-blue-700 animate-glow"></span>
          OUR FEATURES
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Why BarterNow? <br />
          Here's What Sets Us Apart
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Intelligent tools. Transparent process. Real results.
        </p>
        {/* Needs to be /brands */}
        <Link href="https://forms.gle/9X955FXJe4sXeUkr9" target="_blank">
            <button className="px-8 py-4 bg-[#061C47] text-white rounded-full font-semibold hover:bg-[#0a2555] transition-all duration-300 inline-flex items-center gap-2 hover-lift hover-btn-primary group">
              <span>Get Started As Brand</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
      </div>
      
      {/* First row - 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="bg-white border border-gray-300 rounded-xl p-8 shadow-sm hover-card transition-smooth hover-img-zoom overflow-hidden">
          <img 
            src={aiMatchingImg} 
            alt="AI Matching visualization" 
            className="h-72 w-full rounded-lg mb-5 object-cover"
          />
          <h3 className="text-xl font-bold text-foreground mb-3">
            AI Matching
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Lore Instantly connect sponsors with the most relevant events using intelligent algo.
          </p>
        </div>

        <div className="bg-white border border-gray-300 rounded-xl p-8 shadow-sm hover-card transition-smooth hover-img-zoom overflow-hidden">
          <img 
            src={zeroCommissionImg} 
            alt="Zero Commissions" 
            className="h-72 w-full rounded-lg mb-5 object-cover"
          />
          <h3 className="text-xl font-bold text-foreground mb-3">
            Zero Commissions
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Lore Instantly connect sponsors with the most relevant events using intelligent algo.
          </p>
        </div>
      </div>

      {/* Second row - 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[verifiedEvents1Img, verifiedEvents2Img, verifiedEvents3Img].map((img, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm hover-card transition-smooth hover-img-zoom overflow-hidden">
            <img 
              src={img} 
              alt={`Verified Events ${index + 1}`} 
              className="h-60 w-full rounded-lg mb-4 object-cover"
            />
            <h3 className="text-lg font-bold text-foreground mb-3">
              Verified Events
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Work only with authenticated organizers and sponsors to ensure trust and Transparency
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
