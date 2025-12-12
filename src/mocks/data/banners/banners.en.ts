import type { Banner } from '@shared/types';

import { createImageAsset } from './common';

// 영어 배너 데이터
export const bannersEn: Banner[] = [
  {
    id: 'banner-mapo',
    image: createImageAsset('banner_mapo_en.png'),
    linkUrl:
      'https://store.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol',
    order: 1,
  },
  {
    id: 'banner-dcent',
    image: createImageAsset('banner_dcent.png'),
    linkUrl: 'https://store.dcentwallet.com',
    description: "Enhance your security with\n**D'CENT biometric wallet**!",
    ctaText: 'Buy Now',
    order: 2,
  },
  {
    id: 'banner-blog',
    image: createImageAsset('banner_blog.png'),
    linkUrl: 'https://store.dcentwallet.com/blogs/post',
    description:
      "Visit the new ``**D'CENT Blog**`` to explore the latest updates first!",
    ctaText: 'Explore',
    order: 3,
  },
];
