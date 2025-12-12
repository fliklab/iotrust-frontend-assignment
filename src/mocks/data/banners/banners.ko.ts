import type { Banner } from '@shared/types';

import { IMAGE_BASE_URL } from './common';

// 한국어 배너 데이터
export const bannersKo: Banner[] = [
  {
    id: 'banner-mapo',
    imageUrl: `${IMAGE_BASE_URL}/banner_mapo_kr.png`,
    linkUrl:
      'https://store-kr.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol',
    order: 1,
  },
  {
    id: 'banner-dcent',
    imageUrl: `${IMAGE_BASE_URL}/banner_dcent.png`,
    linkUrl: 'https://store-kr.dcentwallet.com',
    description:
      '**디센트 지문인증형 지갑**으로\n한층 더 강화된 보안을 경험하세요!',
    ctaText: '구매하기',
    order: 2,
  },
  {
    id: 'banner-blog',
    imageUrl: `${IMAGE_BASE_URL}/banner_blog.png`,
    linkUrl: 'https://store-kr.dcentwallet.com/blogs/post',
    description:
      '새로운 **디센트 블로그**를 방문하여\n최신 업데이트를 먼저 확인해보세요!',
    ctaText: '확인하기',
    order: 3,
  },
];
