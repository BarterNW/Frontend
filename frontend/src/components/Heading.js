// components/Heading.js
import React from 'react';

export default function Heading({ children, className = '' }) {
  return (
    <h1
      className={`text-3xl md:text-4xl lg:text-5xl text-black font-semibold ${className}`}
    >
      {children}
    </h1>
  );
}