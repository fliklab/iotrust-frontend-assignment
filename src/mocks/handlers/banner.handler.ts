import type { BannerListResponse } from '@shared/types';

import { mockBanners } from '../data';

export function getBanners(): BannerListResponse {
  return {
    items: [...mockBanners].sort((a, b) => a.order - b.order),
  };
}
