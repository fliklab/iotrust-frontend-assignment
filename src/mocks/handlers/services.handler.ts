import type { ServiceListParams, ServiceListResponse } from '@shared/types';

import { mockServices } from '../data';

const DEFAULT_PAGE_SIZE = 20;

export function getServices(params: ServiceListParams): ServiceListResponse {
  const { language, platform, env, page, pageSize = DEFAULT_PAGE_SIZE, search } = params;

  // Filter by visibility
  let filtered = mockServices.filter((service) => {
    const { languages, platforms, environments } = service.visibility;
    return (
      languages.includes(language) &&
      platforms.includes(platform) &&
      environments.includes(env)
    );
  });

  // Apply search filter
  if (search && search.trim()) {
    const searchLower = search.toLowerCase().trim();
    filtered = filtered.filter(
      (service) =>
        service.name.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower)
    );
  }

  const totalCount = filtered.length;
  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  const items = filtered.slice(startIndex, endIndex);
  const hasMore = endIndex < totalCount;

  return {
    items,
    nextCursor: hasMore ? page + 1 : null,
    totalCount,
  };
}
