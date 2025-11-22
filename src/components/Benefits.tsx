import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2.5 text-sm font-medium px-5 py-2 rounded-full bg-blue-50/50 border-2 border-blue-300 text-blue-700 mb-6 hover-scale">
          <span className="w-2 h-2 rounded-full bg-blue-700 animate-glow"></span>
          BENEFITS
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Built for <br />
          Sponsors and Organizers Alike
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          BarterNow streamlines collaboration, making it easy for both sides to
          connect, grow and succeed—no matter the scale.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-[#061C47] text-white rounded-2xl p-10 border border-gray-800 shadow-lg hover-card hover-glow transition-smooth group">
          <h3 className="text-2xl font-bold mb-5 leading-tight">
            For Brands
            <br />
            Built for Speed & Scalability
          </h3>
          <div className="border-t border-white/30 my-6 transition-all duration-300 group-hover:border-white/50" />
          <div className="text-base leading-relaxed space-y-4">
            <p>
              <span className="font-bold">Live Performance Dashboard</span> – Track every sponsorship in real-time with clear, actionable metrics.
            </p>
            <p>
              <span className="font-bold">Budget Protection</span> – Only pay for verified results; unused funds stay safe.
            </p>
            <p>
              <span className="font-bold">Authentic Data Insights</span> – All stats are pulled directly from LinkedIn — no fake screenshots, just real reach.
            </p>
            <p>
              <span className="font-bold">Sponsor Smarter</span> – Find events aligned with your brand's values and audience, faster than ever.
            </p>
          </div>
        </article>
        
        <article className="bg-blue-50/50 border border-blue-200 text-foreground rounded-2xl p-10 shadow-lg hover-card transition-smooth group">
          <h3 className="text-2xl font-bold mb-5 leading-tight">
            For Organizers
            <br />
            Designed for Trust & Visibility
          </h3>
          <div className="border-t border-gray-300 my-6 transition-all duration-300 group-hover:border-gray-400" />
          <div className="text-base leading-relaxed space-y-4">
            <p>
              <span className="font-bold">Instant AI Matching</span> – Get connected with the right sponsors based on your event profile and goals.
            </p>
            <p>
              <span className="font-bold">Zero Commission</span> – Keep 100% of your sponsorship; no platform fees, ever.
            </p>
            <p>
              <span className="font-bold">Secure Escrow Payments</span> – Funds are protected and only released when commitments are fulfilled.
            </p>
            <p>
              <span className="font-bold">Verified Sponsor Network</span> – Access a curated list of credible brands actively seeking to support events like yours.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Benefits;
