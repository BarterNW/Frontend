import React from 'react';
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="flex w-full max-w-3xl flex-col items-center text-center">
      <div className="inline-flex items-center gap-2.5 text-sm font-medium px-5 py-2 rounded-full bg-blue-50/50 border-2 border-blue-300 text-blue-700 hover-scale animate-scale-in">
        <span className="w-2 h-2 rounded-full bg-blue-700 animate-glow"></span>
        Build Your Online Identity Today
      </div>
      <h1 className="text-[rgba(33,33,33,1)] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight md:leading-[1.6] lg:leading-[74px] tracking-tight text-center self-stretch mt-4 md:mt-[18px] px-4">
        Revolutionizing The Sponsorship Industry With Zero Commission
      </h1>
      <p className="text-[rgba(33,33,33,1)] text-sm md:text-base font-normal leading-6 md:leading-7 text-center mt-4 md:mt-[18px] px-4">
        Welcome to BarterNow — where sponsors meet purpose, commission-free.
        Connect, collaborate, and grow with verified events and secure deals
        in seconds.
      </p>
      <div className="mt-8">
        {/* Needs to be /brands */}
        <Link href="https://forms.gle/9X955FXJe4sXeUkr9" target="_blank">
        <button className="inline-flex items-center gap-2 bg-[#061C47] text-white font-medium px-6 py-3 rounded-full hover:bg-[#0a2555] transition-all duration-300 hover-lift hover-btn-primary">
          <span>Get Started As Brand</span>
          <img
            src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/8c655e825e2029f7358f13b942e8c2de101dece0?placeholderIfAbsent=true"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            alt="Arrow"
          />
        </button>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-6">
        <div className="flex items-center -space-x-3">
          <img
            src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/849305fca60a376ac7570c31fc8b6a13364af4bb?placeholderIfAbsent=true"
            className="w-10 h-10 rounded-full border-2 border-white hover-scale cursor-pointer transition-all duration-300 hover:z-10"
            alt="User review"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/a80e8f670d003ff8bec004cfbb1dd5aad63db908?placeholderIfAbsent=true"
            className="w-10 h-10 rounded-full border-2 border-white hover-scale cursor-pointer transition-all duration-300 hover:z-10"
            alt="User review"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/21e4401ec225ad27e486b721c6001d131af532f9?placeholderIfAbsent=true"
            className="w-10 h-10 rounded-full border-2 border-white hover-scale cursor-pointer transition-all duration-300 hover:z-10"
            alt="User review"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/e457a1eb8d0f520547b8485951143ed811ab5384?placeholderIfAbsent=true"
            className="w-10 h-10 rounded-full border-2 border-white hover-scale cursor-pointer transition-all duration-300 hover:z-10"
            alt="User review"
          />
        </div>
        <div className="text-sm text-muted-foreground font-semibold mt-3">
          1,200+ reviews (4.9 of 5)
        </div>
      </div>
    </section>
  );
};

export default Hero;
