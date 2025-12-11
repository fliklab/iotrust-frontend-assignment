import type { Favorite } from '@shared/types';

export const mockFavorites: Favorite[] = [
  {
    id: 'fav-1',
    serviceId: 'service-1',
    name: 'Uniswap',
    iconUrl: 'https://picsum.photos/seed/uniswap/100/100',
    url: 'https://uniswap.org',
  },
  {
    id: 'fav-2',
    serviceId: 'service-2',
    name: 'OpenSea',
    iconUrl: 'https://picsum.photos/seed/opensea/100/100',
    url: 'https://opensea.io',
  },
  {
    id: 'fav-3',
    serviceId: 'service-3',
    name: 'Aave',
    iconUrl: 'https://picsum.photos/seed/aave/100/100',
    url: 'https://aave.com',
  },
  {
    id: 'fav-4',
    serviceId: 'service-4',
    name: 'Compound',
    iconUrl: 'https://picsum.photos/seed/compound/100/100',
    url: 'https://compound.finance',
  },
];
