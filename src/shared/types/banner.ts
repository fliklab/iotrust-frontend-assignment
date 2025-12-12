import type { Language } from '@app/providers/i18n';

export interface Banner {
  id: string;
  imageUrl: string;
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
