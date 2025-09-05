import React from 'react';
import Heading from '../Heading'; // adjust path as needed

export default function Frame50() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div
        className="rounded-2xl p-4 text-white w-[140px] h-[20px] flex items-center justify-center border-2 border-gray-400"
        style={{
          background: 'linear-gradient(to right, #ffffff 0%, rgb(124, 165, 236) 100%)',
        }}
      >
        <h3 className="text-center" style={{ color: '#061C47' }}>
          TESTIMONIALS
        </h3>
      </div>

      <Heading className="mt-5">See What</Heading>
      <Heading className="text-center">Our Customers Have To Say</Heading>
    </div>
  );
}