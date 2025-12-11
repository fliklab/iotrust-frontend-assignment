import { getBanners, getFavorites, deleteFavorite, getServices } from '@mocks/handlers';

import type { BannerListResponse, FavoriteListResponse, ServiceListParams, ServiceListResponse } from '@shared/types';

const isDev = import.meta.env.VITE_ENV === 'development';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Simulate network delay in dev mode
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchBanners(): Promise<BannerListResponse> {
  if (isDev) {
    await delay(300);
    return getBanners();
  }

  const response = await fetch(`${API_BASE_URL}/api/banners`);
  return response.json();
}

export async function fetchFavorites(): Promise<FavoriteListResponse> {
  if (isDev) {
    await delay(200);
    return getFavorites();
  }

  const response = await fetch(`${API_BASE_URL}/api/favorites`);
  return response.json();
}

export async function removeFavorite(id: string): Promise<void> {
  if (isDev) {
    await delay(200);
    deleteFavorite(id);
    return;
  }

  await fetch(`${API_BASE_URL}/api/favorites/${id}`, {
    method: 'DELETE',
  });
}

export async function fetchServices(params: ServiceListParams): Promise<ServiceListResponse> {
  if (isDev) {
    await delay(300);
    return getServices(params);
  }

  const searchParams = new URLSearchParams({
    language: params.language,
    platform: params.platform,
    env: params.env,
    page: String(params.page),
    pageSize: String(params.pageSize),
    ...(params.search && { search: params.search }),
  });

  const response = await fetch(`${API_BASE_URL}/api/services?${searchParams}`);
  return response.json();
}
