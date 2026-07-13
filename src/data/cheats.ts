import type { IconName } from '../lib/icons';
import type { MediaItem } from '../lib/media';
import { getCheatTierMedia } from '../lib/cheat-media';

export type CheatFaq = {
  question: string;
  answer: string;
};

export type CheatTier = {
  id: string;
  icon: IconName;
  tier: string;
  name: string;
  description: string;
  overview?: string[];
  setupSteps?: string[];
  lastUpdated: string;
  features: string[];
  media: MediaItem[];
  systemRequirements?: string[];
  featured?: boolean;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  faqs?: CheatFaq[];
  relatedProductSlugs?: string[];
};

export const cheats: CheatTier[] = [
  {
    id: 'xray',
    icon: 'scan',
    tier: 'Minimal',
    name: 'Xray',
    description:
      'Entry-level Arc Raiders overlay with core ESP and smooth targeting — clean visuals without the full toolkit.',
    overview: [
      'Xray is the starting tier for players who want readable ESP, loot visibility, and smooth targeting without the full combat automation stack. It keeps the overlay lightweight so you can focus on positioning and extractions.',
      'Use Xray when you mainly need awareness — seeing raiders, loot value, and weak points — and plan to upgrade later if you want deeper aim or trigger tooling.',
    ],
    setupSteps: [
      'Complete checkout for instant delivery and download the loader.',
      'Disable conflicting overlays and run as administrator if prompted.',
      'Enable ESP categories you actually use — player boxes, loot filters, and FOV limits first.',
      'Save a low-noise config and test in a private session before stacking high-value extractions.',
    ],
    lastUpdated: '2026-07-12',
    seoTitle: 'Xray Arc Raiders Cheat — ESP 2026',
    seoDescription:
      'Buy Xray Arc Raiders cheat — player ESP, loot ESP, skeleton markers, and smooth targeting. Entry tier with Season 1 support and instant delivery.',
    keywords: [
      'xray arc raiders cheat',
      'arc raiders esp',
      'arc raiders overlay',
      'arc raiders loot esp',
      'arc raiders skeleton esp',
    ],
    faqs: [
      {
        question: 'Is Xray enough for solo extractions?',
        answer:
          'For many players, yes. ESP and loot visibility cover most decision-making. Upgrade to Pro if you want aim assist and trigger tools in fights.',
      },
    ],
    relatedProductSlugs: ['cloud-dma', 'hwid-spoofer'],
    media: getCheatTierMedia('xray'),
    features: [
      'Raider Visibility Check',
      'ARC Weakpoint Selection',
      'Targeting FOV',
      'Smooth Targeting',
      'Enable Overlay ESP',
      'Raider Box ESP',
      'Health Bar ESP',
      'Distance Readout',
      'Skeleton ESP',
      'Head Marker ESP',
      'Loot Value ESP',
      'Box Type (Square, Corner, 2D, 3D)',
      'Health Bar Position (Right, Left, Bottom, Above)',
      'Overlay Menu',
      'Save Configs',
      'Cloud-Sync Option',
    ],
  },
  {
    id: 'pro',
    icon: 'crosshair',
    tier: 'Mid Tier',
    name: 'Pro',
    description:
      'Mid-tier combat suite — aim assist, trigger tools, and deep ESP. More than Xray, without the full Private stack.',
    overview: [
      'Pro adds combat automation on top of Xray-style ESP — aim assist, trigger assist, weapon ESP, and richer filters for active raids.',
      'It suits players who want cleaner gunfights without paying for the full Private extraction and radar suite. Settings stay configurable so you can keep behavior subtle.',
    ],
    setupSteps: [
      'Complete checkout for instant access and install the Pro build.',
      'Import a conservative aim profile (wide FOV, smoothing on).',
      'Bind aim and trigger keys separately so you can disable automation during loot phases.',
      'Compare features with Xray and Private on our tier table before committing long term.',
    ],
    lastUpdated: '2026-07-12',
    featured: true,
    seoTitle: 'Pro Arc Raiders Cheat — Aim & ESP',
    seoDescription:
      'Buy Pro Arc Raiders cheat — aim assist, trigger tools, weapon ESP, and deep overlays. Mid tier for Season 1 combat raids with instant delivery.',
    keywords: [
      'pro arc raiders cheat',
      'arc raiders aim assist',
      'arc raiders triggerbot',
      'arc raiders combat cheat',
      'arc raiders weapon esp',
    ],
    faqs: [
      {
        question: 'How is Pro different from Private?',
        answer:
          'Pro focuses on combat automation plus strong ESP. Private adds the full Viper stack — radar, drone tools, extraction intel, and the largest feature set.',
      },
    ],
    relatedProductSlugs: ['cloud-dma', 'skin-changer'],
    media: getCheatTierMedia('pro'),
    features: [
      'Enable Aim Assist',
      'Aim Key Bind',
      'Raider Visibility Check',
      'Enable Trigger Assist',
      'Trigger Key Bind',
      'Trigger FOV',
      'Show Trigger FOV',
      'Enable Overlay ESP',
      'Raider Box ESP',
      'Fill Box ESP',
      'Health Bar ESP',
      'Distance Readout',
      'Player Name ESP',
      'Skeleton ESP',
      'Head Marker ESP',
      'Threat Level ESP',
      'Weapon ESP',
      'Box Type (Square, Corner, 2D, 3D)',
      'Health Bar Position (Right, Left, Bottom, Above)',
      'Hostile Only Filter',
      'Inactive Raider Check',
      'Overlay Menu',
      'Menu Theme Selector',
      'Wireframe Gear View',
      'Secure Boot Compatible',
      'Save Configs',
      'Cloud-Sync Option',
    ],
  },
  {
    id: 'private',
    icon: 'enemy',
    tier: 'Private',
    name: 'Private',
    description:
      'Our in-house Viper private build — full aimbot, ESP, 2D radar, and extraction intel. Not resold, only available directly from us with long-term safety in mind.',
    overview: [
      'Private is the complete Arc Raiders stack — aimbot with bone selection, drone tools, 2D radar, extraction zone ESP, and the broadest ESP package we ship.',
      'It is our in-house Viper build, maintained directly by our team with patch-aware updates. Pair it with Cloud DMA or HWID Spoofer only if your setup requires that infrastructure.',
    ],
    setupSteps: [
      'Complete checkout for instant delivery.',
      'Verify BIOS virtualization settings and Steam launcher requirements before installing.',
      'Configure radar, ESP, and aim profiles separately — start with visibility tools first.',
      'Read our cheats guide and spoofer guide if you are returning from a prior hardware flag.',
    ],
    lastUpdated: '2026-07-12',
    seoTitle: 'Private Arc Raiders Cheat — Viper',
    seoDescription:
      'Buy Private Arc Raiders cheat (Viper) — full aimbot, ESP, 2D radar, and extraction intel. In-house tier with documented setup and instant delivery.',
    keywords: [
      'private arc raiders cheat',
      'viper arc raiders',
      'arc raiders aimbot',
      'arc raiders 2d radar',
      'arc raiders extraction esp',
      'arc raiders private cheat',
    ],
    faqs: [
      {
        question: 'Does Private require Cloud DMA?',
        answer:
          'Not for every user. Cloud DMA is optional infrastructure for specific single-PC workflows. Read the Cloud DMA page for AWS and GREENWARD prerequisites.',
      },
    ],
    relatedProductSlugs: ['cloud-dma', 'hwid-spoofer'],
    systemRequirements: [
      'Steam version only (not Epic Games)',
      'Windows 10: 22H2, 21H2, 21H1, 20H2, 2004, 1909',
      'Windows 11: 23H2, 24H2, 25H2',
      'Intel Virtualization (VT-D) or AMD SVM enabled in BIOS',
      'Compatible with all CPUs and GPUs',
    ],
    media: getCheatTierMedia('private'),
    features: [
      'Enable Aimbot',
      'Drone Aimbot',
      'Custom Aim Keys (2 Slots)',
      'Selectable Hitboxes (Head, Neck, Chest, Body)',
      'Hold Shift = Head Aim',
      'Aim Smoothing',
      'Custom FOV Circle',
      'Visibility Check',
      'Max Aim Distance',
      'Dead Zone Control',
      'Focus Bots / Teams',
      'Draw Dead Zone',
      'Player ESP',
      'Drone ESP',
      'Team ESP',
      '2D Box ESP',
      'Names & Distance',
      'Health & Armor Bars',
      'Skeleton ESP',
      'Weapon Display',
      'Item & Loot ESP',
      'Max ESP Distance',
      '2D Radar Hack',
      'Radar Styles (Square, Circle, Custom)',
      'Show Players on Radar',
      'Show Drones on Radar',
      'Extraction Zone ESP',
      'ARC Patrol ESP',
      'Stream-Safe Mode',
      'Remaining Duration Display',
      'Language Switch (Chinese Supported)',
      'Direct Support Channel',
    ],
  },
];

