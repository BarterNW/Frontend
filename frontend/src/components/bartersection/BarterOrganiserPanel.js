import { GoDotFill } from "react-icons/go";

export default function BarterOrganizersPanel() {
    return (
      <div className="bg-[#b8d1f8] p-4 rounded-lg shadow-md border border-gray-200 w-9/10 lg:w-100  border-2 border-gray-500">
        <h3 className="text-xl font-semibold text-black mb-4">For Organizers</h3>
        <h3 className="text-xl font-semibold text-black mb-4 relative bottom-5">Designed for Trust & Visibility</h3>
        <div className="bg-black h-0.25 w-full relative bottom-4"></div>
       

<ul className="space-y-4 text-left text-black">
  <li className="flex items-start gap-2">
    <GoDotFill className="mt-1 shrink-0 text-base" />
    <span><strong>Instant AI Matching</strong> – Get connected with the right sponsors based on event goals.</span>
  </li>
  <li className="flex items-start gap-2">
    <GoDotFill className="mt-1 shrink-0 text-base" />
    <span><strong>Zero Commission</strong> – Keep 100% of the sponsorship; only pay if funds are protected and not released when events are canceled.</span>
  </li>
  <li className="flex items-start gap-2">
    <GoDotFill className="mt-1 shrink-0 text-base" />
    <span><strong>Verified Sponsor Network</strong> – Access a curated list of credible brands actively seeking to support events like yours.</span>
  </li>
</ul>
      </div>
    );
  }