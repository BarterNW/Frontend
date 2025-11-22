export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

export const eventOrganizerPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$19",
    period: "/month",
    features: [
      "List unlimited events",
      "Basic sponsor matching",
      "Email support",
      "Event analytics",
      "Standard verification",
      "5 active listings",
      "Community forum access"
    ]
  },
  {
    name: "Pro",
    price: "$59",
    period: "/month",
    highlighted: true,
    features: [
      "Everything in Basic",
      "AI-powered matching",
      "Priority support 24/7",
      "Advanced analytics",
      "Fast-track verification",
      "Unlimited active listings",
      "Featured event placement",
      "Custom branding options"
    ]
  }
];

export const brandPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    features: [
      "Browse unlimited events",
      "Basic event matching",
      "Email support",
      "Sponsorship analytics",
      "Standard verification",
      "5 active campaigns",
      "Community forum access"
    ]
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    highlighted: true,
    features: [
      "Everything in Starter",
      "AI-powered event matching",
      "Priority support 24/7",
      "Advanced ROI tracking",
      "Fast-track verification",
      "Unlimited campaigns",
      "Featured brand placement",
      "Custom branding & reporting",
      "Dedicated account manager"
    ]
  }
];
