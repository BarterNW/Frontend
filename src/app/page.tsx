import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export default function Page() {
  return (
    <PageLayout>
      <div className="w-full flex justify-center px-4 mt-12">
        <Hero />
      </div>
      <ScrollReveal animation="blur-fade" threshold={0.2}>
        <div className="w-full flex justify-center px-4 mt-16">
          <DashboardPreview />
        </div>
      </ScrollReveal>
      <ScrollReveal animation="slide-rotate" delay={100} threshold={0.15}>
        <div className="w-full flex justify-center px-4 mt-24">
          <Features />
        </div>
      </ScrollReveal>
      <ScrollReveal animation="zoom" delay={100} threshold={0.1}>
        <div className="w-full flex justify-center px-4 mt-24">
          <Testimonials />
        </div>
      </ScrollReveal>
      <ScrollReveal animation="flip" delay={100} threshold={0.15}>
        <div className="w-full flex justify-center px-4 mt-24">
          <Benefits />
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100} threshold={0.1}>
        <div className="w-full flex justify-center px-4 mt-24">
          <FAQ />
        </div>
      </ScrollReveal>
      <ScrollReveal animation="scale" delay={100} threshold={0.2}>
        <div className="w-full flex justify-center px-4 mt-24 mb-16">
          <CallToAction />
        </div>
      </ScrollReveal>
    </PageLayout>
  );
}
