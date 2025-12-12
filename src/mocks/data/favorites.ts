import type { Favorite } from '@shared/types';

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
const OPTIMIZED_IMAGE_BASE_URL = import.meta.env.VITE_OPTIMIZED_IMAGE_BASE_URL;

function createImageAsset(filename: string) {
  return {
    original: `${IMAGE_BASE_URL}/${filename}`,
    webp: OPTIMIZED_IMAGE_BASE_URL ? `${OPTIMIZED_IMAGE_BASE_URL}${filename.replace(/\.(png|jpg|jpeg)$/i, '.webp')}` : undefined,
  };
}

// mock-data-guide에 정의된 즐겨찾기 데이터
export const mockFavorites: Favorite[] = [
  {
    id: 'fav-opensea',
    serviceId: 'opensea',
    name: 'OpenSea, the largest NFT marketplace',
    icon: createImageAsset('icon_opensea.png'),
    url: 'https://opensea.io',
  },
  {
    id: 'fav-moonpay',
    serviceId: 'moonpay',
    name: 'MoonPay',
    icon: createImageAsset('icon_moonpay.png'),
    url: 'https://buy.moonpay.com/v2/buy',
  },
  {
    id: 'fav-rarible',
    serviceId: 'rarible',
    name: 'Rarible - NFT Marketplace for Brands, Communities and Traders',
    icon: createImageAsset('icon_rarible.png'),
    url: 'https://rarible.com/',
  },
];
