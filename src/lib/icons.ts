export type IconName =
  | 'target'
  | 'settings'
  | 'map'
  | 'gamepad'
  | 'file-text'
  | 'wrench'
  | 'chart'
  | 'loadout'
  | 'crosshair'
  | 'extraction'
  | 'enemy'
  | 'movement'
  | 'loot'
  | 'guide'
  | 'check'
  | 'plus'
  | 'minus'
  | 'menu'
  | 'chevron-right'
  | 'chevron-left'
  | 'status'
  | 'scan'
  | 'cloud'
  | 'shield'
  | 'calendar'
  | 'clock'
  | 'user'
  | 'mail'
  | 'home'
  | 'newspaper'
  | 'arrow-left';

export const categoryIcons: Record<string, IconName> = {
  Loadouts: 'loadout',
  Weapons: 'crosshair',
  Extraction: 'extraction',
  Enemies: 'enemy',
  Movement: 'movement',
  Loot: 'loot',
  Settings: 'settings',
  Beginner: 'guide',
  Guide: 'guide',
};

export function getCategoryIcon(category: string): IconName {
  return categoryIcons[category] ?? 'file-text';
}
