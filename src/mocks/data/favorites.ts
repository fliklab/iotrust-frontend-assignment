import type { Favorite } from '@shared/types';

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

// mock-data-guide에 정의된 즐겨찾기 데이터
export const mockFavorites: Favorite[] = [
  {
    id: 'fav-opensea',
    serviceId: 'opensea',
    name: 'OpenSea, the largest NFT marketplace',
    iconUrl: `${IMAGE_BASE_URL}/icon_opensea.png`,
    url: 'https://opensea.io',
  },
  {
    id: 'fav-moonpay',
    serviceId: 'moonpay',
    name: 'MoonPay',
    iconUrl: `${IMAGE_BASE_URL}/icon_moonpay.png`,
    url: 'https://buy.moonpay.com/v2/buy',
  },
  {
    id: 'fav-rarible',
    serviceId: 'rarible',
    name: 'Rarible - NFT Marketplace for Brands, Communities and Traders',
    iconUrl: `${IMAGE_BASE_URL}/icon_rarible.png`,
    url: 'https://rarible.com/',
  },
];
