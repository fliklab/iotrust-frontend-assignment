import type { Language } from '@app/providers/i18n';

import type { ImageAsset } from './image';

export interface Banner {
  id: string;
  image: ImageAsset;
  linkUrl: string;
  description?: string;
  ctaText?: string;
  order: number;
}

export interface BannerListParams {
  language: Language;
}

export interface BannerListResponse {
  items: Banner[];
}
