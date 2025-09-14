'use client';

import Image from 'next/image';

const logos = [
  { name: 'LogoIpsum', src: '/github.png' },
  { name: 'LOGO', src: '/logos/logo2.svg' },
  { name: 'LogoIpsum', src: '/logos/logo3.svg' },
  { name: 'LOGO', src: '/logos/logo4.svg' },
  { name: 'LogoIpsum', src: '/logos/logo5.svg' },
  { name: 'LOGO', src: '/logos/logo6.svg' },
  { name: 'LogoIpsum', src: '/logos/logo7.svg' },
  { name: 'LOGO', src: '/logos/logo8.svg' },
];

export default function TrustedTeams() {
  return (
    <section className="py-12 px-6 bg-transparent text-center">
      <h2 className="text-2xl font-semibold mb-10">Trusted By Top Teams Worldwide</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 ">
        {logos.map((logo, index) => (
          <div
            key={index}
            className=" w-45 flex items-center justify-center h-24 border shadow-sm bg-transparent hover:bg-gray-100 transition"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={100}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}