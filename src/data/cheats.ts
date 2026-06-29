import type { IconName } from '../lib/icons';
import type { MediaItem } from '../lib/media';

export type CheatPricing = {
  day?: string;
  week?: string;
  month?: string;
};

export type CheatTier = {
  id: string;
  icon: IconName;
  tier: string;
  name: string;
  description: string;
  features: string[];
  media: MediaItem[];
  pricing?: CheatPricing;
  systemRequirements?: string[];
  featured?: boolean;
};

export const cheats: CheatTier[] = [
  {
    id: 'xray',
    icon: 'scan',
    tier: 'Minimal',
    name: 'Xray',
    description:
      'Entry-level Arc Raiders overlay with core ESP and smooth targeting — clean visuals without the full toolkit.',
    media: [
      { type: 'image', src: '/cheats/xray-esp.svg', alt: 'Xray ESP overlay preview', label: 'ESP Preview' },
      { type: 'image', src: '/cheats/xray-menu.svg', alt: 'Xray overlay menu preview', label: 'Overlay Menu' },
      {
        type: 'video',
        poster: '/cheats/xray-video-poster.svg',
        alt: 'Xray gameplay demo',
        label: 'Gameplay Demo',
      },
    ],
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
    media: [
      { type: 'image', src: '/cheats/pro-aim.svg', alt: 'Pro aim assist preview', label: 'Aim Assist' },
      { type: 'image', src: '/cheats/pro-esp.svg', alt: 'Pro ESP suite preview', label: 'ESP Suite' },
      {
        type: 'video',
        poster: '/cheats/pro-video-poster.svg',
        alt: 'Pro gameplay demo',
        label: 'Gameplay Demo',
      },
    ],
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
    featured: true,
  },
  {
    id: 'viper',
    icon: 'target',
    tier: 'Private Build',
    name: 'Viper',
    description:
      'Our own in-house ARC Raiders cheat — aimbot, full ESP, and 2D radar built for smart play and long-term safety. Not resold, only available directly from us.',
    pricing: {
      day: '$5.99',
      week: '$14.99',
      month: '$29.99',
    },
    systemRequirements: [
      'Steam version only (not Epic Games)',
      'Windows 10: 22H2, 21H2, 21H1, 20H2, 2004, 1909',
      'Windows 11: 23H2, 24H2, 25H2',
      'Intel Virtualization (VT-D) or AMD SVM enabled in BIOS',
      'Compatible with all CPUs and GPUs',
    ],
    media: [
      { type: 'image', src: '/cheats/viper-aimbot.svg', alt: 'Viper aimbot preview', label: 'Aimbot' },
      { type: 'image', src: '/cheats/viper-esp.svg', alt: 'Viper ESP overlay preview', label: 'ESP' },
      {
        type: 'video',
        poster: '/cheats/viper-video-poster.svg',
        alt: 'Viper gameplay demo',
        label: 'Gameplay Demo',
      },
    ],
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
      'Remaining Duration Display',
      'Language Switch (Chinese Supported)',
    ],
    featured: true,
  },
  {
    id: 'private',
    icon: 'enemy',
    tier: 'Full Access',
    name: 'Private',
    description:
      'Full Arc Raiders stack — extraction intel, ARC tracking, stream-safe mode, and every feature we offer.',
    media: [
      {
        type: 'image',
        src: '/cheats/private-intel.svg',
        alt: 'Private extraction intel preview',
        label: 'Extraction Intel',
      },
      {
        type: 'image',
        src: '/cheats/private-stream.svg',
        alt: 'Private stream-safe mode preview',
        label: 'Stream-Safe',
      },
      {
        type: 'video',
        poster: '/cheats/private-video-poster.svg',
        alt: 'Private gameplay demo',
        label: 'Gameplay Demo',
      },
    ],
    features: [
      'Enable Aim Assist',
      'Aim Key Bind',
      'Raider Visibility Check',
      'Stun & Smoke Check',
      'ARC Weakpoint Selection',
      'Targeting FOV',
      'Show Targeting FOV Ring',
      'Smooth Targeting (Advanced)',
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
      'ARC Patrol ESP',
      'Extraction Zone ESP',
      'Loot Crate ESP',
      'Loot Value ESP',
      'Box Type (Square, Corner, 2D, 3D)',
      'Health Bar Position (Right, Left, Bottom, Above)',
      'Hostile Only Filter',
      'Inactive Raider Check',
      'Anti-AFK Protection',
      'Hazard Immunity Indicator',
      'Custom Color Profiles',
      'Overlay Menu',
      'Menu Theme Selector',
      'Stream-Safe Mode',
      'Wireframe Gear View',
      'Map Mini-Radar',
      'Squad Member Highlight',
      'Secure Boot Compatible',
      'Save Configs (Unlimited)',
      'Priority Cloud-Sync',
      'Private Build Access',
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

export function cheatHasFeature(cheatId: string, feature: string): boolean {
  const cheat = getCheatById(cheatId);
  return cheat?.features.includes(feature) ?? false;
}
