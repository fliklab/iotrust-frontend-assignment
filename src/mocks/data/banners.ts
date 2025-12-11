import type { Banner } from '@shared/types';

export const mockBanners: Banner[] = [
  {
    id: 'banner-1',
    imageUrl: 'https://picsum.photos/seed/banner1/800/300',
    linkUrl: 'https://example.com/promo1',
    ctaText: '자세히 보기',
    order: 1,
  },
  {
    id: 'banner-2',
    imageUrl: 'https://picsum.photos/seed/banner2/800/300',
    linkUrl: 'https://example.com/promo2',
    ctaText: '지금 시작하기',
    order: 2,
  },
  {
    id: 'banner-3',
    imageUrl: 'https://picsum.photos/seed/banner3/800/300',
    linkUrl: 'https://example.com/promo3',
    ctaText: '더 알아보기',
    order: 3,
  },
];
