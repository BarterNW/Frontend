import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center pointer-events-none">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="border self-stretch flex w-[97px] shrink-0 h-[1287px] my-auto border-[rgba(255,255,255,0.1)] border-solid max-md:hidden"
        />
      ))}
    </div>
  );
};

export default BackgroundGrid;
