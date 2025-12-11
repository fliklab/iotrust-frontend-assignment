export interface Banner {
  id: string;
  imageUrl: string;
  linkUrl: string;
  ctaText: string;
  order: number;
}

export interface BannerListResponse {
  items: Banner[];
}