export function getCheatById(id: string): CheatTier | undefined {
  return cheats.find((cheat) => cheat.id === id);
}

/** Ordered feature list for comparison table (Private → Pro → Xray merge). */
export function getComparisonFeatures(): string[] {
  const seen = new Set<string>();
  const ordered: string[] = [];
  for (const cheat of [...cheats].reverse()) {
    for (const feature of cheat.features) {
      if (!seen.has(feature)) {
        seen.add(feature);
        ordered.push(feature);
      }
    }
  }
  return ordered;
}

/** Display features per tier — Private includes the full merged stack. */
export function getCheatFeatures(cheatId: string): string[] {
  if (cheatId === 'private') {
    return getComparisonFeatures();
  }
  return getCheatById(cheatId)?.features ?? [];
}

export function cheatHasFeature(cheatId: string, feature: string): boolean {
  if (cheatId === 'private') return true;
  const cheat = getCheatById(cheatId);
  return cheat?.features.includes(feature) ?? false;
}

export function getRelatedProductsForCheat(cheat: CheatTier) {
  return cheat.relatedProductSlugs ?? [];
}

export function getRelatedCheatsForProduct(productSlug: string) {
  if (productSlug === 'cloud-dma' || productSlug === 'hwid-spoofer') {
    return cheats.map((cheat) => cheat.id);
  }
  return ['private'];
}
