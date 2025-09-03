import LargeCard from "./WhyBarter/LargeCards";
import SmallCard from "./WhyBarter/SmallCards";
import Button from "./Button";
import Heading from "./WhyBarter/Heading";
import TopSec from "./WhyBarter/Topsec";

export default function WhyBarterNow() {
  const features = [
    {
      title: "AI Matching",
      description:
        "Instantly connect sponsors with the most relevant events using intelligent logic.",
      img: "/card/aiMatch.png",
    },
    {
      title: "Zero Commissions",
      description:
        "Instantly connect sponsors with the most relevant events using intelligent logic.",
      img: "/card/zeroCom.png",
    },
    {
      title: "Verified Events",
      description:
        "Work only with authenticated organizers and sponsors to ensure trust and Transparency.",
      img: "/card/zeroCom.png",
    },
    {
      title: "Verified Events",
      description:
        "Work only with authenticated organizers and sponsors to ensure trust and Transparency.",
      img: "/card/zeroCom.png",
    },
    {
      title: "Verified Events",
      description:
        "Work only with authenticated organizers and sponsors to ensure trust and Transparency.",
      img: "/card/zeroCom.png",
    },
  ];

  return (
    <div className="w-full h-full bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-x-hidden">
      <TopSec/>

      <Heading />
      <Button />

      <div className="flex flex-wrap gap-6 justify-center px-6 py-8">
        {features.map((feature, idx) =>
          idx < 2 ? (
            <LargeCard
              key={idx}
              title={feature.title}
              description={feature.description}
              img={feature.img}
            />
          ) : (
            <SmallCard
              key={idx}
              title={feature.title}
              description={feature.description}
              img={feature.img}
            />
          )
        )}
      </div>
    </div>
  );
}