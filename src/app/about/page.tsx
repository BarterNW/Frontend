import PageLayout from "@/components/layout/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout>
      {/* About Content */}
      <div className="w-full max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#212121] text-center mb-6">
          About BarterNow
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          BarterNow is revolutionizing the sponsorship industry by connecting event organizers 
          with sponsors through AI-powered matching, verified profiles, and completely commission-free deals.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-[#061C47] mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To eliminate barriers between sponsors and event organizers, creating 
              transparent, efficient, and mutually beneficial partnerships.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-[#061C47] mb-4">Our Vision</h2>
            <p className="text-gray-700">
              A world where every event finds its perfect sponsor, and every sponsor 
              discovers events that align with their brand values.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
