"use client";

import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import Testimonials from "@/components/Testimonials";
import Button from "@/components/common/Button";
import { eventOrganizerPlans } from "@/data/pricing";
import { eventOrganizerFAQs } from "@/data/faq";

export default function EventsPage() {

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Your Event. Our Network."
        subtitle="Endless Opportunities."
        description="Looking for the best sponsorship deals"
        primaryCTA={{ text: "Get Started", href: "/signup?type=organizer" }}
        secondaryCTA={{ text: "Learn More", href: "/about" }}
      />

      {/* Sponsor Logos */}
      <div className="w-full flex justify-center px-4 mt-8 md:mt-12">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-300/50">
          <div className="flex items-center justify-center w-full h-16 md:h-20">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/organizer-logo-1" alt="Organizer" className="max-w-full max-h-full object-contain opacity-60" />
          </div>
          <div className="flex items-center justify-center w-full h-16 md:h-20">
            <span className="text-2xl md:text-3xl font-bold text-gray-600">LOGO</span>
          </div>
          <div className="flex items-center justify-center w-full h-16 md:h-20">
            <span className="text-2xl md:text-3xl font-bold text-gray-600">GDG</span>
          </div>
          <div className="flex items-center justify-center w-full h-16 md:h-20">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/organizer-logo-2" alt="Organizer" className="max-w-full max-h-full object-contain opacity-60" />
          </div>
          <div className="flex items-center justify-center w-full h-16 md:h-20">
            <span className="text-2xl md:text-3xl font-bold text-gray-600">GDG</span>
          </div>
          <div className="flex items-center justify-center w-full h-16 md:h-20">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/organizer-logo-3" alt="Organizer" className="max-w-full max-h-full object-contain opacity-60" />
          </div>
          <div className="flex items-center justify-center w-full h-16 md:h-20">
            <span className="text-2xl md:text-3xl font-bold text-gray-600">LOGO</span>
          </div>
          <div className="flex items-center justify-center w-full h-16 md:h-20">
            <span className="text-2xl md:text-3xl font-bold text-gray-600">LOGO</span>
          </div>
          </div>
        </div>
      </div>

      {/* Why BarterNow Section */}
      <div className="w-full flex justify-center px-4 mt-16 md:mt-24">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] mb-3">
            Why BarterNow?
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] mb-4">
            Here's What Sets Us Apart
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Intelligent tools. Transparent process. Real results.
          </p>
          <Button variant="primary" size="large" href="/brands">
            Get Started As Brand
          </Button>
        </div>

        {/* Top Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* AI Matching Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-6 flex items-center justify-center min-h-[200px]">
              <img 
                src="/assets/zero-commission.png" 
                alt="AI Matchmaking Interface"
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">AI Matching</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Love Instantly connect sponsors with the most relevant events using intelligent algo.
            </p>
          </div>

          {/* Zero Commission Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-6 flex items-center justify-center min-h-[200px]">
              <img 
                src="/assets/zero-commission.png" 
                alt="Zero Commission Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">Zero Commissions</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Love Instantly connect sponsors with the most relevant events using intelligent algo.
            </p>
          </div>
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Verified Events Card 1 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-6 flex items-center justify-center min-h-[160px]">
              <img 
                src="/assets/verified-events-1.jpg" 
                alt="Verified Badge"
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">Verified Events</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Work only with authenticated organizers and sponsors to ensure trust and Transparency
            </p>
          </div>

          {/* Verified Events Card 2 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl p-8 mb-6 flex items-center justify-center min-h-[160px]">
              <img 
                src="/assets/verified-events-2.jpg" 
                alt="Handshake Partnership"
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">Verified Events</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Work only with authenticated organizers and sponsors to ensure trust and Transparency
            </p>
          </div>

          {/* Verified Events Card 3 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-2xl p-8 mb-6 flex items-center justify-center min-h-[160px]">
              <img 
                src="/assets/verified-events-3.jpg" 
                alt="Digital Dashboard"
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">Verified Events</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Work only with authenticated organizers and sponsors to ensure trust and Transparency
            </p>
          </div>
        </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full flex justify-center px-4 mt-16 md:mt-24">
        <Testimonials />
      </div>

      {/* Pricing Section */}
      <PricingSection
        title="Pick the"
        subtitle="Plan That Fits You"
        plans={eventOrganizerPlans}
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={eventOrganizerFAQs}
        ctaText="Start Your Free Trial"
        ctaHref="/signup?type=organizer"
      />
    </PageLayout>
  );
}
