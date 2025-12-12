import { getBanners, getFavorites, deleteFavorite, getServices } from '@mocks/handlers';

import type { BannerListParams, BannerListResponse, FavoriteListResponse, ServiceListParams, ServiceListResponse } from '@shared/types';

const isDev = import.meta.env.VITE_ENV === 'development';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Simulate network delay in dev mode
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class ApiError extends Error {
  status: number;
  statusText: string;

  constructor(message: string, status: number, statusText: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.statusText = statusText;
  }
}

function throwIfError(response: Response): void {
  if (!response.ok) {
    throw new ApiError(
      `API Error: ${response.status} ${response.statusText}`,
      response.status,
      response.statusText
    );
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  throwIfError(response);
  return response.json();
}

export async function fetchBanners(params: BannerListParams): Promise<BannerListResponse> {
  if (isDev) {
    await delay(300);
    return getBanners(params);
  }

  const searchParams = new URLSearchParams({
    language: params.language,
  });

  const response = await fetch(`${API_BASE_URL}/api/banners?${searchParams}`);
  return handleResponse<BannerListResponse>(response);
}

export async function fetchFavorites(): Promise<FavoriteListResponse> {
  if (isDev) {
    await delay(200);
    return getFavorites();
  }

  const response = await fetch(`${API_BASE_URL}/api/favorites`);
  return handleResponse<FavoriteListResponse>(response);
}

export async function removeFavorite(id: string): Promise<void> {
  if (isDev) {
    await delay(200);
    deleteFavorite(id);
    return;
  }

  const response = await fetch(`${API_BASE_URL}/api/favorites/${id}`, {
    method: 'DELETE',
  });
  throwIfError(response);
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
  });

  const response = await fetch(`${API_BASE_URL}/api/services?${searchParams}`);
  return handleResponse<ServiceListResponse>(response);
}
