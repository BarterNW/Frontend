import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";

export default function Page() {
  return (
    <PageLayout>
      <div className="w-full flex justify-center px-4 mt-12">
        <Hero />
      </div>
      <div className="w-full flex justify-center px-4 mt-16">
        <DashboardPreview />
      </div>
      <div className="w-full flex justify-center px-4 mt-24">
        <Features />
      </div>
      <div className="w-full flex justify-center px-4 mt-24">
        <Testimonials />
      </div>
      <div className="w-full flex justify-center px-4 mt-24">
        <Benefits />
      </div>
      <div className="w-full flex justify-center px-4 mt-24">
        <FAQ />
      </div>
      <div className="w-full flex justify-center px-4 mt-24 mb-16">
        <CallToAction />
      </div>
    </PageLayout>
  );
}
