"use client";

import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import { brandPlans } from "@/data/pricing";
import { brandFAQs } from "@/data/faq";

export default function BrandsPage() {

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Sponsor Events That Matter"
        subtitle="To Your Brand"
        description="Connect with the right audiences through verified events and authentic partnerships"
        primaryCTA={{ text: "Find Events", href: "/signup?type=brand" }}
        secondaryCTA={{ text: "Watch Demo", href: "/about" }}
      />

      {/* Why Choose BarterNow Section */}
      <div className="w-full flex justify-center px-4 mt-16 md:mt-24">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] mb-3">
            Why Choose BarterNow
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] mb-4">
            For Your Brand
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The smarter way to find and sponsor events that align with your brand values
          </p>
        </div>

        {/* Top Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* AI Matching Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 mb-6 flex items-center justify-center min-h-[160px]">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">Smart AI Matching</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our AI analyzes your brand values and goals to match you with perfect events that align with your target audience.
            </p>
          </div>

          {/* Budget Protection Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 mb-6 flex items-center justify-center min-h-[160px]">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">Budget Protection</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Only pay for verified results with our escrow system. Your budget is protected and released only when event commitments are fulfilled.
            </p>
          </div>
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Real-Time Analytics Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 mb-6 flex items-center justify-center min-h-[160px]">
              <div className="text-center">
                <svg className="w-20 h-20 mx-auto text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">Real-Time Analytics</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Track sponsorship performance with live dashboards showing impressions, engagement, and ROI metrics.
            </p>
          </div>

          {/* Verified Events Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-6 flex items-center justify-center min-h-[160px]">
              <div className="text-center">
                <svg className="w-20 h-20 mx-auto text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">Verified Events</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sponsor only authenticated events with verified organizers, ensuring transparency and trust in every partnership.
            </p>
          </div>

          {/* Flexible Partnerships Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 mb-6 flex items-center justify-center min-h-[160px]">
              <div className="text-center">
                <svg className="w-20 h-20 mx-auto text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">Flexible Partnerships</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Exchange cash, products, or services. Create custom sponsorship packages that align with your marketing goals.
            </p>
          </div>
        </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full flex justify-center px-4 mt-16 md:mt-24">
        <Testimonials />
      </div>

      {/* Benefits Section */}
      <div className="w-full flex justify-center px-4 mt-16 md:mt-24">
        <Benefits />
      </div>

      {/* Pricing Section */}
      <PricingSection
        title="Choose Your"
        subtitle="Brand Plan"
        plans={brandPlans}
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={brandFAQs}
        ctaText="Start Sponsoring"
        ctaHref="/signup?type=brand"
      />
    </PageLayout>
  );
}
