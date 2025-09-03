import BarterHeader from "./bartersection/BarterHeader";
import BarterBrandsPanel from "./bartersection/BarterBrandPanel";
import BarterOrganizersPanel from "./bartersection/BarterOrganiserPanel";

export default function BarterNowSection() {
  return (
    <div className="min-h-screen w-full  flex items-center justify-center bg-gray-400">
      <div className="bg-white text-gray-900 py-6 px-6 md:px-20 w-full h-full min-h-screen flex flex-col justify-center items-center">
        <BarterHeader />
        <div className="flex flex-wrap justify-center iteams-center md:flex-row gap-10 ">
          <BarterBrandsPanel />
          <BarterOrganizersPanel />
        </div>
      </div>
    </div>
  );
}