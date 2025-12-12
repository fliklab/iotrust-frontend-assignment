import type { Banner } from '@shared/types';

const IMAGE_BASE_URL =
  'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images';

// 언어별 배너 데이터
export const mockBannersKo: Banner[] = [
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
    description: '디센트 지문인증형 지갑으로 한층 더 강화된 보안을 경험하세요!',
    ctaText: '구매하기',
    order: 2,
  },
  {
    id: 'banner-blog',
    imageUrl: `${IMAGE_BASE_URL}/banner_blog.png`,
    linkUrl: 'https://store-kr.dcentwallet.com/blogs/post',
    description:
      '새로운 디센트 블로그를 방문하여 최신 업데이트를 먼저 확인해보세요!',
    ctaText: '확인하기',
    order: 3,
  },
];

export const mockBannersEn: Banner[] = [
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
    description: 'Enhance your security with D'CENT biometric wallet',
    ctaText: 'Buy Now',
    order: 2,
  },
  {
    id: 'banner-blog',
    imageUrl: `${IMAGE_BASE_URL}/banner_blog.png`,
    linkUrl: 'https://store.dcentwallet.com/blogs/post',
    description:
      'Visit the new D'CENT Blog to explore the latest updates first!',
    ctaText: 'Explore',
    order: 3,
  },
];

// 언어에 따라 배너 반환
export function getBannersByLanguage(language: 'ko' | 'en'): Banner[] {
  return language === 'ko' ? mockBannersKo : mockBannersEn;
}
