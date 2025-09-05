// components/SearchInviteBanner.js
import Link from 'next/link';

export default function InviteBanner() {
  return (
    <section
      className="mx-auto my-8 max-w-11/12  bg-primary-dark px-12 py-10 flex flex-col md:flex-row md:items-start  items-center justify-between gap-6"
      aria-label="CTA: Start Free Trial"
    >
      <div className="flex-1 text-neutral-light">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          <span className="font-bold">You’ve come this Far</span> in your search.
        </h2>
        <p className="opacity-90 text-base font-weight-light">
          Thousands have looked for a smarter, fairer way to collaborate—and they found it right here. BarterNow eliminates the noise and barriers of traditional sponsorship, giving you verified profiles, secure escrow transactions, and fast, AI-driven matches. You’re not just close—you’re exactly where you need to be.
        </p>
      </div>
      <Link href="/signup" passHref className="bg-[#D6E2F6] text-[#212121] font-medium rounded-full px-7 py-3 transition hover:bg-[#bdcdf7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#142355] whitespace-nowrap"
>   
          Start Your Free Trial &rarr;
        
      </Link>
    </section>
  );
}
