import type { Favorite, FavoriteListResponse } from '@shared/types';

import { mockFavorites } from '../data';

let favorites = [...mockFavorites];

export function getFavorites(): FavoriteListResponse {
  return {
    items: favorites,
  };
}

export function deleteFavorite(id: string): Favorite | null {
  const index = favorites.findIndex((f) => f.id === id);
  if (index === -1) return null;

  const [deleted] = favorites.splice(index, 1);
  return deleted;
}

export function resetFavorites(): void {
  favorites = [...mockFavorites];
}
