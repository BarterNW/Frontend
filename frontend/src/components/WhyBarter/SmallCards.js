import React from "react";

export default function SmallFeatureCard({ title, description, img }) {
  return (
    <div className="  w-9/10 lg:w-3/10 h-full bg-white border-2 border-gray-250 rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
      <div className="w-29/30 h-60 mb-4 flex items-center justify-center bg-gray-100">
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}