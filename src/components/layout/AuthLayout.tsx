'use client';

import React, { ReactNode } from 'react';
import Logo from '../Logo';

interface CarouselItem {
  icon: string;
  title: string;
  description: string;
}

interface AuthLayoutProps {
  children: ReactNode;
  carouselTitle: string;
  carouselDescription: string;
  carouselItems: CarouselItem[];
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  carouselTitle,
  carouselDescription,
  carouselItems
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Logo variant="full" color="dark" size="medium" />
          </div>
          {children}
        </div>
      </div>

      {/* Right Side - Carousel */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#061C47] to-[#0a2555] items-center justify-center p-12">
        <div className="max-w-lg text-white">
          <h2 className="text-3xl font-bold mb-4">{carouselTitle}</h2>
          <p className="text-lg mb-8 text-white/90">{carouselDescription}</p>
          
          <div className="space-y-6">
            {carouselItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
