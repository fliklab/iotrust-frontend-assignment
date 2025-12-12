import type { Banner } from '@shared/types';

import { IMAGE_BASE_URL } from './common';

// 영어 배너 데이터
export const bannersEn: Banner[] = [
  {
    id: 'banner-mapo',
    imageUrl: `${IMAGE_BASE_URL}/banner_mapo_en.png`,
    linkUrl:
      'https://store.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol',
    order: 1,
  },
  {
    id: 'banner-dcent',
    imageUrl: `${IMAGE_BASE_URL}/banner_dcent.png`,
    linkUrl: 'https://store.dcentwallet.com',
    description: "Enhance your security with\n**D'CENT biometric wallet**!",
    ctaText: 'Buy Now',
    order: 2,
  },
  {
    id: 'banner-blog',
    imageUrl: `${IMAGE_BASE_URL}/banner_blog.png`,
    linkUrl: 'https://store.dcentwallet.com/blogs/post',
    description:
      "Visit the new ``**D'CENT Blog**`` to explore the latest updates first!",
    ctaText: 'Explore',
    order: 3,
  },
];
