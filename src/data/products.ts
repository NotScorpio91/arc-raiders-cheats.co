import type { IconName } from '../lib/icons';

export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  id: string;
  icon: IconName;
  tier: string;
  name: string;
  description: string;
  details?: string;
  overview?: string[];
  setupSteps?: string[];
  lastUpdated: string;
  features: string[];
  accessUrl: string;
  featured?: boolean;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  faqs?: ProductFaq[];
  relatedSlugs?: string[];
};

export const products: Product[] = [
  {
    id: 'ugc',
    icon: 'wrench',
    tier: 'Account Tools',
    name: 'UGC',
    description:
      'Account recovery and unban tool builder — custom workflows, appeal automation, and profile rebuilds after restrictions.',
    overview: [
      'UGC (Unban & Governance Control) is built for players who need structured account recovery after platform restrictions. Instead of guessing appeal wording, you configure repeatable workflows for common ban and lockout scenarios.',
      'The tool focuses on documentation, template management, and step-by-step recovery paths — not instant guaranteed unbans. Results depend on platform policy, violation type, and how the account was flagged.',
    ],
    setupSteps: [
      'Complete checkout for instant delivery and open the UGC workspace.',
      'Select the platform or account type you need to recover.',
      'Configure appeal templates, attach supporting details, and export the workflow for your case.',
      'Track status updates and adjust the workflow if the platform requests additional information.',
    ],
    lastUpdated: '2026-07-12',
    accessUrl: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fugc',
    seoTitle: 'UGC Account Recovery — Unban Tools',
    seoDescription:
      'Buy UGC account recovery tools for Arc Raiders and multi-game accounts. Custom unban workflows, appeal automation, and profile rebuilds with instant delivery.',
    keywords: [
      'ugc account recovery',
      'account unban tool',
      'ban appeal automation',
      'profile recovery tools',
      'multi-game account tools',
    ],
    faqs: [
      {
        question: 'Does UGC guarantee my account will be unbanned?',
        answer:
          'No. UGC helps you build and automate appeal workflows. Final decisions are made by each platform’s trust and safety team.',
      },
      {
        question: 'Can I use UGC with Arc Raiders cheats?',
        answer:
          'UGC is an account recovery tool, not a cheat overlay. Pair it with our HWID Spoofer only if you understand the risks and compatibility requirements for your setup.',
      },
    ],
    relatedSlugs: ['hwid-spoofer', 'cloud-dma'],
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
      'Skin Changer is a lightweight client for cosmetic unlocks across supported titles. It applies visual loadout changes locally without marketplace purchases.',
    overview: [
      'Skin Changer targets players who want full cosmetic control without buying every battle pass tier or marketplace bundle. Supported weapon skins, outfits, and knife variants load through a simple client.',
      'Cosmetic tools carry their own detection and ToS risks on every platform. Use conservative settings, keep the client updated, and understand that visual unlocks do not change server-side ownership records.',
    ],
    setupSteps: [
      'Complete checkout and download the client from the delivery page.',
      'Launch Skin Changer, pick your game profile, and sync the latest skin database.',
      'Select weapon skins, outfits, or knife variants and apply them to your loadout preview.',
      'Launch the supported game and verify visuals in a private session before going live.',
    ],
    lastUpdated: '2026-07-12',
    accessUrl: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fskin-changer',
    featured: true,
    seoTitle: 'Skin Changer — Unlock Weapon Skins',
    seoDescription:
      'Buy Skin Changer to unlock weapon skins, outfits, and knife variants across supported games. Lightweight cosmetic client with instant delivery and regular updates.',
    keywords: [
      'skin changer',
      'unlock weapon skins',
      'game skin unlocker',
      'cosmetic unlock tool',
      'knife skin changer',
      'character outfit unlock',
    ],
    faqs: [
      {
        question: 'Does Skin Changer work with Arc Raiders?',
        answer:
          'Skin Changer supports multiple titles. Check the current compatibility list in checkout and support docs before buying for a specific game.',
      },
      {
        question: 'Will other players always see my skins?',
        answer:
          'Visibility depends on the game and how cosmetics are rendered. Treat unlocks as local visual changes unless support confirms otherwise for your title.',
      },
    ],
    relatedSlugs: ['ugc', 'hwid-spoofer'],
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
    overview: [
      'Cloud DMA is the infrastructure layer that runs supported cheat workflows on one Windows PC through a Hyper-V virtual environment. This checkout covers the Cloud DMA license, installer, activation, and support — not the full external stack by itself.',
      'AWS and GREENWARD are separate purchases required for the supported workflow described at checkout. Budget for those prerequisites in addition to the Cloud DMA license.',
    ],
    setupSteps: [
      'Confirm you have Windows 10/11 Pro or Enterprise, virtualization enabled, and stable internet.',
      'Purchase AWS and GREENWARD access separately if you do not already have them.',
      'Complete Cloud DMA checkout and run the guided Hyper-V installer on your PC.',
      'Complete encrypted activation, then attach your cheat tier (Xray, Pro, or Private) through support docs.',
    ],
    lastUpdated: '2026-07-12',
    accessUrl: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fcloud-dma',
    seoTitle: 'Cloud DMA — Single-PC Hyper-V Setup',
    seoDescription:
      'Buy Cloud DMA for single-PC Hyper-V cheat infrastructure. Lifetime license with guided setup — AWS and GREENWARD sold separately as required.',
    keywords: [
      'cloud dma',
      'hyper-v dma',
      'single pc dma',
      'arc raiders cloud dma',
      'dma without second pc',
    ],
    faqs: [
      {
        question: 'Is AWS included with Cloud DMA?',
        answer:
          'No. AWS billing and access are separate. This page covers the Cloud DMA license and activation layer only.',
      },
      {
        question: 'Do I still need Arc Raiders cheat tiers?',
        answer:
          'Yes. Cloud DMA is infrastructure. Choose Xray, Pro, or Private on our cheats page for the actual Arc Raiders overlay features.',
      },
    ],
    relatedSlugs: ['hwid-spoofer', 'ugc'],
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
    overview: [
      'HWID Spoofer resets or masks hardware identifiers after prior flags — disk serials, MAC addresses, GPU IDs, motherboard UUIDs, and related registry traces.',
      'Spoofing reduces repeat hardware bans when used correctly, but it is not a permanent bypass. Pair conservative cheat settings with clean sessions and read our spoofer guide before buying.',
    ],
    setupSteps: [
      'Complete checkout for instant delivery.',
      'Run the spoofer as administrator and select the profile that matches your anti-cheat target.',
      'Apply disk, MAC, GPU, and SMBIOS masks, then verify identifiers with the built-in checker.',
      'Reboot if required, launch Arc Raiders, and avoid reusing flagged accounts on the same profile.',
    ],
    lastUpdated: '2026-07-12',
    accessUrl: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fhwid-spoofer',
    seoTitle: 'HWID Spoofer — EAC & BattlEye Ready',
    seoDescription:
      'Buy HWID Spoofer for disk, MAC, GPU, and SMBIOS masking. Compatible with EAC, BattlEye, and Vanguard with verification tools and instant delivery.',
    keywords: [
      'hwid spoofer',
      'eac hwid spoof',
      'battleye spoofer',
      'vanguard hwid spoofer',
      'hardware id spoof',
      'arc raiders hwid spoofer',
    ],
    faqs: [
      {
        question: 'Will HWID Spoofer unban my Arc Raiders account?',
        answer:
          'No. It addresses hardware identifiers. Account-level bans still require appeals or new accounts following platform rules.',
      },
      {
        question: 'Should I spoof before or after reinstalling Windows?',
        answer:
          'See our HWID spoofer guide for the clean-session workflow. Most players spoof after a fresh install or major hardware change.',
      },
    ],
    relatedSlugs: ['cloud-dma', 'ugc'],
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
] as const;
