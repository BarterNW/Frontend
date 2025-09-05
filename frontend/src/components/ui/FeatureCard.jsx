import Image from "next/image";
export default function FeatureCard({ title, description , image}) {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-3 shadow-sm flex flex-col items-start">
      <div className="w-full h-50 bg-gray-200 rounded-md mb-4">
        <Image src={image} alt={title} className="w-full h-full" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-neutral-dark">{description}</p>
    </div>
  );
}
