export interface Banner {
  id: string;
  imageUrl: string;
  linkUrl: string;
  description?: string;
  ctaText?: string;
  order: number;
}

export interface BannerListParams {
  language: 'ko' | 'en';
}

export interface BannerListResponse {
  items: Banner[];
}
