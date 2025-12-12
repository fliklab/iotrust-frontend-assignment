import type { BannerListParams, BannerListResponse } from '@shared/types';

import { getBannersByLanguage } from '../data';

export function getBanners(params: BannerListParams): BannerListResponse {
  const banners = getBannersByLanguage(params.language);
  return {
    items: [...banners].sort((a, b) => a.order - b.order),
  };
}
