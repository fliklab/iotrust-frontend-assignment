export interface Favorite {
  id: string;
  serviceId: string;
  name: string;
  iconUrl: string;
  url: string;
}

export interface FavoriteListResponse {
  items: Favorite[];
}
