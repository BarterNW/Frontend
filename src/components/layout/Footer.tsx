import React from 'react';
import Link from 'next/link';
import Logo from '../Logo';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0B1F3F] pt-12 pb-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content area */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo variant="full" color="light" size="medium" linkTo="/" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              BarterNow connects sponsors and event organizers through AI-powered matching, verified profiles, and secure, commission-free deals.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4">Product</h3>
            <nav className="space-y-2.5">
              <Link href="/features" className="block text-gray-400 text-sm hover:text-white transition-all duration-300 hover:translate-x-1">
                Features
              </Link>
              <Link href="/how-it-works" className="block text-gray-400 text-sm hover:text-white transition-all duration-300 hover:translate-x-1">
                How It Works
              </Link>
              <Link href="/pricing" className="block text-gray-400 text-sm hover:text-white transition-all duration-300 hover:translate-x-1">
                Pricing
              </Link>
            </nav>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4">Company</h3>
            <nav className="space-y-2.5">
              <Link href="/about" className="block text-gray-400 text-sm hover:text-white transition-all duration-300 hover:translate-x-1">
                About
              </Link>
              <Link href="/careers" className="block text-gray-400 text-sm hover:text-white transition-all duration-300 hover:translate-x-1">
                Careers
              </Link>
              <Link href="/contact" className="block text-gray-400 text-sm hover:text-white transition-all duration-300 hover:translate-x-1">
                Contact
              </Link>
              <Link href="/press" className="block text-gray-400 text-sm hover:text-white transition-all duration-300 hover:translate-x-1">
                Press
              </Link>
            </nav>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4">Resources</h3>
            <nav className="space-y-2.5">
              <Link href="/help-center" className="block text-gray-400 text-sm hover:text-white transition-all duration-300 hover:translate-x-1">
                Help Center
              </Link>
              <Link href="/updates" className="block text-gray-400 text-sm hover:text-white transition-all duration-300 hover:translate-x-1">
                Updates
              </Link>
              <Link href="/api-docs" className="block text-gray-400 text-sm hover:text-white transition-all duration-300 hover:translate-x-1">
                API Docs
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 BaterNow. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/company/barternowin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 text-[#0B1F3F]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 text-[#0B1F3F]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
