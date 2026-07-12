export type PricingPlan = {
  label: string;
  duration: string;
  price: number;
  currency: 'USD';
  featured?: boolean;
};

export const CHEAT_PRICING: PricingPlan[] = [
  { label: 'Monthly', duration: '31 days of access', price: 35, currency: 'USD', featured: true },
  { label: 'Lifetime', duration: 'Unlimited access', price: 150, currency: 'USD' },
];

export const PRODUCT_PRICING: Record<string, PricingPlan[]> = {
  ugc: [
    { label: 'Monthly', duration: '31 days of access', price: 35, currency: 'USD', featured: true },
    { label: 'Lifetime', duration: 'Unlimited access', price: 150, currency: 'USD' },
  ],
  'skin-changer': [
    { label: 'Monthly', duration: '31 days of access', price: 35, currency: 'USD', featured: true },
    { label: 'Lifetime', duration: 'Unlimited access', price: 150, currency: 'USD' },
  ],
  'cloud-dma': [
    { label: 'Lifetime', duration: 'Unlimited access', price: 50, currency: 'USD', featured: true },
  ],
  'hwid-spoofer': [
    { label: 'Monthly', duration: '31 days of access', price: 50, currency: 'USD', featured: true },
    { label: 'Lifetime', duration: 'Unlimited access', price: 150, currency: 'USD' },
  ],
};

export function formatUsd(price: number): string {
  return `$${price}`;
}

export function lowestPrice(plans: PricingPlan[]): number {
  return Math.min(...plans.map((plan) => plan.price));
}

export function highestPrice(plans: PricingPlan[]): number {
  return Math.max(...plans.map((plan) => plan.price));
}

export function featuredPlan(plans: PricingPlan[]): PricingPlan {
  return plans.find((plan) => plan.featured) ?? plans[0];
}
