// components/FeaturesSection.jsx
import FeatureCard from "../ui/FeatureCard";
import card1 from "../../assets/FeatureCard1.jpg";
import card2 from "../../assets/FeatureCard4.jpg";
import card3 from "../../assets/FeatureCard3.jpg";
import card4 from "../../assets/FeatureCard2.jpg";
import card5 from "../../assets/FeatureCard5.jpg";
const topFeatures = [
  {
    title: "AI Matching",
    description: "Instantly connect sponsors with the most relevant events using intelligent algo.",
    image:card1
  },
  {
    title: "Zero Commissions",
    description: "Instantly connect sponsors with the most relevant events using intelligent algo.",
    image:card2
  }
];

const bottomFeatures = [
  {
    title: "Verified Events",
    description: "Work only with authenticated organizers and sponsors to ensure trust and transparency.",
    image:card3
  },
  {
    title: "Verified Events",
    description: "Work only with authenticated organizers and sponsors to ensure trust and transparency.",
    image:card4
  },
  {
    title: "Verified Events",
    description: "Work only with authenticated organizers and sponsors to ensure trust and transparency.",
    image:card5
  }
];

export default function FeaturesSection() {
  return (
    <section className="max-w-4xl mx-auto p-6">
   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {topFeatures.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bottomFeatures.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
}
