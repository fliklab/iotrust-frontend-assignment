import type { Environment, Platform } from '@app/store';

import type { Language } from '@app/providers/i18n';

import type { Service } from '@shared/types';

const serviceNames = [
  'Uniswap',
  'OpenSea',
  'Aave',
  'Compound',
  'SushiSwap',
  'Curve',
  'Balancer',
  'Yearn',
  '1inch',
  'dYdX',
  'MakerDAO',
  'Lido',
  'Rocket Pool',
  'Convex',
  'Frax',
  'Synthetix',
  'Alchemix',
  'Ribbon',
  'Dopex',
  'GMX',
  'Perpetual',
  'Kwenta',
  'Gains Network',
  'Polynomial',
  'Lyra',
  'Premia',
  'Hegic',
  'Opyn',
  'Friktion',
  'Zeta Markets',
];

const categories = [
  'DeFi',
  'NFT',
  'DEX',
  'Lending',
  'Derivatives',
  'Yield',
  'Options',
  'Perpetuals',
];

const languages: Language[] = ['ko', 'en'];
const platforms: Platform[] = ['android', 'ios'];
const environments: Environment[] = ['development', 'staging', 'production'];

function getRandomSubset<T>(arr: T[], min = 1): T[] {
  const count = Math.floor(Math.random() * (arr.length - min + 1)) + min;
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateService(index: number): Service {
  const baseName = serviceNames[index % serviceNames.length];
  const suffix = index >= serviceNames.length ? ` ${Math.floor(index / serviceNames.length) + 1}` : '';
  const name = `${baseName}${suffix}`;
  const category = categories[index % categories.length];

  return {
    id: `service-${index + 1}`,
    name,
    description: `${name}는 ${category} 분야의 선도적인 블록체인 서비스입니다.`,
    iconUrl: `https://picsum.photos/seed/service${index + 1}/100/100`,
    url: `https://${name.toLowerCase().replace(/\s+/g, '')}.example.com`,
    visibility: {
      languages: getRandomSubset(languages),
      platforms: getRandomSubset(platforms),
      environments: getRandomSubset(environments),
    },
  };
}

export const mockServices: Service[] = Array.from({ length: 1000 }, (_, i) =>
  generateService(i)
);
