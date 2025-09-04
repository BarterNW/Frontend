import { GoDotFill } from "react-icons/go";

export default function BarterBrandsPanel() {
  return (
    <div className="bg-[#061C47] p-4 rounded-lg shadow-md border border-gray-200 w-9/10 lg:w-100 border-2 border-gray-500">
      <h3 className="text-xl font-semibold text-white mb-4">For Brands</h3>
      <h3 className="text-xl font-semibold text-white mb-4 relative bottom-5">
        Built for Speed & Scalability
      </h3>

      <div className="bg-white h-0.25 w-full relative bottom-4"></div>

      <ul className="space-y-4 text-left text-white">
        <li className="flex items-start gap-2">
          <GoDotFill className="mt-1 shrink-0" />
          <span>
            <strong>Live Performance Dashboard</strong> – Track every sponsorship in real-time with clear, actionable metrics.
          </span>
        </li>

        <li className="flex items-start gap-2">
          <GoDotFill className="mt-1 shrink-0" />
          <span>
            <strong>Budget Protection</strong> – Only pay for verified results; unused funds sit in escrow.
          </span>
        </li>

        <li className="flex items-start gap-2">
          <GoDotFill className="mt-1 shrink-0" />
          <span>
            <strong>Authentic Data Insights</strong> – All stats are pulled directly from LinkedIn, including screenshots, just as real.
          </span>
        </li>

        <li className="flex items-start gap-2">
          <GoDotFill className="mt-1 shrink-0" />
          <span>
            <strong>Sponsor Smarter</strong> – Find events aligned with your brand’s values and audience at scale.
          </span>
        </li>
      </ul>
    </div>
  );
}