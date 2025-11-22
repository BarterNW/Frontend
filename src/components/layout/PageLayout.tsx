import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showBackground?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, showBackground = true }) => {
  return (
    <div className="flex flex-col items-center min-h-screen relative">
      {/* Background image */}
      {showBackground && (
        <div 
          className="fixed inset-0 w-full h-full -z-10"
          style={{
            backgroundImage: "url('/FoldBg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      
      {/* Header */}
      <div className="w-full flex justify-center pt-8 px-4">
        <Header />
      </div>

      {/* Main Content */}
      <main className="w-full flex-1">
        {children}
      </main>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
