import { getBanners, getFavorites, deleteFavorite, getServices } from '@mocks/handlers';

import type { BannerListParams, BannerListResponse, FavoriteListResponse, ServiceListParams, ServiceListResponse } from '@shared/types';

const isDev = import.meta.env.VITE_ENV === 'development';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Mock 테스트 플래그
const MOCK_DELAY = Number(import.meta.env.VITE_MOCK_DELAY) || 300;
const MOCK_FAILURE_RATE = Number(import.meta.env.VITE_MOCK_FAILURE_RATE) || 0;

// Simulate network delay in dev mode
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Simulate random failure based on failure rate (0-100)
function shouldFail(): boolean {
  return Math.random() * 100 < MOCK_FAILURE_RATE;
}

class MockError extends Error {
  constructor() {
    super('Simulated network error');
    this.name = 'MockError';
  }
}

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
    await delay(MOCK_DELAY);
    if (shouldFail()) throw new MockError();
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
    await delay(MOCK_DELAY);
    if (shouldFail()) throw new MockError();
    return getFavorites();
  }

  const response = await fetch(`${API_BASE_URL}/api/favorites`);
  return handleResponse<FavoriteListResponse>(response);
}

export async function removeFavorite(id: string): Promise<void> {
  if (isDev) {
    await delay(MOCK_DELAY);
    if (shouldFail()) throw new MockError();
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
    await delay(MOCK_DELAY);
    if (shouldFail()) throw new MockError();
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
