import type { IconName } from '../lib/icons';

export type Product = {
  id: string;
  icon: IconName;
  tier: string;
  name: string;
  description: string;
  details?: string;
  features: string[];
  accessUrl: string;
  featured?: boolean;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};

export const products: Product[] = [
  {
    id: 'ugc',
    icon: 'wrench',
    tier: 'Account Tools',
    name: 'UGC',
    description:
      'Account recovery and unban tool builder — custom workflows, appeal automation, and profile rebuilds after restrictions.',
    accessUrl: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fugc',
    seoTitle: 'UGC Account Recovery Tools — Unban & Profile Rebuild 2026',
    seoDescription:
      'Buy UGC account recovery tools — unban workflows, appeal automation, and profile rebuilds after restrictions. Instant access with setup guides.',
    keywords: [
      'ugc account recovery',
      'account unban tool',
      'ban appeal automation',
      'profile recovery tools',
      'multi-game account tools',
    ],
    features: [
      'Account Unban Tool Builder',
      'Custom Workflow Configuration',
      'Profile Recovery Tools',
      'Ban Appeal Automation',
      'Multi-Game Account Support',
      'Appeal Template Library',
      'Session & Identity Reset',
      'Account Health Checker',
      'Step-by-Step Recovery Guides',
      'Encrypted Config Storage',
      'One-Click Tool Export',
      'Cloud-Sync Profiles',
      'Direct Support Channel',
    ],
  },
  {
    id: 'skin-changer',
    icon: 'loadout',
    tier: 'Cosmetics',
    name: 'Skin Changer',
    description:
      'Unlock every cosmetic and weapon skin instantly across your favorite games. Stop paying for digital items and customize your loadout exactly how you want it.',
    details:
      'Skin Changer is a simple, lightweight tool designed to give you complete control over your in-game cosmetics. Instead of spending hundreds of dollars on microtransactions, our tool unlocks the entire marketplace of premium weapon skins, character outfits, and rare knife variants across major titles and many games.',
    accessUrl: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fskin-changer',
    featured: true,
    seoTitle: 'Skin Changer — Unlock All Weapon Skins & Cosmetics 2026',
    seoDescription:
      'Buy Skin Changer to unlock weapon skins, character outfits, and rare knife variants across major games. Lightweight tool, instant cosmetic unlocks, no microtransactions.',
    keywords: [
      'skin changer',
      'unlock weapon skins',
      'game skin unlocker',
      'cosmetic unlock tool',
      'knife skin changer',
      'character outfit unlock',
    ],
    features: [
      'Unlock All Weapon Skins',
      'Character Outfit Unlock',
      'Rare Knife Variants',
      'Premium Marketplace Cosmetics',
      'Multi-Game Skin Support',
      'Instant Cosmetic Apply',
      'Lightweight Client',
      'Custom Loadout Control',
      'No Microtransaction Spend',
      'Simple One-Click Unlock',
      'Safe Profile Apply',
      'Regular Skin Database Updates',
      'Direct Support Channel',
    ],
  },
  {
    id: 'cloud-dma',
    icon: 'cloud',
    tier: 'Infrastructure',
    name: 'Cloud DMA',
    description:
      'Single-PC cheat infrastructure via Hyper-V — no second machine, USB DMA bridge, or PCIe card required.',
    accessUrl: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fcloud-dma',
    seoTitle: 'Cloud DMA — Single-PC Hyper-V Cheat Infrastructure 2026',
    seoDescription:
      'Buy Cloud DMA for Arc Raiders cheats — Hyper-V single-PC setup with no second machine, USB DMA bridge, or PCIe card. Instant activation and setup guides.',
    keywords: [
      'cloud dma',
      'hyper-v dma',
      'single pc dma',
      'arc raiders cloud dma',
      'dma without second pc',
    ],
    features: [
      'Hyper-V Virtual Environment',
      'Single-PC Setup (No Second Machine)',
      'No USB DMA Bridge Required',
      'No PCIe Card Required',
      'Encrypted Activation Link',
      'Automated Installer',
      'Powers Full Cheat Stack',
      'Secure Service Provisioning',
      'One-Click Environment Setup',
      'Full Cheat Stack Integration',
      'Isolated VM Layer',
      'Remote Activation Support',
      'Setup Guides Included',
      'Priority Infrastructure Support',
    ],
  },
  {
    id: 'hwid-spoofer',
    icon: 'shield',
    tier: 'Hardware',
    name: 'HWID Spoofer',
    description:
      'Hardware ID spoofing for disk serials, MAC addresses, GPU IDs, and more — compatible with EAC, BattlEye, Vanguard, and major anti-cheats.',
    accessUrl: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fhwid-spoofer',
    seoTitle: 'HWID Spoofer — EAC BattlEye Vanguard Compatible 2026',
    seoDescription:
      'Buy HWID Spoofer for disk, MAC, GPU, and SMBIOS spoofing. Compatible with EAC, BattlEye, Vanguard, and major anti-cheats. Instant access and verification tools.',
    keywords: [
      'hwid spoofer',
      'eac hwid spoof',
      'battleye spoofer',
      'vanguard hwid spoofer',
      'hardware id spoof',
      'arc raiders hwid spoofer',
    ],
    features: [
      'Disk Serial Spoofing',
      'MAC Address Spoofing',
      'GPU ID Masking',
      'Motherboard UUID Reset',
      'SMBIOS Identifier Spoof',
      'Registry HWID Cleanup',
      'EAC Compatible',
      'BattlEye Compatible',
      'Vanguard Compatible',
      'All Major Anti-Cheat Support',
      'One-Click Spoof Profile',
      'Persistent Spoof Mode',
      'Clean Slate After HW Ban',
      'Spoof Verification Tool',
      'Secure Boot Compatible',
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export const homepageFaqs = [
  {
    question: 'Is this site updated after Arc Raiders patches?',
    answer:
      'Yes. We review cheat tiers, product pages, and blog posts within 48 hours of major patches. Weapon balance, loot tables, and extraction routes are checked first.',
  },
  {
    question: 'What Arc Raiders cheat tiers do you offer?',
    answer:
      'Three tiers: Xray for core ESP and targeting, Pro for aim assist and trigger tools, and Private — our in-house Viper build with full aimbot, ESP, radar, and extraction intel.',
  },
  {
    question: 'What products are available besides cheats?',
    answer:
      'Cloud DMA runs our cheat stack on one PC via Hyper-V. UGC is an account recovery and unban tool builder. Skin Changer unlocks weapon skins and cosmetics across supported games. HWID Spoofer masks hardware IDs for EAC, BattlEye, Vanguard, and other anti-cheats.',
  },
  {
    question: 'How do I get access after purchase?',
    answer:
      'Click Get Access on any cheat or product page — you are taken straight to checkout for instant delivery. Setup steps and activation details follow immediately after purchase.',
  },
  {
    question: 'Which OS does the Private cheat support?',
    answer:
      'Windows 10 (22H2, 21H2, 21H1, 20H2, 2004, 1909) and Windows 11 (23H2, 24H2, 25H2). Compatible with all CPUs and GPUs. Intel Virtualization (VT-D) or AMD SVM must be enabled in BIOS. Steam version only — does not work with the Epic Games launcher.',
  },
  {
    question: 'Can I use my license key on another computer?',
    answer:
      'No. Your key locks to the first computer you activate it on. If you reinstall Windows or change hardware, contact support and we will reset your HWID for you.',
  },
  {
    question: 'What payment methods are available?',
    answer:
      'We accept credit/debit cards, Apple Pay, and Google Pay with instant delivery. For Russian users we also provide a separate FunPay store that supports local card payments. If you prefer Alipay or WeChat, we offer a separate shop for those payment methods as well.',
  },
  {
    question: 'I found a bug or have a suggestion — where do I report it?',
    answer:
      'Use the Contact button to reach support. There is a dedicated channel for bug reports and suggestions, and that is where we track and fix issues.',
  },
] as const;
