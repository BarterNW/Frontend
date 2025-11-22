'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';

const Header: React.FC = () => {
  const pathname = usePathname();
  const isEventOrBrandPage = pathname === '/events' || pathname === '/brands';

  return (
    <header className="bg-[rgba(245,245,245,0.2)] border flex w-full max-w-[943px] items-center gap-3 md:gap-5 justify-between px-4 md:px-8 lg:pl-[46px] lg:pr-[17px] py-3 md:py-[7px] rounded-[50px] border-[rgba(33,33,33,0.7)] border-solid">
      <Logo variant="full" color="dark" size="medium" linkTo="/" />
      <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm text-[rgba(33,33,33,1)] font-normal">
        <Link href="/about" className="hover:text-[#061C47] transition-all duration-300 hover-link">
          About
        </Link>
        <Link href="/features" className="hover:text-[#061C47] transition-all duration-300 hover-link">
          Features
        </Link>
        <Link href="/pricing" className="hover:text-[#061C47] transition-all duration-300 hover-link">
          Pricing
        </Link>
        <Link href="/contact" className="hover:text-[#061C47] transition-all duration-300 hover-link">
          Contact
        </Link>
      </nav>
      
      {isEventOrBrandPage ? (
        <div className="flex items-center gap-2">
          <Link href={`/login?type=${pathname === '/brands' ? 'brand' : 'organizer'}`} className="text-xs md:text-[15px] text-[#212121] font-medium px-3 md:px-4 py-2 md:py-3 rounded-full hover:bg-white/50 transition-all duration-300 hover-scale whitespace-nowrap">
            Login
          </Link>
          <Link href={`/signup?type=${pathname === '/brands' ? 'brand' : 'organizer'}`} className="flex items-center gap-1 md:gap-[3px] text-xs md:text-[15px] text-neutral-100 font-medium bg-[#061C47] px-3 md:px-4 py-2 md:py-3 rounded-full hover:bg-[#0a2555] transition-all duration-300 hover-lift hover-btn-primary whitespace-nowrap group">
            <span>Sign Up</span>
          </Link>
        </div>
      ) : (
        // needs to be /events
        <Link href="https://forms.gle/mL7c2PdDZ6QNmyRQA" target="_blank" className="flex items-center gap-1 md:gap-[3px] text-xs md:text-[17px] text-neutral-100 font-medium bg-[#061C47] px-3 md:px-4 py-2 md:py-3 rounded-full hover:bg-[#0a2555] transition-all duration-300 hover-lift hover-btn-primary whitespace-nowrap group">
          <span className="hidden sm:inline">Event Organisers</span>
          <span className="sm:hidden">Join</span>
          <img
            src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/8c655e825e2029f7358f13b942e8c2de101dece0?placeholderIfAbsent=true"
            className="w-3 md:w-[15px] aspect-square object-contain transition-transform duration-300 group-hover:translate-x-1"
            alt="Arrow"
          />
        </Link>
      )}
    </header>
  );
};

export default Header;
