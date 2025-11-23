"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import AuthLayout from "@/components/layout/AuthLayout";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "organizer";
  const [userType, setUserType] = useState<"brand" | "organizer">(initialType as "brand" | "organizer");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  useEffect(() => {
    // Update URL when user type changes
    router.push(`/signup?type=${userType}`, { scroll: false });
  }, [userType, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup:", { name, email, password, acceptTerms, userType });
  };

  const pageContent = {
    organizer: {
      title: "Create Your Event Organizer Account",
      subtitle: "Start finding sponsors in minutes",
      namePlaceholder: "John Doe",
      emailPlaceholder: "organizer@example.com",
      carouselTitle: "Fast Matching",
      carouselDescription: "Our AI instantly connects you with sponsors looking for events like yours. Get partnership offers within 24 hours.",
      carouselItems: [
        {
          icon: "⚡",
          title: "Fast Matching",
          description: "Our AI instantly connects you with sponsors looking for events like yours."
        },
        {
          icon: "💰",
          title: "Zero Commission",
          description: "List unlimited events and connect with sponsors for free. Keep 100% of your sponsorship revenue."
        },
        {
          icon: "🎯",
          title: "Verified Sponsors",
          description: "All brands on our platform are verified for authenticity and payment history."
        }
      ]
    },
    brand: {
      title: "Create Your Brand Account",
      subtitle: "Access verified events instantly",
      namePlaceholder: "Jane Smith",
      emailPlaceholder: "brand@company.com",
      carouselTitle: "Verified Events Only",
      carouselDescription: "Every event on our platform is verified for authenticity, audience size, and past performance. Sponsor with confidence.",
      carouselItems: [
        {
          icon: "✅",
          title: "Verified Events Only",
          description: "Every event is verified for authenticity, audience size, and past performance."
        },
        {
          icon: "📊",
          title: "Data-Driven Insights",
          description: "Get detailed analytics on audience demographics, engagement rates, and ROI projections."
        },
        {
          icon: "🤝",
          title: "Direct Communication",
          description: "Connect directly with event organizers without middlemen or agencies."
        }
      ]
    }
  };

  const content = pageContent[userType];

  return (
    <AuthLayout
      carouselTitle={content.carouselTitle}
      carouselDescription={content.carouselDescription}
      carouselItems={content.carouselItems}
    >
      <div className="w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-[#212121] mb-2">
          {content.title}
        </h1>
        <p className="text-gray-600 mb-8">{content.subtitle}</p>

        {/* User Type Switch */}
        <div className="flex gap-2 mb-8 p-1 bg-white rounded-lg border border-gray-300">
          <button
            type="button"
            onClick={() => setUserType("organizer")}
            className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
              userType === "organizer"
                ? "bg-[#061C47] text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            Event Organizer
          </button>
          <button
            type="button"
            onClick={() => setUserType("brand")}
            className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
              userType === "brand"
                ? "bg-[#061C47] text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            Brand / Sponsor
          </button>
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Sign up with Google
            </span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Sign up with Apple
            </span>
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#E8EBF0] text-gray-500">or with e-mail</span>
          </div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder={content.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#061C47] focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                type="email"
                placeholder={content.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#061C47] focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-4 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#061C47] focus:border-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#061C47] focus:ring-[#061C47]"
                required
              />
              <span className="text-sm text-gray-600">I agree to the Terms & Privacy Policy</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#061C47] text-white rounded-full font-semibold hover:bg-[#0a2555] transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href={`/login?type=${userType}`} className="text-[#061C47] font-semibold hover:underline">
            Login
          </Link>
        </p>

        <div className="mt-8 pt-6 border-t border-gray-300 flex items-center justify-between">
          <Link href="/privacy-policy" className="text-sm text-gray-500 hover:underline">
            Privacy Policy
          </Link>
          <p className="text-sm text-gray-400">2025 © BarterNow</p>
        </div>
      </div>
    </AuthLayout>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#061C47]"></div>
      </div>
    }>
      <SignupForm />
    </Suspense>
  );
}
