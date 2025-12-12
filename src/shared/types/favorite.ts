import type { ImageAsset } from './image';

export interface Favorite {
  id: string;
  serviceId: string;
  name: string;
  icon: ImageAsset;
  url: string;
}

export interface FavoriteListResponse {
  items: Favorite[];
}
