import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
  return (
    <section className="flex w-full max-w-6xl flex-col items-stretch bg-[#061C47] px-8 py-6 rounded-xl max-md:px-5">
      <div className="flex w-full items-stretch gap-[40px_100px] flex-wrap max-md:max-w-full">
        <h2 className="text-neutral-100 text-[45px] font-bold leading-loose tracking-[-0.45px] grow shrink w-[700px] mt-[13px] max-md:max-w-full max-md:text-[40px]">
          You've come this Far in your search.
        </h2>
        <Link href="/signup" className="bg-[rgba(214,226,246,1)] flex items-center gap-1.5 text-[17px] text-[rgba(33,33,33,1)] font-medium text-center px-[30px] py-[15px] rounded-[65px] hover:bg-[rgba(200,220,240,1)] transition-colors max-md:px-5">
          <span className="self-stretch my-auto">
            Start Your Free Trial
          </span>
          <img
            src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/92fa285d2031b072ca4c562118cba98a620b6dfe?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[21px] self-stretch shrink-0 my-auto"
            alt="Arrow"
          />
        </Link>
      </div>
      <p className="text-neutral-100 text-[17px] font-normal leading-7 tracking-[-0.31px] mt-[26px] max-md:max-w-full">
        Thousands have looked for a smarter, fairer way to collaborate—and
        they found it right here. BarterNow eliminates the noise and barriers
        of traditional sponsorship, giving you verified profiles, secure
        escrow transactions, and fast, AI-driven matches. You're not just
        close—you're exactly where you need to be
      </p>
    </section>
  );
};

export default CallToAction;
